import { MessageCircle } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";

const PHONE = "201023196966";

export function waLink(message?: string) {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${PHONE}${text}`;
}

export function WhatsAppFloat() {
  const { t, lang } = useLang();
  return (
    <a
      href={waLink(t.wa.greet)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.footer.contact}
      className={`fixed bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-900/30 transition-transform hover:scale-110 ${lang === "ar" ? "left-6" : "right-6"}`}
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
      <span className="pointer-events-none absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />
    </a>
  );
}
