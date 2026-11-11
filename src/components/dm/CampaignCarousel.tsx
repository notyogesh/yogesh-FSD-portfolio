"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import type { Campaign } from "@/data/campaigns";

const pad = (n: number) => String(n).padStart(2, "0");
const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

const AUTO_MS = 3800;
const host = (url?: string) => (url ? url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : "coming soon");

/** A designed stand-in for a missing screenshot: a mock browser window tinted with the card colour. */
function Placeholder({ name, tint, url }: { name: string; tint: string; url?: string }) {
  return (
    <div
      aria-hidden
      className="relative flex h-full flex-col overflow-hidden"
      style={{
        background: `radial-gradient(120% 90% at 85% 0%, ${tint}, transparent 60%), radial-gradient(90% 70% at 0% 100%, rgba(228,28,45,0.35), transparent 60%), #120d0d`,
      }}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-black/30 px-3 py-2">
        <span className="size-2 rounded-full bg-white/25" />
        <span className="size-2 rounded-full bg-white/25" />
        <span className="size-2 rounded-full bg-white/25" />
        <span className="ml-2 truncate rounded-full bg-white/10 px-3 py-0.5 text-[10px] tracking-wide text-white/70">
          {host(url)}
        </span>
      </div>
      <div className="relative flex flex-1 flex-col justify-center gap-2 px-5">
        <span className="font-display text-5xl leading-none text-white/90">{initials(name)}</span>
        <span className="h-1.5 w-3/4 rounded-full bg-white/25" />
        <span className="h-1.5 w-1/2 rounded-full bg-white/15" />
        <span className="mt-2 h-6 w-20 rounded-full bg-accent-deep/80" />
        <span className="absolute -right-6 -top-6 size-28 rounded-full border border-white/10" />
        <span className="absolute -bottom-10 right-6 size-24 rounded-full border border-white/10" />
      </div>
    </div>
  );
}

/**
 * A draggable 3D carousel, like a stack of tall cards on a turntable: the middle card is in focus and
 * the neighbours tilt away. Drag, swipe, use the arrow buttons, or press the left / right arrow keys.
 */
export default function CampaignCarousel({ items }: { items: Campaign[] }) {
  const [active, setActive] = useState(0);
  const [drag, setDrag] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const moved = useRef(false);
  const [playing, setPlaying] = useState(true); // user's play / pause choice
  const [hold, setHold] = useState(false); // hover or keyboard focus pauses too
  const reduce = useReducedMotion();
  const n = items.length;
  const auto = playing && !hold && !dragging && !reduce;

  // auto-advance: slides forward, then glides back to the first card
  useEffect(() => {
    if (!auto) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      setActive((a) => (a >= n - 1 ? 0 : a + 1));
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [auto, n, active]);

  const go = (i: number) => setActive(Math.max(0, Math.min(n - 1, i)));

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("a,button")) return; // let links and buttons work normally
    startX.current = e.clientX;
    moved.current = false;
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 6) moved.current = true;
    setDrag(dx);
  };
  const endDrag = () => {
    if (!dragging) return;
    setDragging(false);
    const dx = drag;
    setDrag(0);
    if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1) * Math.max(1, Math.round(Math.abs(dx) / 170)));
  };
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(active - 1);
    }
  };

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Campaign case studies"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={() => setHold(false)}
      className="relative select-none outline-offset-4"
    >
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className={`relative mx-auto h-[500px] w-full max-w-[1200px] overflow-hidden touch-pan-y sm:h-[560px] ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ perspective: "1400px", ["--cw" as string]: "min(64vw, 300px)" }}
      >
        {items.map((item, i) => {
          const d = i - active;
          // only the cards near the middle are rendered: fewer images to load, lighter on phones
          if (Math.abs(d) > 3) return null;
          const isActive = d === 0;
          return (
            <div
              key={item.slug}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${n}: ${item.client}`}
              aria-hidden={!isActive}
              onClick={() => {
                if (!moved.current && !isActive) go(i);
              }}
              className="absolute left-1/2 top-1/2 h-[440px] w-[var(--cw)] sm:h-[500px]"
              style={{
                zIndex: 20 - Math.abs(d),
                transform: `translate(-50%, -50%) translateX(calc(var(--cw) * ${d * 0.86} + ${drag}px)) translateZ(${
                  -Math.abs(d) * 140
                }px) rotateY(${-d * 24}deg) scale(${isActive ? 1 : 0.92})`,
                transition: dragging ? "none" : "transform 650ms cubic-bezier(.22,1,.36,1)",
              }}
            >
              <div
                className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 p-4 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]"
                style={{ background: `linear-gradient(160deg, ${item.tint}, #0c0a0a 85%)` }}
              >
                {/* dark veil on side cards (an overlay, not opacity, so text contrast stays correct) */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-10 rounded-[28px] bg-black transition-opacity duration-500"
                  style={{ opacity: isActive ? 0 : 0.4 + Math.abs(d) * 0.1 }}
                />
                <span className="text-xs font-medium tracking-[0.25em] text-white/70">{pad(i + 1)}</span>
                <div className="relative mt-3 aspect-[4/3] overflow-hidden rounded-2xl bg-black/40 ring-1 ring-white/10">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={isActive ? `${item.client} website` : ""}
                      fill
                      sizes="300px"
                      priority={i === 0}
                      draggable={false}
                      className="pointer-events-none object-cover object-top"
                    />
                  ) : (
                    <Placeholder name={item.client} tint={item.tint} url={item.url} />
                  )}
                </div>
                <div className="mt-auto flex flex-col gap-2 pt-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">{item.kicker}</p>
                  <h3 className="font-display text-2xl leading-tight">{item.client}</h3>
                  <p className="w-fit rounded-full bg-accent-deep px-3 py-1 text-xs font-medium text-white">
                    {item.metric}
                  </p>
                  {isActive && item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-track="campaign_open"
                      data-track-label={item.slug}
                      className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
                    >
                      View live site
                      <span aria-hidden>↗</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-2 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => go(active - 1)}
          disabled={active === 0}
          aria-label="Previous case study"
          className="grid size-11 place-items-center rounded-full border border-white/15 transition-colors hover:bg-white/10 disabled:opacity-35"
        >
          <span aria-hidden>←</span>
        </button>
        <p aria-live="polite" className="min-w-24 text-center text-sm tabular-nums text-muted">
          <span className="text-fg">{pad(active + 1)}</span> / {pad(n)}
        </p>
        {!reduce ? (
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause automatic scrolling" : "Play automatic scrolling"}
            className="grid size-11 place-items-center rounded-full border border-white/15 text-xs transition-colors hover:bg-white/10"
          >
            <span aria-hidden>{playing ? "❚❚" : "▶"}</span>
          </button>
        ) : null}
        <button
          type="button"
          onClick={() => go(active + 1)}
          disabled={active === n - 1}
          aria-label="Next case study"
          className="grid size-11 place-items-center rounded-full border border-white/15 transition-colors hover:bg-white/10 disabled:opacity-35"
        >
          <span aria-hidden>→</span>
        </button>
      </div>
      {!reduce ? (
        <div aria-hidden className="mx-auto mt-3 h-0.5 w-40 overflow-hidden rounded-full bg-white/10">
          <div
            key={`${active}-${auto}`}
            className="h-full origin-left bg-accent-deep"
            style={auto ? { animation: `dm-progress ${AUTO_MS}ms linear forwards` } : { transform: "scaleX(0)" }}
          />
        </div>
      ) : null}
      <p className="mt-3 text-center text-xs text-muted">Drag to browse. Tap the card in the middle to open the live site.</p>
    </div>
  );
}
