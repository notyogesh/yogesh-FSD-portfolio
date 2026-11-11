import JsonLd from "@/components/JsonLd";
import Header from "@/components/cb/Header";
import { Contact, Experience, Footer, Hero, Numbers, Process, Skills, Work } from "@/components/cb/Sections";
import { work } from "@/data/combined";
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
            name: `${SITE.name} — Web development and growth marketing`,
            url: absoluteUrl("/"),
            description: SITE.description,
            provider: { "@id": personId },
            areaServed: ["IN", "US", "SG", "SA", "AE"],
            address: { "@type": "PostalAddress", addressLocality: "Chennai", addressCountry: "IN" },
            serviceType: ["Web and mobile app development", "Digital marketing", "SEO", "Business development"],
          },
          {
            "@type": "ItemList",
            name: "Selected work",
            itemListElement: work.map((w, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: w.name,
              description: w.summary,
            })),
          },
        )}
      />
      <Header />
      <Hero />
      <Numbers />
      <Work />
      <Process />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
