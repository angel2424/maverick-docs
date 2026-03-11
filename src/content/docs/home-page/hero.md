---
title: Hero Section
description: How to edit the main headline, tagline, description, and background image on the home page.
---

The hero section is the large banner at the very top of your home page — the first thing visitors see. It has a background image, a tagline, a main headline, a short paragraph, and two buttons.

![Hero Section Screen Capture](/home-hero.png)

---

## Where to Find It

**English home page:**
1. Log in to Directus.
2. Click **Content** in the left sidebar.
3. Click **Pages (English) > Home** — the item opens directly.

**Spanish home page:**
- Same steps, but click **Pages (Spanish) > Home** instead.

:::note
`home` and `home_es` are singletons — there is only **one item** in each. You do not need to create a new item. Just open it and edit.
:::

---

## Field Reference

| Field | What it does |
|---|---|
| **Subtitle** | The small uppercase tagline that appears **above** the headline (e.g., "Trusted Mobile Home Services") |
| **Title** | The large main headline — wrap any word in `*asterisks*` to show it in amber/gold color |
| **Description** | The short paragraph of text below the headline |
| **Hero Image** | The background image for the entire hero section |
| **Primary Button** | The main call-to-action button (e.g., "Get a Free Quote") |
| **Secondary Button** | The secondary outline button (e.g., "See Our Work") |

---

## Step-by-Step: Editing the Hero

1. Open the **home** collection (or **home_es** for Spanish).
2. Click the **Subtitle** field and type your tagline.
3. Click the **Title** field and type your main headline.
   - To highlight any word in amber/gold, wrap it in single asterisks: `*word*`
   - Example: `Expert *Mobile Home* Repairs in Eagle Pass`
4. Click the **Description** field and type your short paragraph.
5. To update the background image, click the **Hero Image** field, then click **Upload a File** and choose your image.
6. Click **Save** in the top right corner.

---

## Making Words Appear in Amber (Gold) Color

In the **Title** field, you can make any word or phrase appear in your brand's amber/gold color by wrapping it in single asterisks.

| What you type | What visitors see |
|---|---|
| `Expert *Mobile Home* Services` | Expert **Mobile Home** Services (in amber) |
| `Serving Eagle Pass *with Pride*` | Serving Eagle Pass **with Pride** (in amber) |
| `*Quality* You Can Count On` | **Quality** You Can Count On (in amber) |

:::note
This amber highlight only works in **title fields** like **Title**. It will not work in description or paragraph fields.
:::

---

## Changing the Button Text

The hero buttons pull their text from the **buttons** collection. To change what a button says:

1. Click **Content** in the left sidebar.
2. Click **buttons**.
3. Find the button you want to change (look at the label to identify it) and click it.
4. Click the **Translations** section.
5. Click the **English** (or **Spanish**) tab.
6. Click the **Button Label** field and type the new button text.
7. Click **Save**.

:::caution
Changing a button's label here will update it **everywhere** that button is used across the site — not just on the home page.
:::
