import Image from "next/image";
import Link from "next/link";
import CopyButton from "@/components/CopyButton";
import { LinkedInIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { ClipReveal, FadeUp, TextReveal } from "@/components/Reveal";
import { contact } from "@/data/contact";
import { alsoWorked, experience, lanes, numbers, skills, steps, work } from "@/data/combined";

const shell = "mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28";
const pad = (n: number) => String(n).padStart(2, "0");

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-accent-text">{children}</p>;
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto w-full max-w-6xl px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
      {/* plain markup so the first screen paints with the HTML (fast Largest Contentful Paint) */}
      <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs font-medium">
        <span className="size-1.5 rounded-full bg-accent" aria-hidden />
        Business development &amp; full stack · Chennai
      </p>

      <h1 id="hero-title" className="font-display text-[clamp(3.2rem,12vw,10rem)] leading-[0.92] tracking-tight">
        <span className="sr-only">I build it. I grow it.</span>
        <span aria-hidden="true" className="block">
          <TextReveal as="span" text="I build it." className="block" />
          <TextReveal as="span" text="I grow it." delay={0.15} className="block italic text-accent" />
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
        I&apos;m Yogeshwara. I ship software (Next.js, React, Flutter, Node.js) and then make sure the right people find
        it, with ₹20 lakh+ in ads managed, SEO and tracking that proves what works.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          href="/#work"
          data-track="see_work"
          className="rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
        >
          See the work
        </Link>
        <a
          href="/Yogeshwara_K_Resume.pdf"
          download="Yogeshwara_K_Resume.pdf"
          data-track="resume_download"
          className="rounded-full border border-fg/25 px-6 py-3 text-sm font-medium transition-colors hover:bg-card"
        >
          Download resume<span className="sr-only"> (PDF, 54 KB)</span>
        </a>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2">
        {(["build", "grow"] as const).map((k) => (
          <div key={k} className="bg-bg p-6 sm:p-8">
            <p className={`font-display text-3xl italic ${k === "grow" ? "text-accent-text" : ""}`}>{lanes[k].title}</p>
            <p className="mt-1 text-muted">{lanes[k].line}</p>
            <ul className="mt-5 flex flex-col gap-2.5 text-sm">
              {lanes[k].points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className={`mt-1.5 size-1.5 shrink-0 rounded-full ${k === "grow" ? "bg-accent" : "bg-fg"}`} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stat({ value, label, tone }: { value: string; label: string; tone: "build" | "grow" }) {
  return (
    <div className="flex flex-col gap-1 border-t border-line pt-5">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className={`order-first font-display text-5xl ${tone === "grow" ? "italic text-accent-text" : ""}`}>{value}</dd>
    </div>
  );
}

export function Numbers() {
  return (
    <section aria-label="Numbers" className={shell}>
      <Kicker>By the numbers</Kicker>
      <TextReveal as="h2" text="Code and campaigns, measured." className="mb-12 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl" />
      <div className="grid gap-12 md:grid-cols-[3fr_4fr]">
        <FadeUp>
          <p className="mb-5 font-display text-2xl italic">Build</p>
          <dl className="grid gap-8">
            {numbers.build.map((n) => (
              <Stat key={n.label} {...n} tone="build" />
            ))}
          </dl>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mb-5 font-display text-2xl italic text-accent-text">Grow</p>
          <dl className="grid gap-8 sm:grid-cols-2">
            {numbers.grow.map((n) => (
              <Stat key={n.label} {...n} tone="grow" />
            ))}
          </dl>
        </FadeUp>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" aria-label="Selected work" className={shell}>
      <Kicker>Selected work</Kicker>
      <TextReveal as="h2" text="What I built, and what it grew." className="mb-14 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl" />

      <ol className="flex flex-col">
        {work.map((w, i) => (
          <li key={w.slug} className="border-t border-line py-10 sm:py-14">
            <article className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:gap-12">
              <div className="flex flex-col gap-5">
                <FadeUp>
                  <p className="text-sm tabular-nums text-muted">{pad(i + 1)}</p>
                  <h3 className="mt-1 font-display text-3xl leading-tight sm:text-4xl">{w.name}</h3>
                  <p className="mt-1 text-muted">{w.kind}</p>
                </FadeUp>
                <FadeUp delay={0.05}>
                  <p className="max-w-xl leading-relaxed">{w.summary}</p>
                </FadeUp>

                {w.built.length ? (
                  <FadeUp delay={0.1}>
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">Built with</p>
                    <ul className="flex flex-wrap gap-1.5">
                      {w.built.map((t) => (
                        <li key={t} className="rounded-full border border-fg/25 px-2.5 py-1 text-xs">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </FadeUp>
                ) : null}

                {w.grew ? (
                  <FadeUp delay={0.15}>
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-accent-text">Grew</p>
                    <p className="max-w-xl rounded-2xl bg-accent-deep px-4 py-3 text-sm font-medium leading-relaxed text-white">
                      {w.grew}
                    </p>
                  </FadeUp>
                ) : null}

                {w.url ? (
                  <FadeUp delay={0.2}>
                    <a
                      href={w.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-track="work_open"
                      data-track-label={w.slug}
                      className="inline-flex min-h-6 items-center gap-2 text-sm font-medium underline underline-offset-4 hover:text-accent-text"
                    >
                      Visit {w.name} <span aria-hidden>↗</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </FadeUp>
                ) : null}
              </div>

              {w.image ? (
                <ClipReveal className="h-fit overflow-hidden rounded-2xl border border-line shadow-[0_30px_60px_-30px_rgba(21,17,14,0.35)]">
                  <div className="relative aspect-[4/3] w-full bg-card">
                    <Image
                      src={w.image}
                      alt={`${w.name} website preview`}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                </ClipReveal>
              ) : null}
            </article>
          </li>
        ))}
      </ol>

      <div className="border-t border-line pt-10">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-muted">Also worked on</p>
        <ul className="grid gap-x-10 gap-y-5 md:grid-cols-2">
          {alsoWorked.map((a) => (
            <li key={a.name}>
              <a href={a.url} target="_blank" rel="noopener noreferrer" className="font-medium underline-offset-4 hover:underline">
                {a.name}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <p className="text-sm text-muted">{a.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" aria-label="How I work" className={shell}>
      <Kicker>How I work</Kicker>
      <TextReveal as="h2" text="One person, from idea to results." className="mb-12 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl" />
      <ol className="grid gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title}>
            <FadeUp delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col gap-3 rounded-3xl bg-card p-7">
                <p className="font-display text-5xl italic text-accent-text">{pad(i + 1)}</p>
                <h3 className="font-display text-3xl">{s.title}</h3>
                <p className="leading-relaxed text-muted">{s.text}</p>
              </div>
            </FadeUp>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Skills() {
  return (
    <section aria-label="Toolkit" className={shell}>
      <Kicker>Toolkit</Kicker>
      <TextReveal as="h2" text="Two toolboxes, one person." className="mb-12 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl" />
      <div className="grid gap-10 md:grid-cols-2">
        {(["build", "grow"] as const).map((k, i) => (
          <FadeUp key={k} delay={i * 0.08}>
            <p className={`mb-4 font-display text-2xl italic ${k === "grow" ? "text-accent-text" : ""}`}>{lanes[k].title}</p>
            <ul className="flex flex-wrap gap-2">
              {skills[k].map((s) => (
                <li key={s} className="rounded-full border border-fg/25 px-3 py-1.5 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-label="Experience" className={shell}>
      <Kicker>Experience</Kicker>
      <TextReveal as="h2" text="Where I've done both." className="mb-12 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl" />
      <ol className="flex flex-col">
        {experience.map((e) => (
          <li key={e.role + e.period} className="border-t border-line py-8">
            <FadeUp>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-display text-2xl">
                  {e.role} ·{" "}
                  {e.url ? (
                    <a href={e.url} target="_blank" rel="noopener noreferrer" className="italic underline-offset-4 hover:underline">
                      {e.company}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    <span className="italic">{e.company}</span>
                  )}
                </h3>
                <p className="text-sm text-muted">{e.period}</p>
              </div>
              <ul className="mt-4 flex max-w-3xl list-disc flex-col gap-2 pl-5 text-muted marker:text-accent">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </FadeUp>
          </li>
        ))}
      </ol>
      <p className="border-t border-line pt-6 text-sm text-muted">
        Education: BA in History, Alagappa University (2019 – 2022) · 12th grade 92.25% · 10th grade 94.4% · Languages:
        English, Tamil
      </p>
    </section>
  );
}

const action =
  "inline-flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5";

export function Contact() {
  const rows = [
    {
      icon: <MailIcon />,
      label: "Email",
      value: contact.email,
      cta: (
        <a href={`mailto:${contact.email}`} data-track="contact_email" className={action}>
          Send email
        </a>
      ),
      copy: { value: contact.email, label: "Copy email address" },
    },
    {
      icon: <PhoneIcon />,
      label: "Phone",
      value: contact.phone,
      cta: (
        <a href={contact.phoneHref} data-track="contact_call" className={action}>
          Call
        </a>
      ),
      copy: { value: contact.phone, label: "Copy phone number" },
    },
    {
      icon: <WhatsAppIcon />,
      label: "WhatsApp",
      value: contact.phone,
      cta: (
        <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" data-track="contact_whatsapp" className={action}>
          Chat<span className="sr-only"> on WhatsApp (opens in a new tab)</span>
        </a>
      ),
      copy: { value: contact.phoneRaw, label: "Copy WhatsApp number" },
    },
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      value: "yogeshwara-kumar",
      cta: (
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer me" data-track="contact_linkedin" className={action}>
          Profile<span className="sr-only"> (opens in a new tab)</span>
        </a>
      ),
      copy: { value: contact.linkedin, label: "Copy LinkedIn profile link" },
    },
  ];

  return (
    <section id="contact" aria-label="Contact" className={shell}>
      <Kicker>Contact &amp; resume</Kicker>
      <TextReveal as="h2" text="Let's build it, then grow it." className="mb-6 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl" />
      <p className="mb-10 max-w-xl text-muted">Tell me what you&apos;re working on. I reply within a day. Based in {contact.location}.</p>

      <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
        <FadeUp>
          <ul className="flex flex-col divide-y divide-line rounded-3xl border border-line bg-card">
            {rows.map((r) => (
              <li key={r.label} className="flex flex-wrap items-center gap-x-4 gap-y-3 p-5">
                <span className="grid size-10 place-items-center rounded-full border border-fg/20">{r.icon}</span>
                <div className="min-w-40 flex-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">{r.label}</p>
                  <p className="break-all font-medium">{r.value}</p>
                </div>
                <div className="flex items-center gap-2">
                  {r.cta}
                  <CopyButton value={r.copy.value} label={r.copy.label} text="Copy" />
                </div>
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex h-full flex-col justify-between gap-8 rounded-3xl bg-accent-deep p-7 text-white">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/80">Resume</p>
              <p className="mt-2 font-display text-3xl italic">Build + Grow, in one PDF.</p>
              <p className="mt-2 text-sm text-white/85">Skills, experience, projects and results.</p>
            </div>
            <a
              href="/Yogeshwara_K_Resume.pdf"
              download="Yogeshwara_K_Resume.pdf"
              data-track="resume_download"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-accent-deep transition-transform hover:-translate-y-0.5"
            >
              <span aria-hidden>↓</span> Download resume
              <span className="sr-only"> (PDF, 54 KB)</span>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl border-t border-line px-4 py-10 text-sm text-muted sm:px-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <p>© Yogeshwara K · Business development &amp; full stack · {contact.location}</p>
        <nav aria-label="Footer" className="flex gap-5">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer me" className="inline-flex min-h-6 items-center underline-offset-4 hover:text-fg hover:underline">
            LinkedIn<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <Link href="/privacy" className="inline-flex min-h-6 items-center underline-offset-4 hover:text-fg hover:underline">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
