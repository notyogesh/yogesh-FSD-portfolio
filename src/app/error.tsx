"use client";

import Link from "next/link";
import { useEffect } from "react";

const primary =
  "inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-linear-to-br from-accent-deep to-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_28px_-10px_var(--accent)] transition-transform hover:-translate-y-0.5";
const secondary =
  "whitespace-nowrap rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card-hover";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="grid min-h-[60vh] place-items-center">
      <div className="flex max-w-xl flex-col items-start gap-5 rounded-2xl bg-card p-8 sm:p-10">
        <p className="text-sm font-medium text-muted">Something went wrong</p>
        <h1 className="text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl">Oops, that didn&apos;t work</h1>
        <p className="text-muted">An unexpected error happened while loading this page. You can try again or head back home.</p>
        {error.digest ? <p className="font-mono text-xs text-muted">Reference: {error.digest}</p> : null}
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" onClick={() => reset()} className={primary}>
            Try again
          </button>
          <Link href="/" className={secondary}>
            Go home
          </Link>
        </div>
      </div>
    </section>
  );
}
