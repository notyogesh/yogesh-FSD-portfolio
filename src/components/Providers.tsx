"use client";

import { ThemeProvider } from "next-themes";
import { MotionConfig } from "motion/react";
import { IntroProvider } from "./Intro";
import SmoothScroll from "./SmoothScroll";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <MotionConfig reducedMotion="user">
        <IntroProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </IntroProvider>
      </MotionConfig>
    </ThemeProvider>
  );
}
