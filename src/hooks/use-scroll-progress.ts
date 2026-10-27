import { useEffect, useState } from "react";

/**
 * Returns scroll progress (0 → 1) of the given element relative to the viewport.
 * 0 = element fully in view at top, 1 = element has scrolled completely past.
 */
export function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const vh = window.innerHeight || 1;
      // rect.top goes from 0 (top of screen) to -vh (fully scrolled past)
      const p = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / vh));
      setProgress(p);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);

  return progress;
}
