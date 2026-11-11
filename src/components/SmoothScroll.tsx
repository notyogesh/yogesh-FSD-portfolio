"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";
import "lenis/dist/lenis.css";

/**
 * Buttery-smooth scrolling with Lenis (the maintained `lenis` package from darkroom.engineering).
 * - `root` attaches it to the page itself
 * - touch scrolling is left native on phones (syncTouch is intentionally off)
 * - skipped for visitors who ask their system for reduced motion
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
