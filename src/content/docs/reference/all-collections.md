---
title: All Collections Overview
description: A complete list of every Directus collection, what it controls, and where it appears on the website.
---

This is a quick-reference map of every collection in your Directus CMS. Use it when you're not sure where to go to edit something.

---

## Global Collections (Affect Multiple Pages)

These collections control content that appears on more than one page.

| Collection | What it controls | Appears on |
|---|---|---|
| `settings` | Logo, phone, email, business hours, cities list | Header + Footer (all pages) |
| `settings_translations` | Footer heading, intro, and closing quote (EN + ES) | Footer (all pages) |
| `services` | Service names, descriptions, icons, images | Home page + all city service pages |
| `buttons` | All reusable button labels and links | Throughout the entire site |
| `stats` | Key numbers/stats (e.g., "25+ Years") | Home page — Why Us section |
| `process_steps` | Step-by-step process cards | Home page + city service pages |
| `values` | Core value cards (e.g., "Quality", "Integrity") | About page |
| `local_list` | Local considerations items | City service pages |

---

## Home Page Collections

| Collection | Language | What it controls |
|---|---|---|
| `home` | English | All home page sections (hero, services, process, expertise, why us, owner's message) |
| `home_es` | Spanish | Same, in Spanish |

Both are **singletons** — there is only one item each.

---

## About Page Collections

| Collection | Language | What it controls |
|---|---|---|
| `about` | English | All about page sections (hero, story, trust, expertise, values, commitment, areas, closing) |
| `about_es` | Spanish | Same, in Spanish |

Both are **singletons** — there is only one item each.

---

## Services Page Collections

| Collection | Language | What it controls |
|---|---|---|
| `services_page` | English | Hero, intro, and headings — one item per city |
| `services_page_es` | Spanish | Same, in Spanish |
| `city_descriptions` | EN + ES | Custom service description overrides per city |

---

## Gallery (Our Work Page)

| Area | What it controls |
|---|---|
| Directus Files → **gallery** folder | All photos and videos shown on the Our Work page |

No collection to edit — just upload files to the gallery folder.

---

## Quick Decision Guide

**"I want to change something that shows up on EVERY page"**
→ Start with `settings` or `settings_translations`

**"I want to change the home page"**
→ Edit `home` (English) or `home_es` (Spanish)

**"I want to change a service name or description"**
→ Edit `services`

**"I want to change something on the Eagle Pass (or any city) service page"**
→ Edit `services_page` (find the Eagle Pass entry)

**"I want to add a photo or video to the gallery"**
→ Go to Files → gallery folder
