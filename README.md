# Maverick Mobile Home Services — Project Documentation

> **Note:** This is the public repository for the client documentation site. The main website and CMS configuration are maintained in a private repository.

[![Docs Site](https://img.shields.io/badge/docs-live-blue?style=flat-square)](https://docs.maverickmobilehomeservices.com)
[![Built with Astro](https://img.shields.io/badge/built%20with-Astro-FF5D01?style=flat-square&logo=astro)](https://astro.build)
[![Built with Starlight](https://img.shields.io/badge/docs-Starlight-7C3AED?style=flat-square)](https://starlight.astro.build)
[![Deployed on Vercel](https://img.shields.io/badge/deployed-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

---

## Project Overview

Full-stack web project for **Maverick Mobile Home Services**, a mobile home repair and maintenance company serving Eagle Pass, Del Rio, and surrounding cities in South Texas.

The engagement covered everything from architecture and development to content strategy, CMS configuration, client training, and post-launch documentation. The goal was to deliver a production-ready, bilingual website that the client can manage independently — no developer dependency for day-to-day content updates.

---

## What Was Built

### 1. Production Website *(private repo)*

A performance-focused marketing website built on a modern Jamstack architecture with a headless CMS backend.

**Pages:**
- **Home** — Hero, services overview, process steps, expertise section, why us, owner's message
- **About** — Brand story, values, trust signals, service areas, closing message
- **Services (per city)** — Dynamically generated pages for each city served, with city-specific hero, intro text, and local considerations
- **Our Work** — Media gallery displaying photos and videos uploaded directly through the CMS
- **Global** — Site-wide settings (phone, email, hours, logos, social links, footer) managed via CMS

**Key capabilities:**
- **Bilingual (EN/ES)** — Full English and Spanish versions of all pages and content
- **City-specific SEO pages** — Each service city has its own page with unique content, URL slug, and locally relevant copy
- **Headless CMS integration** — All website content is editable by the client through a Directus admin panel; no code changes required for content updates
- **City-specific service overrides** — Individual services can have custom descriptions per city without affecting other cities
- **Shared component content** — Services, process steps, values, and buttons are managed once and reflected across all pages

### 2. CMS Configuration *(Directus — private)*

Configured a self-hosted **Directus** instance as the headless CMS, structured specifically for a non-technical user.

- Collections designed around website sections, not database abstractions — clients see "Home Page" and "Services," not raw tables
- Singletons for page-level content (home, about) — clients open a single form, no list navigation required
- Translation tabs built into every collection for bilingual content management
- Role-based access configured to expose only what the client needs
- Protected fields (e.g., city slugs) documented with explicit warnings to prevent accidental SEO damage

### 3. Client Documentation Site *(this repo)*

A dedicated documentation site built and delivered as part of the project — not an afterthought. Gives the client a permanent, searchable reference for managing every section of their website.

- **25+ guide pages** covering every editable section of the site
- Screenshots from the actual CMS throughout
- Formatting guides, troubleshooting references, and a full collections overview
- Structured to match the client's mental model, not the database schema

### 4. Client Training

Delivered a structured 60–90 minute live training session (screen-share) walking the client through the full CMS. A written training script was prepared in advance to ensure consistent, thorough coverage of all sections. See [`TRAINING-SCRIPT.md`](./TRAINING-SCRIPT.md).

---

## Tech Stack

### Main Website *(private)*

| Layer | Technology |
|---|---|
| CMS | [Directus](https://directus.io) (headless, self-hosted) |
| Deployment | [Vercel](https://vercel.com) |
| Internationalization | Bilingual EN/ES across all content |

### Documentation Site *(this repo)*

| Layer | Technology |
|---|---|
| Framework | [Astro](https://astro.build) v6 |
| Docs theme | [Starlight](https://starlight.astro.build) |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 |
| Deployment | [Vercel](https://vercel.com) |

---

## Documentation Structure

```
src/content/docs/
├── introduction.md
├── getting-started/
│   ├── how-to-log-in.md
│   └── navigating-directus.md
├── global-settings/
│   ├── contact-info.md
│   ├── social-media.md
│   └── footer-text.md
├── home-page/
│   ├── hero.md
│   ├── services-section.md
│   ├── process-section.md
│   ├── expertise-section.md
│   ├── why-us-section.md
│   └── owners-message.md
├── about-page/
│   ├── hero-and-story.md
│   ├── trust-and-expertise.md
│   ├── what-drives-us.md
│   ├── commitment-and-areas.md
│   └── closing-message.md
├── services-pages/
│   ├── overview.md
│   ├── editing-a-city-page.md
│   ├── managing-services.md
│   └── city-descriptions.md
├── our-work/
│   ├── uploading-photos.md
│   └── uploading-videos.md
└── reference/
    ├── all-collections.md
    ├── formatting-guide.md
    └── troubleshooting.md
```

---

## Local Development

```bash
# Install dependencies
pnpm install

# Start local dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The dev server runs at `http://localhost:4321`.

---

## Project Scope Summary

| Deliverable | Status |
|---|---|
| Production website | Delivered |
| Headless CMS setup & configuration | Delivered |
| Bilingual content (EN + ES) | Delivered |
| Multi-city SEO pages | Delivered |
| Media gallery (photos & videos) | Delivered |
| Client documentation site | Delivered — [docs.maverickmobilehomeservices.com](https://docs.maverickmobilehomeservices.com) |
| Client training session | Delivered |

---

## About

Designed and developed by **Angel Rodriguez**, founder of [DevWorks Studio](https://devworksstudio.com) — a web development agency focused on building custom, maintainable web solutions for small businesses.
