# yogesh-FSD-portfolio

Personal portfolio of Yogeshwara K, a full stack developer. Built with Next.js, Tailwind CSS and Motion.

## Stack

- Next.js 16 (App Router) and React 19
- Tailwind CSS 4
- Motion for scroll-reveal animations, Lenis for smooth scrolling
- `next-themes` for dark / light mode
- A scroll-driven Spline scene, loaded lazily to keep the page fast
- A page-load "dial" reveal (ring, tick marks and orbiting skill names), pure CSS and SVG

## Related portfolios (other branches)

| Branch | Site |
| --- | --- |
| `main` | Full stack developer portfolio (this branch) |
| `digital-marketing` | Digital marketing and growth portfolio |
| `combined` | Business development + full stack portfolio ("Build / Grow") |

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Where to edit content

| What | File |
| --- | --- |
| Projects (titles, links, screenshots) | `src/data/projects.ts` (images in `public/projects`) |
| Tech stack and logos | `src/data/stack.ts`, `src/data/logos.ts` |
| Resume (experience, education, languages) | `src/data/resume.ts` |
| Contact details | `src/data/contact.ts` |
| Accent colour and theme | `src/app/globals.css` |
| Blog posts | `src/data/posts.ts` (appear on `/blog`, in `/feed.xml` and in the sitemap automatically) |
| Site name, description, keywords, URL | `src/lib/site.ts` |

## SEO and search listing

Built in: page titles and descriptions, canonical URLs, Open Graph / Twitter cards, a generated share image and
favicon, `sitemap.xml`, `robots.txt`, an RSS feed (`/feed.xml`), and schema.org structured data (Person, WebSite,
breadcrumbs, project list, blog posts).

To get listed:

1. Optional but recommended: buy a custom domain and set `NEXT_PUBLIC_SITE_URL` in Vercel (Settings → Environment Variables), then redeploy.
2. **Google Search Console**: add the site, verify it, then submit `/sitemap.xml`.
   - For a `*.vercel.app` URL use the "URL prefix" property and the **HTML tag** method. Copy the `content` value into the
     Vercel environment variable `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, redeploy, then click Verify.
3. **Bing Webmaster Tools**: use "Import from Google Search Console", or add the site and set `NEXT_PUBLIC_BING_SITE_VERIFICATION`.
4. After each deploy, notify Bing and other IndexNow engines instantly: `npm run seo:ping` (Google does not use IndexNow).

## Analytics and tracking

- **Always on (cookie-free):** Vercel Analytics and Speed Insights. Enable them in the Vercel project tabs.
- **Optional, behind a cookie banner:** Google Tag Manager or Google Analytics 4, and Microsoft Clarity. Set
  `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GA_MEASUREMENT_ID` and/or `NEXT_PUBLIC_CLARITY_ID` (see `.env.example`) and redeploy.
  With no IDs set, no banner appears and nothing extra loads. Use a GTM ID **or** a GA4 ID, not both, to avoid double counting.
- Button clicks marked `data-track="..."` (Hire me, Download resume, contact buttons, project links, copy buttons) are sent
  as `cta_click` events once a visitor accepts.
- The `/privacy` page explains all of this to visitors.

## Accessibility

Skip link, visible keyboard focus, accessible mobile menu, contrast-checked colours (WCAG AA), reduced-motion support,
semantic landmarks and one H1 per page. Decorative animation (Spline, intro) is hidden from assistive technology.
