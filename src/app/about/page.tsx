import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { FadeUp, TextReveal } from "@/components/Reveal";
import { breadcrumbLd, graph, pageLd } from "@/lib/schema";
import { contact } from "@/data/contact";

const description =
  "About Yogeshwara K: a full stack developer in Chennai with 3.5+ years of experience, leading a 4-member team at TechieBall and building web, mobile and AI products for clients in India, the US, Singapore, Saudi Arabia and the UAE.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: { type: "profile", url: "/about", title: "About | Yogeshwara K", description },
};

const hire =
  "inline-flex items-center gap-2 rounded-full bg-linear-to-br from-accent-deep to-accent px-6 py-3 text-sm font-medium text-white shadow-[0_10px_28px_-10px_var(--accent)] transition-transform hover:-translate-y-0.5";

const stats = [
  { value: "3.5+", label: "Years building production apps" },
  { value: "15+", label: "Web and mobile apps shipped" },
  { value: "5 countries", label: "Clients in India, the US, Singapore, Saudi Arabia and the UAE" },
];

const how = [
  {
    title: "Build end to end",
    text: "From interface to API to database: Next.js and React on the front, Node.js and NestJS behind them, with MongoDB, PostgreSQL or MySQL underneath. I also design in Figma.",
  },
  {
    title: "Connect the real world",
    text: "Payments with Razorpay, Stripe and Square. WhatsApp Business API, Twilio and Exotel messaging. AI features with Gemini and Amazon Bedrock.",
  },
  {
    title: "Ship and keep it running",
    text: "Deployments on AWS and DigitalOcean, CI/CD with GitHub Actions, SEO and performance work, and Google Play Store launches for mobile apps.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={graph(
          pageLd("ProfilePage", "About Yogeshwara K", "/about", description),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        )}
      />
      <TextReveal
        as="h1"
        text="Hi, I'm Yogeshwara. I build products end to end."
        className="mb-6 max-w-4xl px-1 text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl"
      />

      <FadeUp delay={0.2} className="mb-6 flex max-w-2xl flex-col gap-4 px-1 text-base text-muted sm:text-lg">
        <p>
          I&apos;m a full stack developer based in Chennai with 3.5+ years of experience building production web and
          mobile applications, CRM platforms, e-commerce stores and AI automation systems for clients in India, the US,
          Singapore, Saudi Arabia and the UAE.
        </p>
        <p>
          I work mostly with Next.js, React, Flutter, Node.js and NestJS, and I&apos;m comfortable with the parts that
          make a product real: payments, messaging, cloud hosting and getting an app into the stores. At TechieBall I
          lead a 4-member team.
        </p>
      </FadeUp>

      <FadeUp delay={0.3} className="mb-10 flex flex-wrap items-center gap-3 px-1">
        <Link href="/contact" className={hire}>
          Hire me
        </Link>
        <Link
          href="/resume"
          className="rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:bg-card-hover"
        >
          View resume
        </Link>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer me"
          className="rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:bg-card-hover"
        >
          LinkedIn<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </FadeUp>

      <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {stats.map((s, i) => (
          <FadeUp key={s.label} delay={i * 0.06}>
            <div className="flex h-full min-h-[150px] flex-col justify-between rounded-2xl bg-card p-5">
              <p className="text-4xl font-medium tracking-tight sm:text-5xl">{s.value}</p>
              <p className="text-sm text-muted">{s.label}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      <div className="mb-3 grid grid-cols-1 gap-3 md:grid-cols-3">
        {how.map((h, i) => (
          <FadeUp key={h.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl bg-card p-5">
              <h2 className="mb-3 text-lg font-medium tracking-tight">{h.title}</h2>
              <p className="text-sm text-muted">{h.text}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-card p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Have something in mind?</h2>
            <p className="mt-2 text-muted">Let&apos;s talk about your project, a role, or an idea.</p>
          </div>
          <Link href="/contact" className={hire}>
            Hire me
          </Link>
        </div>
      </FadeUp>
    </>
  );
}
