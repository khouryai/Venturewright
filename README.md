# Venturewright

The production website for **Venturewright** — a business architecture studio
for founder-led companies.

Live domain: **https://venturewrightco.com**

---

## Stack

| | |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Plain CSS with design tokens (no CSS framework) |
| Fonts | `next/font` — Newsreader (display) + Inter (text), self-hosted |
| Output | Fully static export (`out/`) — no server, database, CMS, or API |
| Dependencies | `next`, `react`, `react-dom`. Nothing else at runtime. |

There is no backend, no contact form, no analytics, and no third-party scripts.
The single conversion path is the Calendly booking link.

---

## Commands

```bash
npm install       # install dependencies
npm run dev       # local development server -> http://localhost:3000
npm run build     # production build; writes the static site to ./out
npm run serve     # preview the built ./out folder -> http://localhost:4000
npm run lint      # ESLint
npm run typecheck # TypeScript, no emit
```

`npm run build` must complete before `npm run serve`.

---

## Where the configuration lives

**All business facts live in one file: [`src/lib/site.ts`](src/lib/site.ts).**

```ts
COMPANY_NAME = "Venturewright"
EMAIL        = "Matthew@venturewrightco.com"
BOOKING_URL  = "https://calendly.com/matthew-venturewrightco/new-meeting"
DOMAIN       = "https://venturewrightco.com"
```

Change a value there and it updates everywhere:

* Every **"Talk About Your Business"** button reads `BOOKING_URL` through the
  `BookingLink` component ([`src/components/BookingLink.tsx`](src/components/BookingLink.tsx)).
  Each opens in a new tab with `rel="noopener noreferrer"`.
* Every displayed email address reads `EMAIL` through the `EmailLink`
  component and links via `mailto:`.
* Page title, meta description, canonical URL, Open Graph tags, the sitemap
  and `robots.txt` are all derived from the same file.

No URL or email address is hard-coded anywhere else in the codebase.

### Editing the copy

* Repeating, structured copy (the method steps, the three value pillars, the
  case studies, the owner-situation lists) is in
  [`src/lib/content.ts`](src/lib/content.ts).
* Narrative prose sits inline in the section component it belongs to, under
  [`src/components/sections/`](src/components/sections/).

### Editing the design

The whole visual system is defined in [`src/styles/tokens.css`](src/styles/tokens.css)
— colour, fluid type scale, spacing, layout widths and motion. Sections compose
those tokens rather than inventing their own values.

```
src/styles/
  tokens.css      design tokens (start here)
  base.css        reset + base typography
  layout.css      container, section, editorial grid, shared headline utilities
  components.css  buttons, header, mobile menu, footer, scroll reveal
  sections.css    per-section compositions
```

---

## Project structure

```
.github/workflows/
  deploy-pages.yml  builds and publishes to GitHub Pages on every push
src/
  app/
    layout.tsx        <html>, fonts, metadata, structured data, header + footer
    page.tsx          the home page — composes the sections in order
    not-found.tsx     branded 404
    robots.ts         generates /robots.txt
    sitemap.ts        generates /sitemap.xml
    icon.svg          favicon (V mark)
    apple-icon.png    Apple touch icon
    globals.css       imports the stylesheets in src/styles
  components/
    Header.tsx        sticky header + accessible mobile menu (client component)
    Footer.tsx
    BookingLink.tsx   the single primary CTA
    EmailLink.tsx
    Rail.tsx          the numbered horizontal progression used twice
    Reveal.tsx        scroll reveal (client component, progressive enhancement)
    Icons.tsx
    sections/         one component per page section
  lib/
    site.ts           centralised configuration  <-- edit business facts here
    content.ts        structured copy
public/
  og.png              1200x630 social sharing image
  _headers            header rules for Cloudflare Pages / Netlify
```

Only two components ship JavaScript to the browser (`Header` and `Reveal`).
Everything else is server-rendered at build time.

---

## Deployment

The build produces a plain static site in `out/`. Any static host works.

### Live now: GitHub Pages (interim)

`.github/workflows/deploy-pages.yml` builds and publishes the site on every
push to the default branch.

**URL:** <https://khouryai.github.io/Venturewright/>

A GitHub Pages *project* site is served from a sub-path, so the workflow passes
the deployment target to the build:

| Variable | Value in the Pages build | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_ORIGIN` | `https://khouryai.github.io` | scheme + host |
| `NEXT_PUBLIC_BASE_PATH` | `/Venturewright` | sub-path (sets `basePath`, prefixes every asset and link) |
| `NEXT_PUBLIC_NOINDEX` | `true` | keeps the preview out of search results |

All three are optional and unset by default, so a plain `npm run build`
produces the production-domain build. See [`src/lib/site.ts`](src/lib/site.ts).

**One-time setup:** enable Pages under
**Settings → Pages → Build and deployment → Source: GitHub Actions**. The
workflow token is not permitted to turn Pages on by itself, so until this is
done the run builds successfully and then fails at the deploy step. Once it is
set, every push publishes automatically.

To reproduce the Pages build locally:

```bash
NEXT_PUBLIC_SITE_ORIGIN=https://khouryai.github.io \
NEXT_PUBLIC_BASE_PATH=/Venturewright \
NEXT_PUBLIC_NOINDEX=true \
npm run build
```

### Migrating to venturewrightco.com

**Option A — stay on GitHub Pages.** Add the domain under Settings → Pages
(this writes a `CNAME` file), add the DNS records below, then edit the `Build`
step of the workflow: set `NEXT_PUBLIC_BASE_PATH` to `""`,
`NEXT_PUBLIC_SITE_ORIGIN` to `https://venturewrightco.com`, and
`NEXT_PUBLIC_NOINDEX` to `"false"`. A Pages site on a custom domain is served
from the root, so the sub-path must be removed or every asset will 404.

GitHub Pages apex + `www` records:

| Type | Name | Value |
| --- | --- | --- |
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `CNAME` | `www` | `khouryai.github.io` |

Then tick **Enforce HTTPS** once the certificate is issued.

**Option B — move to Vercel, Cloudflare Pages or Netlify.** Delete
`.github/workflows/deploy-pages.yml` and follow one of the sections below.
Those hosts serve from the root, so none of the three variables are needed.

### Vercel

1. Go to <https://vercel.com/new> and import this repository.
2. Vercel detects Next.js automatically. Confirm:
   * Build command: `npm run build`
   * Output directory: `out`
   * Node version: 22
3. Deploy. No environment variables are needed.

`vercel.json` sets the security and caching headers.

### Cloudflare Pages

1. Pages → Create a project → connect the repository.
2. Framework preset: **Next.js (Static HTML Export)**
   * Build command: `npm run build`
   * Build output directory: `out`
   * Environment variable: `NODE_VERSION` = `22`

`public/_headers` supplies the header rules.

### Netlify

Import the repository; `netlify.toml` already sets the build command
(`npm run build`), the publish directory (`out`) and Node 22.

### Anywhere else

`npm run build`, then upload the contents of `out/` to any static host or CDN
(S3 + CloudFront, nginx, and so on).

---

## Connecting venturewrightco.com on another host

For GitHub Pages, see *Migrating to venturewrightco.com* above. If you move to
one of the hosts below instead, add the domain in that host's dashboard, then
create the DNS records at whichever registrar holds `venturewrightco.com`.

**Vercel** — Project → Settings → Domains → add `venturewrightco.com` and
`www.venturewrightco.com`, then:

| Type | Name | Value |
| --- | --- | --- |
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

**Cloudflare Pages** — if the domain is already on Cloudflare, add the custom
domain and Cloudflare creates the records for you. Otherwise:

| Type | Name | Value |
| --- | --- | --- |
| `CNAME` | `@` | `<your-project>.pages.dev` |
| `CNAME` | `www` | `<your-project>.pages.dev` |

**Netlify** — Site settings → Domain management → add the domain, then either
point the nameservers at Netlify DNS or create:

| Type | Name | Value |
| --- | --- | --- |
| `A` | `@` | `75.2.60.5` |
| `CNAME` | `www` | `<your-site>.netlify.app` |

Always confirm the exact values shown in your host's dashboard — providers do
change them. Set one of the two hostnames as the primary and redirect the other
so there is a single canonical URL; the site's canonical tag points at
`https://venturewrightco.com`, so make the apex the primary. HTTPS certificates
are issued automatically by all three hosts once DNS resolves.

---

## Accessibility

* Semantic landmarks, one `<h1>`, logical `h2`/`h3` hierarchy.
* Keyboard operable throughout, with a skip link and visible focus rings.
* The mobile menu traps focus, closes on `Escape`, restores focus to its
  button, and locks the page behind it.
* No interaction depends on hover.
* Scroll reveals are decorative: they are disabled under
  `prefers-reduced-motion`, forced visible when JavaScript is off (a `<noscript>`
  style rule), and revealed on keyboard focus.
* Colour pairings meet WCAG AA contrast.

## Performance

* Static HTML, ~130 KB of gzipped JavaScript (the Next.js/React baseline),
  ~6 KB of CSS and ~93 KB of self-hosted, preloaded fonts.
* No images on the page itself — the visual system is typography, spacing and
  hairline rules — so there is nothing to lazy-load and no layout shift.
* No analytics, tag managers, cookie banners or third-party requests.
