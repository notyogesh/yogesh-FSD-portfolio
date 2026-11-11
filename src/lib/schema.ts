import { SITE, absoluteUrl } from "./site";

export const personId = `${SITE.url}/#person`;

/** BreadcrumbList: lets Google show "Home › Portfolio" under the result title. */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** A generic page entry that points back to the site's Person and WebSite entities. */
export function pageLd(
  type: "WebPage" | "AboutPage" | "ContactPage" | "ProfilePage" | "CollectionPage",
  name: string,
  path: string,
  description: string,
  extra: Record<string, unknown> = {},
) {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": personId },
    ...extra,
  };
}

export const graph = (...nodes: Record<string, unknown>[]) => ({
  "@context": "https://schema.org",
  "@graph": nodes,
});
