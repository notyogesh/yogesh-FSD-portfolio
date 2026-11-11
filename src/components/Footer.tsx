import Link from "next/link";
import { contact } from "@/data/contact";

const nav = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/stack", label: "Stack" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1400px] px-3 pb-10 sm:px-5">
      <div className="flex flex-col gap-6 rounded-2xl bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium">Yogeshwara K</p>
          <p className="text-sm text-muted">Full Stack Developer · {contact.location}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {nav.map((l) => (
            <Link key={l.href} href={l.href} className="inline-flex min-h-6 items-center text-muted underline-offset-4 hover:text-fg hover:underline">
              {l.label}
            </Link>
          ))}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer me"
            className="inline-flex min-h-6 items-center text-muted underline-offset-4 hover:text-fg hover:underline"
          >
            LinkedIn<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={`mailto:${contact.email}`} className="inline-flex min-h-6 items-center text-muted underline-offset-4 hover:text-fg hover:underline">
            Email
          </a>
        </nav>
      </div>
      <p className="mt-4 px-1 text-xs text-muted">© Yogeshwara K. All rights reserved.</p>
    </footer>
  );
}
