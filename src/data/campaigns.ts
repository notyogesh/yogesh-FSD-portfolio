/**
 * Marketing case studies, taken from the digital-marketing resume. `image` is a screenshot in /public/projects;
 * without one, the card shows the client's initials on a coloured background.
 */
export type Campaign = {
  slug: string;
  client: string;
  kicker: string;
  /** the headline result shown on the card */
  metric: string;
  summary: string;
  /** channels and tools used */
  tags: string[];
  url?: string;
  image?: string;
  /** dark card tint (CSS colour) */
  tint: string;
  note?: string;
};

export const campaigns: Campaign[] = [
  {
    slug: "yazz-salon",
    client: "Yazz Salon",
    kicker: "Beauty & wellness",
    metric: "3x ROAS · 80% lower CPL",
    summary:
      "Social media management, local Meta Ads and booking funnels. Tripled return on ad spend and cut cost per lead by 80% while keeping local appointment bookings high.",
    tags: ["Meta Ads", "Local ads", "Social media", "Booking funnel"],
    url: "https://www.yazz.in/",
    image: "/projects/yazz.jpg",
    tint: "#2a1416",
  },
  {
    slug: "aivaantech",
    client: "AivaanTech",
    kicker: "AI education platform",
    metric: "One GTM container, 4 tools",
    summary:
      "Conversion tracking across the main site and the learning subdomain with a single Google Tag Manager container feeding GA4, Meta Pixel, Google Ads and Clarity. Added data-driven SEO and produced video and Instagram Reel ads for its AI courses.",
    tags: ["GTM", "GA4", "Meta Pixel", "Google Ads", "Clarity", "Video ads"],
    url: "https://www.aivaantech.com/",
    image: "/projects/aivaantech.jpg",
    tint: "#14201f",
  },
  {
    slug: "cleomitra",
    client: "Cleomitra",
    kicker: "CRM & WhatsApp automation",
    metric: "60 organic leads / month",
    summary:
      "Built the organic lead funnel with on-page SEO and backlinks, supported by Meta and Google Ads. Reached up to 60 organic leads per month within 3 months and 1,000+ organic visitors per month within 6 months.",
    tags: ["On-page SEO", "Backlinks", "Meta Ads", "Google Ads"],
    url: "https://www.cleomitra.com/",
    image: "/projects/cleomitra.jpg",
    tint: "#241322",
  },
  {
    slug: "muthus-hospital",
    client: "Muthus Hospital",
    kicker: "Healthcare",
    metric: "+30% website traffic",
    summary:
      "Google Ads, Meta Ads, social media management and local SEO. Increased organic and direct website traffic by 30% within 3 months.",
    tags: ["Google Ads", "Meta Ads", "Local SEO", "Social media"],
    url: "https://ms.muthushospital.com/",
    image: "/projects/muthus-hospital.jpg",
    tint: "#141c26",
  },
  {
    slug: "yora",
    client: "YORA",
    kicker: "E-commerce & oil brand",
    metric: "B2B leads up to 1 ton / month",
    summary:
      "Built a B2C sales channel across Shopify and four marketplaces (Amazon, Flipkart, Meesho, Blinkit) and generated B2B bulk-order leads of up to 1 ton per month, using Search, Meta and YouTube ads.",
    tags: ["Shopify", "Marketplaces", "Search ads", "Meta Ads", "YouTube Ads"],
    url: "https://www.theyora.com/",
    image: "/projects/yora.jpg",
    tint: "#1f2412",
  },
  {
    slug: "begoodearth",
    client: "BeGoodEarth",
    kicker: "Multi-region e-commerce",
    metric: "Multi-region ad tracking",
    summary:
      "Multi-region ad tracking, multi-currency checkout and international product SEO, with Google Keyword Planner research and Google Business Profile.",
    tags: ["Shopify", "Keyword research", "Ad tracking", "International SEO"],
    url: "https://www.begoodearth.com/",
    tint: "#122019",
    note: "The store is currently offline.",
  },
  {
    slug: "im-hvac",
    client: "IM HVAC",
    kicker: "Home services · USA",
    metric: "Call-conversion tracking",
    summary: "High-intent Google Search campaigns with call-conversion tracking for a US HVAC business.",
    tags: ["Google Search Ads", "Call tracking"],
    url: "https://www.imhvac.com/",
    tint: "#1c1a26",
  },
  {
    slug: "christy-tender-care",
    client: "Christy Tender Care",
    kicker: "Home care · USA",
    metric: "US lead acquisition",
    summary: "On-page SEO and lead acquisition for a US home care provider.",
    tags: ["On-page SEO", "Lead generation"],
    url: "https://www.christytendercare.com/",
    image: "/projects/christy-tender-care.jpg",
    tint: "#26201a",
  },
  {
    slug: "ashok-travels",
    client: "Ashok Travels",
    kicker: "Travel",
    metric: "Map-pack ranking",
    summary: "Google Business Profile optimisation, map-pack ranking, social media management and enquiry funnels.",
    tags: ["Google Business Profile", "Local SEO", "Social media"],
    url: "https://www.ashoktravels.co.in/",
    tint: "#1a2226",
  },
  {
    slug: "mango-mist",
    client: "Mango Mist Resort",
    kicker: "Hospitality",
    metric: "Weekend bookings",
    summary: "Seasonal Meta Ads and social media campaigns that drove weekend resort bookings.",
    tags: ["Meta Ads", "Social media", "Seasonal campaigns"],
    url: "https://www.mangomist.com/",
    tint: "#26210f",
  },
];

export const stats = [
  { value: "₹20L+", label: "Meta and Google Ads budget managed (2023–2026)" },
  { value: "15+", label: "Client accounts across India and the US" },
  { value: "3x", label: "Return on ad spend for Yazz Salon" },
  { value: "80%", label: "Lower cost per lead for Yazz Salon" },
  { value: "60", label: "Organic leads per month for Cleomitra in 3 months" },
  { value: "1,000+", label: "Organic visitors per month for Cleomitra in 6 months" },
  { value: "+30%", label: "Website traffic for Muthus Hospital in 3 months" },
  { value: "1 ton", label: "Monthly B2B bulk-order leads for YORA" },
];

export const services = [
  {
    title: "Paid media",
    text: "Google Ads (Search, Display, Shopping), YouTube Ads and Meta Ads (Facebook and Instagram), with retargeting and careful budget management.",
    tags: ["Google Ads", "YouTube Ads", "Meta Ads", "Retargeting"],
  },
  {
    title: "SEO & keyword strategy",
    text: "Technical, on-page and off-page SEO, keyword planning, high-authority backlinks, schema markup and automated indexing with IndexNow.",
    tags: ["Technical SEO", "Keyword Planner", "Backlinks", "Schema markup"],
  },
  {
    title: "Local SEO",
    text: "Google Business Profile optimisation, local citations and map-pack ranking for businesses that depend on nearby customers.",
    tags: ["Google Business Profile", "Citations", "Map pack"],
  },
  {
    title: "Analytics & tracking",
    text: "GA4, Google Tag Manager, Meta Pixel, Search Console and Clarity, with funnel tracking and conversion-rate optimisation.",
    tags: ["GA4", "GTM", "Meta Pixel", "Search Console", "CRO"],
  },
  {
    title: "E-commerce & marketplaces",
    text: "Shopify customisation, checkout funnels (Razorpay, Stripe, Square) and marketplace operations on Amazon, Flipkart, Meesho and Blinkit.",
    tags: ["Shopify", "Amazon", "Flipkart", "Meesho", "Blinkit"],
  },
  {
    title: "Content & social",
    text: "Social media management, content strategy, B2B lead generation, B2C engagement, and AI video and Reels for ads.",
    tags: ["Social media", "Content", "AI video (Google Flow)"],
  },
  {
    title: "Landing pages & automation",
    text: "Because I also build software (Next.js, React, Flutter, Node.js), landing pages, tracking and checkout flows are built to convert, and routine work can be automated with AI.",
    tags: ["Next.js", "React", "Gemini API", "Automation"],
  },
];

export const experience = [
  {
    role: "Business Development Manager & Full Stack Developer",
    company: "TechieBall",
    url: "https://techieball.com/",
    period: "July 2026 – Present",
    points: [
      "Lead business development, partnerships, monetisation models and digital expansion.",
      "Programmatic SEO, structured metadata, IndexNow automated indexing and keyword-targeted publishing.",
      "Audience-growth initiatives and GA4 and GTM dashboards to track engagement and conversion.",
      "Cross-domain conversion tracking for AivaanTech through one GTM container feeding GA4, Meta Pixel and Google Ads, plus promotional video ads for its AI courses.",
    ],
  },
  {
    role: "Digital Marketing & Full Stack Developer",
    company: "YTS",
    url: "https://www.ytechsol.com/",
    period: "June 2023 – June 2026",
    points: [
      "End-to-end digital marketing for 15+ clients in India and the US, handling about ₹20 lakh in Meta and Google Ads budgets.",
      "Grew organic traffic through technical SEO, on-page work, schema markup and page-speed fixes.",
      "Improved map-pack visibility with Google Business Profile and local citations.",
      "Ran marketplace operations on Amazon, Flipkart, Meesho and Blinkit.",
      "Built an AI autoblog engine with Gemini, Imagen and IndexNow for automated writing, graphics and fast indexing.",
    ],
  },
  {
    role: "IT Developer & Digital Marketer",
    company: "DMH",
    period: "April 2023 – June 2023",
    points: [
      "Web setup, client digital launches, Google Business Profile setups and local SEO.",
      "Raised organic traffic with SEO audits and page-speed work, and managed a 2-member team.",
    ],
  },
  {
    role: "Intern (unpaid)",
    company: "DMH",
    period: "October 2022 – March 2023",
    points: ["Internship in web setup and digital marketing, then moved into the full role at the same company."],
  },
];
