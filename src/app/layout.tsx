import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Tracking from "@/components/Tracking";
import { SITE } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: `${SITE.name} Portfolio`,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  keywords: SITE.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: `${SITE.name} Portfolio`,
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
  // Search Console / Bing Webmaster verification tags, filled from Vercel environment variables (optional)
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
  colorScheme: "dark light",
};

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
      name: `${SITE.name} Portfolio`,
      inLanguage: "en",
      publisher: { "@id": `${SITE.url}/#person` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Providers>
          <Header />
          <main id="main" tabIndex={-1} className="mx-auto w-full max-w-[1400px] px-3 pb-16 pt-24 outline-none sm:px-5">
            {children}
          </main>
          <Footer />
        </Providers>
        <JsonLd data={structuredData} />
        <Analytics />
        <SpeedInsights />
        <Tracking />
      </body>
    </html>
  );
}
