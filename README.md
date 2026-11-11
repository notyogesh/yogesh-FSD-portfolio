# Yogeshwara K: Business Development + Full Stack portfolio ("Build / Grow")

This is the **`combined`** branch of the portfolio repo. Design: light, warm paper, ink text and a bold vermilion accent,
built around the idea "I build it. I grow it." It keeps the page-load blob reveal and masked-text reveals.

| Branch | Site |
| --- | --- |
| `main` | Full stack developer portfolio |
| `digital-marketing` | Digital marketing and growth portfolio |
| `combined` | Business development + full stack portfolio (this branch) |

Built with Next.js, Tailwind CSS and Motion.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where to edit content

| What | File |
| --- | --- |
| Hero lanes, numbers, work, process, skills, experience | `src/data/combined.ts` |
| Contact details | `src/data/contact.ts` |
| Site name, description, keywords | `src/lib/site.ts` |
| Page sections | `src/components/cb/Sections.tsx`, `src/components/cb/Header.tsx` |
| Page-load reveal and text reveals | `src/components/Intro.tsx`, `src/components/Reveal.tsx` |
| Colours and fonts | `src/app/globals.css`, `src/app/layout.tsx` |
| Resume PDF | `public/Yogeshwara_K_Resume.pdf` |

## Deploy (Vercel)

Create a separate Vercel project from this repo and set its **Production Branch** to `combined`
(Project → Settings → Git). The site address is picked up automatically; set `NEXT_PUBLIC_SITE_URL` only for a custom domain.

## Search listing and analytics

See `.env.example`. Optional Google Tag Manager / GA4 / Microsoft Clarity load only after a visitor accepts the cookie banner,
and the `/privacy` page explains this. After deploying, notify Bing instantly with
`SITE_URL=https://your-site npm run seo:ping`.
