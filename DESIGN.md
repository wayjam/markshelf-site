---
name: MarkShelf Official Site
description: Crisp daylight software studio system harmonized with MarkShelf's squircle emblem and light extension UI.
colors:
  studio-bg: "#F3F6FA"
  studio-bg-deep: "#EAEFF7"
  studio-surface: "#FFFFFF"
  studio-surface-subtle: "#F8FAFD"
  studio-ink: "#11182C"
  studio-ink-soft: "#4B5673"
  studio-ink-muted: "#76829D"
  brand-indigo: "#25345F"
  brand-indigo-hover: "#1C284B"
  lightbox-scrim: "rgba(0, 0, 0, 0.45)"
  brand-cobalt: "#3558B6"
  brand-ice: "#89AEFA"
  brand-amber: "#DF6114"
  brand-emerald: "#15803D"
typography:
  display:
    fontFamily: "'Geist Variable', 'Geist', -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Geist Variable', 'Geist', -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "-0.03em"
  body:
    fontFamily: "'Geist Variable', 'Geist', -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  ui-sm:
    fontFamily: "'Geist Variable', 'Geist', -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif"
    fontSize: "15px"
    fontWeight: 600
  body-lead:
    fontFamily: "'Geist Variable', 'Geist', -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
  body-compact:
    fontFamily: "'Geist Variable', 'Geist', -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif"
    fontSize: "13px"
    fontWeight: 400
  nav-link:
    fontFamily: "'Geist Variable', 'Geist', -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif"
    fontSize: "13px"
    fontWeight: 500
  micro:
    fontFamily: "'Geist Mono Variable', 'Geist Mono', ui-monospace, SFMono-Regular, monospace"
    fontSize: "11px"
    fontWeight: 400
  mono:
    fontFamily: "'Geist Mono Variable', 'Geist Mono', ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  md: "8px"
  lightbox: "14px"
  lg: "12px"
  xl: "16px"
  window: "20px"
  pill: "9999px"
spacing:
  section-y: "6rem"
  card-p: "1.5rem"
  gutter: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.brand-indigo}"
    textColor: "{colors.studio-surface}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.studio-surface}"
    textColor: "{colors.studio-ink}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  studio-card:
    backgroundColor: "{colors.studio-surface}"
    rounded: "{rounded.xl}"
    padding: "24px"
---

# Design System: MarkShelf Official Site

## Overview

**Creative North Star: "Crisp Daylight Software Studio"**

MarkShelf's website pairs calm, airy daylight surfaces (`#F3F6FA` and `#FFFFFF`) with high-precision typographic hierarchy and interactive product demonstration. Rather than relying on generic dark-mode neon gradients, the site draws its color authority directly from MarkShelf's squircle emblem (`#25345F` deep indigo + `#89AEFA` ice blue) and its clean daylight extension UI.

**Key Characteristics:**
- Airy cool-slate daylight canvas (`#F3F6FA`) punctuated by crisp white cards and windows (`#FFFFFF`).
- Self-hosted `Geist Variable` geometric sans with tight display tracking (`-0.035em`) paired with `Geist Mono Variable` for domains, folder paths, permissions, and wallet addresses.
- Real interactive product workbench above the fold (live Popup search filtering + Diff review approval/undo) and uncropped `3024×1646` extension screenshots.
- Deep brand-indigo callout surface (`#192444`) reserved exclusively to distinguish the optional developer Companion CLI / MCP bridge from everyday browser workflows.

## Colors

The palette balances cool-neutral readability with high-contrast brand indigo actions and restrained semantic accents.

### Primary
- **Squircle Indigo** (`#25345F`): Primary CTA pills, active filter chips, and focal brand identity.
- **Cobalt Blue** (`#3558B6`): Capability icons, permission badges, and focus rings.
- **Ice Blue** (`#89AEFA`): Soft top-viewport atmospheric wash and highlight badges inside the dark-indigo Agent Bridge callout.

### Semantic Accents
- **Signal Amber** (`#DF6114`): Tag additions (`+local-first`), semantic match badges, and Buy Me a Coffee icon frame.
- **Verification Emerald** (`#15803D`): Page snapshot match pills, Diff approval additions, and copy confirmation state.

### Neutral
- **Studio Alabaster** (`#F3F6FA`) / **Alabaster Deep** (`#EAEFF7`): Alternating page canvas and subtle pill tracks.
- **Studio White** (`#FFFFFF`) / **Subtle Tint** (`#F8FAFD`): Elevated cards, window frames, and secondary interactive surfaces.
- **Deep Ink** (`#11182C`) / **Soft Slate** (`#4B5673`) / **Muted Slate** (`#76829D`): High-contrast headings, body text, and metadata.

## Typography

**Display & UI Font:** `Geist Variable` (self-hosted via `@fontsource-variable/geist`, falling back to system/CJK sans).
**Mono Font:** `Geist Mono Variable` (self-hosted via `@fontsource-variable/geist-mono`).

### Hierarchy
- **Display** (`600`, `48px` / `3rem`, `1.12`, `-0.035em`): Hero headline only.
- **Headline** (`600`, `36px` / `2.25rem`, `1.18`, `-0.03em`): Section headings (`#workflow`, `#features`, `#screenshots`, subpage `h1`).
- **Title** (`600`, `18px`, `1.35`, `-0.02em`): Pillar and card titles.
- **Body** (`400`, `16px`, `1.6`): Descriptions and policy prose (capped around `58ch–68ch`).
- **Mono Label** (`400`, `11px–12px`): Domains, folder diffs, permission names, and crypto wallet addresses.

## Layout

- Centered `max-w-5xl` (`1024px`) for focused Hero / Install / CTA bands and `max-w-6xl` (`1152px`) for multi-column capability bento and screenshot showcase; `max-w-3xl` (`768px`) for the Privacy Policy reading column.
- Alternating full-bleed surface rhythm (`#F3F6FA` canvas -> `#FFFFFF` Workflow & Screenshots -> `#F3F6FA` Capabilities & Closing CTA) separated by 1px hairline borders (`rgba(17, 24, 44, 0.08)`).

## Elevation & Depth

Surfaces combine crisp `1px` borders with subtle directional drop shadows—no neon blurs or zero-offset colored glows.
- **Studio Card** (`.studio-card`): `border: 1px solid rgba(17, 24, 44, 0.08)` + `0 1px 2px rgba(17, 24, 44, 0.03), 0 8px 24px -6px rgba(17, 24, 44, 0.05)`.
- **Studio Window** (`.studio-window`): `border: 1px solid rgba(17, 24, 44, 0.1)` + `0 1px 3px rgba(17, 24, 44, 0.04), 0 24px 60px -16px rgba(17, 24, 44, 0.13)`.

## Shapes

- **Pill Controls** (`9999px`): Primary/secondary action buttons, segmented tab pills (`.seg-pill` / `.seg-btn`), status badges, and nav active pills.
- **Cards** (`16px`): Feature groups, browser install cards, privacy ledger, and donation panels.
- **Showcase Windows** (`20px`): Hero interactive workbench and extension screenshot carousel.

## Components

- **Navbar**: Sticky header transitioning to `bg-studio-bg/85 backdrop-blur-md` on scroll; updated squircle logo, 4 route links, EN/中文 switcher, and direct `Add to Chrome` CTA pill.
- **Interactive Workbench (`Hero.astro`)**: Segmented control toggling between live filterable `Popup Search & Snapshots` and interactive `Pending Diff Review` with per-item checkboxes, Approve, and Undo.
- **Screenshot Showcase (`Screenshots.astro`)**: Segmented pill tab selector + `3024:1646` uncropped viewport + modal Lightbox.

## Do's and Don'ts

### Do:
- **Do** keep screenshot containers matched to the `3024:1646` aspect ratio with `object-contain` so extension UI is never clipped.
- **Do** reserve `#192444` dark indigo blocks strictly for high-signal brand CTAs and the optional Agent Bridge callout.

### Don't:
- **Don't** reintroduce dark-mode neon gradients, eyebrow kickers above headings, or `text-balance` on Chinese display headings (which causes awkward mid-word CJK wraps on mobile).
- **Don't** claim MarkShelf replaces the browser New Tab; always describe it as Popup primary + dedicated full-page shelf.
