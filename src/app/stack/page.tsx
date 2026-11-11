import type { Metadata } from "next";
import { FadeUp, TextReveal } from "@/components/Reveal";
import StackChip from "@/components/StackChip";
import JsonLd from "@/components/JsonLd";
import { stack } from "@/data/stack";
import { breadcrumbLd, graph, pageLd } from "@/lib/schema";

const description =
  "The technology stack of Yogeshwara K: Next.js, React, Node.js, NestJS, Flutter, databases, cloud hosting, testing, SEO, AI and payment integrations.";

export const metadata: Metadata = {
  title: "Stack",
  description,
  alternates: { canonical: "/stack" },
  openGraph: { type: "website", url: "/stack", title: "Stack | Yogeshwara K", description },
};

export default function StackPage() {
  return (
    <>
      <JsonLd
        data={graph(
          pageLd("WebPage", "Technology stack", "/stack", description),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Stack", path: "/stack" },
          ]),
        )}
      />
      <TextReveal
        as="h1"
        text="The tools I build with"
        className="mb-4 px-1 text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl"
      />
      <FadeUp delay={0.2} className="mb-8 max-w-2xl px-1 text-muted">
        <p>Next.js first — backed by Node, cloud and AI tooling for production apps.</p>
      </FadeUp>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {stack.map((group, i) => (
          <FadeUp key={group.title} delay={(i % 2) * 0.08}>
            <section className="h-full rounded-2xl bg-card p-5 transition-colors duration-300 hover:bg-card-hover">
              <h2 className="mb-4 text-sm font-medium text-muted">{group.title}</h2>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <StackChip key={item.name} item={item} featured={i === 0 && j === 0} />
                ))}
              </ul>
            </section>
          </FadeUp>
        ))}
      </div>
    </>
  );
}
