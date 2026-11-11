import { logos } from "./logos";

export type StackItem = {
  name: string;
  /** key in logos.ts (real brand logo) */
  logo?: keyof typeof logos;
  /** fallback monogram + brand colour when no logo exists */
  mono?: string;
  color?: string;
};
export type StackGroup = { title: string; items: StackItem[] };

const l = (name: string, logo: keyof typeof logos): StackItem => ({ name, logo });
const m = (name: string, mono: string, color?: string): StackItem => ({ name, mono, color });

/** Next.js is intentionally first in the first group. */
export const stack: StackGroup[] = [
  {
    title: "Frontend, Mobile & Desktop",
    items: [
      l("Next.js", "nextjs"),
      l("React", "react"),
      l("TypeScript", "typescript"),
      l("JavaScript", "javascript"),
      l("Tailwind CSS", "tailwind"),
      l("Flutter", "flutter"),
      l("Dart", "dart"),
      l("Electron", "electron"),
      l("Astro", "astro"),
      l("Material UI", "mui"),
      l("Bootstrap", "bootstrap"),
      l("HTML5", "html5"),
      l("CSS3", "css"),
    ],
  },
  {
    title: "State, Forms & Auth",
    items: [
      l("Redux Toolkit", "redux"),
      m("Zustand", "Zu"),
      m("React Context API", "Cx"),
      l("React Hook Form", "reacthookform"),
      l("Zod", "zod"),
      l("shadcn/ui / Radix UI", "shadcn"),
      m("NextAuth (Auth.js)", "Au"),
    ],
  },
  {
    title: "Animation & 3D",
    items: [
      m("Motion (Framer Motion)", "Mo"),
      l("GSAP", "gsap"),
      m("Lenis Smooth Scroll", "Ln"),
      l("WebGL", "webgl"),
      m("Spline", "Sp"),
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      l("Node.js", "node"),
      l("NestJS", "nestjs"),
      l("Express.js", "express"),
      l("MongoDB", "mongodb"),
      l("PostgreSQL", "postgresql"),
      l("MySQL", "mysql"),
      l("Prisma", "prisma"),
      l("Mongoose", "mongoose"),
      l("TypeORM / Sequelize", "typeorm"),
      l("Redis", "redis"),
      m("BullMQ", "Bq"),
      m("WebSockets", "WS"),
      l("JWT Authentication", "jwt"),
      m("REST APIs", "API"),
      l("Swagger (OpenAPI)", "swagger"),
      m("Webhooks", "WH"),
      m("Microservices", "µS"),
    ],
  },
  {
    title: "Testing & API Tools",
    items: [l("Jest", "jest"), l("Postman", "postman")],
  },
  {
    title: "Cloud, Hosting & DevOps",
    items: [
      m("AWS (Amplify, S3, CloudFront, SES, SNS, Route 53)", "aws", "#FF9900"),
      l("Vercel", "vercel"),
      l("DigitalOcean", "digitalocean"),
      l("Cloudflare R2", "cloudflare"),
      l("Nginx", "nginx"),
      l("Linux", "linux"),
      m("Domains & DNS", "DNS"),
      l("Docker", "docker"),
      l("Bunny Stream", "bunny"),
      l("Git", "git"),
      l("GitHub Actions", "githubactions"),
      m("CI/CD Pipelines", "CI"),
      l("Google Cloud Console", "gcloud"),
    ],
  },
  {
    title: "SEO, Performance & Accessibility",
    items: [
      m("SEO", "SEO"),
      m("Web Performance", "WP"),
      m("Web Accessibility (WCAG 2.2)", "A11y"),
      m("Semantic HTML & ARIA", "ARIA"),
      l("Google Tag Manager", "gtm"),
      m("Sitemap Automation", "XML"),
    ],
  },
  {
    title: "AI & Automation",
    items: [
      m("Amazon Bedrock", "Br", "#01A88D"),
      l("Gemini API", "gemini"),
      m("Google Imagen API", "Im", "#4285F4"),
      m("LLM API Integration", "LLM"),
      m("Prompt Engineering", "Pr"),
      m("AI Chatbots", "AI"),
      m("AI Content Automation", "AC"),
    ],
  },
  {
    title: "Integrations & Payments",
    items: [
      l("Razorpay", "razorpay"),
      l("Stripe", "stripe"),
      l("Square", "square"),
      l("WhatsApp Business API", "whatsapp"),
      m("Exotel API", "Ex", "#00A3E0"),
      m("Twilio API", "Tw", "#F22F46"),
      l("Maps API", "maps"),
    ],
  },
  {
    title: "Design & Release",
    items: [l("Figma", "figma"), l("Google Play Store launches", "googleplay"), m("UI / UX Design", "UX")],
  },
  {
    title: "Platforms & CMS",
    items: [
      l("Shopify", "shopify"),
      l("WordPress", "wordpress"),
      l("Framer", "framer"),
      l("Zoho Sites", "zoho"),
      l("Astro", "astro"),
    ],
  },
];
