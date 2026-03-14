# MarkShelf Website

The official project website for [MarkShelf](https://github.com) — an intelligent bookmark manager Chrome extension.

## Tech Stack

- **Static Site Generator**: [Astro](https://astro.build) 5.x
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4
- **Internationalization**: Path-based i18n (`/en/`, `/zh/`)
- **Deployment**: GitHub Pages

## Pages

| Page | EN | ZH |
|------|-----|-----|
| Home (Features) | `/en/` | `/zh/` |
| Privacy Policy | `/en/privacy/` | `/zh/privacy/` |
| Donate | `/en/donate/` | `/zh/donate/` |

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Deployment

This site is deployed automatically via GitHub Actions on push to `main` branch.

### Setup

1. Create a new **public** GitHub repository (e.g., `markshelf-site`)
2. Push this directory to the repository
3. Go to **Settings → Pages → Source** → select **GitHub Actions**
4. Update `astro.config.mjs`:
   - Set `site` to `https://<your-username>.github.io`
   - Set `base` to `/<repo-name>` (e.g., `/markshelf-site`)
5. Push to `main` — the site will be built and deployed automatically

### Manual Deploy

```bash
pnpm build
# The dist/ folder is ready to be deployed
```

## Project Structure

```
site/
├── .github/workflows/deploy.yml   # GitHub Actions workflow
├── public/                         # Static assets (favicon, logo)
├── src/
│   ├── assets/screenshots/         # Product screenshots
│   ├── components/                 # Astro components
│   ├── i18n/                       # Translations & utils
│   ├── layouts/                    # Page layouts
│   ├── pages/                      # Route pages
│   │   ├── en/                     # English pages
│   │   └── zh/                     # Chinese pages
│   └── styles/                     # Global CSS
├── astro.config.mjs                # Astro configuration
├── package.json
└── tsconfig.json
```

## License

Copyright © 2026 MarkShelf. All rights reserved.
