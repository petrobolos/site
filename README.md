# Petrobolos Games – Static Site (Eleventy + Tailwind)

This repository contains a responsive, accessible, SEO-friendly static website for Petrobolos Games, built with the Eleventy static-site generator and styled with Tailwind CSS utilities.

Note: All text content is placeholder (except the company name “Petrobolos Games”). All images use placeholders with approximate dimensions.

## Features
- Pages: Home, Our Games, About Us, Contact, Terms of Service, Privacy Policy
- Header with desktop nav and accessible mobile menu toggle (aria-expanded/aria-controls)
- Large hero section on Home with the “Petrobolos Games” name
- Project Nimbus section, Latest News cards
- Data-driven game content from a single source via `src/_data/game-library.js`
- Semantic HTML (header, nav, main, footer, section, article)
- Accessibility: alt text for images, keyboard-friendly menu, visible focus styles, skip link
- SEO: per-page title/description, canonical, Open Graph & Twitter metadata
- Tailwind CSS via CDN (minified) for a no-build CSS setup; easily switch to a local build if preferred
- Ready for Netlify (or similar) deployment

## Directory structure
```
.
├─ .eleventy.js               # Eleventy config
├─ netlify.toml               # Netlify build settings
├─ package.json               # Scripts: build / serve
├─ src/
│  ├─ _data/
│  │  ├─ site.json           # Site metadata, nav items, social links
│  │  ├─ game-library.js     # Canonical game data (catalog + featured + project pages)
│  │  ├─ games.js            # Derived games list for homepage/catalog templates
│  │  ├─ featured.js         # Derived featured game data for homepage
│  │  └─ projects/           # Derived project page payloads keyed by game id
│  ├─ _includes/
│  │  ├─ layouts/base.njk    # Base HTML layout with SEO and Tailwind
│  │  └─ partials/           # Header and footer includes
│  ├─ static/
│  │  └─ favicon.svg         # Simple favicon
│  ├─ index.njk              # Home
│  ├─ games.njk              # Our Games
│  ├─ about.njk              # About Us
│  ├─ contact.njk            # Contact
│  ├─ terms.njk              # Terms of Service
│  └─ privacy.njk            # Privacy Policy
└─ _site/                    # Build output (generated)
```

## Prerequisites
- Node.js 18+ (20 recommended)

## Install
No packages are required beyond Eleventy, which runs via npx in the scripts. However, running `npm install` will install a local Eleventy copy and helper tools.

```bash
npm install
```

## Develop
Start a local dev server with live reload:

```bash
npm run serve
```
- Server: http://localhost:8080 (Eleventy default)
- Edit templates in `src/` and refresh

## Build
Generate a production build to `_site/`:

```bash
npm run build
```

## Deploy to Netlify
1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Netlify, click “New site from Git” and connect your repo.
3. Build command: `npm run build`
4. Publish directory: `_site`
5. (Optional) Set your site URL in `src/_data/site.json` (`url`) for correct canonical/OG tags.

Netlify configuration is also included in `netlify.toml`.

## Using Tailwind CSS
This project uses the Tailwind CDN for simplicity, which serves a minified build. If you want a fully optimized, purged CSS bundle, you can switch to a local Tailwind build:

- Install: `npm i -D tailwindcss postcss autoprefixer @11ty/eleventy`
- Create `tailwind.config.js` and `postcss.config.js`
- Compile a CSS file and include it in `base.njk` instead of the CDN script

For the scope of this project, the CDN meets the requirements and keeps the setup minimal.

## Add/Update Games
Edit `src/_data/game-library.js` to add or update game entries.
- `catalog` fields drive the homepage and games catalog cards.
- `projectPage` fields drive an individual game page when that page exists.
- Platform availability should be declared in one place:
  - Detailed pages: `projectPage.platforms.items`
  - Games without detailed pages: `releasePlatforms`

`src/_data/games.js`, `src/_data/featured.js`, and `src/_data/projects/*.js` are derived from this single source.

## Accessibility notes
- Mobile menu button manages `aria-expanded` and controls the menu via `aria-controls`
- “Close Menu” action provided in the mobile panel
- Escape key closes the menu
- All images include `alt` text
- Skip link to `#main` content is provided

## SEO notes
- Titles follow the pattern: “Page – Petrobolos Games”
- Descriptions are set per page; defaults in `site.json`
- Open Graph/Twitter card use a placeholder image (update to real assets when available)

## Screenshots / Viewports
- Desktop: Width ~1440px – capture Home hero, navigation, and sections
- Mobile: Width 375–414px – open the mobile menu to show toggle behavior

You can use your browser’s device toolbar to capture screenshots. On Netlify, deploy previews can be tested across devices.

## Project metadata and conventions
- Node version: Node.js 20 (see .nvmrc). Netlify is also pinned to Node 20 via netlify.toml.
- EditorConfig: see .editorconfig for 2-space indents, UTF-8, LF line endings, final newline, and trailing whitespace rules (Markdown keeps trailing spaces).
- Git attributes: .gitattributes normalizes text files to LF and improves syntax highlighting for .njk (Nunjucks) templates on GitHub.
- Git ignore: .gitignore excludes build output (_site/), node_modules, logs, caches, environment files, and OS/editor artifacts.

## License
This project is proprietary. Copyright (c) 2025 Petrobolos Games. All rights reserved.

See the LICENSE file for full terms. No redistribution or external commercial use is permitted without prior written authorization from Petrobolos Games.


## Recent changes
- 2025-09-23: Added project metadata files: .editorconfig, .gitignore, LICENSE (proprietary), .nvmrc, and .gitattributes. Updated README with development conventions and licensing details.
- 2025-09-23: Replaced the footer newsletter segment with a simple vertical list of social media platforms (Twitter, Facebook, LinkedIn, GitHub). Each item includes a black/white icon sourced from the Simple Icons CDN (https://cdn.simpleicons.org). Update your social URLs in `src/_data/site.json` under `social`.
