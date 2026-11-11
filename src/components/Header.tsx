"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/stack", label: "Stack" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export default function Header() {
  const pathname = usePathname();
  // the menu is "open" only for the page it was opened on, so navigating closes it without an effect
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const firstLink = useRef<HTMLAnchorElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    firstLink.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenOn(null);
        button.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 text-sm font-medium sm:px-6">
        <Link href="/" className="flex items-baseline gap-3 whitespace-nowrap py-2" aria-label="Yogeshwara K, home">
          <span>Yogeshwara K</span>
          <span className="hidden text-muted xl:inline">Full Stack Developer</span>
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center gap-1 rounded-full border border-line bg-card/60 p-1 md:flex"
        >
          {links.map(({ href, label }) => {
            const active = isActive(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-1.5 transition-colors ${
                  active ? "bg-linear-to-br from-accent-deep to-accent text-white" : "text-muted hover:text-fg"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            className={`hidden whitespace-nowrap rounded-full border px-4 py-1.5 transition-colors hover:bg-card sm:inline-block ${
              pathname === "/contact" ? "border-accent text-accent-text" : "border-line"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/resume"
            className="hidden whitespace-nowrap rounded-full border border-line px-4 py-1.5 transition-colors hover:bg-card xl:inline-block"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full bg-linear-to-br from-accent-deep to-accent px-4 py-1.5 text-white shadow-[0_8px_22px_-10px_var(--accent)] transition-transform hover:-translate-y-0.5"
          >
            Hire me
          </Link>
          <ThemeToggle />
          <button
            ref={button}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpenOn(open ? null : pathname)}
            className="grid size-9 place-items-center rounded-full border border-line md:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-4" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu: a simple disclosure, hidden from everyone (incl. screen readers) while closed */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-line bg-bg px-4 pb-4 pt-2 md:hidden"
      >
        <ul className="flex flex-col">
          {[...links, { href: "/contact", label: "Contact" }, { href: "/resume", label: "Resume" }].map(
            ({ href, label }, i) => (
              <li key={href}>
                <Link
                  ref={i === 0 ? firstLink : undefined}
                  href={href}
                  aria-current={isActive(pathname, href) ? "page" : undefined}
                  className={`flex min-h-11 items-center rounded-lg px-2 text-base ${
                    isActive(pathname, href) ? "text-accent-text" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>
    </header>
  );
}
