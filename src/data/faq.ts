import { contact } from "./contact";

/**
 * Questions people (and AI answer engines) ask about this profile. The same list is shown on the page and
 * published as FAQPage structured data, so the two always match. Keep answers factual and self-contained.
 */
export const faq = [
  {
    q: "Who is Yogeshwara K?",
    a: "Yogeshwara K is a business development manager and full stack developer based in Chennai, India. He builds products with Next.js, React, Node.js, NestJS and Flutter, and grows them with paid ads, SEO and analytics.",
  },
  {
    q: "What does he build and what does he market?",
    a: "He builds web and mobile apps end to end, then handles growth: Google Ads, Meta Ads, SEO, AEO and GEO (making a brand easy for AI answer engines to find and cite), and GA4 and Google Tag Manager tracking.",
  },
  {
    q: "What results has he delivered?",
    a: "About ₹20 lakh+ in ad budgets managed, a 3x return on ad spend on one account, and SEO and tracking set up across client sites in India and abroad.",
  },
  {
    q: "Does he do AEO and GEO (AI search optimisation)?",
    a: "Yes. This means clear entity and schema markup, FAQ content written as direct answers, an llms.txt file, and crawler access for AI search tools, alongside classic SEO. This site is built that way.",
  },
  {
    q: "Why hire one person for development and marketing?",
    a: "Tracking, landing pages and checkout flows get built by the same person who runs the campaigns, so there are no hand-offs and changes ship faster.",
  },
  {
    q: "How can I hire him or get in touch?",
    a: `He is available for hire. Email ${contact.email} or message him on LinkedIn at ${contact.linkedin}.`,
  },
];
