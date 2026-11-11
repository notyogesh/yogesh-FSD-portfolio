import type { Metadata } from "next";
import Link from "next/link";
import CopyButton from "@/components/CopyButton";
import JsonLd from "@/components/JsonLd";
import { LinkedInIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
import { FadeUp, TextReveal } from "@/components/Reveal";
import { contact } from "@/data/contact";
import { breadcrumbLd, graph, pageLd } from "@/lib/schema";

const description =
  "Contact Yogeshwara K, a full stack developer in Chennai. Email, call, WhatsApp or connect on LinkedIn to discuss a project or a role.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { type: "website", url: "/contact", title: "Contact | Yogeshwara K", description },
};

function Card({
  icon,
  label,
  value,
  children,
  delay,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  children?: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <FadeUp delay={delay} className={className}>
      <div className="flex h-full min-h-[220px] flex-col justify-between gap-6 rounded-2xl bg-card p-5 transition-colors duration-300 hover:bg-card-hover">
        <div className="flex items-center gap-3 text-sm text-muted">
          <span className="grid size-9 place-items-center rounded-full border border-line text-fg">{icon}</span>
          {label}
        </div>
        <div>
          <p className="break-words text-xl font-medium tracking-tight sm:text-2xl">{value}</p>
          {children ? <div className="mt-4 flex flex-wrap items-center gap-2">{children}</div> : null}
        </div>
      </div>
    </FadeUp>
  );
}

const action =
  "inline-flex items-center gap-2 rounded-full bg-linear-to-br from-accent-deep to-accent px-4 py-1.5 text-sm font-medium text-white shadow-[0_8px_22px_-10px_var(--accent)] transition-transform hover:-translate-y-0.5";

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph(
          pageLd("ContactPage", "Contact Yogeshwara K", "/contact", description),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        )}
      />
      <TextReveal
        as="h1"
        text="Let's build something together"
        className="mb-4 max-w-3xl px-1 text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl"
      />
      <FadeUp delay={0.2} className="mb-8 max-w-2xl px-1 text-muted">
        <p>Have a project, a role or an idea? Send me a message — I usually reply within a day.</p>
      </FadeUp>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <Card icon={<MailIcon />} label="Email" value={contact.email} delay={0}>
          <a href={`mailto:${contact.email}`} data-track="contact_email" className={action}>
            <MailIcon /> Send email
          </a>
          <CopyButton value={contact.email} label="Copy email address" text="Copy" />
        </Card>

        <Card icon={<PhoneIcon />} label="Phone" value={contact.phone} delay={0.06}>
          <a href={contact.phoneHref} data-track="contact_call" className={action}>
            <PhoneIcon /> Call
          </a>
          <CopyButton value={contact.phone} label="Copy phone number" text="Copy" />
        </Card>

        <Card icon={<WhatsAppIcon />} label="WhatsApp" value={contact.phone} delay={0.12}>
          <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" data-track="contact_whatsapp" className={action}>
            <WhatsAppIcon /> Chat on WhatsApp
          </a>
          <CopyButton value={contact.phoneRaw} label="Copy WhatsApp number" text="Copy" />
        </Card>

        <Card icon={<LinkedInIcon />} label="LinkedIn" value="yogeshwara-kumar" delay={0.18}>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer me" data-track="contact_linkedin" className={action}>
            <LinkedInIcon /> View profile<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <CopyButton value={contact.linkedin} label="Copy LinkedIn profile link" text="Copy" />
        </Card>

        <Card icon={<PinIcon />} label="Location" value={contact.location} delay={0.24} className="md:col-span-2">
          <Link href="/portfolio" className="inline-flex min-h-6 items-center text-sm text-muted underline-offset-4 hover:underline">
            See my work →
          </Link>
        </Card>
      </div>
    </>
  );
}
