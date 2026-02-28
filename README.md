# Petrobolos Games Site

[![Netlify Status](https://api.netlify.com/api/v1/badges/da721fdb-dee8-40b7-aa95-375d39a34d0d/deploy-status)](https://app.netlify.com/projects/petrobolos/deploys)

Public source for the Petrobolos Games marketing website.

## Stack
- Eleventy (11ty)
- Tailwind CSS
- Netlify (deployment)

## Local development
Prerequisite: Node.js 20 (`.nvmrc`).

```bash
npm install
npm run serve
```

Local site: `http://localhost:8080`

## Build
```bash
npm run build
```

Output directory: `_site/`

## Content updates
Most game-facing content is data-driven from:
- `src/_data/game-library.js`

## Public repo notice
This repository is public for transparency and collaboration visibility.
The code and content remain proprietary and are **not open source**.

See [LICENSE](./LICENSE) for full terms and usage restrictions.
