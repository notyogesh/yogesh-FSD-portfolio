import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/** Lists every page for Google, Bing and other crawlers. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), priority: 1, changeFrequency: "monthly" },
    { url: absoluteUrl("/privacy"), priority: 0.2, changeFrequency: "yearly" },
  ];
}
