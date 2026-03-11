---
title: Why Us Section
description: How to edit the "Why Choose Us" section and the stats (numbers) on the home page.
---

The "Why Us" section explains why customers should choose Maverick Mobile Home Services. It includes a heading, a description, a list of service areas, a photo, and a button. It also displays your key stats (like "25+ Years in Business") — those are managed separately.

![Why us Section Screen Capture](/home-why.png)

---

## Where to Find It

**Section heading and text:**
1. Log in to Directus.
2. Click **Content** in the left sidebar.
3. Click **Pages (English) > Home** (for English) or **Pages (Spanish) > Home** (for Spanish).
4. Scroll down to the **Why Us Section** fields.

**Stat numbers (e.g., "25+ Years", "500+ Jobs"):**
- These are in the **stats** collection. See below.

---

## Field Reference

| Field | What it does |
|---|---|
| **Title** | The section heading (e.g., "Why Choose Us?") |
| **Description** | The paragraph of text below the heading |
| **Service Areas** | The text describing your service areas (e.g., "Serving Eagle Pass and surrounding cities") |
| **Image** | The photo displayed in this section |
| **Action Button** | The call-to-action button |

---

## Step-by-Step: Editing the Why Us Section

1. Open **home** (or **home_es**).
2. Click the **Title** field and update the heading.
3. Click the **Description** field and update the paragraph.
4. Click the **Service Areas** field and update the service areas text.
5. To update the photo, click **Image** and upload a new image.
6. Click **Save**.

---

## Editing the Stats (Numbers)

The stat cards (e.g., "25+ Years in Business", "500+ Jobs Completed") are managed in the **stats** collection.

1. Click **Content** in the left sidebar.
2. Click **stats**.
3. Click the stat you want to edit.
4. Scroll to the **Translations** section and click the **English** tab (or **Spanish**).
5. Update the **title** field (the number, e.g., `25+`) and the **description** field (the label, e.g., `Years in Business`).
6. Click **Save**.

![Directus Stats Screen Capture](/stats.png)

:::tip
Keep the stat **title** short — just the number and symbol (e.g., `25+`, `500+`, `100%`). The **description** is the label below it.
:::

:::caution
Do not delete a stat item unless you want it to disappear from the website. If you want to change a number, just edit the **title** field — don't delete and recreate.
:::
