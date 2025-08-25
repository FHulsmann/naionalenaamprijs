# De Nationale Naamprijs — Website

Next.js (App Router) + Tailwind + Netlify Forms.

## Snel starten
```bash
npm i
npm run dev
```

## Deploy naar Netlify
1. Push naar GitHub.
2. In Netlify: **New site from Git** → Repo kiezen.
3. Build command: `npm run build` — Publish directory: `.next`.
4. Plugin: `@netlify/plugin-nextjs` (staat in `netlify.toml`).

## Forms
- Newsletter: `updates` (POST → /dankje)
- Inzending: `inzending` (POST → /dankje)
- Beide hebben honeypot `bot-field` en hidden `form-name`.
