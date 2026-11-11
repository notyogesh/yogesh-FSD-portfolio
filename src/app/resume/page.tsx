import type { Metadata } from "next";
import { FadeUp, TextReveal } from "@/components/Reveal";
import { education, experience, highlights, languages } from "@/data/resume";

export const metadata: Metadata = { title: "Resume — Yogeshwara K" };

function Section({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) {
  return (
    <FadeUp delay={delay}>
      <section className="grid gap-4 rounded-2xl bg-card p-5 sm:p-8 md:grid-cols-[200px_1fr]">
        <h2 className="text-sm font-medium text-muted">{title}</h2>
        <div>{children}</div>
      </section>
    </FadeUp>
  );
}

export default function ResumePage() {
  return (
    <>
      <TextReveal
        as="h1"
        text="Experience & education"
        className="mb-4 px-1 text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl"
      />
      <FadeUp delay={0.2} className="mb-8 max-w-2xl px-1 text-muted">
        <p>
          3.5+ years building production web and mobile apps, CRM platforms, e-commerce stores and AI automation for
          clients in India, the US, Singapore, Saudi Arabia and the UAE.
        </p>
      </FadeUp>

      <div className="flex flex-col gap-3">
        <Section title="Experience">
          <ol className="flex flex-col gap-8">
            {experience.map((role) => (
              <li key={role.company + role.period}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-lg font-medium tracking-tight">
                    {role.title} ·{" "}
                    {role.url ? (
                      <a href={role.url} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                        {role.company}
                      </a>
                    ) : (
                      role.company
                    )}
                  </h3>
                  <span className="text-sm text-muted">{role.period}</span>
                </div>
                <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-sm text-muted marker:text-line">
                  {role.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Highlights" delay={0.03}>
          <ul className="flex list-disc flex-col gap-1.5 pl-5 text-sm text-muted marker:text-line">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </Section>

        <Section title="Education" delay={0.05}>
          <ul className="flex flex-col gap-4">
            {education.map((e) => (
              <li key={e.title} className="flex flex-wrap items-baseline justify-between gap-x-4">
                <div>
                  <p className="font-medium">{e.title}</p>
                  {e.place ? <p className="text-sm text-muted">{e.place}</p> : null}
                </div>
                <span className="text-sm text-muted">{e.detail}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Languages" delay={0.1}>
          <ul className="flex flex-wrap gap-2">
            {languages.map((l) => (
              <li key={l} className="rounded-full border border-line px-3 py-1.5 text-sm">
                {l}
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </>
  );
}
