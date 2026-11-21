# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Everyday browser users on Chrome, Firefox, and Edge who accumulate large bookmark collections and want a clean, private, AI-assisted way to organize, search, and maintain them—without surrendering data to a third-party cloud service or losing control of their browser New Tab. Secondary technical users can optionally connect local AI agents via Companion CLI / MCP.

## Product Purpose

MarkShelf's official website introduces the extension, proves how it transforms messy browser bookmarks into a searchable, structured personal library, and guides visitors to install it on their browser (Chrome Web Store, Firefox Add-ons, Edge coming soon), understand its local-first privacy architecture, or support development.

## Positioning

Local-first, reversible bookmark intelligence:
- **Non-intrusive entry**: Opens from the extension Popup for instant search and saving, with a dedicated full-page manager (`index.html`)—never hijacks the browser New Tab.
- **Full-text offline snapshots & semantic search**: Automatically captures page content excerpts/snapshots locally into IndexedDB and combines keyword, tag, folder, and on-device/provider semantic search.
- **Human-in-the-loop safety**: AI restructuring and optional external Agent edits (via Native Messaging Companion CLI / MCP) always preview in a side-by-side Pending Diff queue with full Undo support—never silently mutating bookmarks.
- **BYO AI & Privacy Mode**: All bookmarks and snapshots stay in browser IndexedDB; Privacy Mode strips URL paths/queries to domain-only before calling user-chosen AI providers.

## Operating Context

- Static bilingual marketing & documentation site (`en` / `zh`) built with Astro 5 + Tailwind CSS v4 and deployed to GitHub Pages (`https://wayjam.github.io/markshelf-site`, base `/markshelf-site`).
- Primary visitor routes: Home (`/{lang}/`), Get Started (`/{lang}/get-started/`), Privacy Policy (`/{lang}/privacy/`), Donate (`/{lang}/donate/`).
- Browser store distribution controlled dynamically in `src/config.ts` (Chrome live, Firefox live, Edge `#` = coming soon).

## Capabilities and Constraints

- Preserve existing Astro + Tailwind v4 stack, bilingual routing (`/en/`, `/zh/`), GitHub Pages `base: '/markshelf-site'` path handling, and `src/config.ts` store/social/crypto donation data.
- Update outdated v0.1 copy/screenshots (e.g., remove "replaces your new tab" claim; reflect v0.2.4 Popup + full-page manager, page content snapshots, and optional Agent Bridge + Pending Diff approval while keeping everyday browser users as primary audience).
- Privacy Policy must accurately reflect local IndexedDB storage (`bookmarks`, `bookmarkContent`, `bookmarkTags`, `embeddings`, `pendingDiffs`, `auditLogs`), Privacy Mode URL sanitization, and extension permissions (`bookmarks`, `storage`, `alarms`, `contextMenus`, `tabs`, `scripting`, plus optional `nativeMessaging` if applicable—stick to verified manifest permissions unless documented).
- No invented testimonials, user counts, enterprise logos, or unverified browser availability.

## Brand Commitments

- Name: **MarkShelf**
- Existing logo mark: `/Users/wayjamsu/Code/markshelf-site/public/logo.png` (and favicon `/Users/wayjamsu/Code/markshelf-site/public/favicon.png`)
- Extension UI brand cues (for brand harmony, not mandatory dark/light lock): graphite-indigo (`#344171`), steel-blue (`#4068BF`), ice-blue (`#5A9BD6`), warm amber highlight (`#E8730A`).

## Evidence on Hand

- Real Chrome Web Store & Firefox Add-ons URLs in `src/config.ts`
- Real donation links (Buy Me a Coffee + BTC/SOL/USDC addresses) in `src/config.ts`
- Existing extension screenshots in `src/assets/screenshots/` (`home.png`, `orangize.png`, `export.png`, `healthcheck.png`, `settings-provider.png`, `settings-skills.png`)—note `home.png` caption currently says "new tab" and may need updated framing/capture or refreshed UI demonstration
- Live extension repo at `/Users/wayjamsu/Code/markshelf` (v0.2.4) as factual source of truth for features, UI, and architecture

## Product Principles

1. **Clarity for everyday users first**: Lead with tangible bookmark pain points (finding, organizing, cleaning, keeping private) and keep developer/MCP capabilities in a calm secondary tier.
2. **Show the mechanism, not abstract claims**: Let visitors see how Popup search, Diff preview, content snapshots, and Undo actually work.
3. **Trust through transparency**: State local storage, BYO AI keys, URL sanitization, and human approval plainly without hype.
4. **Refined bilingual parity**: Keep English and Simplified Chinese copy idiomatic, balanced in density, and synchronized across all routes.
