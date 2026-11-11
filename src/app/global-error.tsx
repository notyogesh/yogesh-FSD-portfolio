"use client";

import "./globals.css";

/** Last-resort boundary: renders only if the root layout itself fails, so it must provide <html> and <body>. */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en" className="dark">
      <body className="grid min-h-screen place-items-center p-6">
        <div className="flex max-w-xl flex-col items-start gap-5 rounded-2xl bg-card p-8 sm:p-10">
          <p className="text-sm font-medium text-muted">Something went wrong</p>
          <h1 className="text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">The site hit an error</h1>
          <p className="text-muted">Please try again. If it keeps happening, come back in a few minutes.</p>
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-full bg-linear-to-br from-accent-deep to-accent px-5 py-2.5 text-sm font-medium text-white"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
