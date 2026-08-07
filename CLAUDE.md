# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## About

Personal portfolio site scaffolded with `create-next-app` (Next.js 16, App Router, TypeScript, Tailwind CSS v4). This is a fresh scaffold — `src/app/page.tsx` still holds the default starter content and has not yet been built out into real portfolio sections.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build (run `build` first)
- `npm run lint` — run ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next`'s core-web-vitals + typescript rules)

No test framework is configured yet.

## Architecture

- **App Router in `src/`**: routes/pages/layouts live under `src/app/`. The `@/*` import alias maps to `src/*` (`tsconfig.json`).
- **Styling**: Tailwind CSS v4 via PostCSS (`postcss.config.mjs`, `@tailwindcss/postcss`) — there is no `tailwind.config.*` file. Theme customization goes in `src/app/globals.css` using v4's CSS-based `@import "tailwindcss"` / `@theme` approach, not a JS config object.
- **Fonts**: Geist Sans/Mono are loaded via `next/font/google` in `src/app/layout.tsx` and exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`) consumed in `globals.css`.
- **Next.js version note**: this repo pins Next.js 16.x, which the imported `AGENTS.md` above flags as having breaking changes vs. older training data. Before writing Next.js-specific code (routing, data fetching, config), check the version-specific docs bundled at `node_modules/next/dist/docs/` rather than relying on prior knowledge.
