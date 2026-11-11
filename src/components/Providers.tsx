"use client";

import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "motion/react";
import Lenis from "lenis";
import { IntroProvider } from "./Intro";

function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <MotionConfig reducedMotion="user">
        <IntroProvider>
          <SmoothScroll />
          {children}
        </IntroProvider>
      </MotionConfig>
    </ThemeProvider>
  );
}
