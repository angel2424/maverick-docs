---
title: Managing Services
description: How to edit service names, descriptions, icons, and images; these appear on every city page.
---

The **services** collection contains all the services your company offers. These appear on the home page and on every city services page. Changing a service here updates it everywhere at once.

![Expertise Section Screen Capture](/services.png)

---

## Where to Find It

1. Log in to Directus.
2. Click **Content** in the left sidebar.
3. Click **services**.
4. You'll see a list of all your services. Click one to open it.

---

## Field Reference

| Field | What it does |
|---|---|
| **Service Icon** | The icon displayed next to the service name |
| **Service Image** | The image shown on the service card |
| **Action Button** | The "Learn more" button for this service |
| `translations` → **Service Title** | The service name (in English or Spanish) |
| `translations` → **Landing Page Description** | The description shown on the home page service cards |
| `translations` → **Important Notice** | A highlighted notice shown on city service pages (optional) |

---

## Step-by-Step: Editing a Service

1. Click **Content** → **services**.
2. Click the service you want to edit.
3. Scroll to the **Translations** section.
4. Click the **English** tab.
5. Update the **Service Title** field with the service name.
6. Update the **Landing Page Description** field with the description shown on the home page.
7. Update the **Important Notice** field if there's a special note for this service (see below).
8. Click the **Spanish** tab and repeat for the Spanish version.
9. Click **Save**.

![Expertise Section Screen Capture](/services-translation.png)
---

## The Important Notice Field

The **Important Notice** field is an optional highlighted message that appears on city service pages, for example, a warning, a pricing note, or a seasonal availability message.

:::tip
Use the **Important Notice** for things like:
- "Price varies by city, call for a quote."
- "This service is weather-dependent."
- "Installation requires a site inspection first."
:::

If you leave this field empty, no notice will appear; that's fine.

---

## Changing a Service Image

1. Open the service in the **services** collection.
2. Click the **Service Image** field.
3. Click **Upload a File** and choose a new photo.
4. Click **Save**.

:::tip
Use high-quality, relevant photos, ideally showing the actual service being performed. Recommended minimum size: **800×600 pixels**.
:::

---

## Important: Changes Affect All City Pages

:::caution
Editing a service here updates it **on every single city page** at once. If you want a different description for one specific city only, you can add a city-specific override; see [City-Specific Descriptions](/services-pages/city-descriptions).
:::

---

## Adding a New Service

Contact your developer to add a new service. They'll need to:
- Set up the icon
- Create the entry in `services`
- Connect it to the relevant pages

---

## Removing a Service

:::danger
Do not delete a service from the `services` collection without coordinating with your developer first. Deleting a service removes it from every city page on the website immediately.
:::
