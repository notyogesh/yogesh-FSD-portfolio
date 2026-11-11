import Link from "next/link";
import CopyButton from "@/components/CopyButton";
import { LinkedInIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { campaigns, experience, services, stats, toolkit } from "@/data/campaigns";
import { contact } from "@/data/contact";
import Reveal from "./Reveal";

const pad = (n: number) => String(n).padStart(2, "0");

const shell = "mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28";

export function Results() {
  return (
    <section id="results" aria-labelledby="results-title" className={shell}>
      <Reveal>
        <div className="mb-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent-text">The numbers</p>
          <h2 id="results-title" className="max-w-3xl font-display text-3xl uppercase leading-[1.05] tracking-tight sm:text-5xl">
            Results I can point to
          </h2>
        </div>
      </Reveal>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={(i % 4) * 0.07} className="flex flex-col gap-2 border-t border-line pt-5">
            <dt className="text-sm text-muted">{s.label}</dt>
            <dd className="order-first">
              <span className="block font-display text-4xl text-accent sm:text-5xl md:text-4xl lg:text-6xl">{s.value}</span>
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}

export function CampaignList() {
  return (
    <section id="campaign-list" aria-labelledby="campaign-list-title" className={shell}>
      <Reveal>
        <div className="mb-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent-text">Explore the campaigns</p>
          <h2 id="campaign-list-title" className="max-w-3xl font-display text-3xl uppercase leading-[1.05] tracking-tight sm:text-5xl">
            What was done, and what it delivered
          </h2>
        </div>
      </Reveal>
      <div className="border-b border-line">
        {campaigns.map((c, i) => (
          <details key={c.slug} className="group border-t border-line">
            <summary className="flex cursor-pointer list-none items-center gap-4 py-5 hover:bg-white/[0.03] [&::-webkit-details-marker]:hidden">
              <span className="w-8 shrink-0 text-sm tabular-nums text-muted">{pad(i + 1)}</span>
              <span className="flex-1 font-display text-xl sm:text-3xl">{c.client}</span>
              <span className="hidden text-sm text-accent-text sm:inline">{c.metric}</span>
              <span
                aria-hidden
                className="grid size-9 shrink-0 place-items-center rounded-full border border-white/15 text-lg leading-none transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="grid gap-5 pb-7 pl-12 pr-1 sm:grid-cols-[1fr_auto] sm:pr-14">
              <div>
                <p className="mb-2 text-sm text-accent-text sm:hidden">{c.metric}</p>
                <p className="max-w-2xl leading-relaxed text-muted">{c.summary}</p>
                {c.note ? <p className="mt-2 text-sm text-muted">{c.note}</p> : null}
                <ul aria-label="Channels and tools" className="mt-4 flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line px-2.5 py-1 text-xs">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              {c.url ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="campaign_open"
                  data-track-label={c.slug}
                  className="inline-flex h-fit w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm transition-colors hover:bg-white/10"
                >
                  Live site <span aria-hidden>↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className={shell}>
      <Reveal>
        <div className="mb-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent-text">What I do</p>
          <h2 id="services-title" className="max-w-3xl font-display text-3xl uppercase leading-[1.05] tracking-tight sm:text-5xl">
            Services
          </h2>
        </div>
      </Reveal>
      <ol className="grid gap-3 md:grid-cols-2">
        {services.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={(i % 2) * 0.08} className="h-full">
              <article className="flex h-full flex-col gap-3 rounded-3xl border border-line bg-card p-6 transition-colors hover:bg-card-hover">
                <p className="text-xs tracking-[0.25em] text-muted">{pad(i + 1)}</p>
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="leading-relaxed text-muted">{s.text}</p>
                <ul aria-label="Skills" className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {s.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line px-2.5 py-1 text-xs">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className={shell}>
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent-text">About</p>
          <h2 id="about-title" className="font-display text-3xl uppercase leading-[1.05] tracking-tight sm:text-5xl">
            The marketer who can also build.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-5 text-lg leading-relaxed text-muted">
          <p>
            I&apos;m Yogeshwara, a digital marketing and growth specialist in Chennai with 3.5+ years across paid media,
            SEO and e-commerce. I&apos;ve managed about ₹20 lakh in Meta and Google Ads budgets across 15+ client accounts
            in India and the US, including a 3x return on ad spend and an 80% lower cost per lead for a salon client.
          </p>
          <p>
            What sets me apart is that I also write the code. I pair marketing with full-stack skills (React, Next.js,
            Flutter and Node.js) to build landing pages, tracking and checkout flows that actually convert, instead of
            waiting on a developer.
          </p>
          <p>I&apos;ve worked with clients in India, the US, Singapore, Saudi Arabia and the UAE. Languages: English and Tamil.</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Toolkit() {
  return (
    <section aria-labelledby="toolkit-title" className={shell}>
      <Reveal>
        <div className="mb-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent-text">Toolkit</p>
          <h2 id="toolkit-title" className="font-display text-3xl uppercase leading-[1.05] tracking-tight sm:text-5xl">
            Tools I work in
          </h2>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <ul className="flex flex-wrap gap-2">
          {toolkit.map((t) => (
            <li key={t} className="rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-accent hover:bg-card">
              {t}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className={shell}>
      <Reveal>
        <div className="mb-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent-text">Experience</p>
          <h2 id="experience-title" className="font-display text-3xl uppercase leading-[1.05] tracking-tight sm:text-5xl">
            Where I&apos;ve worked
          </h2>
        </div>
      </Reveal>
      <ol className="flex flex-col">
        {experience.map((e) => (
          <li key={e.role + e.period} className="border-t border-line py-7">
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-display text-xl sm:text-2xl">
                  {e.role} ·{" "}
                  {e.url ? (
                    <a href={e.url} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                      {e.company}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    e.company
                  )}
                </h3>
                <p className="text-sm text-muted">{e.period}</p>
              </div>
              <ul className="mt-4 flex max-w-3xl list-disc flex-col gap-2 pl-5 text-muted marker:text-accent">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
      <p className="border-t border-line pt-6 text-sm text-muted">
        Education: BA in History, Alagappa University (2019 – 2022) · 12th grade 92.25% · 10th grade 94.4%
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
    <section id="contact" aria-labelledby="contact-title" className={shell}>
      <Reveal>
        <div className="mb-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent-text">Contact &amp; resume</p>
          <h2 id="contact-title" className="max-w-3xl font-display text-3xl uppercase leading-[1.05] tracking-tight sm:text-5xl">
            Want results like these?
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Tell me about your business and your goals. I reply within a day, and I&apos;m based in {contact.location}.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-3 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <ul className="flex flex-col divide-y divide-line rounded-3xl border border-line bg-card">
            {rows.map((r) => (
              <li key={r.label} className="flex flex-wrap items-center gap-x-4 gap-y-3 p-5">
                <span className="grid size-10 place-items-center rounded-full border border-line">{r.icon}</span>
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
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col justify-between gap-8 rounded-3xl border border-line bg-card p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Resume</p>
              <p className="mt-2 font-display text-2xl">Digital marketing resume</p>
              <p className="mt-2 text-sm text-muted">Skills, experience, results and projects in one PDF.</p>
            </div>
            <a
              href="/Yogeshwara_K_Digital_Marketing_Resume.pdf"
              download="Yogeshwara_K_Digital_Marketing_Resume.pdf"
              data-track="resume_download"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-deep px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              <span aria-hidden>↓</span> Download resume
              <span className="sr-only"> (PDF, 47 KB)</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl border-t border-line px-4 py-10 text-sm text-muted sm:px-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <p>© Yogeshwara K · Digital Marketing &amp; Growth · {contact.location}</p>
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
