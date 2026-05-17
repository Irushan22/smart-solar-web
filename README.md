# Solar Flow — Solar Energy Next.js Template

A modern, fully responsive Next.js 16 landing-page template for solar energy companies, electricians, and renewable-energy installers. Built with the App Router, TypeScript, and Tailwind CSS v4.

## Features

- Next.js 16 App Router + React 19 + TypeScript 5
- Tailwind CSS v4 + CSS Modules per component
- Fully responsive (mobile / tablet / desktop)
- Static export (`output: "export"`) — deploy anywhere
- SEO-ready: Open Graph, Twitter cards, JSON-LD (LocalBusiness, FAQ, Organization, WebSite, Breadcrumb), auto `sitemap.xml`, `robots.txt`
- Dynamic OpenGraph social-share image (1200×630) generated at build
- Cookie consent banner (localStorage-backed)
- Newsletter signup in footer (env-driven)
- Google Maps embed in Contact section
- Loading skeletons for the projects grid
- 4 color preset variants (green / blue / orange / red)
- Custom 404 + 500 error pages, thank-you and coming-soon pages
- PWA `manifest.webmanifest` + dynamic favicon set
- Validated contact form with Formspree / Web3Forms / Getform / custom endpoint support
- **Single config file** — rebrand the whole site by editing `site.config.ts`

## Quick start

```bash
npm install
cp .env.example .env.local      # optional — for real form integrations
npm run dev                     # http://localhost:3000
npm run build                   # outputs static site to ./out
```

## Page structure

| Route | Description |
| --- | --- |
| `/` | Landing page (Hero, About, Services, Brands, Portfolio, Testimonials, Contact) |
| `/projects` | Projects listing |
| `/projects/[id]` | Project detail page (statically pre-rendered) |
| `/thank-you` | Post-submit confirmation |
| `/coming-soon` | Under-construction placeholder |
| `/privacy-policy`, `/terms-of-service`, `/cookie-policy` | Legal pages |
| `/404`, `/500` | Custom error pages |

## Customization — read this first

Almost everything is driven by **`site.config.ts`** at the project root. Open it and edit:

| Section | What it controls |
| --- | --- |
| `brand` | Company name, legal name, tagline, logo URL, founded year |
| `site` | Production URL, language, locale |
| `contact` | Phone, emails, address, geo-coordinates, hours, languages |
| `social` | Facebook / Instagram / LinkedIn / YouTube URLs (leave `""` to hide) |
| `stats` | Numbers shown in Hero / About / Testimonials |
| `hero` | Hero title, subtitle, background image URL |
| `about` | About section copy, image, feature highlights |
| `seo` | Default page title, description, keywords, OG image |
| `faqs` | Q&A used in JSON-LD for Google "People Also Ask" boxes |

Then update supporting data files:

| File | What to edit |
| --- | --- |
| `data/projects.ts` | Project portfolio + testimonials + stats |
| `data/services.ts` | Service cards shown in the Services section |
| `data/brands.ts` | Partner / brand carousel logos |
| `data/navigation.ts` | Nav links, footer link columns, contact-form service options |

## Color theming

Four ready-made presets live in `lib/themes.ts`. To switch:

```ts
// in any client component or app/layout
import { applyTheme, themes } from '@/lib/themes';
applyTheme(themes.blue); // green | blue | orange | red
```

For permanent rebrand, update the CSS variables in [app/globals.css](app/globals.css) and replace the hard-coded hex values inside individual `*.module.css` files.

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values you need. All vars are optional — the site works out-of-the-box with simulated form submits.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` | Formspree / Web3Forms / Getform / custom endpoint for the contact form |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Web3Forms only |
| `NEXT_PUBLIC_NEWSLETTER_ENDPOINT` | Mailchimp / ConvertKit / Buttondown endpoint for the footer newsletter |
| `NEXT_PUBLIC_MAPS_QUERY` | Google Maps embed query (falls back to the address in `site.config.ts`) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 (you'll need to wire the script tag) |

## Wiring up the contact form

The form at [components/Contact/Contact.tsx](components/Contact/Contact.tsx) posts JSON to whichever endpoint you set in `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`. Tested integrations:

- **Formspree** — set the endpoint to `https://formspree.io/f/YOUR_FORM_ID`
- **Web3Forms** — set the endpoint to `https://api.web3forms.com/submit` + `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
- **Getform** — set the endpoint to `https://getform.io/f/YOUR_FORM_ID`
- **Custom Node API** — change `output` in `next.config.ts` from `"export"` to a server-target deploy and POST to `/api/contact`

If no endpoint is configured the form simulates a successful submit so you can demo the UX.

## Replacing demo images

The template ships with **Unsplash placeholder images** — fine for demo, replace before production. URLs live in:

- `site.config.ts` → `hero.backgroundImage`, `about.image`, `seo.ogImage`
- `data/projects.ts` → `image` and `images[]` per project
- `data/brands.ts` → brand logo placeholders (placehold.co)
- `app/icon.tsx`, `app/apple-icon.tsx`, `app/opengraph-image.tsx` → dynamically generated icons + OG image

If you swap to local images in `public/`, update the URLs to relative paths (e.g. `/my-image.jpg`). To add remote images from a new host, add the hostname to `remotePatterns` in [next.config.ts](next.config.ts).

## CMS integration (optional)

The data files (`data/projects.ts`, `data/services.ts`, `data/brands.ts`) are plain TypeScript modules. Swap them for fetches from your CMS in 4 steps:

1. Rename `data/projects.ts` → `data/projects.local.ts` (keep as fallback)
2. Create an async loader at `data/projects.ts`:
    ```ts
    export async function getProjects() {
      const res = await fetch('https://your-cms/api/projects', { next: { revalidate: 60 } });
      return res.json();
    }
    ```
3. In each component that imports projects, switch from `allProjects` to `await getProjects()`.
4. If using Sanity / Contentful / Strapi, install their SDK and use it in the loader.

**Tested CMS adapters:**

- **Sanity** — `@sanity/client`, GROQ query for the project schema
- **Contentful** — `contentful` SDK, use `getEntries` with a content-type filter
- **Strapi** — REST or GraphQL, simple `fetch` call
- **Hygraph** — GraphQL-Request client

Note: when fetching server-side, remove `output: "export"` from `next.config.ts` so pages can be revalidated.

## Internationalization (i18n)

For multi-language support, the cleanest path with App Router is:

1. Move all current routes under `app/[lang]/` (e.g. `app/[lang]/page.tsx`, `app/[lang]/projects/`)
2. Add a `generateStaticParams()` in the root layout to declare supported locales
3. Replace string literals in components with lookups from a `messages/[lang].json` file
4. Add a language switcher in the Navbar

Alternatively, drop in `next-intl` for a fully-featured setup — it integrates cleanly with App Router and supports static export.

## SEO checklist before launch

1. Set `site.url` in `site.config.ts` to your real domain
2. Replace `seo.ogImage` with a 1200×630 brand image (or rely on the dynamic OG generator)
3. Update `siteConfig.faqs` with questions relevant to your business
4. Replace the `SF` initials in `app/icon.tsx`, `app/apple-icon.tsx`, `app/opengraph-image.tsx` with your real logo
5. Submit `/sitemap.xml` to Google Search Console
6. Add Google Analytics or Plausible by editing `app/layout.tsx`

## Project structure

```
app/                         App Router pages
  layout.tsx                 Root layout (reads site.config)
  page.tsx                   Home landing page
  icon.tsx                   32x32 favicon (generated)
  apple-icon.tsx             180x180 apple icon (generated)
  opengraph-image.tsx        1200x630 OG image (generated)
  manifest                   /manifest.webmanifest (PWA)
  projects/                  Projects list + dynamic detail + loading skeleton
  privacy-policy/            Legal pages
  terms-of-service/
  cookie-policy/
  thank-you/                 Post-submit page
  coming-soon/               Under-construction page
  not-found.tsx              Custom 404
  error.tsx                  Custom 500
  sitemap.ts                 Auto-generated from config + projects
  robots.ts                  Auto-generated from config
components/                  UI sections (Navbar, Hero, About, Services, …)
  CookieBanner/              Cookie consent
  Newsletter/                Email signup
  MessagePage/               Shared wrapper for 404/500/thank-you/coming-soon
  LegalLayout/               Shared wrapper for legal pages
data/                        Editable content collections
lib/themes.ts                Color preset switcher
public/                      Static assets (manifest, favicon fallback)
site.config.ts               Edit this to rebrand the entire site
.env.example                 Copy to .env.local for real integrations
```

## Tech stack

- Next.js 16, React 19, TypeScript 5
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- CSS Modules per component
- Google Fonts: Geist + Outfit
- Zero runtime dependencies beyond Next and React

## License

You purchased this template — see [LICENSE.md](LICENSE.md) for usage terms.
