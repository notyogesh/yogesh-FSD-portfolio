/** Taken from the resume. */
export type Role = {
  title: string;
  company: string;
  url?: string;
  period: string;
  points: string[];
};

export const experience: Role[] = [
  {
    title: "Full Stack Developer",
    company: "TechieBall",
    url: "https://techieball.com/",
    period: "July 2026 – Present",
    points: [
      "Leading a 4-member development team: planning, code reviews and delivery.",
      "Architected and built the full-stack publishing platform on Next.js, Node.js and MongoDB, optimised for performance and mobile.",
      "Designed asynchronous backend queues, automated sitemap-submission pipelines and custom analytics tracking.",
      "Built admin panels for content workflows, search indexing and performance telemetry.",
      "Built the AivaanTech AI Academy LMS, the Athmic Biotech enquiry and quotation portal, and a multi-tenant GST billing SaaS.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "YTS",
    url: "https://www.ytechsol.com/",
    period: "June 2023 – June 2026",
    points: [
      "Built and maintained 15+ production web and mobile apps using Next.js, React, Flutter, Astro and Shopify.",
      "Engineered Node.js and MongoDB REST APIs and admin panels for bookings, lead management, refunds and notifications.",
      "Integrated Razorpay, Stripe and Square with refund handling, webhook verification and transaction tracking.",
      "Managed WhatsApp Cloud API and BSP services for business clients, and AWS deployments (Amplify, Route 53, S3, CloudFront, SES, SNS).",
      "Developed an AI-powered autoblog system with Node.js, Gemini API, Google Imagen API, Sharp and GitHub Actions.",
    ],
  },
  {
    title: "IT Developer",
    company: "DMH",
    period: "April 2023 – June 2023",
    points: [
      "Built the company web portal and custom web applications for client organisations.",
      "Led a 2-member developer team: code reviews, deployment pipelines and production support.",
    ],
  },
  {
    title: "Intern (Unpaid)",
    company: "DMH",
    period: "October 2022 – March 2023",
    points: ["Web development internship, then moved into the IT Developer role at the same company."],
  },
];

export const education = [
  { title: "Bachelor of Arts (BA) in History", place: "Alagappa University", detail: "2019 – 2022" },
  { title: "Higher Secondary (12th Grade)", place: "", detail: "92.25%" },
  { title: "Secondary School (10th Grade)", place: "", detail: "94.4%" },
];

export const languages = ["English", "Tamil"];

/** Highlights that don't belong to a single role. */
export const highlights = [
  "Leading a 4-member development team at TechieBall",
  "Assisted with the Google Play Store launch of the Cleomitra mobile app (Flutter)",
  "Designs interfaces in Figma and builds them out in code",
];
