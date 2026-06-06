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

## CV / Résumé

The CV is authored in **LaTeX** (`cv/resume.tex`) and served as a PDF that the
Résumé section previews (with full-screen zoom + download).

To update it:

1. Edit `cv/resume.tex`.
2. Compile to PDF and save it as **`public/resume.pdf`** (the served file). Any
   LaTeX toolchain works — e.g. [Overleaf](https://overleaf.com) (download the
   PDF), or locally:
   ```bash
   pdflatex -output-directory=public -jobname=resume cv/resume.tex
   # or: tectonic cv/resume.tex --outdir public  (then rename to resume.pdf)
   ```
3. Commit both `cv/resume.tex` and `public/resume.pdf`.

> `public/resume.pdf` ships with a placeholder until you drop in the real
> compiled CV. (No LaTeX is run at build time — Vercel has no TeX install.)

## Structure

```
src/
  app/
    page.tsx              single-page composition
    layout.tsx            metadata, fonts, JSON-LD (Person)
    globals.css           dark theme tokens + utilities
    opengraph-image.tsx   dynamic OG image (next/og)
    icon.svg sitemap.ts robots.ts
  components/             Navbar, Hero, About, Experience, Projects, Skills,
                         Certifications, Education, Resume, Contact, Footer,
                         Reveal (motion), SectionHeading, LogoMark, icons
  lib/content.ts         all portfolio content (single source of truth)
cv/resume.tex            LaTeX CV source
public/resume.pdf        compiled CV served by the Résumé section
```

## SEO

Metadata API, JSON-LD `Person`, dynamic Open Graph image, `sitemap.ts`,
`robots.ts`, and an SVG icon. All routes are statically prerendered.

## Deploy

Deploys cleanly to Vercel — set `NEXT_PUBLIC_SITE_URL` in project settings.
