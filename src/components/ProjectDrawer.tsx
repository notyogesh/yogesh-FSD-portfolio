"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/data/projects";

/**
 * Right-hand side panel that explains a project: what it is, what was built and the stack.
 * Esc, the close button or a click on the dimmed area closes it; focus is kept inside while it is open
 * and returned to the card afterwards.
 */
export default function ProjectDrawer({
  project,
  open,
  onClose,
}: {
  project: Project;
  open: boolean;
  onClose: () => void;
}) {
  const titleId = useId();
  const panel = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panel.current) return;
      const items = panel.current.querySelectorAll<HTMLElement>("a[href],button");
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      lenis?.start();
      previous?.focus();
    };
  }, [open, onClose, lenis]);

  // the portal needs `document`, so render it only after mount (keeps server and client HTML identical)
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[100]">
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.div
            ref={panel}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            data-lenis-prevent
            className="absolute inset-y-0 right-0 flex w-full max-w-[520px] flex-col overflow-y-auto border-l border-line bg-bg text-fg shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
          >
            <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">{project.category}</p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="grid size-10 shrink-0 place-items-center rounded-full border border-line transition-colors hover:bg-card-hover"
              >
                <span aria-hidden>✕</span>
              </button>
            </div>

            <div className="flex flex-col gap-6 px-5 pb-8 sm:px-6">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-card">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} website preview`}
                    fill
                    sizes="520px"
                    className="object-cover object-top"
                  />
                ) : (
                  <div
                    className="grid h-full w-full place-items-center p-4 text-center text-lg font-medium text-white/90"
                    style={{ background: `linear-gradient(135deg, ${project.color ?? "#222"}, #0b0b0b)` }}
                  >
                    {project.title}
                  </div>
                )}
              </div>

              <div>
                <h2 id={titleId} className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {project.title}
                </h2>
                {project.offline ? (
                  <p className="mt-2 inline-block rounded-full bg-card px-2.5 py-1 text-xs font-medium text-muted">
                    Live site currently offline
                  </p>
                ) : null}
              </div>

              <section aria-labelledby={`${titleId}-did`}>
                <h3 id={`${titleId}-did`} className="text-sm font-medium uppercase tracking-[0.18em] text-accent-text">
                  What I did
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{project.work}</p>
              </section>

              {project.stack.length ? (
                <section aria-labelledby={`${titleId}-stack`}>
                  <h3
                    id={`${titleId}-stack`}
                    className="text-sm font-medium uppercase tracking-[0.18em] text-accent-text"
                  >
                    Stack
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <li key={s} className="rounded-full border border-line px-3 py-1 text-sm font-medium">
                        {s}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {!project.offline ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="project_click"
                  data-track-label={project.slug}
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-deep px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                >
                  Visit live site
                  <span aria-hidden>↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
