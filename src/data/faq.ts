import { contact } from "./contact";

/**
 * Questions people (and AI answer engines) ask about this profile. The same list is shown on the page and
 * published as FAQPage structured data, so the two always match. Keep answers factual and self-contained.
 */
export const faq = [
  {
    q: "Who is Yogeshwara K?",
    a: "Yogeshwara K is a digital marketing and growth specialist based in Chennai, India, with 3.5+ years across paid media, SEO and e-commerce. He also writes code (React, Next.js, Flutter, Node.js), so he builds landing pages and tracking himself.",
  },
  {
    q: "What digital marketing services does he offer?",
    a: "Paid media (Google Ads, Meta Ads, YouTube Ads), SEO and local SEO, AEO and GEO (making a brand easy for AI answer engines to find and cite), GA4 and Google Tag Manager tracking, Shopify and marketplace growth, and social media content.",
  },
  {
    q: "What results has he delivered?",
    a: "About ₹20 lakh in Meta and Google Ads budgets managed across 15+ client accounts in India and the US, including a 3x return on ad spend and an 80% lower cost per lead for a salon client.",
  },
  {
    q: "Does he do AEO and GEO (AI search optimisation)?",
    a: "Yes. This means clear entity and schema markup, FAQ content written as direct answers, an llms.txt file, and crawler access for AI search tools, alongside classic SEO. This site is built that way.",
  },
  {
    q: "Which countries has he worked with?",
    a: "Clients in India, the US, Singapore, Saudi Arabia and the UAE. He works in English and Tamil.",
  },
  {
    q: "How can I hire him or get in touch?",
    a: `He is open for work. Email ${contact.email} or message him on LinkedIn at ${contact.linkedin}.`,
  },
];
