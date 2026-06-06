# azri-portfolio

Personal portfolio of **Muhammad Azri Fatihah Susanto** — Mobile Developer
(Flutter · Android · iOS · Kotlin Multiplatform).

A single-page, dark, motion-driven site built with the latest Next.js. Content
is sourced from `resume.tex` and lives in one file (`src/lib/content.ts`).

## Tech stack

- **Next.js 16** (App Router, React 19, Turbopack)
- **Tailwind CSS v4** — CSS-first theme tokens in `src/app/globals.css`
- **Motion** (Framer Motion) for scroll reveals & hero entrance
- **lucide-react** for icons (brand glyphs are inline SVG in `src/components/icons.tsx`)
- **Geist** Sans/Mono via `next/font`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Scripts: `npm run build`, `npm run start`, `npm run lint`.

## Environment

Canonical URL, sitemap, and Open Graph tags use `NEXT_PUBLIC_SITE_URL`
(defaults to a placeholder). Set the real domain before deploying:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Editing content

Everything (profile, experience, projects, skills, certifications, education) is
in **`src/lib/content.ts`** — edit there and every section updates. Swap the
hero photo by replacing `public/azri.webp` and pointing `profile.photo` at it.

## Structure

```
src/
  app/
    page.tsx              single-page composition
    layout.tsx            metadata, fonts, JSON-LD (Person)
    globals.css           dark theme tokens + utilities
    opengraph-image.tsx   dynamic OG image (next/og)
    icon.svg sitemap.ts robots.ts
  components/             Navbar, Hero, About, Experience, Projects,
                         Skills, Certifications, Education, Contact, Footer,
                         Reveal (motion), SectionHeading, icons
  lib/content.ts         all portfolio content (single source of truth)
```

## SEO

Metadata API, JSON-LD `Person`, dynamic Open Graph image, `sitemap.ts`,
`robots.ts`, and an SVG icon. All routes are statically prerendered.

## Deploy

Deploys cleanly to Vercel — set `NEXT_PUBLIC_SITE_URL` in project settings.
