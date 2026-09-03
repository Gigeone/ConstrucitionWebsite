# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (Turbopack) at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (flat config, eslint-config-next core-web-vitals)
```

There is no test suite configured in this repo.

## Architecture

Next.js 16 App Router site (TypeScript, React 19, Tailwind CSS v4) for **Finéo** (formerly "Momo Renov'"), a home-renovation business in Nantes, France. It is a single-page marketing site plus two static legal pages — there is no backend, database, or API layer.

- **`app/page.tsx`** composes the entire homepage as one column of section components in a fixed order (`Header → Hero → About → Services → Porfolio → Working → Faq → Testimonials → Contact → Footer`), each wrapped in `MotionProvider`. Sections are plain components, not routed — in-page navigation is via hash anchors (`#hero`, `#about`, `#services`, `#projects`, `#contact`) defined in `Header.tsx`'s `navItems`. When adding/reordering a homepage section, update both the composition in `page.tsx` and the anchor id/nav entry.
- **`app/components/`** — one file per homepage section (note: `Porfolio.tsx` is misspelled but is the actual filename in use) plus shared pieces: `MotionProvider.tsx` (wraps the app in framer-motion's `LazyMotion`/`domAnimation` so individual sections can use the lightweight `m.*` components instead of `motion.*`), and `LegalLayout.tsx` (shared chrome for the legal pages).
- **`app/utils/export.ts`** is the single content/data source for the site: services, planning steps, FAQ entries, and client testimonials are all plain arrays exported from here and imported by the corresponding section components. Editing site copy/content for these sections means editing this file, not the components.
- **`app/utils/animation.ts`** holds the two shared framer-motion `Variants` (`slideUpVariants`, `zoomInVariants`) reused across sections for scroll-triggered `whileInView` animations.
- **Legal pages** (`app/mentions-legales/`, `app/confidentialite/`) are static routed pages that reuse `LegalLayout` for consistent header/footer and each declare their own page-level `Metadata`.
- **SEO/metadata** is centralized: `app/layout.tsx` sets the root `Metadata` and injects a `HomeAndConstructionBusiness` JSON-LD block; `app/page.tsx` additionally injects `FAQPage` JSON-LD built from the `faqs` array; `app/sitemap.ts` and `app/robots.ts` are Next.js metadata route handlers. The canonical site URL (`https://momorenov.fr`) is hardcoded separately in `layout.tsx` and `sitemap.ts`.
- **Styling**: Tailwind v4 via `@import "tailwindcss"` in `app/globals.css`, with the design system (colors `accent`/`accent-dark`/`ink`/`ink-soft`/`paper`/`sand`, fonts `--font-sans` (Figtree) / `--font-heading` (Fraunces)) defined in a `@theme` block there rather than a `tailwind.config`. Use these theme tokens (e.g. `text-ink/70`, `bg-accent`) rather than raw Tailwind palette colors to stay consistent with the rest of the site.
- Fonts are loaded via `next/font/google` in `app/layout.tsx` (Figtree, Fraunces) and exposed as CSS variables consumed by the `@theme` block.
- Content is French (`lang="fr"`); copy throughout components and `export.ts` is written in French — keep new copy consistent with that.
