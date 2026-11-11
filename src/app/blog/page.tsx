import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { FadeUp, TextReveal } from "@/components/Reveal";
import { posts } from "@/data/posts";
import { breadcrumbLd, graph, pageLd, personId } from "@/lib/schema";
import { SITE, absoluteUrl } from "@/lib/site";

const description =
  "Practical write-ups from a full stack developer in Chennai: Next.js, NestJS, Node.js, payments, SaaS architecture and more.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/feed.xml" } },
  openGraph: { type: "website", url: "/blog", title: `Blog | ${SITE.name}`, description },
};

const fmt = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={graph(
          pageLd("CollectionPage", "Blog", "/blog", description),
          {
            "@type": "Blog",
            "@id": `${absoluteUrl("/blog")}#blog`,
            name: `${SITE.name} — Blog`,
            url: absoluteUrl("/blog"),
            author: { "@id": personId },
            blogPost: posts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: absoluteUrl(`/blog/${p.slug}`),
              datePublished: p.date,
            })),
          },
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        )}
      />
      <TextReveal
        as="h1"
        text="Writing about what I build"
        className="mb-4 max-w-3xl px-1 text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl"
      />
      <FadeUp delay={0.2} className="mb-8 max-w-2xl px-1 text-muted">
        <p>{description}</p>
      </FadeUp>

      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {posts.map((post, i) => (
          <li key={post.slug}>
            <FadeUp delay={i * 0.06} className="h-full">
              <article className="group relative flex h-full flex-col gap-4 rounded-2xl bg-card p-6 transition-colors hover:bg-card-hover">
                <p className="text-sm text-muted">
                  <time dateTime={post.date}>{fmt(post.date)}</time> · {post.readingMinutes} min read
                </p>
                <h2 className="text-2xl font-medium leading-tight tracking-tight">
                  <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:rounded-2xl">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-muted">{post.description}</p>
                <ul aria-label="Topics" className="mt-auto flex flex-wrap gap-1.5">
                  {post.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line px-2.5 py-1 text-xs font-medium">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeUp>
          </li>
        ))}
      </ul>
    </>
  );
}
