/**
 * Content for the combined "Build / Grow" portfolio, from the combined resume (v16).
 */
export type Work = {
  slug: string;
  name: string;
  kind: string;
  /** what I built (technologies) */
  built: string[];
  /** what I grew (results), if any */
  grew?: string;
  summary: string;
  url?: string;
  image?: string;
};

export const lanes = {
  build: {
    title: "Build",
    line: "Software that works in production.",
    points: [
      "Web and mobile apps: Next.js, React, Flutter, Node.js, NestJS",
      "SaaS, LMS, CRM and e-commerce platforms with admin panels",
      "Payments (Razorpay, Stripe, Square) and WhatsApp Business API",
      "AWS, Docker and CI/CD, plus AI features with Gemini and Bedrock",
    ],
  },
  grow: {
    title: "Grow",
    line: "Marketing that brings the right people in.",
    points: [
      "₹20L+ in Google and Meta Ads managed across 15+ clients",
      "SEO, local SEO and Google Business Profile",
      "GA4, Google Tag Manager, Meta Pixel and funnel tracking",
      "Shopify and marketplace growth: Amazon, Flipkart, Meesho, Blinkit",
    ],
  },
};

export const numbers = {
  build: [
    { value: "3.5+", label: "Years shipping production software" },
    { value: "15+", label: "Web and mobile apps built" },
    { value: "5", label: "Countries of clients: India, US, Singapore, Saudi Arabia, UAE" },
  ],
  grow: [
    { value: "₹20L+", label: "Ad budgets managed" },
    { value: "3x", label: "Return on ad spend (Yazz Salon)" },
    { value: "80%", label: "Lower cost per lead (Yazz Salon)" },
    { value: "60/mo", label: "Organic leads for Cleomitra in 3 months" },
  ],
};

export const work: Work[] = [
  {
    slug: "cleomitra",
    name: "Cleomitra",
    kind: "CRM & WhatsApp automation platform",
    built: ["Next.js", "Flutter", "WhatsApp Business API", "Exotel", "Twilio", "Amazon Bedrock chatbot"],
    grew: "Up to 60 organic leads a month in 3 months, and 1,000+ organic visitors a month in 6 months.",
    summary:
      "Contributed to the Exotel, Twilio and WhatsApp Business API integrations and an AI chatbot, improved the Flutter app and helped with its Play Store launch. Also ran the organic lead funnel and SEO.",
    url: "https://www.cleomitra.com/",
    image: "/projects/cleomitra.jpg",
  },
  {
    slug: "aivaantech",
    name: "AivaanTech AI Academy",
    kind: "E-learning platform",
    built: ["React", "Next.js", "Node.js", "Prisma", "PostgreSQL", "Razorpay", "Bunny Stream", "Cloudflare R2"],
    grew: "One GTM container feeding GA4, Meta Pixel, Google Ads and Clarity across both domains, plus SEO and video ads.",
    summary:
      "Full-stack work on the live LMS: payments, signed video delivery, media storage, secure authentication and release-based CI/CD on DigitalOcean. Then tracked, ranked and advertised it.",
    url: "https://learn.aivaantech.com/",
    image: "/projects/aivaantech-lms.jpg",
  },
  {
    slug: "yazz",
    name: "Yazz Salon",
    kind: "Beauty & wellness",
    built: [],
    grew: "3x return on ad spend and 80% lower cost per lead, while keeping local appointment bookings high.",
    summary: "Social media management, local Meta Ads and booking funnels for a salon business.",
    url: "https://www.yazz.in/",
    image: "/projects/yazz.jpg",
  },
  {
    slug: "bill-system",
    name: "Bill Management System",
    kind: "Multi-tenant GST billing SaaS",
    built: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "React", "Tailwind CSS", "Electron", "Docker"],
    summary:
      "Company-scoped data isolation enforced by a tenant guard, role-based access with audit logs, a GST engine for add-on and inclusive tax, a Super Admin portal, backups, and an offline Windows desktop version.",
    url: "https://bill-app.techieball.com/login",
    image: "/projects/bill-app.jpg",
  },
  {
    slug: "yora",
    name: "YORA & BeGoodEarth",
    kind: "E-commerce stores",
    built: ["Shopify", "Razorpay", "Stripe", "Square"],
    grew: "A B2C channel across Shopify and four marketplaces, B2B bulk-order leads of up to 1 ton a month, and multi-region ad tracking.",
    summary: "Customised storefronts and checkout, optimised mobile performance, then drove traffic and orders.",
    url: "https://www.theyora.com/",
    image: "/projects/yora.jpg",
  },
  {
    slug: "zhaulz",
    name: "ZHaulz",
    kind: "Furniture delivery platform (USA)",
    built: ["Next.js", "Node.js", "MongoDB", "AWS SNS", "Square"],
    summary:
      "A full-stack logistics platform for a Seattle client, with admin dashboards for bookings, cancellations, full and partial refunds, and SMS notifications.",
    url: "https://www.zhaulz.com/",
    image: "/projects/zhaulz.jpg",
  },
  {
    slug: "athmic",
    name: "Athmic Biotech",
    kind: "Enquiry & quotation platform",
    built: ["Next.js", "TypeScript", "MySQL", "JWT"],
    summary: "Separate admin and client portals with role-based login, workflows for enquiries, quotations and reports, and a CMS.",
    url: "https://athmicbiotech.com/",
    image: "/projects/athmic-biotech.jpg",
  },
  {
    slug: "autoblog",
    name: "AI Autoblog engine",
    kind: "Automation",
    built: ["Node.js", "Gemini API", "Imagen API", "Sharp", "GitHub Actions"],
    grew: "Automated blog writing, graphics and instant search indexing.",
    summary: "An autonomous publishing engine with AI text and image generation, WebP optimisation and fast indexing.",
    url: "https://yakriatech.com",
    image: "/projects/yakriatech.jpg",
  },
];

export const alsoWorked = [
  { name: "Muthus Hospital", note: "Google Ads, Meta Ads and local SEO lifted organic and direct traffic by 30% in 3 months", url: "https://ms.muthushospital.com/" },
  { name: "IM HVAC (USA)", note: "High-intent Google Search campaigns and call-conversion tracking", url: "https://www.imhvac.com/" },
  { name: "WC LifeSaver (USA)", note: "Next.js CPR course enrolment platform with Stripe payments", url: "https://www.wclifesaver.com" },
  { name: "Fedrick Senior Care (USA)", note: "Next.js website with on-page SEO", url: "https://www.fedrickseniorcare.com/" },
];

export const steps = [
  { title: "Plan", text: "Start from the goal: more bookings, leads, sales or sign-ups. Decide what to build and how to measure it." },
  { title: "Build", text: "Ship the product fast with clean code, tracking built in from day one, and checkout and forms that convert." },
  { title: "Grow", text: "Run the campaigns, fix SEO, read the numbers in GA4 and GTM, and keep improving what works." },
];

export const skills = {
  build: [
    "Next.js", "React", "TypeScript", "Flutter", "Node.js", "NestJS", "Express.js", "MongoDB", "PostgreSQL", "MySQL", "Prisma",
    "Tailwind CSS", "Electron", "AWS", "Docker", "GitHub Actions", "Razorpay", "Stripe", "Square", "WhatsApp Business API",
    "Amazon Bedrock", "Gemini API", "Shopify",
  ],
  grow: [
    "Google Ads", "YouTube Ads", "Meta Ads", "Retargeting", "SEO", "Local SEO", "Google Business Profile", "Schema markup",
    "GA4", "Google Tag Manager", "Meta Pixel", "Search Console", "Clarity", "CRO", "Amazon Seller Central", "Flipkart", "Meesho", "Blinkit",
  ],
};

export const experience = [
  {
    role: "Business Development Manager & Full Stack Developer",
    company: "TechieBall",
    url: "https://techieball.com/",
    period: "July 2026 – Present",
    points: [
      "Lead business development, partnerships and monetisation models for TechieBall's digital expansion.",
      "Architected the full-stack publishing platform on Next.js, Node.js and MongoDB, with background queues, automated sitemap submission and custom analytics.",
      "Built the AivaanTech AI Academy platform, the Athmic Biotech portal and a multi-tenant GST billing SaaS.",
      "Programmatic SEO, structured metadata, IndexNow indexing and GA4 / GTM dashboards to track engagement and conversion.",
    ],
  },
  {
    role: "Digital Marketing & Full Stack Developer",
    company: "YTS",
    url: "https://www.ytechsol.com/",
    period: "June 2023 – June 2026",
    points: [
      "Ran digital marketing for 15+ clients in India and the US, handling about ₹20 lakh in Meta and Google Ads budgets.",
      "Built and maintained 15+ web and mobile apps with Next.js, React, Flutter, Astro and Shopify.",
      "Grew organic traffic with technical SEO, schema markup, page-speed fixes and Google Business Profile work.",
      "Integrated Razorpay, Stripe and Square, managed WhatsApp Cloud API services and AWS deployments, and ran marketplace operations.",
    ],
  },
  {
    role: "IT Developer & Digital Marketer",
    company: "DMH",
    period: "April 2023 – June 2023",
    points: ["Built the company web portal, handled client digital launches and local SEO, and led a 2-member team."],
  },
  {
    role: "Intern (unpaid)",
    company: "DMH",
    period: "October 2022 – March 2023",
    points: ["Internship in web development and digital marketing, then moved into the full role."],
  },
];
