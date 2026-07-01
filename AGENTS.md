# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single static frontend: a React 18 + TypeScript + Vite 5 SPA (personal portfolio, `alexberger.dev`). Styling is Tailwind CSS; routing uses `react-router-dom`. There is no backend, database, or environment variables.

Standard commands are defined in `package.json` (`dev`, `build`, `lint`, `preview`). Use those; nothing custom is needed.

- Dev server: `npm run dev` serves the SPA at http://localhost:5173.
- Routing note: `react-router-dom` uses `BrowserRouter`. The site home (`Development` page) is at `/`; other routes include `/design`, `/illustration`, `/about`, `/resume`, plus per-project detail slugs. On production (Netlify) all paths redirect to `/` (see `netlify.toml`); in local dev, Vite serves any path.
- External embeds: the Motion/Design pages embed Vimeo players and the Resume page embeds a published Google Doc. These require internet access; the rest of the site renders fine without them.
- `npm run build` runs `tsc -b` then `vite build`, so it also acts as a type-check.
