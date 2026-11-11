import type { Metadata, Viewport } from "next";
import { Archivo_Black, Geist } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import Tracking from "@/components/Tracking";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE } from "@/lib/site";

const display = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: `${SITE.name} — Digital Marketing`,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  keywords: SITE.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: `${SITE.name} — Digital Marketing`,
    title: SITE.title,
    description: SITE.description,
    url: "/",
    locale: SITE.locale,
  },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
};

export const viewport: Viewport = { themeColor: "#0c0a0a", colorScheme: "dark" };

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/#person`,
      name: SITE.name,
      url: SITE.url,
      jobTitle: SITE.jobTitle,
      description: SITE.description,
      address: { "@type": "PostalAddress", addressLocality: "Chennai", addressCountry: "IN" },
      sameAs: [SITE.linkedin],
      worksFor: { "@type": "Organization", name: SITE.employer.name, url: SITE.employer.url },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Alagappa University" },
      knowsAbout: SITE.knowsAbout,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: `${SITE.name} — Digital Marketing`,
      inLanguage: "en",
      publisher: { "@id": `${SITE.url}/#person` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} dark antialiased`}>
      <body className="min-h-screen">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <JsonLd data={structuredData} />
        <Analytics />
        <SpeedInsights />
        <Tracking />
      </body>
    </html>
  );
}
