# UW–Madison Statistics Club Website

Static marketing site for a UW–Madison student org, built with [Astro](https://astro.build).
No backend, no database — content lives in `src/data/*.js` as plain JS objects/arrays.

## Commands

- `npm install` — install dependencies
- `npm run dev` — local dev server with hot reload (default `http://localhost:4321`)
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/` locally

## Structure

- `src/pages/*.astro` — one file per route (file-based routing)
- `src/layouts/Layout.astro` — shared `<head>`, Nav, Footer wrapper used by every page
- `src/components/` — `Nav.astro`, `Footer.astro`
- `src/data/site.js` — site-wide constants (name, email, social links) and nav items
- `src/data/officers.js`, `events.js`, `resources.js` — editable content, kept separate from
  page markup so non-technical officers can update copy without touching layout code
- `src/styles/global.css` — CSS custom properties (Badger red theme) and shared classes
  (`.card`, `.btn`, `.section`, `.wrap`)

## Conventions

- The site deploys to GitHub Pages as an **org/user page** at the root domain
  (`uw-madison-statistics-club.github.io`, no `base` path in `astro.config.mjs`), since the repo is
  named `uw-madison-statistics-club.github.io`. Still build internal links with
  `import.meta.env.BASE_URL` rather than hardcoded absolute paths like `/about/` — it's `"/"`
  here, but keeps the code portable if the deploy target ever changes.
- Content edits (new officers, events, resource links) should go in `src/data/`, not inline
  in page files.
- No client-side framework (React/Vue) is installed — keep interactivity to small inline
  `<script>` tags (see `Nav.astro`'s mobile menu toggle) unless a real need for a UI
  framework comes up.

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on push to `main`.
