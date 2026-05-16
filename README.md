# SolarFlow — Solar Energy Next.js Template

A modern, fully responsive Next.js 16 template for solar energy companies, electricians, and renewable-energy installers. Built with the App Router, TypeScript, and Tailwind v4.

## Features

- Next.js 16 App Router + React 19 + TypeScript
- Tailwind CSS v4 + CSS Modules
- Fully responsive (mobile / tablet / desktop)
- Static export (`output: "export"`) — deploy anywhere
- SEO-ready: Open Graph, Twitter cards, JSON-LD (LocalBusiness, FAQ, Organization, WebSite, Breadcrumb), `sitemap.xml`, `robots.txt`
- Multiple page templates: Home (8 sections), Projects list, Project detail (dynamic), Privacy / Terms / Cookie pages
- Filterable bento portfolio grid with hover overlays
- Auto-rotating testimonial carousel
- Validated contact form (UI only — wire up your backend)
- **Single config file** — change branding without grepping the codebase

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # outputs static site to ./out
```

## Customization — read this first

Almost everything is driven by **`site.config.ts`** at the project root. Open it and edit:

| Section | What it controls |
| --- | --- |
| `brand` | Company name, legal name, tagline, logo, founded year |
| `site` | Production URL, language, locale |
| `contact` | Phone, emails, address, geo-coordinates, hours, languages |
| `social` | Facebook / YouTube / Instagram / Twitter / LinkedIn URLs (leave empty `""` to hide the icon) |
| `stats` | The numbers shown in Hero / About / Testimonials |
| `hero` | Hero title, subtitle, background image URL |
| `about` | About section copy, image, feature highlights |
| `seo` | Default page title, description, keywords, OG image |
| `faqs` | Q&A used in JSON-LD for Google "People Also Ask" boxes |

Then update these supporting files:

| File | What to edit |
| --- | --- |
| `data/projects.ts` | Project list with images, testimonials, stats |
| `data/services.ts` | Service cards shown in the Services section |
| `data/brands.ts` | Partner / brand carousel |
| `data/navigation.ts` | Nav links, footer link columns, contact-form service options |

## Replacing images

The template ships with **Unsplash placeholder images** — fine for demo but you'll want your own. Image URLs are configured in:

- `site.config.ts` → `hero.backgroundImage`, `about.image`, `seo.ogImage`
- `data/projects.ts` → `image` and `images[]` for each project
- `data/brands.ts` → brand logos (placeholder service)
- `app/icon.png` → favicon (replace with your own)

If you swap to local images in `public/`, update the URLs to relative paths (e.g. `/my-image.jpg`). If you add remote images from other hosts, add the hostname to `remotePatterns` in `next.config.ts`.

## Wiring up the contact form

The contact form at `components/Contact/Contact.tsx` is **UI only** — submissions resolve via `setTimeout` and don't go anywhere. Replace `handleSubmit` with one of these:

- **Formspree / Web3Forms / Getform** — drop your endpoint into a `fetch()` call
- **Resend / SendGrid / Mailgun** — call a Next.js Route Handler at `app/api/contact/route.ts` (requires removing `output: "export"` from `next.config.ts` and switching to a Node-hosted deployment)
- **Static export friendly** — keep the static build and use any third-party form service

Look for the `TEMPLATE NOTE` comment in `Contact.tsx`.

## Color theming

Brand colors live as CSS variables in `app/globals.css`. Some component styles still use hard-coded hex values (`#73b042`, `#152e52`, `#0B192C`) in their `.module.css` files — replace these with `var(--primary)` etc. as you customize.

## SEO checklist before launch

1. Set `site.url` in `site.config.ts` to your real domain
2. Replace `seo.ogImage` with a 1200×630 image
3. Update `siteConfig.faqs` with questions relevant to your business
4. Replace `app/icon.png` with your favicon
5. Add an `app/apple-icon.png` (180×180)
6. Submit your sitemap (`/sitemap.xml`) to Google Search Console

## Project structure

```
app/                     App Router pages
  layout.tsx             Root layout + metadata (reads site.config)
  page.tsx               Home page
  projects/              Projects list + dynamic detail
  privacy-policy/        Legal pages
  terms-of-service/
  cookie-policy/
  sitemap.ts             Auto-generated from site.config + projects
  robots.ts              Auto-generated from site.config
components/              All UI sections
data/                    Editable content collections
public/                  Static assets (favicon etc.)
site.config.ts           Edit this to rebrand the entire site
```

## Tech

- Next.js 16, React 19, TypeScript 5
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- CSS Modules per component
- Google Fonts: Geist + Outfit
- Zero runtime dependencies beyond Next and React

## License

You purchased this template — see your marketplace license for usage terms.
