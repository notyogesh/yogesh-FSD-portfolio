import { contact } from "@/data/contact";

/**
 * Central settings for the digital-marketing site (metadata, sitemap, structured data).
 * The site address comes from NEXT_PUBLIC_SITE_URL if you set it (custom domain), otherwise from the address Vercel
 * gives this project automatically, so canonical links always match wherever it is deployed.
 */
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE = {
  name: "Yogeshwara K",
  jobTitle: "Digital Marketing & Growth Specialist",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? (vercelHost ? `https://${vercelHost}` : "http://localhost:3000")).replace(/\/$/, ""),
  title: "Yogeshwara K — Digital Marketing & Growth Specialist in Chennai",
  description:
    "Digital marketing and growth specialist in Chennai. ₹20 lakh+ in Meta and Google Ads managed across 15+ clients, 3x ROAS, 80% lower cost per lead, plus SEO, local SEO and GA4 / GTM tracking. Available for hire.",
  locale: "en_IN",
  linkedin: contact.linkedin,
  keywords: [
    "digital marketing specialist Chennai",
    "Google Ads specialist",
    "Meta Ads specialist",
    "SEO specialist",
    "local SEO Google Business Profile",
    "GA4 Google Tag Manager tracking",
    "e-commerce marketing Shopify",
    "performance marketing freelancer India",
  ],
  knowsAbout: [
    "Google Ads",
    "Meta Ads",
    "YouTube Ads",
    "SEO",
    "Local SEO",
    "Google Analytics 4",
    "Google Tag Manager",
    "Conversion rate optimisation",
    "Shopify",
    "Amazon Seller Central",
    "Social media marketing",
  ],
  services: [
    "Paid media (Google Ads, Meta Ads, YouTube Ads)",
    "SEO and keyword strategy",
    "Local SEO and Google Business Profile",
    "Analytics and conversion tracking (GA4, GTM, Meta Pixel)",
    "E-commerce and marketplace growth",
    "Social media and content",
  ],
  employer: { name: "TechieBall", url: "https://techieball.com/" },
};

export const absoluteUrl = (path = "/") => `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
