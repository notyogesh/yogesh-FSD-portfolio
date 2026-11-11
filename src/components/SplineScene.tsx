"use client";

import { useEffect, useRef } from "react";

const SCRIPT_SRC =
  "https://unpkg.com/@splinetool/viewer@0.9.264/build/spline-viewer.js";
const SCENE_URL = "https://prod.spline.design/y8FjIL0ouGUmIFD0/scene.splinecode";

/* Minimal typing of the viewer internals we rely on (version is pinned in SCRIPT_SRC). */
type ScrollEvt = { scrollEnd: number; dispatch: (p: { x: number; y: number }) => void };
type SplineViewerEl = HTMLElement & {
  _spline?: {
    eventManager?: {
      handlers?: { Scroll?: { scrollEventsPerObject?: Map<unknown, ScrollEvt[]> } };
    };
  };
};

/**
 * This scene scrubs its "grow" animation with window.scrollY over the first ~700px of
 * the page. We re-map the scroll value so it fits our layout:
 *  - desktop (>= 768px): the tile is pinned beside the content, so the plant grows across
 *    the WHOLE page scroll. The taller the page, the slower and longer the growth.
 *  - mobile: the tile scrolls by with the page, so growth completes once the tile's bottom
 *    has scrolled ~60% of the way up.
 */
function remapScroll(viewer: SplineViewerEl, host: HTMLElement) {
  let tries = 0;
  const patched = new WeakSet<ScrollEvt>();
  const timer = window.setInterval(() => {
    const map = viewer._spline?.eventManager?.handlers?.Scroll?.scrollEventsPerObject;
    if (map && map.size) {
      for (const list of map.values()) {
        for (const ev of list) {
          if (patched.has(ev)) continue;
          patched.add(ev);
          const original = ev.dispatch.bind(ev);
          ev.dispatch = ({ x, y }) => {
            let progress: number;
            if (window.innerWidth >= 768) {
              const range = document.documentElement.scrollHeight - window.innerHeight;
              progress = range > 0 ? Math.min(1, Math.max(0, y) / (range * 0.85)) : 1;
            } else {
              const rect = host.getBoundingClientRect();
              const finish = Math.max(250, 0.6 * (rect.bottom + window.scrollY));
              progress = Math.min(Math.max(y, 0), finish) / finish;
            }
            original({ x, y: progress * ev.scrollEnd });
          };
        }
      }
      window.clearInterval(timer);
      window.dispatchEvent(new Event("scroll")); // apply the correct state right away
    } else if (++tries > 80) {
      window.clearInterval(timer);
    }
  }, 300);
  return () => window.clearInterval(timer);
}

/**
 * Lazy Spline viewer: the ~MBs of script + scene are only fetched once the
 * tile is near the viewport and the browser is idle, so they never block
 * first paint (keeps Lighthouse high).
 */
export default function SplineScene({ className }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let stopRemap: (() => void) | undefined;

    const mount = () => {
      if (el.querySelector("spline-viewer")) return;
      const viewer = document.createElement("spline-viewer") as SplineViewerEl;
      viewer.setAttribute("loading-anim", "");
      viewer.setAttribute("url", SCENE_URL);
      // scene has scroll-driven events: listen to the whole page, not just the canvas
      viewer.setAttribute("events-target", "global");
      viewer.style.cssText = "width:100%;height:100%;display:block";
      el.appendChild(viewer);
      stopRemap = remapScroll(viewer, el);
    };

    const load = () => {
      if (customElements.get("spline-viewer") || document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
        mount();
        return;
      }
      const s = document.createElement("script");
      s.type = "module";
      s.src = SCRIPT_SRC;
      s.onload = mount;
      document.head.appendChild(s);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        if ("requestIdleCallback" in window) {
          requestIdleCallback(load, { timeout: 1000 });
        } else {
          setTimeout(load, 300);
        }
      },
      { rootMargin: "600px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      stopRemap?.();
    };
  }, []);

  return <div ref={host} className={className} aria-label="Interactive 3D scene" />;
}
