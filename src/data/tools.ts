import { logos } from "./logos";

export type Tool = {
  name: string;
  /** key in logos.ts (real brand logo) */
  logo?: keyof typeof logos;
  /** fallback letter badge when no logo is available */
  mono?: string;
};

const l = (name: string, logo: keyof typeof logos): Tool => ({ name, logo });
const m = (name: string, mono: string): Tool => ({ name, mono });

/** The platforms and tools used in campaigns, from the digital-marketing resume. */
export const toolGroups: { title: string; tools: Tool[] }[] = [
  {
    title: "Paid media",
    tools: [
      l("Google Ads", "googleads"),
      l("YouTube Ads", "youtube"),
      l("Meta Ads Manager", "meta"),
      l("Facebook & Instagram Ads", "instagram"),
      m("Retargeting", "RT"),
    ],
  },
  {
    title: "Analytics & tracking",
    tools: [
      l("Google Analytics 4", "googleanalytics"),
      l("Google Tag Manager", "googletagmanager"),
      l("Google Search Console", "googlesearchconsole"),
      m("Meta Pixel", "Px"),
      m("Microsoft Clarity", "Cl"),
      m("Funnel tracking & CRO", "CRO"),
    ],
  },
  {
    title: "SEO & local SEO",
    tools: [
      m("Google Keyword Planner", "KP"),
      m("Technical & on-page SEO", "SEO"),
      m("Backlink building", "BL"),
      m("Schema markup (JSON-LD)", "{ }"),
      m("IndexNow", "IN"),
      l("Google Business Profile", "googlemaps"),
    ],
  },
  {
    title: "E-commerce & marketplaces",
    tools: [
      l("Shopify", "shopify"),
      m("Amazon Seller Central", "Az"),
      m("Flipkart Seller Hub", "Fk"),
      m("Meesho Supplier Panel", "Me"),
      m("Blinkit listings", "Bl"),
      l("Razorpay", "razorpay"),
      l("Stripe", "stripe"),
    ],
  },
  {
    title: "AI & productivity",
    tools: [
      m("Google Flow (AI video)", "Fl"),
      l("Claude", "claude"),
      m("ChatGPT", "GP"),
      l("Gemini", "gemini"),
      m("Google Workspace", "Ws"),
    ],
  },
  {
    title: "Also builds with",
    tools: [l("Next.js", "nextjs"), l("React", "react"), l("Flutter", "flutter"), l("Node.js", "node")],
  },
];
