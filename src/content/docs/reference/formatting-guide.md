---
title: Formatting Guide
description: How to use markdown and amber highlights in your website content fields.
---

Some fields in Directus let you format your text — add bold, bullet points, headings, and more. This guide explains everything you need to know.

---

## Amber Highlight (for Title Fields)

In title fields, you can make any word or phrase appear in your brand's **amber (gold) color** by wrapping it in single asterisks.

**Syntax:** `*your text here*`

### Examples

| What you type | What visitors see |
|---|---|
| `Expert *Mobile Home* Services` | Expert **Mobile Home** Services (the middle words in amber) |
| `*Quality* You Can Count On` | **Quality** You Can Count On (first word in amber) |
| `Serving Eagle Pass *with Pride*` | Serving Eagle Pass **with Pride** (last phrase in amber) |

:::caution
This amber highlight **only works in title fields** (like **Title**, **Subtitle**, etc.). If you type `*asterisks*` in a description or paragraph field, they will appear literally on the website.
:::

---

## Markdown Formatting

Several fields support **markdown** — a simple way to format text using plain symbols. You don't need to know any code; just use the examples below.

### Fields That Support Markdown

| Field | Where to find it |
|---|---|
| **Description** (Our Story) | About page → Our Story section |
| **Description** (Trust) | About page → Trust section |
| **Experience List** | About page → Expertise section |
| **Description** (Commitment) | About page → Commitment section |
| **Message** | About page → Closing Message |
| **Intro Text** | Services pages → Intro section |
| **Quote Details** | Global Settings → Footer Text |

### Markdown Cheat Sheet

| What you want | What to type | Result |
|---|---|---|
| Bold text | `**your text**` | **your text** |
| Italic text | `*your text*` | *your text* |
| Bullet point list | `- Item one` (one per line) | • Item one |
| Numbered list | `1. First item` | 1. First item |
| New paragraph | Leave a blank line between paragraphs | New paragraph |
| Large heading | `# Heading` | Big heading |
| Medium heading | `## Heading` | Medium heading |

### Markdown Examples

**Creating a bullet list:**
```
What we offer:

- Mobile home leveling
- Roof repair and replacement
- Plumbing and electrical
- Skirting and underbelly repair
```

**Using bold to highlight key info:**
```
We've been serving Eagle Pass for **over 25 years**.
Our team is **licensed and insured** in the state of Texas.
```

**Creating a numbered list:**
```
How it works:

1. Call us for a free consultation
2. We visit your home for an assessment
3. We provide a written quote
4. Work begins on your schedule
```

---

## Tips

:::tip
**Less is more.** You don't need to format everything. Use bold for the 2–3 most important words in a paragraph, not every sentence.
:::

:::tip
**Line breaks:** If you want to start a new paragraph, leave a **blank line** between them. Just pressing Enter once may not create a visible break — you need a full empty line.
:::

:::caution
**Don't mix amber highlights and markdown.** Typing `*asterisks*` in a description or paragraph field won't create an amber highlight — it will just make the text italic (markdown behavior).
:::
