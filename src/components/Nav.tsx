import { Languages } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";
// ODD brand logo — gold linework on dark navy, generated from the original artwork
// (public/ asset so it is served as-is, no CSS filters needed)
import oddLogo from "/odd-logo-navy-gold.jpg";

export function Nav() {
  const { t, lang, setLang } = useLang();
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#0a1628]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center" aria-label="ODD">
          {/* Logo fills the navbar height while keeping its native aspect ratio */}
          <img
            src={oddLogo}
            alt="ODD"
            className="h-[calc(100%-1rem)] w-auto max-w-[33vw] rounded-sm object-contain ring-1 ring-[#d9b26a]/40 shadow-[0_0_18px_rgba(217,178,106,0.25)]"
          />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#picker" className="hover:text-white transition-colors">{t.nav.picker}</a>
          <a href="#collection" className="hover:text-white transition-colors">{t.nav.collection}</a>
          <a href="#offers" className="hover:text-white transition-colors">{t.nav.offers}</a>
        </nav>
        <button
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 transition-colors"
          aria-label="Toggle language"
        >
          <Languages className="h-3.5 w-3.5" />
          {lang === "en" ? "العربية" : "English"}
        </button>
      </div>
    </header>
  );
}
