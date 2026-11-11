# Yogeshwara K: Digital Marketing portfolio

This is the **`digital-marketing`** branch of the portfolio repo. Design: dark, cinematic, red on near-black, with a
draggable 3D carousel of campaign case studies.

| Branch | Site |
| --- | --- |
| `main` | Full stack developer portfolio |
| `digital-marketing` | Digital marketing and growth portfolio (this branch) |
| `combined` | Business development + full stack portfolio ("Build / Grow") |

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
| Campaigns, results, services, toolkit, experience | `src/data/campaigns.ts` |
| Contact details | `src/data/contact.ts` |
| Site name, description, keywords | `src/lib/site.ts` |
| Page sections | `src/components/dm/Sections.tsx` |
| The 3D carousel | `src/components/dm/CampaignCarousel.tsx` |
| Colours and fonts | `src/app/globals.css`, `src/app/layout.tsx` |
| Resume PDF | `public/Yogeshwara_K_Digital_Marketing_Resume.pdf` |

## Deploy (Vercel)

Create a separate Vercel project from this repo and set its **Production Branch** to `digital-marketing`
(Project → Settings → Git). The site address is picked up automatically; set `NEXT_PUBLIC_SITE_URL` only for a custom domain.

## Search listing and analytics

See `.env.example`. Optional Google Tag Manager / GA4 / Microsoft Clarity load only after a visitor accepts the cookie banner,
and the `/privacy` page explains this. Verification codes for Google Search Console and Bing go in the same file's variables.
After deploying, notify Bing instantly with `SITE_URL=https://your-site npm run seo:ping`.
