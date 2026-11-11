import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { absoluteUrl } from "@/lib/site";

/** Lists every page for Google, Bing and other crawlers. New blog posts are added automatically. */
export default function sitemap(): MetadataRoute.Sitemap {
  const latestPost = posts.map((p) => p.date).sort().at(-1);

  const pages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), priority: 1, changeFrequency: "monthly" },
    { url: absoluteUrl("/portfolio"), priority: 0.9, changeFrequency: "monthly" },
    { url: absoluteUrl("/blog"), priority: 0.8, changeFrequency: "weekly", lastModified: latestPost },
    { url: absoluteUrl("/about"), priority: 0.7, changeFrequency: "yearly" },
    { url: absoluteUrl("/stack"), priority: 0.6, changeFrequency: "yearly" },
    { url: absoluteUrl("/resume"), priority: 0.6, changeFrequency: "yearly" },
    { url: absoluteUrl("/contact"), priority: 0.6, changeFrequency: "yearly" },
    { url: absoluteUrl("/privacy"), priority: 0.2, changeFrequency: "yearly" },
  ];

  const articles: MetadataRoute.Sitemap = posts.map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: p.date,
    priority: 0.8,
    changeFrequency: "yearly",
  }));

  return [...pages, ...articles];
}
