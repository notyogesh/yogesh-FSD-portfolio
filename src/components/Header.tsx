"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import CopyButton from "./CopyButton";
import { MailIcon, PhoneIcon } from "./icons";
import { contact } from "@/data/contact";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/stack", label: "Stack" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 text-sm font-medium sm:px-6">
        <Link href="/" className="flex items-baseline gap-3 whitespace-nowrap">
          <span>Yogeshwara K</span>
          <span className="hidden text-muted xl:inline">Full Stack Developer</span>
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center gap-1 rounded-full border border-line bg-card/60 p-1 md:flex"
        >
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-1.5 transition-colors ${
                  active ? "bg-linear-to-br from-accent to-accent-2 text-white" : "text-muted hover:text-fg"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <CopyButton
            value={contact.email}
            label="Copy email address"
            text="Copy email"
            icon={<MailIcon />}
            className="whitespace-nowrap [&>span:not(.sr-only)]:hidden xl:[&>span:not(.sr-only)]:inline"
          />
          <CopyButton
            value={contact.phone}
            label="Copy phone number"
            text="Copy phone"
            icon={<PhoneIcon />}
            className="whitespace-nowrap [&>span:not(.sr-only)]:hidden xl:[&>span:not(.sr-only)]:inline"
          />
          <Link
            href="/resume"
            className="hidden whitespace-nowrap rounded-full border border-line px-4 py-1.5 transition-colors hover:bg-card xl:inline-block"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full bg-linear-to-br from-accent to-accent-2 px-4 py-1.5 text-white shadow-[0_8px_22px_-10px_var(--accent)] transition-transform hover:-translate-y-0.5"
          >
            Hire me
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
