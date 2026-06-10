import { Instagram, Facebook } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";
import { waLink } from "./WhatsAppFloat";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-white/10 bg-[#06101e] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h3 className="font-serif text-3xl text-white">{t.social.title}</h3>
          <p className="mt-2 text-sm text-white/40">{t.social.sub}</p>
          <div className="mt-6 flex justify-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/40">
              <Instagram className="h-5 w-5" />
            </span>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/40">
              <Facebook className="h-5 w-5" />
            </span>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <span className="font-serif text-lg tracking-[0.4em] text-white">AURA</span>
          <a href={waLink(t.wa.greet)} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            {t.footer.contact} · +20 102 319 6966
          </a>
          <span>© {new Date().getFullYear()} Aura. {t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
