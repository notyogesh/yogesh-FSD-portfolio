"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useIntroReady } from "./Intro";

const EASE = [0.22, 1, 0.36, 1] as const;

/** True once the element is on screen AND the page intro has opened up. */
function useShown<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const ready = useIntroReady();
  return { ref, shown: inView && ready };
}

type TextRevealProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
};

/** Words slide up out of an overflow mask, staggered (the "masked line reveal"). */
export function TextReveal({ text, as = "h1", className, delay = 0 }: TextRevealProps) {
  const Tag = as;
  const { ref, shown } = useShown<HTMLElement>();
  const words = text.split(" ");
  return (
    <Tag ref={ref as never} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block overflow-hidden align-top pb-[0.12em] -mb-[0.12em]"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "110%" }}
            animate={{ y: shown ? "0%" : "110%" }}
            transition={{ duration: 0.9, ease: EASE, delay: delay + i * 0.04 }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}

/** Block unmasks from the bottom (clip-path) while its content settles from a slight zoom. */
export function ClipReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, shown } = useShown<HTMLDivElement>();
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      animate={{ clipPath: shown ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)" }}
      transition={{ duration: 1.1, ease: EASE, delay }}
    >
      <motion.div
        className="h-full w-full"
        initial={{ scale: 1.15 }}
        animate={{ scale: shown ? 1 : 1.15 }}
        transition={{ duration: 1.4, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/**
 * Scroll-linked entrance: as the element enters the viewport it grows from a smaller size to full size,
 * rises into place, tied directly to scroll position (so it also reverses when you scroll back).
 * Transform-only, so it stays smooth. Skipped for visitors who prefer reduced motion.
 */
export function ScrollScale({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end 82%"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.84, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [90, 0]);

  // note: no opacity fade here on purpose. Half-transparent text would fail colour-contrast checks while it moves.
  return (
    <motion.div
      ref={ref}
      className={className}
      style={reduce ? undefined : { scale, y, transformOrigin: "50% 100%" }}
    >
      {children}
    </motion.div>
  );
}

/** Simple fade + rise for small items. */
export function FadeUp({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, shown } = useShown<HTMLDivElement>();
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: shown ? 1 : 0, y: shown ? 0 : 24 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
