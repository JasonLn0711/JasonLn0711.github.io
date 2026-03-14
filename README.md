# Jason Chia-Sheng Lin - Professional Identity Site

A premium, research-driven personal website for Jason Chia-Sheng Lin: doctoral researcher at NYCU working on trustworthy AI systems, speech and language pipelines, AI security, and real-world deployment in high-stakes environments.

The site is built as a static Astro project for GitHub Pages, with React used where it helps the interface and Astro content collections used for projects and writing.

## Stack

- Astro
- React
- TypeScript
- Tailwind CSS
- MDX
- Astro content collections
- GitHub Pages with GitHub Actions

## Development

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Run the production build and type/content checks:

```bash
npm run build
```

Preview the static build locally:

```bash
npm run preview
```

## Content Architecture

The site is organized so profile content can be updated without rewriting page components.

### Core data files

- `src/data/profile.ts`
  Personal identity, hero copy, biography, links, and positioning.
- `src/data/navigation.ts`
  Main site navigation.
- `src/data/research.ts`
  Signature themes, research directions, questions, and approach.
- `src/data/writing.ts`
  Writing themes and upcoming note placeholders.
- `src/data/contact.ts`
  Contact links and collaboration focus areas.
- `src/data/projects.ts`
  Section metadata for grouping the project archive.

### Collection content

- `src/content/projects/`
  Project and case-study entries.
- `src/content/blog/`
  Writing archive entries rendered as the `/writing/` section.

### Layout and UI

- `src/layouts/BaseLayout.astro`
  Global shell, SEO head, navbar, and footer.
- `src/components/`
  Reusable UI for home sections, project cards, writing cards, and layout elements.

## Site Map

- `/`
  Home
- `/research/`
  Research overview
- `/projects/`
  Project archive and case studies
- `/writing/`
  Essays, research notes, and technical reflections
- `/about/`
  Professional narrative and background
- `/contact/`
  Contact and collaboration page

Legacy `/blog/` routes are kept as noindex fallback pages that point visitors to `/writing/`.

## How To Update The Site

### Update identity and profile copy

Edit:

- `src/data/profile.ts`
- `src/lib/site.ts`

### Add or update a project

1. Create or edit a Markdown file in `src/content/projects/`
2. Fill in the frontmatter fields defined in `src/content.config.ts`
3. Optional: mark `featured: true` to surface the entry on the homepage

### Add or update a writing entry

1. Create or edit an MDX file in `src/content/blog/`
2. Fill in the required frontmatter
3. Published entries automatically appear on `/writing/` and in `rss.xml`

### Update visuals or styling

- `src/styles/global.css`
- `src/components/layout/`
- `src/components/home/`

## Deployment To GitHub Pages

This repository is already configured for GitHub Pages via GitHub Actions.

### One-time GitHub setup

1. Push the repository to GitHub
2. Open `Settings -> Pages`
3. Set `Source` to `GitHub Actions`

### Deploy

Push to `main`:

```bash
git add .
git commit -m "Update site"
git push origin main
```

The workflow in `.github/workflows/deploy.yml` will build and deploy the static site automatically.

## Notes

- Node.js `20.11+` is recommended
- The site is optimized for static deployment and does not require a server
- SEO metadata, Open Graph tags, sitemap generation, robots.txt, JSON-LD, and RSS are included
