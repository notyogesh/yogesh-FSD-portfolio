/**
 * Tells Bing, Yandex and other IndexNow search engines about new or changed pages right away
 * (Google does not support IndexNow; submit your sitemap in Google Search Console instead).
 *
 * Usage (after deploying):   npm run seo:ping
 * Optional:                  SITE_URL=https://your-domain.com npm run seo:ping
 */
const KEY = "29b1567d7af75f8fa56a2d663492840a";
const SITE = (process.env.SITE_URL ?? "https://yogesh-fsd-portfolio.vercel.app").replace(/\/$/, "");

const sitemap = await fetch(`${SITE}/sitemap.xml`);
if (!sitemap.ok) {
  console.error(`Could not read ${SITE}/sitemap.xml (HTTP ${sitemap.status}). Deploy first, then run again.`);
  process.exit(1);
}
const urlList = [...(await sitemap.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});

console.log(`Submitted ${urlList.length} URLs to IndexNow: HTTP ${res.status}`);
if (res.status >= 400) process.exit(1);
