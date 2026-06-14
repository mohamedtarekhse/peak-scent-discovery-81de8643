import { useState } from "react";
import { Sparkles, Loader2, FlaskConical, ExternalLink } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { useLang } from "@/i18n/LangProvider";
import { recommendFragrances, type Recommendation, type ScentProfile } from "@/lib/api/recommend.functions";
import { waLink } from "./WhatsAppFloat";

const fragranticaSearch = (term: string) =>
  `https://www.fragrantica.com/search/?query=${encodeURIComponent(term)}`;

export function AIPicker() {
  const { t, lang } = useLang();
  const recommend = useServerFn(recommendFragrances);
  const [favs, setFavs] = useState<[string, string, string]>(["", "", ""]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Recommendation[] | null>(null);
  const [profile, setProfile] = useState<ScentProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (favs.some((f) => !f.trim())) return;
    setLoading(true);
    setError(null);
    setResults(null);
    setProfile(null);
    try {
      const r = await recommend({ data: { favorites: favs, lang } });
      setResults(r.matches);
      setProfile(r.profile?.notes?.length || r.profile?.accords?.length ? r.profile : null);
    } catch (err) {
      setError(err instanceof Error ? err.message : t.picker.err);
    } finally {
      setLoading(false);
    }
  };

  const orderMessage = (name: string) => {
    let msg = `${t.wa.greet} (${name})`;
    if (profile?.notes?.length) {
      msg += `\n${lang === "ar" ? "النوتات التي أحبها" : "Notes I love"}: ${profile.notes.join(", ")}`;
    }
    return msg;
  };


  return (
    <section id="picker" className="relative bg-gradient-to-b from-[#0a1628] to-[#0c2340] px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <Sparkles className="mx-auto mb-4 h-8 w-8 text-[#5cbdb9]" />
        <h2 className="font-serif text-4xl text-white md:text-5xl">{t.picker.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/60">{t.picker.sub}</p>

        <form onSubmit={submit} className="mt-12 space-y-4">
          {[0, 1, 2].map((i) => (
            <input
              key={i}
              type="text"
              value={favs[i]}
              onChange={(e) => {
                const copy = [...favs] as [string, string, string];
                copy[i] = e.target.value;
                setFavs(copy);
              }}
              placeholder={t.picker.ph[i]}
              maxLength={120}
              className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-4 text-center text-white placeholder:text-white/30 focus:border-[#5cbdb9] focus:bg-white/10 focus:outline-none transition-colors"
            />
          ))}
          <button
            type="submit"
            disabled={loading || favs.some((f) => !f.trim())}
            className="mx-auto flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-[#0a1628] transition-transform hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {t.picker.loading}
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                {t.picker.button}
              </>
            )}
          </button>
        </form>

        {error && <p className="mt-6 text-sm text-red-300">{error}</p>}

        {profile && (
          <div className="mt-16 animate-fade-in rounded-3xl border border-[#5cbdb9]/30 bg-[#5cbdb9]/5 p-8 text-start backdrop-blur">
            <div className="flex items-center gap-3">
              <FlaskConical className="h-6 w-6 text-[#5cbdb9]" />
              <h3 className="font-serif text-2xl text-white">{t.picker.dnaTitle}</h3>
            </div>
            <p className="mt-2 text-sm text-white/60">{t.picker.dnaSub}</p>
            {profile.summary && <p className="mt-4 text-sm italic text-white/80">{profile.summary}</p>}

            {profile.notes.length > 0 && (
              <div className="mt-6">
                <p className="mb-3 text-xs uppercase tracking-widest text-[#5cbdb9]">{t.picker.dnaNotes}</p>
                <div className="flex flex-wrap gap-2">
                  {profile.notes.map((n) => (
                    <a
                      key={n}
                      href={fragranticaSearch(n)}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t.picker.dnaSearch}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:border-[#5cbdb9] hover:bg-[#5cbdb9]/15"
                    >
                      {n}
                      <ExternalLink className="h-3 w-3 opacity-50" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {profile.accords.length > 0 && (
              <div className="mt-5">
                <p className="mb-3 text-xs uppercase tracking-widest text-[#5cbdb9]">{t.picker.dnaAccords}</p>
                <div className="flex flex-wrap gap-2">
                  {profile.accords.map((a) => (
                    <span
                      key={a}
                      className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/80"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {results && (
          <div className="mt-12 animate-fade-in">
            <h3 className="mb-8 font-serif text-2xl text-white">{t.picker.results}</h3>
            <div className="grid grid-cols-3 gap-6">
              {results.map((r, i) => (
                <div
                  key={r.id}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 text-start backdrop-blur"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs uppercase tracking-widest text-[#5cbdb9]">#{i + 1}</span>
                    <span className="rounded-full bg-[#5cbdb9]/20 px-2.5 py-1 text-xs font-medium text-[#5cbdb9]">
                      {r.matchScore}% match
                    </span>
                  </div>
                  <h4 className="mt-2 font-serif text-xl text-white">{r.name}</h4>
                  {r.inspiredBy && (
                    <p className="mt-1 text-xs italic text-white/50">
                      {lang === "ar" ? "مستوحى من" : "Inspired by"}: {r.inspiredBy}
                    </p>
                  )}
                  <p className="mt-3 text-sm text-white/60">
                    <span className="text-[#5cbdb9]">{t.picker.reason}: </span>
                    {r.reason}
                  </p>
                  <a
                    href={waLink(orderMessage(r.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#25D366]/90 px-4 py-2.5 text-xs font-medium text-white hover:bg-[#25D366] transition-colors"
                  >
                    {t.picker.order}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
