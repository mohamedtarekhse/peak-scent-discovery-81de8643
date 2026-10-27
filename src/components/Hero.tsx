import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import heroImg from "@/assets/hero-mountain.jpg";
// ODD hero video — served from /public so it deploys with the site (no Lovable storage dependency)
const heroVideoUrl = "/odd-hero.mp4";
const heroPosterUrl = "/odd-hero-poster.jpg";

export function Hero() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement | null>(null);
  // 0 → 1 as the hero scrolls out of view; used to blend video → still image
  const p = useScrollProgress(sectionRef);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-[#0a1628]"
    >
      {/* ODD hero video — fades out while scrolling */}
      <video
        src={heroVideoUrl}
        autoPlay
        muted
        loop
        playsInline
        poster={heroPosterUrl}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity duration-150 ease-out will-change-[opacity,transform]"
        style={{
          opacity: Math.max(0, 0.7 * (1 - p)),
          transform: `scale(${1 + p * 0.08})`,
        }}
      />
      {/* Fallback / blend target: mountain still — fades in while scrolling */}
      <img
        src={heroImg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-150 ease-out will-change-[opacity] motion-reduce:transition-none"
        style={{ opacity: p }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/40 via-transparent to-[#0a1628]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/60 via-transparent to-[#0a1628]/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.5em] text-white/60 animate-fade-in">
          {t.hero.tag}
        </p>

        <p className="max-w-xl text-base text-white/70 md:text-lg animate-fade-in">
          {t.hero.sub}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in">
          <a
            href="#collection"
            className="rounded-full bg-white px-7 py-3 text-sm font-medium text-[#0a1628] transition-transform hover:scale-105"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#picker"
            className="rounded-full border border-white/40 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            {t.hero.cta2}
          </a>
        </div>

        <ArrowDown className="absolute bottom-8 h-5 w-5 animate-bounce text-white/50" />
      </div>
    </section>
  );
}
