---
title: Overview & City Pages
description: "How services pages are organized: one page per city, in English and Spanish."
---

Your website has a separate services page for each city you serve. Each page is customized with city-specific content, but they all show the same list of services.

This guide explains how it all works before you start editing.

---

## How City Pages Work

Each city has its own page at a URL like:
- `/services/eagle-pass`: English page for Eagle Pass
- `/es/services/eagle-pass`: Spanish page for Eagle Pass

The content for each city page lives in two collections:

| Collection | Language | What it controls |
|---|---|---|
| `services_page` | English | Hero, intro, and section headings for each city |
| `services_page_es` | Spanish | Same sections, in Spanish |

Each collection has **one item per city**. You never need to create a new item unless a brand new city is being added to the site.

---

## What's on a City Services Page?

Each city services page has these sections:

1. **Hero:** a city-specific headline, description, and background photo
2. **Intro:** a short welcome paragraph about your services in that city
3. **Services List:** the full list of services (same for every city, managed in the `services` collection)
4. **Local Considerations:** city-specific tips or notes about working in that area

---

## The Relationship Between Collections

Understanding how content is organized will save you confusion later:

| This collection… | Controls… | Affects… |
|---|---|---|
| `services_page` / `services_page_es` | City-specific headings and intro | Only that one city's page |
| `services` | Service names, descriptions, icons, images | **All** city pages at once |
| `city_descriptions` | A custom service description for a specific city | Only that city + service combo |
| `local_list` | Local considerations items | Any city page that uses them |

---

## Adding a New City Page

:::caution
Adding a new city requires creating entries in both `services_page` (English) and `services_page_es` (Spanish), and the city must also be added to the **settings** **Cities** field. This is best done by your developer to make sure the URL is set up correctly.
:::

If you need to add a new city, contact your developer and provide:
- The city name
- The URL slug (e.g., `del-rio` for Del Rio, TX)
- The hero image and initial content for the page

---

## Next Steps

- [Editing a City Page](/services-pages/editing-a-city-page): update the hero, intro, and headings for a specific city
- [Managing Services](/services-pages/managing-services): edit service names, descriptions, and images
- [City-Specific Descriptions](/services-pages/city-descriptions): override a service description for a particular city
