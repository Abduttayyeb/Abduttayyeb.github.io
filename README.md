# Abduttayyeb Mazhar — Portfolio

A React + Vite + Tailwind portfolio site.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it with `npm run preview`.

## Where to edit things

- `src/data/content.js` — your name, role, bio blurb, links, email, resume URL,
  services list, and stats.
- `src/data/projects.js` — the project cards. Add a `link` and/or `github` URL
  to any project to show its buttons; leave them empty to hide the buttons.
- `src/components/Projects.jsx` — the `ProjectVisual` component renders a
  placeholder (terminal-style for data projects, browser-frame for product
  ones). Swap in a real screenshot with an `<img src="..." />` once you have
  one — drop image files in `public/` and reference them as `/your-image.png`.
- `src/components/Hero.jsx` — the circular monogram is a placeholder for a
  real headshot. Replace the monogram `<div>` block with an `<img>` if you'd
  like a photo instead.
- `src/components/Contact.jsx` — the form currently opens the visitor's email
  client via a `mailto:` link (no backend). Swap `handleSubmit` for a real
  form service (Formspree, Resend, your own API route) when you're ready to
  collect submissions properly.
- Colors, fonts: `tailwind.config.js` (theme tokens) and `index.html` (Google
  Fonts import).

## Deploying

This is a static site after `npm run build`. It deploys cleanly to:
- **Vercel / Netlify**: connect the repo, build command `npm run build`,
  output directory `dist`.
- **GitHub Pages**: run `npm run build`, then push the contents of `dist/` to
  a `gh-pages` branch (or use the `gh-pages` npm package / a GitHub Action).
