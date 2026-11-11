import { contact } from "@/data/contact";

/**
 * Central site settings used by metadata, the sitemap, RSS and structured data.
 * Set NEXT_PUBLIC_SITE_URL in Vercel once you connect a custom domain (for example https://yogeshwara.dev).
 */
export const SITE = {
  name: "Yogeshwara K",
  jobTitle: "Full Stack Developer",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://yogesh-fsd-portfolio.vercel.app").replace(/\/$/, ""),
  title: "Yogeshwara K — Full Stack Developer in Chennai",
  description:
    "Full stack developer in Chennai with 3.5+ years of experience building web and mobile apps, CRM platforms, e-commerce stores and AI automation with Next.js, React, Node.js, NestJS and Flutter. Available for hire.",
  locale: "en_IN",
  linkedin: contact.linkedin,
  keywords: [
    "full stack developer Chennai",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "NestJS developer",
    "Flutter developer",
    "freelance web developer India",
    "WhatsApp Business API developer",
    "hire full stack developer",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Flutter",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "WhatsApp Business API",
    "Razorpay",
    "Stripe",
    "SEO",
    "Web accessibility",
    "Framer Motion",
    "Redux Toolkit",
    "GSAP",
  ],
  employer: { name: "TechieBall", url: "https://techieball.com/" },
};

export const absoluteUrl = (path = "/") => `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
