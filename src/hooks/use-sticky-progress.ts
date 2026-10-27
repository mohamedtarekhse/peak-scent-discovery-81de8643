import { useEffect, useState } from "react";

/**
 * Returns scroll progress (0 → 1) across a tall sticky section:
 * 0 = the stage just became pinned at the top of the viewport,
 * 1 = the section has fully scrolled out (stage about to unpin).
 */
export function useStickyProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const vh = window.innerHeight || 1;
      const total = Math.max(1, el.offsetHeight - vh);
      // scrolled distance while the stage is pinned
      const p = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / total));
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
