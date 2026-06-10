
# Aura — Fragrance Landing Page

A single-page bilingual (Arabic + English with RTL toggle) fragrance site for the brand **Aura**, built on TanStack Start with Lovable Cloud + Lovable AI.

## What you need to upload after I build the shell
- Logo (black & white PNG/SVG)
- Bottle photos + names (one chat message — I'll add them to the catalog)
- Currency preference (defaulting to EGP — confirm or change)
- Social links (whenever you have them — easy to add later)

## Sections (top → bottom)

1. **Top nav** — Aura logo (B&W), language toggle (EN ⇄ AR with full RTL), anchor links.
2. **Hero** — Cinematic still of a blue & white mountain peak with a slow Ken Burns zoom + parallax cloud layer. "Aura" wordmark is **draggable** (mouse + touch), with a subtle floating idle animation and a "drag me" hint that fades after first interaction. Tagline + CTA buttons (Shop / Try AI Picker).
3. **AI Fragrance Picker** — User enters their 3 favorite fragrances (autocomplete from our catalog). Lovable AI (Gemini 3 Flash) analyzes the scent profile (notes, families, mood) and recommends 3 matches from your catalog, each with reasoning ("shares the smoky oud + vanilla base of your picks"). Results shown as cards with bottle image, name, notes, and a WhatsApp-order button.
4. **Catalog / Offers** — Grid of your bottles. Three offer cards highlighted:
   - Buy 2, get the 3rd free
   - Yearly subscription: 6 bottles for 2000 (currency TBD)
   - Referral: friend gets a bottle, you get 25 off your next bottle + tester
5. **Social** — Placeholder section ready for IG/TikTok/FB links later.
6. **Footer** — Brand, contact, copyright, language toggle repeat.
7. **Floating WhatsApp button** — Fixed bottom-right on every screen, opens `wa.me/201023196966` in a new tab with a prefilled greeting in the user's selected language.

## Design direction
- Palette: deep mountain blue (`#0c2340` → `#2d8a9e`), arctic white, soft mist gray. Logo stays pure B&W.
- Typography: elegant serif display (e.g. Cormorant) for "Aura" + headings; clean sans (Inter) for body. Arabic uses Tajawal/IBM Plex Sans Arabic so the RTL layout feels native, not translated.
- Motion: slow, calm, premium — no bouncy effects. Drag interaction on the hero wordmark is the signature moment.

## Technical details
- **Hero image**: AI-generated cinematic mountain peak (blue/white) saved to project assets. No video, per your choice — keeps load fast.
- **Wordmark drag**: pointer events + transform, snaps back gently if dragged far. Works on mobile touch.
- **Bilingual (AR/EN)**: lightweight i18n via React context; `dir="rtl"` flips on Arabic. Every string lives in one translation file you can edit.
- **AI picker backend**: `createServerFn` calling Lovable AI Gateway (`google/gemini-3-flash-preview`) with structured `Output.object` schema returning `{ matches: [{ name, reason }] }`. The catalog of your bottles is sent in the prompt so AI only recommends what you actually sell. No external scraping of fragrantica (it's blocked and would break) — instead the curated catalog includes the standard note profiles so matching works the same way.
- **Catalog storage**: starts as a typed TS file (`src/data/catalog.ts`). When you upload your bottles I'll fill in names, notes, and image paths. Easy upgrade to Lovable Cloud DB later if you want an admin panel.
- **WhatsApp**: plain `https://wa.me/201023196966?text=...` link, no API needed. Order buttons on AI results pre-fill the message with the fragrance name.
- **Routes**: single `/` route (TanStack Start file-based routing); sections are anchor-scrolled.

## Build order this turn
1. Generate the hero mountain image.
2. Set up i18n context + RTL handling.
3. Build nav, hero (with draggable Aura), offers, social placeholder, footer.
4. Stub the catalog with 6 placeholder bottles so the AI picker works end-to-end.
5. Implement the AI picker server function + UI.
6. Add the floating WhatsApp button.
7. SEO: title "Aura — Fragrances", meta description, OG tags.

## After this turn
You send: logo file + bottle photos with names/notes + currency. I'll swap the placeholder logo, populate the real catalog, and confirm currency formatting.
