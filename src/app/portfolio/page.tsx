import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { TextReveal } from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { breadcrumbLd, graph, pageLd, personId } from "@/lib/schema";

const description = `${projects.length} projects by Yogeshwara K: CRM and WhatsApp automation, GST billing SaaS, e-learning, e-commerce, logistics and business websites built with Next.js, React, Node.js, NestJS and Flutter.`;

export const metadata: Metadata = {
  title: "Portfolio",
  description,
  alternates: { canonical: "/portfolio" },
  openGraph: { type: "website", url: "/portfolio", title: "Portfolio | Yogeshwara K", description },
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={graph(
          pageLd("CollectionPage", "Portfolio", "/portfolio", description),
          {
            "@type": "ItemList",
            name: "Projects by Yogeshwara K",
            numberOfItems: projects.length,
            itemListElement: projects.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "CreativeWork",
                name: p.title,
                description: p.work,
                url: p.url,
                genre: p.category,
                keywords: p.stack.join(", "),
                creator: { "@id": personId },
              },
            })),
          },
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
          ]),
        )}
      />
      <TextReveal
        as="h1"
        text="Dive into a few projects that represent my most fulfilling work"
        className="mb-8 max-w-3xl px-1 text-3xl font-medium leading-[1.1] tracking-tight sm:text-5xl"
      />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </>
  );
}
