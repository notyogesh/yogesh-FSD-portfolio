import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { posts, getPost, type Block } from "@/data/posts";
import { breadcrumbLd, graph, personId } from "@/lib/schema";
import { SITE, absoluteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const path = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [SITE.name],
      tags: post.tags,
    },
  };
}

const fmt = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

function Render({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-10 text-2xl font-medium tracking-tight">{block.text}</h2>;
    case "p":
      return <p className="leading-relaxed text-muted">{block.text}</p>;
    case "ul":
      return (
        <ul className="flex list-disc flex-col gap-2 pl-5 leading-relaxed text-muted marker:text-line">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "code":
      return (
        // tabIndex lets keyboard users scroll long lines
        <pre tabIndex={0} className="overflow-x-auto rounded-xl bg-bg p-4 text-sm leading-relaxed" aria-label={`${block.lang} code example`}>
          <code>{block.code}</code>
        </pre>
      );
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = absoluteUrl(`/blog/${post.slug}`);

  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "BlogPosting",
            "@id": `${url}#article`,
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            inLanguage: "en",
            keywords: post.tags.join(", "),
            mainEntityOfPage: url,
            url,
            image: absoluteUrl("/opengraph-image"),
            author: { "@id": personId },
            publisher: { "@id": personId },
            isPartOf: { "@id": `${SITE.url}/#website` },
          },
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        )}
      />
      <article className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-6 px-1 text-sm text-muted">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="/blog" className="inline-flex min-h-6 items-center underline-offset-4 hover:text-fg hover:underline">
                Blog
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="truncate">
              {post.title}
            </li>
          </ol>
        </nav>

        <header className="mb-8 px-1">
          <h1 className="text-3xl font-medium leading-[1.1] tracking-tight sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-sm text-muted">
            By {SITE.name} · <time dateTime={post.date}>{fmt(post.date)}</time> · {post.readingMinutes} min read
          </p>
        </header>

        <div className="flex flex-col gap-5 rounded-2xl bg-card p-6 sm:p-10">
          {post.blocks.map((block, i) => (
            <Render key={i} block={block} />
          ))}
        </div>

        <aside aria-label="Work with me" className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl bg-card p-6 sm:flex-row sm:items-center">
          <p className="font-medium">Building something like this? I&apos;m available for work.</p>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full bg-linear-to-br from-accent-deep to-accent px-5 py-2.5 text-sm font-medium text-white"
          >
            Hire me
          </Link>
        </aside>
      </article>
    </>
  );
}
