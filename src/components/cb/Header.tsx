import Link from "next/link";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "How I work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="Yogeshwara K, home" className="font-display text-xl tracking-tight">
          Yogeshwara <span className="italic text-accent-text">K</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 text-sm md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-muted underline-offset-8 transition-colors hover:text-fg hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            data-track="hire_me"
            data-track-label="header"
            className="whitespace-nowrap rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            Hire me
          </Link>
          {/* mobile menu: a native disclosure, so it works without any script */}
          <details className="relative md:hidden">
            <summary
              aria-label="Menu"
              className="grid size-10 cursor-pointer list-none place-items-center rounded-full border border-line [&::-webkit-details-marker]:hidden"
            >
              <svg viewBox="0 0 24 24" className="size-4" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 8h16M4 16h16" />
              </svg>
            </summary>
            <nav aria-label="Mobile" className="absolute right-0 top-12 w-56 rounded-2xl border border-line bg-bg p-2 shadow-xl">
              <ul>
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="flex min-h-11 items-center rounded-lg px-3">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
