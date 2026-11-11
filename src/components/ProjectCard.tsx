import Image from "next/image";
import type { CSSProperties } from "react";
import { ClipReveal, ScrollScale } from "./Reveal";
import type { Project } from "@/data/projects";

/** Soft, muted backdrops (cycled per card) so each mockup sits in its own "room". */
const backdrops = [
  ["#d9d2c5", "#b9ae9b"], // stone
  ["#c9d6c3", "#9fb29a"], // sage
  ["#c7d0dc", "#98a6ba"], // blue-grey
  ["#e0cfc2", "#c2a592"], // clay
  ["#d3c7d9", "#a99bb5"], // mauve
  ["#bfc7c9", "#8d999c"], // slate
];

/* fine grain so the backdrop feels like a textured wall rather than a flat gradient */
const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

function Screen({ project, sizes }: { project: Project; sizes: string }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} website preview`}
        fill
        sizes={sizes}
        className="object-cover object-top"
      />
    );
  }
  return (
    <div
      className="grid h-full w-full place-items-center p-3 text-center text-sm font-medium text-white/90 sm:text-base"
      style={{ background: `linear-gradient(135deg, ${project.color ?? "#222"}, #0b0b0b)` }}
    >
      {project.title}
    </div>
  );
}

export default function ProjectCard({
  project,
  index,
  compact = false,
  heading: Heading = "h2",
}: {
  project: Project;
  index: number;
  /** hide the stack and description (used for the short "selected work" list on Home) */
  compact?: boolean;
  /** heading level for the project title, so the page outline stays in order */
  heading?: "h2" | "h3";
}) {
  const [from, to] = backdrops[index % backdrops.length];
  const phone = project.device === "phone";

  return (
    <ScrollScale className="h-full">
      <article className="group relative flex h-full flex-col rounded-3xl bg-card p-3 transition-colors hover:bg-card-hover has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-accent-text">
        <ClipReveal className="overflow-hidden rounded-2xl" delay={(index % 2) * 0.1}>
          <div
            className="relative aspect-[4/3] w-full overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${from}, ${to})` } as CSSProperties}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.22] mix-blend-multiply"
              style={{ backgroundImage: GRAIN }}
            />
            <div className="absolute inset-0 grid place-items-center">
              {phone ? (
                <div className="relative h-[80%] aspect-[9/18.5] overflow-hidden rounded-[1.6rem] border-[6px] border-[#0d0d0d] bg-[#0d0d0d] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.03]">
                  <div
                    aria-hidden
                    className="absolute left-1/2 top-1.5 z-10 h-3 w-14 -translate-x-1/2 rounded-full bg-[#0d0d0d]"
                  />
                  <Screen project={project} sizes="200px" />
                </div>
              ) : (
                <div className="w-[68%] overflow-hidden rounded-[0.9rem] border-[6px] border-[#0d0d0d] bg-[#0d0d0d] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.03]">
                  <div className="relative aspect-[16/10] w-full">
                    <Screen project={project} sizes="(min-width: 768px) 34vw, 70vw" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </ClipReveal>

        {project.offline ? (
          <span className="absolute right-6 top-6 rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
            Currently offline
          </span>
        ) : null}

        <div className="flex items-center justify-between gap-3 px-3 pb-2 pt-4 text-sm font-medium">
          <Heading className="text-base font-medium">
            {/* the link sits on the title and is stretched over the whole card, so the entire card is clickable */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="after:absolute after:inset-0 after:rounded-3xl"
            >
              {project.title}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </Heading>
          <span className="flex items-center gap-2 text-muted">
            {project.category}
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </span>
        </div>

        {compact ? null : (
          <div className="flex flex-1 flex-col gap-4 px-3 pb-3 pt-1">
            <p className="text-sm leading-relaxed text-muted">{project.work}</p>
            {project.stack.length ? (
              <ul aria-label="Stack" className="mt-auto flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-line px-2.5 py-1 text-xs font-medium transition-colors group-hover:border-accent/50"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        )}
      </article>
    </ScrollScale>
  );
}
