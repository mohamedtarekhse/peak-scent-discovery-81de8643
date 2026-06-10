import { useLang } from "@/i18n/LangProvider";
import { catalog } from "@/data/catalog";
import { waLink } from "./WhatsAppFloat";

export function Collection() {
  const { t, lang } = useLang();
  return (
    <section id="collection" className="bg-[#0c2340] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-serif text-4xl text-white md:text-5xl">{t.collection.title}</h2>
          <p className="mt-4 text-white/60">{t.collection.sub}</p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {catalog.map((f) => (
            <article
              key={f.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent transition-all hover:border-white/30 hover:-translate-y-1"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#1a3a5e]">
                <img
                  src={f.image}
                  alt={lang === "ar" ? f.nameAr : f.name}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-white">{lang === "ar" ? f.nameAr : f.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-[#5cbdb9]">{f.family}</p>
                <p className="mt-3 text-sm text-white/50">{f.notes.join(" · ")}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-serif text-lg text-white">{f.price} EGP</span>
                  <a
                    href={waLink(`${t.wa.greet} (${lang === "ar" ? f.nameAr : f.name})`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white/10 px-4 py-2 text-xs text-white hover:bg-white/20 transition-colors"
                  >
                    {t.picker.order}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
