# Personal Portfolio — Liquid Glass

A responsive personal portfolio built with **React + Vite**, styled around a
glassmorphism / liquid design language: frosted glass panels floating over
slow, morphing gradient blobs.

## ✨ Features

- Fully responsive layout (mobile, tablet, desktop)
- Glassmorphism UI with animated, morphing gradient blobs as a signature
  background element
- Scroll-triggered reveal animations (respects `prefers-reduced-motion`)
- Animated skill bars, timeline, and project gallery
- Sticky glass navbar with a mobile menu
- All content driven from a single data file — no need to touch component
  code to personalize it
- Clean, semantic HTML and organized component structure

## 🗂️ Project structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Composes all sections
    ├── index.css             # Design tokens, glass/blob styles, globals
    ├── data/
    │   └── portfolioData.js  # 👉 EDIT THIS to personalize the site
    ├── hooks/
    │   └── useReveal.js      # Scroll-reveal IntersectionObserver hook
    └── components/
        ├── LiquidBackground.jsx / .css
        ├── Navbar.jsx / .css
        ├── Hero.jsx / .css
        ├── About.jsx / .css
        ├── Skills.jsx / .css
        ├── Experience.jsx / .css
        ├── Projects.jsx / .css
        ├── Contact.jsx / .css
        └── Footer.jsx / .css
```

## 🚀 Getting started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build → outputs to /dist
npm run preview   # preview the production build locally
```

## ✏️ Making it yours

Open **`src/data/portfolioData.js`**. Every piece of content on the site —
name, title, bio, stats, skills, experience, projects, and contact info —
lives there. Replace the placeholder values with your real information and
the whole site updates automatically.

To add real project screenshots: drop images in `public/projects/`, then set
`image: "/projects/yourfile.png"` on the relevant project entry.

To change the color palette, edit the CSS custom properties at the top of
`src/index.css` (`--blob-violet`, `--blob-cyan`, `--accent`, etc.).

## 🌐 Deploying

**Vercel**
1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: Vite. Build command: `npm run build`. Output dir: `dist`.
4. Deploy.

**Netlify**
1. Push to GitHub, then "Add new site" → "Import an existing project" on
   [netlify.com](https://app.netlify.com).
2. Build command: `npm run build`. Publish directory: `dist`.

**GitHub Pages**
1. `npm install -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
3. Set `base: '/your-repo-name/'` in `vite.config.js`.
4. `npm run build && npm run deploy`

## 📄 License

Free to use and adapt for your own portfolio.
