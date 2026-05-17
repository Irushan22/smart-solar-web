# Changelog

All notable changes to this template are documented here. This project adheres to [Semantic Versioning](https://semver.org/).

## [1.0.0] — Initial Release

### Added

- **Pages**
  - Home landing page with 8 sections (Hero, About, Services, Brands, Portfolio, Testimonials, Contact, Footer)
  - `/projects` listing + `/projects/[id]` dynamic detail pages
  - `/privacy-policy`, `/terms-of-service`, `/cookie-policy` legal pages with shared layout
  - `/thank-you` post-submit confirmation page
  - `/coming-soon` placeholder page
  - Custom `/404` (`not-found.tsx`) and `/500` (`error.tsx`) error pages
- **Components**
  - Cookie consent banner (localStorage-backed)
  - Newsletter signup form in footer (Mailchimp/ConvertKit ready)
  - Google Maps embed in Contact section (env-driven location)
  - Loading skeletons for projects grid
  - Shared `MessagePage` and `LegalLayout` wrappers
- **Configuration**
  - Single-source `site.config.ts` for brand, contact, social, SEO, content, FAQs
  - 4 color preset variants in `lib/themes.ts` (green, blue, orange, red)
  - `.env.example` with Formspree / Web3Forms / Resend / Mailchimp integration hooks
- **SEO & Meta**
  - Open Graph + Twitter cards driven by config
  - JSON-LD structured data: LocalBusiness, FAQ, Organization, WebSite, Breadcrumb
  - Auto-generated `sitemap.xml` and `robots.txt`
  - Dynamic `opengraph-image.tsx` (1200×630) generated at build time
  - PWA `manifest.webmanifest` + dynamic 32×32 / 180×180 favicon set
- **Accessibility**
  - Skip-to-content link visible on focus
  - All form inputs properly labeled (`htmlFor` / `id`)
  - Proper ARIA labels on social icons, nav arrows, hamburger
- **Tech**
  - Next.js 16 (App Router) + React 19 + TypeScript 5
  - Tailwind CSS v4 + CSS Modules per component
  - Static export (`output: "export"`)
  - 4 social icons (Facebook, Instagram, LinkedIn, YouTube) in Navbar + Footer
  - All imagery from Unsplash (no licensing risk)
  - Placeholder brand logos via placehold.co
- **Docs**
  - Full customization `README.md`
  - `LICENSE.md` covering marketplace usage terms
  - `.editorconfig` and `.prettierrc` for consistent formatting
  - `CHANGELOG.md` (this file)
