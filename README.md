# Portfolio

Personal portfolio site for Ho Vi Khanh — built with Next.js (App Router), TypeScript, and Tailwind CSS v4. Includes an MDX-backed blog and a contact form.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command                        | Description                          |
| ------------------------------- | ------------------------------------- |
| `npm run dev`                   | Start the dev server                  |
| `npm run build`                 | Production build                      |
| `npm run start`                 | Serve the production build            |
| `npm run lint`                  | ESLint                                |
| `npm run test`                  | Unit tests (Vitest)                   |
| `npm run test:watch`            | Unit tests in watch mode              |
| `npm run test:e2e`              | End-to-end tests (Playwright)         |
| `npm run new-post -- "Title"`   | Scaffold a new blog post              |

## Content

- Profile/résumé data: `src/lib/content/profile.ts` — see `documents/missing_info_template.md` for what's still a placeholder.
- Blog posts: `src/content/blog/*.mdx` (frontmatter: `title`, `description`, `date`, `tags`, `draft`).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the branching model and pre-PR checklist.

## Deploy

The easiest way to deploy is [Vercel](https://vercel.com/new) — the `/api/contact` route needs a Node server, so a purely static host (e.g. GitHub Pages) won't support the contact form as-is.
