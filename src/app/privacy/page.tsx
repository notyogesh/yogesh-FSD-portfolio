import type { Metadata } from "next";
import ConsentReset from "@/components/ConsentReset";
import { contact } from "@/data/contact";

const description =
  "How this portfolio handles visitor data: anonymous page views and speed metrics by default, and optional analytics only if you agree.";

export const metadata: Metadata = {
  title: "Privacy",
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { type: "website", url: "/privacy", title: "Privacy | Yogeshwara K", description },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="mt-8 text-2xl font-medium tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

const p = "leading-relaxed text-muted";

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl">
      <h1 className="mb-2 px-1 text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl">Privacy</h1>
      <p className="mb-8 px-1 text-sm text-muted">Last updated: November 2026</p>

      <div className="flex flex-col gap-3 rounded-2xl bg-card p-6 sm:p-10">
        <p className={p}>
          This is the personal portfolio of Yogeshwara K, based in {contact.location}. It has no accounts, no
          sign-up and no forms, so I do not collect names, emails or messages through the site.
        </p>

        <Section title="What is collected by default">
          <ul className={`flex list-disc flex-col gap-2 pl-5 ${p}`}>
            <li>
              <strong className="text-fg">Vercel Web Analytics:</strong> anonymous page-view counts. It does not use
              cookies and does not build a profile of you.
            </li>
            <li>
              <strong className="text-fg">Vercel Speed Insights:</strong> anonymous page-speed measurements, used to
              keep the site fast.
            </li>
            <li>
              <strong className="text-fg">Hosting logs:</strong> like any website, the host (Vercel) processes your IP
              address to deliver the page and to keep the service secure.
            </li>
          </ul>
        </Section>

        <Section title="Optional analytics (only if you agree)">
          <p className={p}>
            If these are switched on, a banner asks first. Nothing below loads until you press Accept.
          </p>
          <ul className={`flex list-disc flex-col gap-2 pl-5 ${p}`}>
            <li>
              <strong className="text-fg">Google Analytics / Google Tag Manager:</strong> measures visits, which pages
              are read and which buttons (for example Hire me or Download resume) are clicked. Uses cookies.
            </li>
            <li>
              <strong className="text-fg">Microsoft Clarity:</strong> shows how visitors move around the site, using
              heatmaps and anonymised session recordings. Uses cookies.
            </li>
          </ul>
          <p className={p}>You can change your mind at any time:</p>
          <ConsentReset />
        </Section>

        <Section title="Content from other services">
          <p className={p}>
            The animated 3D plant on the home page is loaded from unpkg.com and Spline (spline.design) after you first
            scroll or tap. Those services receive your IP address when it loads. Fonts are served from this site.
          </p>
        </Section>

        <Section title="Links and contact buttons">
          <p className={p}>
            Email, phone, WhatsApp and LinkedIn buttons open those services, which have their own privacy policies. The
            Copy buttons only copy text on your own device.
          </p>
        </Section>

        <Section title="Questions">
          <p className={p}>
            Email me at{" "}
            <a href={`mailto:${contact.email}`} className="underline underline-offset-4">
              {contact.email}
            </a>
            .
          </p>
        </Section>
      </div>
    </article>
  );
}
