export type Project = {
  slug: string;
  title: string;
  category: string;
  /** live site */
  url: string;
  /** screenshot in /public/projects (omit to show a coloured placeholder) */
  image?: string;
  /** placeholder colour when there is no image */
  color?: string;
  /** set when the live site is currently down */
  offline?: boolean;
  /** "phone" shows a portrait phone frame instead of the default laptop/tablet frame */
  device?: "phone";
};

export const projects: Project[] = [
  {
    slug: "cleomitra",
    title: "Cleomitra",
    category: "CRM & WhatsApp Automation",
    url: "https://www.cleomitra.com/",
    image: "/projects/cleomitra.jpg",
  },
  {
    slug: "bill-management-system",
    title: "Bill Management System",
    category: "GST Billing SaaS",
    url: "https://bill-app.techieball.com/login",
    image: "/projects/bill-app.jpg",
  },
  {
    slug: "aivaantech-lms",
    title: "AivaanTech AI Academy",
    category: "E-Learning Platform",
    url: "https://learn.aivaantech.com/",
    image: "/projects/aivaantech-lms.jpg",
  },
  {
    slug: "zhaulz",
    title: "ZHaulz",
    category: "Furniture Delivery (USA)",
    url: "https://www.zhaulz.com/",
    image: "/projects/zhaulz.jpg",
  },
  {
    slug: "wc-lifesaver",
    title: "WC Lifesaver",
    category: "CPR Training (USA)",
    url: "https://www.wclifesaver.com/",
    image: "/projects/wc-lifesaver.jpg",
  },
  {
    slug: "athmic-biotech",
    title: "Athmic Biotech",
    category: "Enquiry & Quotation Portal",
    url: "https://athmicbiotech.com/",
    image: "/projects/athmic-biotech.jpg",
  },
  {
    slug: "cleomitra-app",
    title: "Cleomitra App",
    category: "Mobile App · Play Store",
    url: "https://www.cleomitra.app/",
    color: "#5b1a3a",
    device: "phone",
  },
  {
    slug: "techieball",
    title: "TechieBall",
    category: "Company Website",
    url: "https://techieball.com/",
    image: "/projects/techieball.jpg",
  },
  {
    slug: "aivaantech",
    title: "AivaanTech",
    category: "AI Consulting Website",
    url: "https://www.aivaantech.com/",
    image: "/projects/aivaantech.jpg",
  },
  {
    slug: "yts",
    title: "YTS",
    category: "Design Agency Website",
    url: "https://www.ytechsol.com/",
    image: "/projects/ytechsol.jpg",
  },
  {
    slug: "yakria-tech",
    title: "Yakria Tech",
    category: "Company Website",
    url: "https://www.yakriatech.com/",
    image: "/projects/yakriatech.jpg",
  },
  {
    slug: "yora",
    title: "Yora",
    category: "E-Commerce (Shopify)",
    url: "https://www.theyora.com/",
    image: "/projects/yora.jpg",
  },
  {
    slug: "sivakasi-cracker-world",
    title: "Sivakasi Cracker World",
    category: "E-Commerce",
    url: "https://www.sivakasicrackerworld.com/",
    image: "/projects/sivakasi-cracker-world.jpg",
  },
  {
    slug: "yazz",
    title: "Yazz Salon",
    category: "Business Website",
    url: "https://www.yazz.in/",
    image: "/projects/yazz.jpg",
  },
  {
    slug: "fedrick-senior-care",
    title: "Fedrick Senior Care",
    category: "Website (USA)",
    url: "https://www.fedrickseniorcare.com/",
    image: "/projects/fedrick-senior-care.jpg",
  },
  {
    slug: "christy-tender-care",
    title: "Christy Tender Care",
    category: "Website (USA)",
    url: "https://www.christytendercare.com/",
    image: "/projects/christy-tender-care.jpg",
  },
  {
    slug: "madura-cards",
    title: "Madura Cards & Prints",
    category: "Business Website",
    url: "https://www.maduraprints.com/",
    image: "/projects/madura-cards.jpg",
  },
  {
    slug: "muthus-hospital",
    title: "Dr. Muthus Hospitals",
    category: "Hospital Website",
    url: "https://ms.muthushospital.com/",
    image: "/projects/muthus-hospital.jpg",
  },
  {
    slug: "sandc-salons",
    title: "S&C Salons",
    category: "Salon Website",
    url: "https://www.sandcsalons.com/",
    image: "/projects/sandc-salons.jpg",
  },
  {
    slug: "pes-tamilans",
    title: "Pes Tamilans",
    category: "Esports League Platform",
    url: "https://pes-tamilans.vercel.app/",
    image: "/projects/pes-tamilans.jpg",
  },
  {
    slug: "nenfx",
    title: "NENFX",
    category: "Website",
    url: "https://nenfx.in/",
    color: "#0f2a3f",
    offline: true,
  },
  {
    slug: "yakria",
    title: "Yakria",
    category: "Website",
    url: "http://yakria.com/",
    color: "#143a4a",
    offline: true,
  },
  {
    slug: "begoodearth",
    title: "BeGoodEarth",
    category: "E-Commerce (Shopify)",
    url: "https://begoodearth.com/",
    color: "#1f3a2a",
    offline: true,
  },
  {
    slug: "vantha-vettuvom",
    title: "Vantha Vettuvom",
    category: "Franchise Website",
    url: "https://www.vanthavettuvom.com/",
    image: "/projects/vantha-vettuvom.jpg",
  },
];
