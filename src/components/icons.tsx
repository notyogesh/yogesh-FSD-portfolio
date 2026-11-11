import { logos } from "@/data/logos";

type P = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export const MailIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const PhoneIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const CopyIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
    <rect x="9" y="9" width="11" height="11" rx="2.5" />
    <path d="M5 15V6a2 2 0 0 1 2-2h9" />
  </svg>
);

export const CheckIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const WhatsAppIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden>
    <path d={logos.whatsapp.path} />
  </svg>
);

/** Simple "in" mark (LinkedIn's logo is not in the open icon set we use). */
export const LinkedInIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10.5V16M8 7.8v.1M12 16v-5.5M12 12.5c0-1.4 1-2.2 2.2-2.2 1.3 0 1.8.9 1.8 2.2V16" />
  </svg>
);

export const PinIcon =({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
