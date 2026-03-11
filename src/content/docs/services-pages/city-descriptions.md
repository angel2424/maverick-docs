---
title: City-Specific Descriptions
description: How to override a service description for a specific city using the city_descriptions collection.
---

By default, every city page uses the same service descriptions. But if you want a **different description for a specific service in a specific city**, you can add a city-specific override directly inside that service's entry.

For example: the description for "Roof Repair" might be slightly different for Eagle Pass vs. Del Rio to reflect local conditions.

![Services City Section Screen Capture](/city-service.png)
---

## Where to Find It

City-specific descriptions are managed from inside the **services** collection — not from a separate place in the sidebar.

1. Log in to Directus.
2. Click **Content** in the left sidebar.
3. Click **services**.
4. Click the service you want to customize (e.g., "Roof Repair").
5. Scroll down to the **City Descriptions** section inside that service entry.

![Directus City Description Screen Capture](/city-desc.png)

---

## Field Reference

| Field | What it does |
|---|---|
| **City Name** | A label to help you identify this entry (e.g., "Eagle Pass — Roof Repair") |
| **City Slug** | The city's URL slug — must match exactly (e.g., `eagle-pass`) |
| **Service Description** | The custom description text for this city (in English or Spanish) |

---

## Step-by-Step: Adding a City-Specific Description

1. Open the service you want to customize (**services** → click the service).
2. Scroll down to the **City Descriptions** section.
3. Click **Create New**.
4. Fill in the **City Name** field with a label so you can recognize the entry later (e.g., "Eagle Pass").
5. Fill in the **City Slug** field with the city's URL slug exactly (e.g., `eagle-pass`).
6. Scroll to **Translations** and click the **English** tab.
7. Type your custom description in the **Service Description** field.
8. Click the **Spanish** tab and add the Spanish version.
9. Click **Save**.

---

## Step-by-Step: Editing an Existing City Description

1. Open the service (**services** → click the service).
2. Scroll down to **City Descriptions** and click the entry you want to update.
3. Click into **Translations**, select the language tab, and update the **Service Description** field.
4. Click **Save**.

---

## How It Works

When the website loads a city services page, it checks for a city-specific description first. If one exists for that city + service combination, it uses that. If not, it falls back to the default description set on the service itself.

:::caution
The **City Slug** you type must match the city's slug in the **settings** **Cities** field **exactly** — including capitalization and dashes. For example: `eagle-pass` not `Eagle Pass` or `eaglepass`.
:::
