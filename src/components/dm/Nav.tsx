import Link from "next/link";

const links = [
  { href: "/#campaigns", label: "Campaigns", always: true },
  { href: "/#tools", label: "Tools", always: false },
  { href: "/#results", label: "Results", always: true },
  { href: "/#services", label: "Services", always: false },
  { href: "/#about", label: "About", always: false },
  { href: "/#contact", label: "Contact", always: true },
];

/** Small pill navigation floating at the top, with a bright "Hire me" pill at the end. */
export default function Nav() {
  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-3">
      <nav
        aria-label="Main"
        className="flex items-center gap-1 rounded-full border border-white/10 bg-black/65 p-1.5 text-sm backdrop-blur-md"
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`rounded-full px-3 py-1.5 text-white/80 transition-colors hover:text-white ${
              l.always ? "" : "hidden md:inline-block"
            }`}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          data-track="hire_me"
          data-track-label="nav"
          className="whitespace-nowrap rounded-full bg-fg px-4 py-1.5 font-medium text-bg transition-transform hover:-translate-y-0.5"
        >
          Hire me
        </Link>
      </nav>
    </div>
  );
}
