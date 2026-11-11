"use client";

import { MotionConfig } from "motion/react";
import { IntroProvider } from "./Intro";
import SmoothScroll from "./SmoothScroll";

/** Page-load blob reveal (Intro), smooth scrolling and reduced-motion handling. Light theme only. */
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <IntroProvider>
        <SmoothScroll>{children}</SmoothScroll>
      </IntroProvider>
    </MotionConfig>
  );
}
