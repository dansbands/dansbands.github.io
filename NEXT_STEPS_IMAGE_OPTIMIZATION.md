# Next Steps: Image Optimization Follow-up

This file tracks follow-up work that was intentionally deferred from the merged image-loading PRs.

## 1) Generate optimized derivatives for largest assets
- [ ] Identify the heaviest source images currently shipped (hero + portfolio tiles).
- [ ] Generate WebP (and optionally AVIF) derivatives at practical breakpoints (e.g., 640, 960, 1280, 1600).
- [ ] Keep original files only where needed for compatibility; otherwise switch imports to optimized derivatives.

## 2) Finish converting decorative CSS backgrounds to content images
- [ ] Audit remaining `background: url(...)` usage in `app/styles.css`.
- [ ] For sections that are visually content-like (not pure decoration), move image rendering into JSX using `next/image` with `sizes`.
- [ ] Keep a fallback background color to avoid blank paint during image load.

## 3) Complete app-wide image metadata audit
- [ ] Ensure all `next/image` components have explicit dimensions and sensible `sizes`.
- [ ] Confirm only above-the-fold critical images use `priority`.
- [ ] Standardize alt text quality (decorative images should use empty alt).

## 4) Measure impact and guard regressions
- [ ] Run Lighthouse before/after snapshots on key routes (`/`, `/portfolio`, `/resume`).
- [ ] Record LCP/CLS/transfer-size deltas in PR notes.
- [ ] Add a lightweight recurring check (manual checklist or CI step) for oversized assets.

## 5) Optional maintenance follow-up
- [ ] Migrate from deprecated `next lint` command to ESLint CLI before Next.js 16.

