# research-portfolio

A minimal Astro research portfolio for GitHub Pages, built with React islands, Tailwind CSS, MDX, Astro content collections, and a lightweight React Three Fiber hero.

## Tech Stack

- Astro
- React
- Tailwind CSS
- MDX
- Astro content collections
- React Three Fiber
- GitHub Pages + GitHub Actions

## Local Development

1. Install Node.js 20 or newer.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Content Editing

- Blog posts live in `src/content/blog/`
- Projects live in `src/content/projects/`
- Personal profile data lives in `src/data/profile.ts`
- Site metadata lives in `src/lib/site.ts`

## Deployment

This repo is configured for GitHub Pages using GitHub Actions. Push to `main` after enabling:

1. `Settings -> Pages`
2. `Build and deployment -> Source -> GitHub Actions`

The workflow in `.github/workflows/deploy.yml` will build the Astro site and deploy it automatically.
