# Live Training Script — Maverick Mobile Home Services
### CMS Walkthrough for [Client Name]

**Format:** Screen-share / in-person demo
**Estimated duration:** 60–90 minutes
**Trainer:** Angel

---

## Legend

> **[SAY]** — What to say out loud
> **[DO]** — Action to take on screen
> **[SHOW]** — Point something out without clicking
> **[PAUSE]** — Stop and let the client react, ask questions, or try it themselves
> **[REF]** — Mention the relevant docs page for future reference

---

## Before You Start (Trainer Prep)

- Have Directus open and logged in on your screen before the session starts
- Have the docs site open in a second tab
- Have the live website open in a third tab
- Know which city page(s) the client is most familiar with (probably Eagle Pass)
- Have a test entry or a safe section ready to make a live edit in

---

## 1. Welcome & Big Picture
**~5 minutes**

> **[SAY]**
>
> "Alright, so today I'm going to walk you through everything you need to know to manage your own website. This isn't going to be complicated — I promise. By the end of this, you'll know how to update your phone number, change a headline, swap out a photo, upload new work photos, all of it.
>
> The most important thing to know is: **you can't break anything.** The worst thing that can happen is you type something wrong and save it — and all you have to do is go back and fix it. There's no big red button that deletes the site. So don't be afraid to explore.
>
> There are two tools you're going to use. First, there's the **CMS** — that's the admin panel where you actually make changes. It's called Directus. And second, there's the **docs site** — that's the guide I built for you, where every single thing we cover today is written out step by step so you always have it as a reference."

> **[DO]** Switch to the docs site tab.

> **[SAY]**
>
> "This is your docs site. Think of it as your personal instruction manual for your website. It's organized just like a book — Getting Started, then each page of the site, then a Reference section at the end. Any time you forget how to do something, this is where you come."

> **[SHOW]** Point out the sidebar navigation — Getting Started, Home Page, About Page, Services Pages, Our Work, Reference.

> **[SAY]**
>
> "We're going to go through all of this today. At the end of the session, this site is yours. Bookmark it."

> **[PAUSE]** — Any questions before we dive in?

---

## 2. Logging In
**~5 minutes**

> **[DO]** Switch to the Directus tab. Show the login screen if possible, or navigate to it.

> **[SAY]**
>
> "To get to your website's admin panel, you just go to this link in your browser — I've already sent it to you, and it's also written in the docs. You type in your email and your password, and you're in."

> **[DO]** Show the login process (or show a screenshot of it). Log in if needed.

> **[SAY]**
>
> "One thing to know — Directus will log you out automatically after a while if you haven't used it. If you come back and you see a login screen, don't worry, just sign in again. And if you ever forget your password, there's a 'Forgot Password' link right on that screen."

> **[REF]** "This is all covered in Getting Started → How to Log In."

---

## 3. Navigating Directus — The Big Tour
**~5 minutes**

> **[SAY]**
>
> "Okay, so you're logged in. Let's take a look at what you're looking at."

> **[SHOW]** Point to the left sidebar.

> **[SAY]**
>
> "This menu on the left is the only thing you need. There are two sections you'll ever use:
>
> The first one — this cube icon — is **Content**. This is where all your website sections live. Your home page, your about page, your services, your settings — everything is in here.
>
> The second one — this folder icon — is **Files**. That's your media library. All your photos and videos live here. When you upload new photos for your Our Work gallery, this is where you go.
>
> Everything else in this sidebar? That's for the developer. You don't need to touch any of it."

> **[DO]** Click Content. Show the list of collections.

> **[SAY]**
>
> "When I click Content, I see a list of sections. These are called **collections** — think of each one as a chapter of your website. Some of them are grouped into folders. You'll see folders like Pages, Lists, UI Elements — that just keeps things organized.
>
> Some collections open right into an editing screen because they only have one thing to edit — like your home page or your about page. Others show you a list first — like services, which has one entry per service you offer."

> **[DO]** Click `home` (the English home page singleton). Show it opens directly.

> **[SAY]**
>
> "See how clicking 'home' took me straight into the editing screen? That's because there's only one home page. Compare that to..."

> **[DO]** Navigate back, click `services`.

> **[SAY]**
>
> "...services, which shows me a list. I'd click one of these rows to open that specific service and edit it."

> **[DO]** Navigate back to Content overview.

> **[SAY]**
>
> "One critical rule: **nothing saves automatically.** When you make a change, you always have to click the blue **Save** button in the top right corner. If you close the tab or navigate away without saving, your change is gone. I'll remind you of this throughout today, but get in the habit of saving after every change."

> **[REF]** "Navigating Directus in Getting Started covers all of this."

> **[PAUSE]** — Any questions about the layout?

---

## 4. Global Settings — The Foundation
**~8 minutes**

> **[SAY]**
>
> "Let's start with the most important section — your Global Settings. This is where your phone number, email, business hours, logos, and footer text live. These show up on every single page of your site, so it's the first place you'd go if any of that information changes."

> **[DO]** Navigate to Content → Settings.

### Contact Info & Hours

> **[SAY]**
>
> "Here's your settings entry. I'll scroll through it so you can see what's here."

> **[DO]** Scroll slowly through the settings fields. Point out:
> - **Colored Logo** and **White Logo**
> - **Email**
> - **Phone Number**
> - **Business Hours**

> **[SAY]**
>
> "So if your phone number changes, you'd come right here — click the **Phone Number** field, type the new number, click **Save**. That's it. It updates in the footer on every page of your site instantly."

> **[DO]** Show where the **Cities** field is.

> **[SAY]**
>
> "This **Cities** field is the list of cities you serve. The website uses this to build your service area pages. Don't add or remove cities here without talking to me first — each city has a specific format it needs to match."

> **[REF]** "Global Settings → Contact Info & Hours."

### Footer Text

> **[DO]** Scroll to or find the Translations section inside settings.

> **[SAY]**
>
> "Your footer also has a few lines of text — a heading, a short intro sentence, and a closing quote. These are inside the **Translations** section here. You'd click the **English** tab, update the text, then click the **Spanish** tab and update the Spanish version."

> **[SHOW]** The **Title**, **Description**, and **Quote Details** fields.

> **[SAY]**
>
> "The **Quote Details** field supports some basic text formatting — you can make things bold, add bullet points, that kind of thing. We'll cover formatting in a few minutes."

> **[REF]** "Global Settings → Footer Text."

### Social Media Links

> **[SAY]**
>
> "If you ever change your Facebook URL, Instagram handle, anything like that — it's also right here in settings, in the **Social Media Links** section. You'd find the platform you want to update, click it, change the URL, save."

> **[REF]** "Global Settings → Social Media Links."

> **[PAUSE]** — Does all of that make sense? Any questions about settings?

---

## 5. Home Page
**~15 minutes**

> **[SAY]**
>
> "Now let's look at your home page. The home page has several sections, and each one is editable. Let me show you where they all are."

> **[DO]** Navigate to Content → home.

> **[SAY]**
>
> "This is your home page entry. You'll notice it's one long form. Each section of your home page — the hero at the top, the services section, the process section, and so on — they all live here. I'll scroll through them so you can see how it's organized."

> **[DO]** Scroll through slowly, pointing out the section dividers.

### Hero Section

> **[SAY]**
>
> "At the top is your **hero** — that's the big banner with the background image and your main headline. Let me point out each field."

> **[DO]** Point to each field as you name it:
> - **Subtitle** — the small uppercase text above the headline
> - **Title** — the big main headline
> - **Description** — the short paragraph
> - **Hero Image** — the background photo
> - **Primary Button** and **Secondary Button**

> **[SAY]**
>
> "Now, the **Title** field has a special trick. If you want any word to appear in that amber gold color — your brand color — you just wrap it in asterisks. Like this:"

> **[DO]** Show or type an example in the Title field: `Expert *Mobile Home* Services in Eagle Pass`

> **[SAY]**
>
> "See those asterisks around 'Mobile Home'? On the actual website, that text shows up in gold. You can do this with any word or phrase you want to highlight. Don't use quotes or bold — just asterisks."

> **[DO]** Navigate away without saving to preserve the real content.

> **[REF]** "Home Page → Hero Section. The amber highlight trick is also in Reference → Formatting Guide."

### Services, Process, Expertise, Why Us, Owner's Message

> **[DO]** Scroll through each section quickly, pointing them out.

> **[SAY]**
>
> "Each of these sections below the hero follows the same pattern: there's a **Title** field, a **Description** or paragraph field, and sometimes a button or an image. Every one of these is documented in the docs site under Home Page — each section has its own guide page."

> **[SHOW]** Point out the process steps, why us, expertise, owner's message sections.

> **[SAY]**
>
> "One thing worth noting: the **Owner's Message** section — that's your personal quote at the bottom of the home page. That's one field — **Message**. Just click it, type your message, save."

### Buttons

> **[SAY]**
>
> "Now, buttons are a little different. You'll notice that some fields say things like 'Primary Button' or 'Action Button.' Those don't let you type the button text directly here — the button text is managed separately in its own section called **buttons**."

> **[DO]** Navigate to Content → buttons (or UI Elements → buttons if grouped).

> **[SAY]**
>
> "Each button on your site has its own entry here. You'd click the button you want to change, go to the Translations section, click the English tab, update the **Button Label** field, save. Simple. But one important note:"

> **[SAY]**
>
> "If a button is used in multiple places — and some of them are — changing it here changes it everywhere it appears. So be careful with that. The docs will tell you which buttons are shared."

> **[REF]** "Each home page section is in Home Page in the docs. Buttons are referenced throughout."

> **[PAUSE]** — Do you want to try making a small edit to the home page?

> *(Let the client try clicking a field, typing something, and saving. Guide them through it.)*

---

## 6. About Page
**~10 minutes**

> **[DO]** Navigate to Content → about.

> **[SAY]**
>
> "Your about page works exactly the same way as the home page — it's one long entry with all the sections inside it. Let me scroll through so you can see the layout."

> **[DO]** Scroll through slowly. Point out section dividers and name them:
> - Hero
> - Our Story (origin)
> - Trust section
> - Expertise section
> - What Drives Us (values)
> - Commitment
> - Service Areas
> - Closing Message

> **[SAY]**
>
> "A few of these fields support **markdown** — that's a simple way to add formatting like bold text, bullet points, or line breaks. I'll show you how that works in a minute. The fields that support it are: **Description** (in the Origin / Our Story section), **Description** (in Trust), **Experience List**, **Description** (in Commitment), and the **Message** at the very bottom."

> **[SHOW]** Point to the experience list or closing message field.

> **[SAY]**
>
> "The **What Drives Us** cards — those are managed a bit differently. The section heading, intro sentence, and closing sentence are all here on the about page. But the actual cards — the individual values with their icons and descriptions — those are in their own collection called **values**. To add, edit, or remove a value card, you'd go to Content → values and edit them there. Changes show up on the about page automatically."

> **[REF]** "About Page has five guide pages in the docs — one for each grouping of sections."

> **[PAUSE]** — Questions about the about page?

---

## 7. Markdown Formatting — Quick Demo
**~5 minutes**

> **[SAY]**
>
> "Before we move on, let me quickly show you markdown. A few fields on your site accept special formatting — not just plain text. This is called markdown, and it's actually really simple. There are only a handful of things you'll ever use."

> **[DO]** Open a markdown field — the About closing message or the Our Story description works well.

> **[SAY]**
>
> "Here's the cheat sheet:"

> **[DO]** If possible, show these by typing them in the field or showing the formatting guide in the docs.

> **[SAY]**
>
> "To make text **bold**, you put two asterisks on each side: `**your text**`
>
> To make a *bullet list*, you put a dash and a space before each item: `- First item`
>
> To start a new paragraph, you leave a blank line between your text.
>
> And that's basically it. You don't need to know anything else. The full guide is in the docs under Reference → Formatting Guide."

> **[REF]** "Reference → Formatting Guide — it has a table with every option."

---

## 8. Services Pages
**~12 minutes**

> **[SAY]**
>
> "Now let's talk about your services pages — these are the city-specific pages like 'Services in Eagle Pass.' Each city has its own page, and each one has its own hero, intro text, and section headings."

### Editing a City Page

> **[DO]** Navigate to Content → services_page. Show the list of cities.

> **[SAY]**
>
> "This is the list of your city pages. You'd click whichever city you want to edit. Let's open Eagle Pass."

> **[DO]** Click the Eagle Pass entry.

> **[SAY]**
>
> "You see the same pattern — **Title** at the top for the hero headline, **Description** for the paragraph, **Hero Image** for the background photo. Then there's **Intro Text** which supports markdown. And below that, a couple of section headings."

> **[SHOW]** Point out the **City (slug)** field.

> **[SAY]**
>
> "One field you should never touch: **City (slug)**. See this field right here? That's the URL of this page. If you change it, the page breaks and disappears from Google. Don't touch it. Ever. It's locked in the docs with a warning."

### Managing Services (the shared service list)

> **[DO]** Navigate to Content → services.

> **[SAY]**
>
> "This is where your actual services live — Roof Repair, Leveling, Plumbing, and so on. These are shared — the same services appear on every city page. So if you change the name or description of Roof Repair here, it updates on Eagle Pass, Del Rio, every city — all at once.
>
> Each service has an icon, an image, a name, and two descriptions — one that shows on the home page and one that shows on city pages. You'd click any service to edit it."

> **[DO]** Open one service. Show the Translations section.

> **[SAY]**
>
> "You'll notice translations here — English tab, Spanish tab. Always make sure you're on the right tab when you edit. The **Service Title** is the name. **Landing Page Description** is what shows on the home page cards. **Important Notice** is optional — it shows a highlighted note on city pages, like 'pricing varies by city, call for a quote.'"

### Local Considerations

> **[DO]** Go back to a city page entry. Scroll down to the Local Considerations List field.

> **[SAY]**
>
> "The Local Considerations section — those are the tips specific to each city, like local regulations or weather considerations. To edit those items, you do it right here inside the city page. You'd click on one of these items to open it, edit the title and description in the translations section, and save. No need to go anywhere else."

### City-Specific Service Descriptions

> **[DO]** Navigate to Content → services. Open a service and scroll to City Descriptions.

> **[SAY]**
>
> "One last thing for services: if you ever want a different service description just for one specific city — not all of them — you can add a city-specific override right inside the service entry. Scroll to **City Descriptions** at the bottom. You'd add an entry here with the city slug and a custom description. The website will use that description for that city, and the default for all other cities."

> **[REF]** "Services Pages has four guide pages in the docs: Overview, Editing a City Page, Managing Services, and City-Specific Descriptions."

> **[PAUSE]** — Any questions about services?

---

## 9. Our Work Gallery
**~8 minutes**

> **[SAY]**
>
> "The Our Work page is probably the simplest thing to manage. It's just a photo and video gallery — and all you do is upload files. The website picks them up automatically, newest ones first."

> **[DO]** Click the Files icon in the left sidebar.

> **[SAY]**
>
> "This is your media library. All your files live here. To add to the Our Work gallery, you find the folder called **gallery** and upload directly into it."

> **[DO]** Find and click the gallery folder.

> **[SAY]**
>
> "To upload a new photo or video, you can either drag the file from your computer right onto this screen, or click the upload button in the top right. That's it. Once it's uploaded here, it automatically appears on the Our Work page."

> **[SAY]**
>
> "A few things to know about what you can upload: photos can be JPG, PNG, or WebP. Videos can be MP4. For photos, try to keep them under 5 MB — high quality, but not huge raw files from your camera. The docs have more detail on this including recommended sizes."

> **[SAY]**
>
> "If you want to remove a photo from the gallery, you'd find it in this folder and delete it. Gone from the website immediately. If you're unsure which file is which, hover over the thumbnail — it'll show you the filename."

> **[REF]** "Our Work → Uploading Photos and Uploading Videos."

> **[PAUSE]** — Do you want to try uploading a test photo right now?

---

## 10. English vs. Spanish Content
**~5 minutes**

> **[SAY]**
>
> "Your website is fully bilingual — English and Spanish. Let me explain how that works, because it comes up in a couple of different ways."

> **[SAY]**
>
> "For the page-level content — your home page, about page, services pages — the English and Spanish versions are separate collections. So if you update the home page in English, you'd go to **home**. For Spanish, you'd go to **home_es**. Same fields, same structure, just different language tabs."

> **[DO]** Show the Content list and point to home vs. home_es.

> **[SAY]**
>
> "For the shared collections — like services, process steps, buttons, values — those have a **Translations** section inside each item with an English tab and a Spanish tab. You'd fill in both."

> **[DO]** Open a service. Show the Translations section with EN and ES tabs.

> **[SAY]**
>
> "One thing to be aware of: if you update the English version of something but forget to update Spanish, the Spanish version of the site will still show the old text. So whenever you make a content change, remember to do both languages."

---

## 11. Reference Section & Docs Walkthrough
**~5 minutes**

> **[DO]** Switch to the docs site. Navigate to Reference.

> **[SAY]**
>
> "Before we wrap up, let me show you the reference section of your docs. These are three pages that are always useful to have open."

> **[SHOW]** Reference → All Collections Overview.

> **[SAY]**
>
> "**All Collections Overview** is a quick map — if you ever forget which collection controls which part of the site, this page tells you. It's a one-page cheat sheet."

> **[SHOW]** Reference → Formatting Guide.

> **[SAY]**
>
> "**Formatting Guide** covers the amber highlight trick for title fields, and all the markdown you'll ever need — bold, bullets, paragraphs. If you're in a markdown field and forget the syntax, this is the page to check."

> **[SHOW]** Reference → Troubleshooting.

> **[SAY]**
>
> "**Troubleshooting** covers the most common things that go wrong — text not showing up, images not updating, that kind of thing. Check here first before calling me."

---

## 12. Wrap-Up & Q&A
**~10 minutes**

> **[SAY]**
>
> "Alright, that's the full tour. Let me recap the most important things:
>
> 1. Everything you need to manage your website is in **Directus**.
> 2. The two things you'll use are **Content** for text and settings, and **Files** for photos and videos.
> 3. **Nothing saves automatically** — always click Save.
> 4. **Never change a City (slug) field** — that breaks the URL.
> 5. When you update content, remember to do **both languages**.
> 6. The **docs site** has step-by-step instructions for everything we covered today — bookmark it.
>
> And honestly? The best thing you can do is just go in and explore. Click around. Nothing you do will break the site permanently — if you make a mistake, you just go back and fix it."

> **[PAUSE]** — Open it up for questions. Walk through anything they want to try hands-on.

> **[SAY]** *(at the end)*
>
> "Here's what I'd suggest as your first homework: go into Directus, open the **home** page, and just look at the fields. You don't have to change anything — just get comfortable knowing where everything lives. And keep the docs site bookmarked. If you ever forget how to do something, it'll walk you through it."

---

## Quick Reference Card (to send after the session)

Send the client a short follow-up message with these three things:

1. **Directus login URL:** `[your-cms-url]`
2. **Docs site URL:** `[your-docs-site-url]`
3. **When to call Angel:** If the site looks broken, if you need to add a new city, if you need to add a new service, or if you're unsure about a change that feels risky.

---

## Common Questions & Answers

**"What if I save something wrong?"**
Just go back into the same field, fix it, and save again. Nothing is permanent.

**"Can I add a new city page myself?"**
Not recommended without help — call Angel. Creating a city page requires adding the city to Settings too, and a few things need to match exactly.

**"Can I add a new service myself?"**
Adding a new service involves icons and connecting it to pages — call Angel for that.

**"What if the site looks weird after I save something?"**
Check the troubleshooting page in the docs first. If it's still broken, call Angel.

**"How do I update both languages at the same time?"**
For page collections: update `home`, then go to `home_es` and update the same fields. For collections with translations tabs: click the field, go to the English tab, save, then click the Spanish tab, save.

**"Do my changes show up on the website right away?"**
Yes — almost instantly after you save.
