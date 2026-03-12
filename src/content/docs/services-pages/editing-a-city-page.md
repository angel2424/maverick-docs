---
title: Editing a City Page
description: How to update the hero, intro body, and section headings for a specific city services page.
---

Each city has its own services page with a customized hero, intro paragraph, and section headings. This guide walks you through editing all of them.

---

## Where to Find It

**English city pages:**
1. Log in to Directus.
2. Click **Content** in the left sidebar.
3. Click **services_page**.
4. You'll see a list of cities. Click the city you want to edit.

**Spanish city pages:**
- Same steps, but click **services_page_es** instead.

![Services Pages Screen Capture](/services-page.png)

---

## Field Reference

| Field | What it does |
|---|---|
| **City (slug)** | The URL slug for this city (e.g., `eagle-pass`); **do not change this** |
| **Title** | The headline shown in the hero banner for this city |
| **Description** | The short paragraph in the hero |
| **Hero Image** | The background image for the hero banner |
| **Intro Text** | The intro paragraph below the hero, supports markdown formatting |
| **Title** | The heading above the services list (e.g., "Our Services in Eagle Pass") |
| **Title** | The heading above the Local Considerations section |
| **Local Considerations List** | The local consideration items shown in this section, editable directly inside this city page |

---

## Step-by-Step: Editing a City Page

1. Open **services_page** and click the city you want to edit.
2. Update the **Title**: type the city-specific headline.
3. Update the **Description**: type the short hero paragraph.
4. To change the hero background image, click **Hero Image** and upload a new photo.
5. Click the **Intro Text** field and update the intro paragraph.
6. Update the services list **Title** with the heading for the services list.
7. Update the local section **Title** with the heading for the local section.
8. Click **Save** when done.

---

## Formatting the Intro Text

The **Intro Text** field supports **markdown**. You can use bold text, bullet points, and line breaks to make the content easier to read.

```
Welcome to Maverick Mobile Home Services in **Eagle Pass**.

We've been serving this community for over 25 years, offering:

- Mobile home leveling and foundation repair
- Plumbing and electrical services
- Roof repair and replacement
```

For the full markdown reference, see the [Formatting Guide](/reference/formatting-guide).

---

## The City Slug Field

:::caution
The **City (slug)** field contains the URL slug, the short name used in the website address. For example, `eagle-pass` makes the page live at `yoursite.com/services/eagle-pass`.

**Never change the city slug.** Changing it breaks the page's URL and removes it from Google search results.
:::

---

## Editing Local Considerations Items

The Local Considerations items are edited directly inside the city page; you don't need to go anywhere else.

1. Open the city page you want to edit (**services_page** → click the city).
2. Scroll down to the **Local Considerations List** field.
3. Click an existing item to open it and edit its content.
4. Inside the item, scroll to the **Translations** section.
5. Click the **English** tab and update the **Title** and **Description**.
6. Click the **Spanish** tab and do the same for Spanish.
7. Click **Save**.

**To add a new item:** Click the **Create New** button inside the **Local Considerations List** field, fill in the translations, and click **Save**.

**To remove an item:** Click the item, then click the remove/unlink button next to it.

:::note
Local Considerations items are shared; the same item can appear on multiple city pages. If you edit an item here, it will update everywhere that item is used.
:::
