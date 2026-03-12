---
title: Troubleshooting
description: Common issues and how to fix them when managing your website in Directus.
---

Something not working the way you expected? Check this list first; most issues have a quick fix.

---

## My Changes Aren't Showing Up on the Website

**Most likely cause:** You forgot to click **Save**.

1. Go back to the item you edited in Directus.
2. Make your change again.
3. Click the **Save** button (black button, top right corner).
4. Wait 1–2 minutes, then refresh your website.

:::tip
If you see a "Changes saved" confirmation message after clicking Save, your edit went through. If the website still doesn't update after a few minutes, try a **hard refresh** in your browser: press **Ctrl + Shift + R** (Windows) or **Cmd + Shift + R** (Mac).
:::

---

## I Can't Log In

**Check these things first:**

1. Make sure you're using the correct **Directus login link**, not just your website's URL.
2. Check that your email and password are typed correctly (watch out for accidental spaces).
3. If you've forgotten your password, click **Forgot Password?** on the login screen.

If none of that works, contact your developer; they can reset your access.

---

## A Photo I Uploaded Isn't Showing in the Gallery

1. Make sure you uploaded it to the **"gallery" folder** specifically, not the root Files area.
2. Check that the file format is supported: **JPG, PNG, WebP** (photos) or **MP4** (videos).
3. Wait a few minutes and refresh the page; large files may take a moment to process.

---

## The Amber Color Highlight Isn't Working

If you typed `*asterisks*` around a word and it's not showing in amber on the website:

- **Is it in a title field?** The amber highlight only works in title fields like **Title** and **Subtitle**. It does not work in description or paragraph fields.
- **Did you use single asterisks?** Make sure it's `*one asterisk on each side*`, not `**two asterisks**` (that creates bold text, not amber).

---

## The Page Shows Old Information After I Saved

Try a **hard refresh** in your browser:
- **Windows:** Press **Ctrl + Shift + R**
- **Mac:** Press **Cmd + Shift + R**

Your browser may be showing a cached (saved) version of the page. A hard refresh forces it to load the newest version.

---

## I Accidentally Deleted Something

Unfortunately, **deletions in Directus are permanent**; there is no trash or undo for deleted items or files.

For deleted **files** (photos/videos): Check if you have a copy on your computer or phone. If not, contact your developer; they may be able to recover it from a backup.

For deleted **content items**: Contact your developer as soon as possible.

:::caution
This is why we recommend **never deleting** something unless you're completely sure you don't need it. When in doubt, ask your developer first.
:::

---

## I Edited the Wrong Language

If you accidentally edited the Spanish version when you meant to edit English (or vice versa):

1. Go back to the item in Directus.
2. Click the **Translations** section.
3. Click the correct language tab.
4. Make your changes in the right language.
5. Click **Save**.

---

## A Button Is Linking to the Wrong Page

Button links are set in the **buttons** collection under the **URL** field. This is a technical setting; contact your developer to update button links.

---

## I Don't Know What a Field Does

Check the guide for that section in this documentation; every field is listed with a plain-English explanation. You can also use the [All Collections Overview](/reference/all-collections) as a quick reference.

---

## None of the Above Solved My Problem

Contact your developer with:
1. **What you were trying to do**: be specific (e.g., "I was trying to update the hero title on the home page")
2. **What happened**: what did you see or not see?
3. **A screenshot**: if possible, take a screenshot of the problem

The more detail you provide, the faster they can help you.
