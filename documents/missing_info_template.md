# Missing info to fill in

Everything from your CV (`documents/cv/main_techlab_pentester-intern.pdf`) is already wired into `src/lib/content/profile.ts`. The items below are things that CV doesn't contain, or that need a decision from you. Fill in the blanks and send them back — I'll drop them straight into the code at the file/field noted.

## 1. Social & contact links
`src/lib/content/profile.ts` → `profile.socials`

- GitHub profile URL: `https://github.com/___`
- LinkedIn profile URL: `https://www.linkedin.com/in/___`
- Show phone number (+84 869 008 902) on the site? yes / no
- Any other links to include (X/Twitter, Medium, personal site, CTF profile like CTFtime/HackTheBox/TryHackMe)? ___

## 2. Project links
`src/lib/content/profile.ts` → `projects[].repoUrl` / `demoUrl`

- **Macro Malware Detection Tool** — repo URL: ___
- **Phishing Website Detection System** — repo URL: ___
- **Web Pentest Labs** — repo/write-up URL (optional, CV didn't link one): ___
- **Network Configuration & Domain System Administration** — repo/write-up URL (optional): ___

## 3. Photo / avatar (optional)
Currently there's no headshot on the site. If you want one, send an image file (or a path) and say where you'd like it (hero section, nav, etc.).

## 4. Resume download (optional)
Want a "Download résumé" button linking to the PDF in `documents/cv/`? If yes, should it be the exact PDF you gave me, or a version with personal info (phone) redacted for public download?

## 5. Blog posts
`src/content/blog/*.mdx` — there's currently one placeholder post (`hello-world.mdx`). Options:
- Give me real posts to write in now (topic + rough notes), or
- Delete the placeholder and add posts yourself later with `npm run new-post -- "Post Title"`.

## 6. Deployment target
Where is this going to be hosted (Vercel, Netlify, self-hosted, GitHub Pages, etc.)? This affects whether the `/api/contact` route (which needs a Node server) can be used as-is.

## 7. Domain / site metadata (optional)
- Site URL (for metadata/SEO, e.g. `https://vikhanh.dev`): ___
- Any preference on the page `<title>` beyond "Ho Vi Khanh — Information Security Graduate — Offensive Security"?
