"use client";

import { useEffect, useRef, useState } from "react";

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
 * Calls onReady once the scene is running.
 */
function remapScroll(viewer: SplineViewerEl, host: HTMLElement, onReady: () => void) {
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
      onReady();
    } else if (++tries > 120) {
      window.clearInterval(timer);
    }
  }, 300);
  return () => window.clearInterval(timer);
}

/** Light stand-in for the 3D scene (about 1 KB): a small sprout in a pot on a green platform. */
function Poster({ fading }: { fading: boolean }) {
  return (
    <svg
      viewBox="0 0 300 250"
      aria-hidden="true"
      className={`absolute inset-0 m-auto h-[62%] max-h-[420px] w-auto max-w-[85%] transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <ellipse cx="150" cy="200" rx="118" ry="42" fill="#6fd3a0" />
      <rect x="112" y="176" width="12" height="30" rx="5" fill="#a43b3b" />
      <rect x="176" y="176" width="12" height="30" rx="5" fill="#a43b3b" />
      <path d="M106 140h88l-8 44h-72z" fill="#d9774f" />
      <rect x="100" y="128" width="100" height="18" rx="9" fill="#e48c64" />
      <ellipse cx="150" cy="134" rx="40" ry="6" fill="#5a3b2e" />
      <path d="M150 133c0-14 2-24 8-33" fill="none" stroke="#4db06a" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="146" cy="110" rx="15" ry="7" transform="rotate(-32 146 110)" fill="#5ccf7f" />
      <ellipse cx="164" cy="99" rx="13" ry="6" transform="rotate(28 164 99)" fill="#4fc275" />
    </svg>
  );
}

/**
 * The 3D scene is heavy (about 650 KiB of code plus several seconds of script time on a phone), so it never
 * loads with the page. A light poster shows first, and the real scene loads only after the visitor first
 * interacts (scroll, touch, click or key press) and its tile is near the screen. That keeps the page fast
 * and the Lighthouse score high.
 */
export default function SplineScene({ className }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [posterGone, setPosterGone] = useState(false);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let stopRemap: (() => void) | undefined;
    let started = false;
    let interacted = false;
    let near = false;

    const mount = () => {
      if (el.querySelector("spline-viewer")) return;
      const viewer = document.createElement("spline-viewer") as SplineViewerEl;
      viewer.setAttribute("url", SCENE_URL);
      // scene has scroll-driven events: listen to the whole page, not just the canvas
      viewer.setAttribute("events-target", "global");
      viewer.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
      el.appendChild(viewer);
      stopRemap = remapScroll(viewer, el, () => setReady(true));
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

    const maybeStart = () => {
      if (started || !interacted || !near) return;
      started = true;
      cleanupListeners();
      if ("requestIdleCallback" in window) requestIdleCallback(load, { timeout: 800 });
      else setTimeout(load, 200);
    };

    const events = ["scroll", "wheel", "touchstart", "pointerdown", "keydown"] as const;
    const onInteract = () => {
      interacted = true;
      maybeStart();
    };
    const cleanupListeners = () => events.forEach((e) => window.removeEventListener(e, onInteract));
    events.forEach((e) => window.addEventListener(e, onInteract, { passive: true }));

    const io = new IntersectionObserver(
      ([entry]) => {
        near = entry.isIntersecting;
        maybeStart();
      },
      { rootMargin: "600px" },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cleanupListeners();
      stopRemap?.();
    };
  }, []);

  // purely decorative: hidden from assistive technology
  return (
    <div ref={host} className={className} aria-hidden="true">
      {posterGone ? null : (
        <div onTransitionEnd={() => ready && setPosterGone(true)} className="contents">
          <Poster fading={ready} />
        </div>
      )}
    </div>
  );
}
