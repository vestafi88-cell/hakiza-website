# hakizaronald.com

Personal website for **Hakiza Ronald** — founder of Vestafi. Built with
**Next.js 14** (App Router), no Tailwind (CSS Modules + design tokens in
`app/globals.css`). Deployed on **Vercel**.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
npm start        # serve the production build locally
```

---

## Project structure

```
app/
  layout.js              # <head> metadata, SEO, JSON-LD, fonts, analytics
  page.js                # all page sections + content arrays (edit copy here)
  page.module.css        # section styles
  globals.css            # design tokens (colours, fonts, buttons, layout)
  lib/tiktok.js          # ← EDIT THIS to add TikTok videos
  components/
    Nav.js, Hero.js, Logo.js, Placeholder.js,
    ContactForm.js, TikTokFeed.js
  api/contact/route.js   # SMTP fallback for the contact form
  sitemap.js             # /sitemap.xml
  robots.js              # /robots.txt
  manifest.js            # /manifest.webmanifest
  icon.svg               # favicon (HR monogram)
  apple-icon.js          # apple touch icon (generated)
  opengraph-image.js     # social share image (generated 1200×630)
public/images/           # drop real photos here
```

---

## How to modify the site

| What | Where |
|------|-------|
| Section copy / text | `app/page.js` (and `app/components/Hero.js` for the hero) |
| Colours, fonts, spacing | `app/globals.css` (CSS variables at the top) |
| Journey timeline entries | `JOURNEY` array in `app/page.js` |
| Awards / Press lists | `AWARDS`, `PRESS` arrays in `app/page.js` |
| Letter cards + their links | `LETTERS` array in `app/page.js` (update the `href`s) |
| **TikTok videos** | `app/lib/tiktok.js` (see below) |
| SEO title / description / keywords | `app/layout.js` |

### Photos

Every image is a `<Placeholder>` showing a styled fill until a real photo is
added. To use a real photo:

1. Drop the file into `public/images/` (e.g. `casablanca-2018.jpg`).
2. Find the matching `<Placeholder ... />` in `app/page.js` / `app/components/Hero.js`.
3. Add a `src` prop: `<Placeholder src="/images/casablanca-2018.jpg" label="…" alt="…" />`.

The fill is replaced by an optimized Next.js `<Image>` automatically. Slots:
hero portrait, "at work" (Story), Vestafi app screenshot, and 5 gallery images.

### TikTok videos (Journey section)

Open **`app/lib/tiktok.js`** — it's the only file you edit.

```js
export const TIKTOK_PROFILE = "https://www.tiktok.com/@hakizaronald"; // your profile
export const TIKTOK_HANDLE  = "hakizaronald";                          // shown in the phone header

export const TIKTOK_VIDEOS = [
  "https://www.tiktok.com/@hakizaronald/video/7325000000000000000",   // newest first
  "https://www.tiktok.com/@hakizaronald/video/7320000000000000000",
];
```

- Paste full public TikTok video URLs, newest first. Save and redeploy.
- Thumbnails + captions are pulled from TikTok's **official public oEmbed**
  endpoint — no API key, no scraping.
- If the list is empty, the phone shows a polished "Latest videos, coming soon"
  placeholder. If one URL fails to load, that card degrades to a tap-to-open
  link. **The page never breaks.**

---

## Contact form

`app/components/ContactForm.js` supports two backends:

1. **Formspree (recommended, no server).** Sign up free at
   <https://formspree.io> with `hakiza@vestafi.africa`, create a form, copy its
   endpoint, then set the env var below and redeploy.
2. **SMTP fallback.** If the Formspree var is blank, the form posts to
   `/api/contact` (nodemailer). Set the `SMTP_*` vars below.

Until one is configured, the form shows a graceful "email hakiza@vestafi.africa
directly" message.

### Environment variables

Set these in **Vercel → Project → Settings → Environment Variables** (see
`.env.example`):

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Formspree form URL (Option 1) |
| `SMTP_HOST` `SMTP_PORT` `SMTP_USER` `SMTP_PASS` | SMTP server (Option 2) |
| `CONTACT_TO` | Recipient (default `hakiza@vestafi.africa`) |
| `CONTACT_FROM` | From address (default `SMTP_USER`) |

---

## SEO

Already configured:

- Rich metadata (title template, description, keywords, canonical) in `app/layout.js`.
- **Open Graph + Twitter cards** with an auto-generated 1200×630 share image
  (`app/opengraph-image.js`).
- **JSON-LD structured data** for `Person`, `Organization` (Vestafi), and
  `WebSite` (in `app/layout.js`).
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, favicon + apple icon.
- Descriptive `alt` text on every image slot; semantic headings.

Target keywords: Hakiza Ronald, Vestafi, Ugabus founder, Treepz acquisition,
African entrepreneur, Uganda founder, YALI, AI, startup building, property
ownership.

After deploying, submit `https://hakizaronald.com/sitemap.xml` in
[Google Search Console](https://search.google.com/search-console).

---

## Analytics

**Vercel Analytics** (privacy-friendly, cookieless) is wired in via the
`<Analytics />` component in `app/layout.js`. No setup needed beyond deploying
on Vercel.

**View visits:** Vercel Dashboard → project **hakiza-website** → **Analytics**
tab. (Ensure Analytics is enabled for the project in its settings — it's free
on the Hobby plan.)

---

## Archived old site (`/old`)

The previous WordPress portfolio is preserved as a self-contained static
snapshot in `public/old/` and served at **`/old`** (rewrite in
`next.config.mjs`; a `<base href="/old/">` tag in the snapshot keeps its assets
resolving). It is a read-only archive — WordPress login/search/forms don't run.
To remove it later, delete `public/old/` and the `/old` rewrite. This is a
content snapshot only; keep your full WordPress files + database backup from
NameHero cPanel as the authoritative backup.

## Deployment

```bash
vercel deploy --prod --scope team_xWXdQG0mWekbTR8PnvWLetMU
```

Project: `hakiza-website` on the team "Hakiza Ronald's projects".

### DNS cutover (manual — do last)

Domains `hakizaronald.com` and `www.hakizaronald.com` are attached to the Vercel
project. To go live, set these records at the **authoritative DNS provider**:

| Type  | Host  | Value                  |
|-------|-------|------------------------|
| A     | `@`   | `76.76.21.21`          |
| CNAME | `www` | `cname.vercel-dns.com` |

⚠️ The domain's nameservers currently point to NameHero
(`ns218/ns219.cloudwebhosting.com`). Records added in GoDaddy's DNS panel only
take effect once the nameservers are switched back to GoDaddy (or to Vercel's
`ns1.vercel-dns.com` / `ns2.vercel-dns.com`). Don't touch the live NameHero
site until you're ready to cut over.
