# yogesh-FSD-portfolio

Personal portfolio of Yogeshwara K, a full stack developer. Built with Next.js, Tailwind CSS and Motion.

## Stack

- Next.js 16 (App Router) and React 19
- Tailwind CSS 4
- Motion for scroll-reveal animations, Lenis for smooth scrolling
- `next-themes` for dark / light mode
- A scroll-driven Spline scene, loaded lazily to keep the page fast
- A small WebGL shader for the page-load intro

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
