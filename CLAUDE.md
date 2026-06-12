# chiragch.com — Portfolio Project

## Project Overview
Personal portfolio website for Chirag Chandrashekar (Yashuchirag on GitHub).
Deployed on Netlify free tier at chiragch.com.

## Stack
- **Framework:** Vite + React 18 (migrating from Create React App)
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion (replacing AOS)
- **Icons:** react-icons
- **Deployment:** Netlify free tier (static site, no SSR)

## Key Decisions & Preferences
- Design: "Terminal Engineer" theme (June 2026 redesign). Dark green-on-black terminal aesthetic, JetBrains Mono, every section heading is a shell command plus a large plain-English title.
- Single long-scroll page — no React Router, no fake page state switching
- Smooth anchor navigation with scroll-spy for active nav highlighting
- Hero contains a live interactive terminal: visitors type or click commands (help, projects, resume, ask <question>, etc.). `ask` routes to the Groq-backed `/api/ask` Netlify function (`netlify/functions/ask.js`).
- AskPanel (floating AI chat bubble) uses the same `/api/ask` endpoint
- Theme tokens live in `@theme` in `src/styles/index.css` (term/panel/deep/line/neon/mint/amber/fg/fg-soft/fg-dim). Use those utilities, not raw hex in components.
- Contrast rule: body copy uses fg-soft or brighter; fg-dim is for decorative comments only
- EmailJS integration is skipped — contact section uses mailto link + social links only
- No `@react-pdf/renderer` or `react-pdf` — resume is a static PDF in `public/`
- No axios — was only used for raw EmailJS HTTP calls which are now removed

## File Structure
```
src/
  main.jsx              # Vite entry
  App.jsx               # Layout shell only
  components/
    AskPanel.jsx        # Floating AI chat (Groq via /api/ask)
    layout/             # Header, Footer
    sections/           # One file per page section (Hero holds the interactive terminal)
    ui/                 # Backdrop, TerminalWindow, SectionHeading
  data/                 # Content data files (do not add logic here)
  utils/                # Hooks and helpers
  styles/               # index.css with Tailwind @theme tokens + keyframes only
netlify/
  functions/ask.js      # Groq-backed Q&A endpoint, proxied as /api/ask
public/
  chirag_1.jpg          # Profile photo
  Chirag_Resume.pdf     # Resume (linked directly, not rendered in-app)
```

## Content Data Files
- `src/data/Experience.js` — Work history (Glenysys, Accenture, CU Boulder TA)
- `src/data/Projects.js` — Projects (Netflix Clone, AI App, Volunteer Mgmt, etc.)
- `src/data/Skills.js` — Skill categories and tags
- `src/data/Education.js` — Education history

## Netlify Config
- Build command: `npm run build`
- Publish dir: `dist` (Vite output — NOT `build`)
- Node version: 20
- No env vars required (EmailJS removed)

## Code Style
- Use `.jsx` extension for all React components
- Functional components only, no class components
- Tailwind utility classes preferred over custom CSS
- Framer Motion `whileInView` + `viewport={{ once: true }}` for scroll animations
- Keep data files pure — no imports, no JSX, just exported arrays/objects

## Things to Avoid
- Do not add `useState` page routing (was the old broken pattern)
- Do not use AOS (`data-aos` attributes) — replaced by Framer Motion
- Do not use axios — removed dependency
- Do not add `REACT_APP_*` env vars — Vite uses `VITE_*` prefix
- Do not create new CSS files for individual components — use Tailwind
- Do not add progress bar skill charts — they look junior and are meaningless
- Do not mock EmailJS or add form submission without a real working service

## Deployment Notes
- Netlify free tier: 300 build minutes/month, 100GB bandwidth
- SPA redirect rule in `netlify.toml` handles direct URL visits
- Resume PDF served as static file from `public/` — no in-app PDF rendering
