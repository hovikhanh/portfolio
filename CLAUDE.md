# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## About

Personal portfolio site for Ho Vi Khanh — Next.js 16 (App Router), TypeScript, Tailwind CSS v4. Single-page portfolio (Hero/About/Experience/Projects/Skills) plus an MDX-backed blog and a contact form backed by an API route.

Résumé/profile content lives in `src/lib/content/profile.ts`, sourced from `documents/cv/`. Some fields (social/project URLs) are placeholders — see `documents/missing_info_template.md` for what's outstanding.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build (run `build` first)
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`)
- `npm run test` — unit tests (Vitest); `npm run test:watch` for watch mode
- `npm run test:e2e` — Playwright e2e tests (builds and serves the app first, see `playwright.config.ts`)
- `npm run new-post -- "Post Title"` — scaffold a new `src/content/blog/<slug>.mdx` file

Single test file: `npx vitest run src/components/ui/Button.test.tsx`. Single e2e test: `npx playwright test tests/e2e/home.spec.ts`.

## Architecture

- **App Router in `src/`**: routes live under `src/app/`. The `@/*` import alias maps to `src/*`.
  - `src/app/page.tsx` composes the section components (Hero → About → Experience → Projects → Skills → BlogPreview → Contact) from `src/components/features/`.
  - `src/app/blog/page.tsx` and `src/app/blog/[slug]/page.tsx` render the blog index and posts.
  - `src/app/api/contact/route.ts` validates and forwards contact-form submissions.
- **Components**: `src/components/ui/` holds generic presentational primitives (`Button`, `Card`, `Badge`); `src/components/features/` holds the page sections; `src/components/layout/` holds site chrome (`Nav`, `Footer`).
- **Content as data, not a DB**: there's no database. `src/lib/content/profile.ts` exports typed, hand-authored résumé data (experience, projects, skills, education, etc.) consumed directly by the section components. `src/lib/content/blog.ts` reads/parses MDX files from `src/content/blog/*.mdx` (gray-matter frontmatter + `next-mdx-remote/rsc` for rendering) — this is the structural equivalent of the `lib/repos` layer in a DB-backed app.
- **Styling**: Tailwind CSS v4 via PostCSS — no `tailwind.config.*`; theme tokens (`--background`, `--surface`, `--foreground`, `--border`, `--accent`) are defined in `src/app/globals.css` via `@theme inline`. The site commits to a permanent dark "developer" aesthetic (no light-mode media query) with Geist Sans/Mono fonts. `@tailwindcss/typography` styles MDX post bodies (`prose prose-invert`).
- **Testing**: Vitest + Testing Library for unit tests (co-located `*.test.tsx`, config in `vitest.config.ts`), Playwright for e2e (`tests/e2e/`, fixtures in `tests/fixtures/`).
- **Next.js version note**: this repo pins Next.js 16.x, which the imported `AGENTS.md` above flags as having breaking changes vs. older training data (e.g. `params` is a `Promise` in dynamic routes — see `src/app/blog/[slug]/page.tsx` for the `PageProps<'/route'>` typing pattern). Check `node_modules/next/dist/docs/` before relying on prior Next.js knowledge.

## Branching

See `CONTRIBUTING.md` — `master` (production) ← `release/*` ← `dev` (integration) ← `feature/*` / `debugfix/*`. Run lint + test + build before merging into `dev`.
