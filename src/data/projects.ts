export type Project = {
  slug: string;
  title: string;
  category: string;
  /** live site */
  url: string;
  /** tools / technologies used */
  stack: string[];
  /** what the project is and what I worked on */
  work: string;
  /** screenshot in /public/projects (omit to show a coloured placeholder) */
  image?: string;
  /** placeholder colour when there is no image */
  color?: string;
  /** set when the live site is currently down */
  offline?: boolean;
  /** "phone" shows a portrait phone frame instead of the default laptop/tablet frame */
  device?: "phone";
};

/*
 * `work` text comes from the resume where the project is listed there. For the others it describes the
 * project itself (what the site does) and `stack` is what the live site is built with: edit these to
 * say exactly what you did on each one.
 */
export const projects: Project[] = [
  {
    slug: "cleomitra",
    title: "Cleomitra",
    category: "CRM & WhatsApp Automation",
    url: "https://www.cleomitra.com/",
    image: "/projects/cleomitra.jpg",
    stack: ["Next.js", "WhatsApp Business API", "Exotel", "Twilio", "Amazon Bedrock"],
    work: "Built integrations with Exotel, Twilio and the WhatsApp Business API, plus an AI chatbot on Amazon Bedrock, for this CRM and WhatsApp automation platform.",
  },
  {
    slug: "bill-management-system",
    title: "Bill Management System",
    category: "GST Billing SaaS",
    url: "https://bill-app.techieball.com/login",
    image: "/projects/bill-app.jpg",
    stack: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "React", "Tailwind CSS", "Electron", "Docker"],
    work: "Built a multi-tenant GST billing SaaS: tenant-isolated data, role-based access with audit logs, a GST engine with add-on and inclusive tax modes, a Super Admin portal and an offline Windows desktop version.",
  },
  {
    slug: "aivaantech-lms",
    title: "AivaanTech AI Academy",
    category: "E-Learning Platform",
    url: "https://learn.aivaantech.com/",
    image: "/projects/aivaantech-lms.jpg",
    stack: ["Next.js", "React", "Node.js", "Prisma", "PostgreSQL", "Razorpay", "Bunny Stream", "Cloudflare R2", "DigitalOcean"],
    work: "Full-stack developer on the live e-learning platform: Razorpay payments, signed video delivery, Cloudflare R2 media storage, cookie-based auth, release-based CI/CD, GTM tracking and SEO.",
  },
  {
    slug: "zhaulz",
    title: "ZHaulz",
    category: "Furniture Delivery (USA)",
    url: "https://www.zhaulz.com/",
    image: "/projects/zhaulz.jpg",
    stack: ["Next.js", "Node.js", "MongoDB", "AWS SNS", "Square"],
    work: "Architected a full-stack logistics and delivery platform for a Seattle client, with admin dashboards for bookings, cancellations, full and partial refunds, and SMS notifications.",
  },
  {
    slug: "wc-lifesaver",
    title: "WC Lifesaver",
    category: "CPR Training (USA)",
    url: "https://www.wclifesaver.com/",
    image: "/projects/wc-lifesaver.jpg",
    stack: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    work: "Developed a full-stack course enrollment platform with Stripe payments and secure user authentication.",
  },
  {
    slug: "athmic-biotech",
    title: "Athmic Biotech",
    category: "Enquiry & Quotation Portal",
    url: "https://athmicbiotech.com/",
    image: "/projects/athmic-biotech.jpg",
    stack: ["Next.js", "TypeScript", "MySQL", "JWT"],
    work: "Built separate admin and client portals with JWT role-based access, workflows for enquiries, quotations and report delivery, and a CMS for managing site content.",
  },
  {
    slug: "cleomitra-app",
    title: "Cleomitra App",
    category: "Mobile App · Play Store",
    url: "https://www.cleomitra.app/",
    color: "#5b1a3a",
    device: "phone",
    stack: ["Flutter"],
    work: "Improved Flutter UI/UX components, fixed performance bottlenecks, supported customer onboarding and production issues, and helped with the Google Play Store launch.",
  },
  {
    slug: "techieball",
    title: "TechieBall",
    category: "Company Website",
    url: "https://techieball.com/",
    image: "/projects/techieball.jpg",
    stack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    work: "My current role: leading a 4-member team and building TechieBall's products on Next.js, Node.js and MongoDB, including backend queues, automated sitemap submission, analytics tracking and admin panels.",
  },
  {
    slug: "aivaantech",
    title: "AivaanTech",
    category: "AI Consulting Website",
    url: "https://www.aivaantech.com/",
    image: "/projects/aivaantech.jpg",
    stack: ["Next.js", "React"],
    work: "Front-end and full-stack work on the public AivaanTech site, with GTM conversion tracking and data-driven SEO improvements.",
  },
  {
    slug: "yts",
    title: "YTS",
    category: "Design Agency Website",
    url: "https://www.ytechsol.com/",
    image: "/projects/ytechsol.jpg",
    stack: ["Next.js", "React", "Flutter", "Astro", "Node.js", "MongoDB"],
    work: "My role here from 2023 to 2026: built and maintained 15+ web and mobile apps, Node.js and MongoDB APIs, payment integrations, WhatsApp services and AWS deployments.",
  },
  {
    slug: "yakria-tech",
    title: "Yakria Tech",
    category: "Company Website",
    url: "https://www.yakriatech.com/",
    image: "/projects/yakriatech.jpg",
    stack: ["Next.js", "Node.js", "Gemini API", "Imagen API", "Sharp", "GitHub Actions"],
    work: "Built an AI autoblog engine: Gemini writes the posts, Imagen creates the images, Sharp converts them to WebP, and GitHub Actions publishes and deploys them automatically.",
  },
  {
    slug: "yora",
    title: "Yora",
    category: "E-Commerce (Shopify)",
    url: "https://www.theyora.com/",
    image: "/projects/yora.jpg",
    stack: ["Shopify", "Razorpay", "Stripe", "Square"],
    work: "Customised the storefront UI/UX, integrated Razorpay, Stripe and Square checkout, and optimised mobile store performance.",
  },
  {
    slug: "sivakasi-cracker-world",
    title: "Sivakasi Cracker World",
    category: "E-Commerce",
    url: "https://www.sivakasicrackerworld.com/",
    image: "/projects/sivakasi-cracker-world.jpg",
    stack: ["Next.js", "Payload CMS"],
    work: "A wholesale cracker store with a searchable price list, live stock counts and WhatsApp ordering.",
  },
  {
    slug: "yazz",
    title: "Yazz Salon",
    category: "Business Website",
    url: "https://www.yazz.in/",
    image: "/projects/yazz.jpg",
    stack: ["Next.js"],
    work: "A website for a premium unisex salon, with online appointment booking and a franchise enquiry flow.",
  },
  {
    slug: "fedrick-senior-care",
    title: "Fedrick Senior Care",
    category: "Website (USA)",
    url: "https://www.fedrickseniorcare.com/",
    image: "/projects/fedrick-senior-care.jpg",
    stack: ["Next.js"],
    work: "Built the Next.js website for a US senior care home and applied on-page SEO across the site.",
  },
  {
    slug: "christy-tender-care",
    title: "Christy Tender Care",
    category: "Website (USA)",
    url: "https://www.christytendercare.com/",
    image: "/projects/christy-tender-care.jpg",
    stack: ["Google Sites"],
    work: "A website for an adult family home in Washington State.",
  },
  {
    slug: "madura-cards",
    title: "Madura Cards & Prints",
    category: "Business Website",
    url: "https://www.maduraprints.com/",
    image: "/projects/madura-cards.jpg",
    stack: ["Google Sites"],
    work: "A website for a wedding card and print manufacturer.",
  },
  {
    slug: "muthus-hospital",
    title: "Dr. Muthus Hospitals",
    category: "Hospital Website",
    url: "https://ms.muthushospital.com/",
    image: "/projects/muthus-hospital.jpg",
    stack: [],
    work: "A website for a multispecialty hospital in Coimbatore, with appointment booking and emergency contact access.",
  },
  {
    slug: "sandc-salons",
    title: "S&C Salons",
    category: "Salon Website",
    url: "https://www.sandcsalons.com/",
    image: "/projects/sandc-salons.jpg",
    stack: ["PHP", "Bootstrap", "jQuery"],
    work: "A website for a salon in Thane, with services, a blog and online appointment booking.",
  },
  {
    slug: "pes-tamilans",
    title: "Pes Tamilans",
    category: "Esports League Platform",
    url: "https://pes-tamilans.vercel.app/",
    image: "/projects/pes-tamilans.jpg",
    stack: ["Next.js", "Vercel"],
    work: "An esports league platform with live standings, fixtures, tournaments, player rankings and analytics.",
  },
  {
    slug: "nenfx",
    title: "NENFX",
    category: "Website",
    url: "https://nenfx.in/",
    color: "#0f2a3f",
    offline: true,
    stack: [],
    work: "Website project (the live site is currently offline).",
  },
  {
    slug: "yakria",
    title: "Yakria",
    category: "Website",
    url: "http://yakria.com/",
    color: "#143a4a",
    offline: true,
    stack: [],
    work: "Website project (the live site is currently offline).",
  },
  {
    slug: "begoodearth",
    title: "BeGoodEarth",
    category: "E-Commerce (Shopify)",
    url: "https://begoodearth.com/",
    color: "#1f3a2a",
    offline: true,
    stack: ["Shopify", "Razorpay", "Stripe", "Square"],
    work: "Customised the storefront UI/UX, integrated Razorpay, Stripe and Square checkout, and optimised mobile store performance (the store is currently offline).",
  },
  {
    slug: "vantha-vettuvom",
    title: "Vantha Vettuvom",
    category: "Franchise Website",
    url: "https://www.vanthavettuvom.com/",
    image: "/projects/vantha-vettuvom.jpg",
    stack: ["Astro"],
    work: "A franchise opportunity landing page with a lead enquiry form for a salon brand.",
  },
];
