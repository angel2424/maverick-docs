---
title: Navigating Directus
description: "A quick tour of the Directus admin panel: where to find collections, items, and the media library."
---

Once you're logged in, you'll see the Directus dashboard. Here's a quick tour so you know where everything is.

![Dashboard Screen Capture](/dashboard.png)

---

## The Left Sidebar

The menu on the left is your main navigation. The two areas you'll use most are:

| Icon | Name | What it's for |
|---|---|---|
| Cube icon | **Content** | All your website sections: home page, about page, services, settings, etc. |
| Folder icon | **Files** | Your media library, where all uploaded photos and videos live |

Everything else (settings, users, etc.) is for your developer and you won't need to touch it.

---

## Finding a Collection

A **collection** is a section of your website. Think of it like a folder. Each collection holds content for one part of your site. We have structured your collections in folders by pages (home, about, etc), lists (services, process steps) and UI Elements (buttons)

To open a collection:

1. Click the **Content** icon in the left sidebar.
2. You'll see a list of all your collections.
3. Click the name of the collection you want to edit.

![Content Sidebar Screen Capture](/content.png)

---

## Singletons vs. Lists

Some collections have **only one item**, these are called singletons. When you click on a singleton, it opens the item directly instead of showing a list first.

Examples of singletons (only one item each):
- `home`: your English home page
- `home_es`: your Spanish home page
- `about`: your English about page
- `settings`: global site settings

Other collections have **multiple items**. For example, `services` has one item per service you offer, and `services_page` has one item per city.

---

## Opening an Item

After you click a collection, you'll see a list of entries (items) inside it.

1. Click on any row to open that item.
2. You'll see all the editable fields for that item.
3. Make your changes, then click **Save** (the blue button in the top right corner).

![Collection List Screen Capture](/collection.png)

:::caution
Changes are **not saved automatically.** If you close the tab or navigate away without clicking Save, your changes will be lost.
:::

---

## Translations (English vs. Spanish)

Many fields on your site exist in both English and Spanish. Inside Directus, you'll find a **Translations** section within certain items. It has two tabs: one for English (`en-US`) and one for Spanish (`es-MX`).

![Translations Field Screen Capture](/translation.png)

Always check you're on the right language tab before typing and saving.

---

## The Files Area (Media Library)

All your photos and videos are stored in the **Files** area.

1. Click the **Files** icon in the left sidebar.
2. You'll see all uploaded files.
3. To find your gallery images, look for the folder named **"gallery"**.

You'll use this area to upload new photos and videos to the Our Work page. See [Uploading Photos](/our-work/uploading-photos) for step-by-step instructions.
