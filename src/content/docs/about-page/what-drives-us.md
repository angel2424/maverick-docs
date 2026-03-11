---
title: What Drives Us
description: How to edit the values section heading and the individual value cards on the About page.
---

The "What Drives Us" section showcases your company's core values — the principles that guide how you work. It has a heading, an intro paragraph, a set of value cards, and a closing paragraph.

![What Drives Us Section Screen Capture](/drive.png)

---

## Where to Find It

**Section heading and intro/outro text:**
1. Log in to Directus.
2. Click **Content** in the left sidebar.
3. Click **about** (for English) or **about_es** (for Spanish).
4. Scroll down to the **Values Section** fields.

**Individual value cards (e.g., "Quality", "Integrity"):**
- These are managed in the **values** collection. See below.

---

## Section Fields (in `about` / `about_es`)

| Field | What it does |
|---|---|
| **Title** | The section heading (e.g., "What Drives Us") |
| **Intro Description** | The intro paragraph shown before the value cards |
| **Outro Description** | The closing paragraph shown after the value cards |

### Step-by-Step: Editing the Section Text

1. Open **about** (or **about_es**).
2. Click the **Title** field and update the heading.
3. Click the **Intro Description** field and update the intro paragraph.
4. Click the **Outro Description** field and update the closing paragraph.
5. Click **Save**.

---

## Editing the Value Cards

Each value card (its name, icon, and description) is managed in the **values** collection.

1. Click **Content** in the left sidebar.
2. Click **values**.
3. Click the value you want to edit (e.g., "Quality" or "Integrity").
4. Scroll to the **Translations** section.
5. Click the **English** tab (or **Spanish** tab).
6. Update the **Value Title** field (the name of the value) and the **Value Description** field.
7. Click **Save**.

![Values collection Screen Capture](/values.png)

---

## Adding a New Value Card

1. Click **Content** → **values**.
2. Click **+ Create Item** in the top right.
3. Add a **Value Icon** (your developer can help choose the right icon name).
4. Click into the **Translations** section, add the **Value Title** and **Value Description** in English, then repeat for Spanish.
5. Click **Save**.

:::caution
Adding a new value card will make it appear on the website immediately after saving. Make sure the title and description are complete before you save.
:::
