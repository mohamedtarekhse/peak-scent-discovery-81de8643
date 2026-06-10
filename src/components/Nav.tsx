import { Languages } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";

export function Nav() {
  const { t, lang, setLang } = useLang();
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#0a1628]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="font-serif text-2xl tracking-[0.3em] text-white">
          AURA
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
