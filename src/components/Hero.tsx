import { ArrowDown } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";
import heroImg from "@/assets/hero-mountain.jpg";
import heroVideo from "@/assets/hero.mp4.asset.json";

export function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="relative h-screen min-h-[640px] w-full overflow-hidden bg-[#0a1628]">
      <video
        src={heroVideo.url}
        autoPlay
        muted
        loop
        playsInline
        poster={heroImg}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-0"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/40 via-transparent to-[#0a1628]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/60 via-transparent to-[#0a1628]/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.5em] text-white/60 animate-fade-in">
          {t.hero.tag}
        </p>

        <div
          ref={ref}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px)`,
            transition: dragging ? "none" : "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
            touchAction: "none",
          }}
          className="relative cursor-grab select-none active:cursor-grabbing"
        >
          {!interacted && (
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/70 backdrop-blur animate-pulse">
              ← {t.hero.hint} →
            </span>
          )}
        </div>

        <p className="mt-8 max-w-xl text-base text-white/70 md:text-lg animate-fade-in">
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

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.12) translate(-1%, -2%); }
        }
      `}</style>
    </section>
  );
}
