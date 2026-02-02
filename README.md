# danodeamedia-next

Personal site built with Next.js (App Router) and exported as a static site for GitHub Pages.

## Requirements

- Node.js 20+
- npm

## Install

```bash
npm install
```

## Run (dev)

```bash
npm run dev
```

Open http://localhost:3000

## Build (static export)

```bash
npm run build
```

This repo uses `output: "export"` in `next.config.ts`, so the static site is generated into `out/`.

## Preview (local)

```bash
npm start
```

## Deploy (GitHub Pages)

```bash
npm run deploy
```

## Environment variables

The contact form uses EmailJS. Create a `.env.local` with:

- `NEXT_PUBLIC_EMAIL_SERVICE_ID`
- `NEXT_PUBLIC_EMAIL_PUBLIC_KEY`
- `NEXT_PUBLIC_EMAIL_TEMPLATE`
