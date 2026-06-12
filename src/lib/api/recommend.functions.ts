import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { catalog } from "@/data/catalog";

const Input = z.object({
  favorites: z.array(z.string().min(1).max(120)).length(3),
  lang: z.enum(["en", "ar"]).default("en"),
});

export type Recommendation = {
  id: string;
  name: string;
  inspiredBy?: string;
  matchScore: number;
  reason: string;
};

export type ScentProfile = {
  notes: string[];
  accords: string[];
  summary: string;
};

export const recommendFragrances = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => Input.parse(d))
  .handler(async ({ data }): Promise<{ matches: Recommendation[]; profile: ScentProfile }> => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("Missing LOVABLE_API_KEY");

    const catalogText = catalog
      .map(
        (c) =>
          `- id:${c.id} | ${c.name}${c.inspiredBy ? ` (inspired by ${c.inspiredBy})` : ""} | family:${c.family} | notes:${c.notes.join(", ")} | gender:${c.gender}`,
      )
      .join("\n");

    const sys = `You are a master perfumer recommending fragrances from the Aura house catalog ONLY. Given a user's 3 favorite fragrances (any brand, real-world), use your Fragrantica-level knowledge of real fragrance pyramids and the "similar fragrances" relationships shown on each Fragrantica page to pick the 3 best matches from the catalog and RANK them from most similar to least similar — mirror the order Fragrantica would list matches for the same user inputs. Score each match 0-100 (100 = near-clone), and sort the array strictly by descending matchScore. Reasons must be in ${data.lang === "ar" ? "Arabic" : "English"}, and the profile summary in ${data.lang === "ar" ? "Arabic" : "English"} too. Also extract the user's scent DNA: the specific NOTES (ingredients/components, e.g. "Bergamot", "Oud", "Vanilla") that appear in 2 or more of their 3 favorites — the components they reliably love — plus the dominant accords/families. Note and accord names MUST be in English using standard Fragrantica terminology so they can be searched on fragrantica.com. Return STRICT JSON only, no markdown, in the shape: {"matches":[{"id":"<catalog id>","matchScore":<0-100 integer>,"reason":"<one short sentence citing shared notes/accords>"}],"profile":{"notes":["<3-6 shared notes in English>"],"accords":["<2-4 accords in English>"],"summary":"<one sentence describing their taste>"}}. Use exactly 3 matches, sorted by matchScore descending, each id must exist in the catalog.`;

    const user = `User's 3 favorites:\n1. ${data.favorites[0]}\n2. ${data.favorites[1]}\n3. ${data.favorites[2]}\n\nCatalog:\n${catalogText}`;

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: sys },
          { role: "user", content: user },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      if (res.status === 429) throw new Error("Rate limited. Please try again in a moment.");
      if (res.status === 402) throw new Error("AI credits exhausted. Please top up in your workspace.");
      throw new Error(`AI gateway error ${res.status}: ${body.slice(0, 200)}`);
    }

    const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
    const content = json.choices?.[0]?.message?.content ?? "{}";
    let parsed: {
      matches?: Array<{ id?: string; reason?: string; matchScore?: number }>;
      profile?: { notes?: string[]; accords?: string[]; summary?: string };
    };
    try {
      parsed = JSON.parse(content);
    } catch {
      throw new Error("Invalid AI response");
    }

    const profile: ScentProfile = {
      notes: (parsed.profile?.notes ?? []).filter((n): n is string => typeof n === "string").slice(0, 8),
      accords: (parsed.profile?.accords ?? []).filter((a): a is string => typeof a === "string").slice(0, 6),
      summary: typeof parsed.profile?.summary === "string" ? parsed.profile.summary : "",
    };

    const matches: Recommendation[] = (parsed.matches ?? [])
      .map<Recommendation | null>((m) => {
        const c = catalog.find((x) => x.id === m.id);
        if (!c) return null;
        return {
          id: c.id,
          name: data.lang === "ar" ? c.nameAr : c.name,
          inspiredBy: data.lang === "ar" ? c.inspiredByAr : c.inspiredBy,
          matchScore: typeof m.matchScore === "number" ? Math.max(0, Math.min(100, Math.round(m.matchScore))) : 0,
          reason: m.reason ?? "",
        };
      })
      .filter((x): x is Recommendation => x !== null)
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 3);

    // Fallback: if AI didn't return valid ids, pick first 3
    if (matches.length === 0) {
      return {
        matches: catalog.slice(0, 3).map((c, i) => ({
          id: c.id,
          name: data.lang === "ar" ? c.nameAr : c.name,
          inspiredBy: data.lang === "ar" ? c.inspiredByAr : c.inspiredBy,
          matchScore: 80 - i * 5,
          reason: data.lang === "ar" ? "اختيار من تشكيلتنا الأكثر تميزاً" : "A signature pick from our house.",
        })),
        profile,
      };
    }

    return { matches, profile };
  });
