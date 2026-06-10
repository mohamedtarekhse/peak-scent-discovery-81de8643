import { Gift, Repeat, Users } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";

export function Offers() {
  const { t } = useLang();
  const offers = [
    { icon: Gift, ...t.offers.a },
    { icon: Repeat, ...t.offers.b },
    { icon: Users, ...t.offers.c },
  ];
  return (
    <section id="offers" className="bg-gradient-to-b from-[#0c2340] to-[#0a1628] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-serif text-4xl text-white md:text-5xl">{t.offers.title}</h2>
          <p className="mt-4 text-white/60">{t.offers.sub}</p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {offers.map((o, i) => {
            const Icon = o.icon;
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:border-[#5cbdb9]/50 hover:bg-white/10"
              >
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#2d8a9e]/10 blur-3xl transition-opacity group-hover:opacity-100" />
                <Icon className="h-8 w-8 text-[#5cbdb9]" strokeWidth={1.5} />
                <h3 className="mt-6 font-serif text-2xl text-white">{o.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{o.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
