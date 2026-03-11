---
title: Process Section
description: How to edit the "How It Works" step-by-step process section on the home page.
---

The process section shows visitors how your service works — the step-by-step journey from first contact to completed job. This section has a heading and description that you edit on the home page, plus individual steps that are managed separately.

![Expertise Section Screen Capture](/home-process.png)

---

## Where to Find It

**Heading and description (home page fields):**
1. Log in to Directus.
2. Click **Content** in the left sidebar.
3. Click **Pages (English) > Home** (for English) or **Pages (Spanish) > Home** (for Spanish).
4. Scroll down to the **Process Section** fields.

**Individual step cards:**
- The steps themselves (icons, titles, descriptions) are managed in the **process_steps** collection. See the section below.

---

## Field Reference

| Field | What it does |
|---|---|
| **Subtitle** | The small uppercase label above the heading |
| **Title** | The section heading (e.g., "How It Works") |
| **Description** | The paragraph of text below the heading |
| **Action Button** | The call-to-action button at the bottom of the section |

---

## Step-by-Step: Editing the Process Section Heading

1. Open **home** (or **home_es**).
2. Click the **Subtitle** field and update the small label.
3. Click the **Title** field and update the heading.
4. Click the **Description** field and update the paragraph.
5. Click **Save**.

---

## Editing the Individual Step Cards

Each step card (icon, title, and description) is managed in the **process_steps** collection.

1. Click **Content** in the left sidebar.
2. Click **process_steps**.
3. You'll see a list of all steps. Click the step you want to edit.
4. Scroll to the **Translations** section.
5. Click the **English** tab (or **Spanish** tab).
6. Update the **Step Title** and **Step Description** fields.
7. Click **Save**.

![Directus Process Screen Capture](/step-translation.png)

:::note
The steps appear on the home page **and** on individual service pages. Changes here update all locations at once.
:::

:::caution
Do not delete a step from **process_steps** unless you want it to disappear from the website entirely. If you want to temporarily hide a step, contact your developer instead.
:::
