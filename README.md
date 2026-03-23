# danodeamedia-next

This repository is the codebase behind my public portfolio site. The goal is not to be a feature-heavy product. It is a signal asset: a fast, maintainable site that explains who I am, shows selected work, and gives hiring managers enough context to decide whether a deeper conversation is worth having.

## What this project is solving

The original site had grown over time and mixed older patterns, dated copy, and portfolio content that did not always reflect current senior-level positioning. This rebuild keeps the scope narrow:

- present a clear personal narrative
- highlight selected projects and case-study style work
- keep the site easy to update without introducing unnecessary complexity

## Key decisions

- **Next.js App Router:** enough structure for a modern React codebase without turning the site into a larger application than it needs to be
- **Static export for GitHub Pages:** simple hosting, low operational overhead, and a deployment model that matches the project scope
- **Minimal component structure:** enough separation to keep homepage, portfolio, and resume content maintainable
- **Small-scope content updates:** copy and layout changes are intentionally iterative so the site can improve without frequent rewrites

## Tradeoffs

- The site favors simplicity over dynamic features or CMS complexity
- Content is curated manually rather than managed through a full editorial system
- Some sections remain intentionally lightweight because the priority is signal quality, not breadth

## Tech stack

- Next.js
- React
- TypeScript
- Static export via `output: "export"`
- EmailJS for contact form delivery

## Local development

### Requirements

- Node.js 20+
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build static export

```bash
npm run build
```

The generated site is written to `out/`.

### Preview production build

```bash
npm start
```

## Deployment

```bash
npm run deploy
```

## Environment variables

The contact form uses EmailJS. Create a `.env.local` with:

- `NEXT_PUBLIC_EMAIL_SERVICE_ID`
- `NEXT_PUBLIC_EMAIL_PUBLIC_KEY`
- `NEXT_PUBLIC_EMAIL_TEMPLATE`
