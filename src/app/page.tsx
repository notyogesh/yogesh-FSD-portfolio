import JsonLd from "@/components/JsonLd";
import CampaignCarousel from "@/components/dm/CampaignCarousel";
import Nav from "@/components/dm/Nav";
import { About, CampaignList, Contact, Experience, Footer, Results, Services, Tools } from "@/components/dm/Sections";
import { campaigns } from "@/data/campaigns";
import { graph, pageLd, personId } from "@/lib/schema";
import { SITE, absoluteUrl } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd
        data={graph(
          pageLd("ProfilePage", `${SITE.name} — ${SITE.jobTitle}`, "/", SITE.description),
          {
            "@type": "ProfessionalService",
            "@id": `${absoluteUrl("/")}#service`,
            name: `${SITE.name} — Digital Marketing`,
            url: absoluteUrl("/"),
            description: SITE.description,
            provider: { "@id": personId },
            areaServed: ["IN", "US", "SG", "SA", "AE"],
            address: { "@type": "PostalAddress", addressLocality: "Chennai", addressCountry: "IN" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Digital marketing services",
              itemListElement: SITE.services.map((s) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: s },
              })),
            },
          },
          {
            "@type": "ItemList",
            name: "Campaign case studies",
            itemListElement: campaigns.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `${c.client}: ${c.metric}`,
              description: c.summary,
            })),
          },
        )}
      />
      <Nav />

      <header id="top" className="px-4 pb-6 pt-28 text-center sm:pt-32">
        <h1 className="font-display text-[clamp(2.1rem,9.2vw,8.5rem)] uppercase leading-[0.92] tracking-tight text-accent">
          Yogeshwara K
        </h1>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.3em] sm:text-base">Digital marketing &amp; growth</p>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted sm:text-base">
          Google Ads · Meta Ads · YouTube Ads · SEO · Local SEO · GA4 &amp; GTM · Shopify
        </p>
        <p className="mt-6 inline-flex items-center gap-2 text-xs text-muted">
          <span className="size-1.5 rounded-full bg-accent-text" aria-hidden />
          Open for work · Chennai · ₹20L+ in ad spend managed
        </p>
      </header>

      <section id="campaigns" aria-label="Campaigns" className="pb-8">
        <h2 className="sr-only">Campaign case studies</h2>
        <CampaignCarousel items={campaigns} />
      </section>

      <Tools />
      <Results />
      <CampaignList />
      <Services />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
