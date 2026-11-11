import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SplineScene from "@/components/SplineScene";
import { FadeUp, TextReveal } from "@/components/Reveal";
import { logos } from "@/data/logos";
import { projects } from "@/data/projects";

const featured = ["cleomitra", "bill-management-system", "aivaantech-lms", "zhaulz"]
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const hireClass =
  "inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-linear-to-br from-accent-deep to-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_28px_-10px_var(--accent)] transition-transform hover:-translate-y-0.5";

function Tile({
  href,
  label,
  hint,
  className = "",
  delay = 0,
  children,
}: {
  href: string;
  label: string;
  hint?: string;
  className?: string;
  delay?: number;
  children?: React.ReactNode;
}) {
  return (
    <FadeUp delay={delay} className={className}>
      <Link
        href={href}
        className="group flex h-full min-h-[150px] flex-col justify-between rounded-2xl bg-card p-5 transition-colors duration-300 hover:bg-card-hover"
      >
        <div className="text-muted">{children}</div>
        <div className="flex items-end justify-between text-sm font-medium">
          <div>
            <p>{label}</p>
            {hint ? <p className="mt-0.5 font-normal text-muted">{hint}</p> : null}
          </div>
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            ↗
          </span>
        </div>
      </Link>
    </FadeUp>
  );
}

function MiniLogos({ keys }: { keys: (keyof typeof logos)[] }) {
  return (
    <div className="flex flex-wrap gap-2" aria-hidden>
      {keys.map((k) => (
        <span key={k} className="grid size-8 place-items-center rounded-full border border-line">
          <svg viewBox="0 0 24 24" className="size-4 fill-current">
            <path d={logos[k].path} />
          </svg>
        </span>
      ))}
    </div>
  );
}

/**
 * Desktop: content on the left scrolls, the Spline plant is pinned on the right and grows across the
 * whole page scroll (so a taller page = a longer growth). Mobile: the plant is a normal tile after the intro.
 */
export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
      <div className="flex flex-col gap-3 md:col-span-7">
        {/* intro: plain markup (no fade-in) so the first screen paints with the HTML, which keeps Largest Contentful Paint fast */}
        <div>
          <div className="flex min-h-[300px] flex-col justify-between gap-6 rounded-2xl bg-card p-6 md:min-h-[360px]">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 text-xs font-medium">
              <span className="size-1.5 rounded-full bg-accent-text" aria-hidden />
              Available for work
            </span>
            <div>
              <p className="mb-3 text-sm text-muted">Hey, I&apos;m Yogeshwara K</p>
              <TextReveal
                as="h1"
                text="Full Stack developer building web, mobile and AI products."
                className="max-w-3xl text-3xl font-medium leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl"
              />
            </div>
            <div className="flex items-center gap-3">
              <Link href="/contact" data-track="hire_me" data-track-label="home" className={hireClass}>
                Hire me
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card-hover"
              >
                View work
              </Link>
            </div>
          </div>
        </div>

        {/* mobile-only plant tile (never loads on desktop: it is display:none there) */}
        <FadeUp className="md:hidden">
          <div className="relative h-[340px] overflow-hidden rounded-2xl bg-card">
            <SplineScene className="absolute inset-0" />
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Tile href="/stack" label="Stack" hint="Tools I use" delay={0.05}>
            <MiniLogos keys={["nextjs", "react", "node", "typescript"]} />
          </Tile>
          <Tile href="/about" label="About" hint="Who I am" delay={0.1} />
          <Tile href="/portfolio" label="Portfolio" hint="Selected work" delay={0.15} />
        </div>

        {/* selected work */}
        <div className="mt-6 flex items-end justify-between px-1">
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Selected work</h2>
          <Link href="/portfolio" className="inline-flex min-h-6 items-center text-sm text-muted underline-offset-4 hover:text-fg hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} compact heading="h3" />
          ))}
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Tile href="/resume" label="Resume" hint="Experience & education" delay={0.05} />
          <Tile href="/contact" label="Contact" hint="Let's build together" delay={0.1} />
        </div>

        <FadeUp>
          <div className="flex min-h-[110px] items-end justify-between gap-4 rounded-2xl bg-card p-5 text-sm">
            <span className="text-muted">Based in</span>
            <p className="text-2xl font-medium tracking-tight sm:text-3xl">Chennai, India</p>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-card p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Have something in mind?</h2>
              <p className="mt-2 text-muted">Let&apos;s talk about your project, a role, or an idea.</p>
            </div>
            <Link href="/contact" data-track="hire_me" data-track-label="home" className={hireClass}>
              Hire me
            </Link>
          </div>
        </FadeUp>
      </div>

      {/* desktop: pinned plant column */}
      <aside className="hidden md:col-span-5 md:block">
        <div className="sticky top-20 h-[calc(100svh-6rem)] min-h-[420px] overflow-hidden rounded-2xl bg-card">
          <SplineScene className="absolute inset-0" />
        </div>
      </aside>
    </div>
  );
}
