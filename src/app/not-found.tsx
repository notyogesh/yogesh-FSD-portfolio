import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found" };

const primary =
  "inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-linear-to-br from-accent-deep to-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_28px_-10px_var(--accent)] transition-transform hover:-translate-y-0.5";
const secondary =
  "whitespace-nowrap rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card-hover";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center">
      <div className="flex max-w-xl flex-col items-start gap-5 rounded-2xl bg-card p-8 sm:p-10">
        <p className="text-sm font-medium text-muted">Error 404</p>
        <h1 className="text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl">This page doesn&apos;t exist</h1>
        <p className="text-muted">The link may be broken, or the page may have moved. Let&apos;s get you back on track.</p>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/" className={primary}>
            Go home
          </Link>
          <Link href="/#campaigns" className={secondary}>
            See campaigns
          </Link>
          <Link href="/#contact" className={secondary}>
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
