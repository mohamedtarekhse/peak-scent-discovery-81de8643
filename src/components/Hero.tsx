import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";
import { useStickyProgress } from "@/hooks/use-sticky-progress";
import heroImg from "@/assets/hero-mountain.jpg";
// ODD hero video — served from /public so it deploys with the site (no Lovable storage dependency)
const heroVideoUrl = "/odd-hero.mp4";
const heroPosterUrl = "/odd-hero-poster.jpg";

/** easeInOut for a smoother Salt-like expansion feel */
const ease = (x: number) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2);

export function Hero() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement | null>(null);
  // 0 → 1 while the sticky stage is pinned across the tall section
  const p = useStickyProgress(sectionRef);
  const e = ease(p);

  // Frame geometry (Salt-style): start as an inset rounded card, expand edge-to-edge
  const marginPx = Math.round(24 * (1 - e)); // 24px side/top margins → 0
  const radiusPx = Math.round(24 * (1 - e)); // 24px border radius → 0

  // Black overlay behind the brand plate fades in as the frame expands
  const veilOpacity = 0.35 + e * 0.4; // 0.35 → 0.75
  // Brand name drifts upward slightly while scrolling (parallax)
  const wordmarkY = -e * 48; // px

  return (
    <section id="home" ref={sectionRef} className="relative h-[200vh] w-full bg-[#0a1628]">
      {/* Pinned stage */}
      <div className="sticky top-0 z-10 h-screen w-full overflow-hidden">
        {/* Expanding video frame */}
        <div
          className="absolute overflow-hidden bg-black will-change-[inset,border-radius]"
          style={{
            top: `${marginPx}px`,
            left: `${marginPx}px`,
            right: `${marginPx}px`,
            bottom: `${marginPx}px`,
            borderRadius: `${radiusPx}px`,
          }}
        >
          {/* ODD hero video */}
          <video
            src={heroVideoUrl}
            autoPlay
            muted
            loop
            playsInline
            poster={heroPosterUrl}
            aria-hidden="true"
            className="h-full w-full object-cover"
            style={{ transform: `scale(${1 + e * 0.06})` }}
          />
          {/* Fallback still underneath the video */}
          <img
            src={heroImg}
            alt=""
            width={1920}
            height={1080}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />

          {/* Gradient veils for legibility */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

          {/* Bottom black overlay + ODD brand name */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pb-16 md:pb-20"
            style={{
              background: `linear-gradient(to top, rgba(0,0,0,${veilOpacity.toFixed(3)}) 0%, rgba(0,0,0,${(veilOpacity * 0.55).toFixed(3)}) 55%, transparent 100%)`,
            }}
          >
            <p
              className="mb-2 text-xs uppercase tracking-[0.5em] text-white/60"
              style={{ transform: `translateY(${wordmarkY * 0.4}px)` }}
            >
              {t.hero.tag}
            </p>
            <h1
              className="select-none font-serif text-7xl font-bold leading-none tracking-[0.12em] md:text-8xl lg:text-9xl"
              style={{
                transform: `translateY(${wordmarkY}px)`,
                backgroundImage:
                  "linear-gradient(135deg, #ffffff 0%, #e6c98a 55%, #b98d4f 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                textShadow: "0 2px 30px rgba(0,0,0,0.55)",
              }}
            >
              ODD
            </h1>
          </div>
        </div>

        {/* Centered copy + CTAs (stay inside the frame, fade out on scroll) */}
        <div
          className="pointer-events-none relative z-20 flex h-full flex-col items-center justify-center px-6 pt-24 text-center transition-opacity duration-150 motion-reduce:transition-none"
          style={{ opacity: Math.max(0, 1 - p * 1.6) }}
        >
          <p className="max-w-xl text-base text-white/70 md:text-lg animate-fade-in">
            {t.hero.sub}
          </p>

          <div className="pointer-events-auto mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in">
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
        </div>

        <ArrowDown className="absolute bottom-6 left-1/2 z-20 h-5 w-5 -translate-x-1/2 animate-bounce text-white/50" />
      </div>
    </section>
  );
}
