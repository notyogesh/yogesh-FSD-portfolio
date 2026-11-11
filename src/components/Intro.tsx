"use client";

import { createContext, useContext, useEffect, useState } from "react";

/* ---------- context: lets reveal animations wait for the intro ---------- */

const IntroContext = createContext(true);
export const useIntroReady = () => useContext(IntroContext);

// Times are in milliseconds since the page started loading. They match the CSS animation delays in globals.css.
const READY_AT = 2300; // page content may start revealing as the dial dissolves
const GONE_AT = 3500; // overlay is removed from the page

const TICKS = 120;
const RING_TEXT = "NEXT.JS  ·  REACT  ·  NODE.JS  ·  NESTJS  ·  FLUTTER  ·  AWS  ·  SEO  ·  ";

/**
 * Page-load "dial" reveal: a dot appears, a ring with tick marks draws around the name, skill names
 * orbit the ring while a dot travels along it, then everything dissolves into the page.
 * It is pure CSS/SVG animation (see globals.css), so it starts on the first paint without waiting for JavaScript.
 */
export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elapsed = performance.now();
    const t1 = window.setTimeout(() => setReady(true), reduced ? 0 : Math.max(0, READY_AT - elapsed));
    const t2 = window.setTimeout(() => setGone(true), reduced ? 0 : Math.max(0, GONE_AT - elapsed));
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <IntroContext.Provider value={ready}>
      {gone ? null : (
        <div id="intro" aria-hidden="true" className="dial-overlay">
          <div className="dial-stage">
            <svg viewBox="0 0 600 600" className="dial-svg" role="presentation">
              <defs>
                <path id="dial-text-path" d="M 300 300 m -252 0 a 252 252 0 1 1 504 0 a 252 252 0 1 1 -504 0" />
              </defs>

              <circle cx="300" cy="300" r="228" pathLength="1" className="dial-ring" />

              <g>
                {Array.from({ length: TICKS }, (_, i) => (
                  <line
                    key={i}
                    x1="300"
                    y1={i % 5 === 0 ? 62 : 68}
                    x2="300"
                    y2="74"
                    transform={`rotate(${(i * 360) / TICKS} 300 300)`}
                    className="dial-tick"
                    style={{ ["--i" as string]: i }}
                  />
                ))}
              </g>

              <g className="dial-text">
                <text>
                  <textPath href="#dial-text-path" textLength="1578" lengthAdjust="spacing">
                    {RING_TEXT}
                  </textPath>
                </text>
              </g>

              <g className="dial-orbit">
                <circle cx="300" cy="72" r="5" className="dial-orbit-dot" />
              </g>

              <circle cx="300" cy="300" r="6" className="dial-dot" />
            </svg>

            <p className="dial-name">
              Yogeshwara <strong>K</strong>
            </p>
          </div>
        </div>
      )}
      <noscript>
        <style>{`#intro{display:none!important}`}</style>
      </noscript>
      {children}
    </IntroContext.Provider>
  );
}
