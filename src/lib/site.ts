import { contact } from "@/data/contact";

/**
 * Central settings for the combined (business development + full stack) site.
 * The site address comes from NEXT_PUBLIC_SITE_URL if you set it (custom domain), otherwise from the address Vercel
 * gives this project automatically, so canonical links always match wherever it is deployed.
 */
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE = {
  name: "Yogeshwara K",
  jobTitle: "Business Development Manager & Full Stack Developer",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? (vercelHost ? `https://${vercelHost}` : "http://localhost:3000")).replace(/\/$/, ""),
  title: "Yogeshwara K — Business Development & Full Stack Developer in Chennai",
  description:
    "Full stack developer and growth marketer in Chennai. I build the product (Next.js, React, Node.js, NestJS, Flutter) and grow it: ₹20 lakh+ in ads managed, 3x ROAS, SEO and GA4 / GTM tracking. Available for hire.",
  locale: "en_IN",
  linkedin: contact.linkedin,
  keywords: [
    "full stack developer Chennai",
    "digital marketing and web development",
    "business development manager Chennai",
    "Next.js developer",
    "Google Ads specialist",
    "SEO specialist",
    "hire full stack developer and marketer",
    "e-commerce growth and development",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "Node.js",
    "NestJS",
    "Flutter",
    "Google Ads",
    "Meta Ads",
    "SEO",
    "Google Analytics 4",
    "Google Tag Manager",
    "Shopify",
    "Business development",
  ],
  employer: { name: "TechieBall", url: "https://techieball.com/" },
};

export const absoluteUrl = (path = "/") => `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
