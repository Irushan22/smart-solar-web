import Script from 'next/script';
import { siteConfig } from '@/site.config';
import { services } from '@/data/services';

const url = siteConfig.site.url;

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ElectricalContractor'],
  name: siteConfig.brand.legalName,
  alternateName: siteConfig.brand.name,
  url,
  logo: siteConfig.brand.logoUrl,
  image: siteConfig.seo.ogImage,
  description: siteConfig.seo.description,
  telephone: siteConfig.contact.phone.href.replace('tel:', ''),
  email: siteConfig.contact.emails.primary,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.contact.address.line1,
    addressLocality: siteConfig.contact.address.city,
    addressRegion: siteConfig.contact.address.region,
    postalCode: siteConfig.contact.address.postalCode,
    addressCountry: siteConfig.contact.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.contact.geo.latitude,
    longitude: siteConfig.contact.geo.longitude,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '14:00',
    },
  ],
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: siteConfig.stats.averageRating,
    bestRating: '5',
    ratingCount: siteConfig.stats.happyCustomers.replace(/\D/g, '') || '100',
    reviewCount: siteConfig.stats.happyCustomers.replace(/\D/g, '') || '100',
  },
  sameAs: Object.values(siteConfig.social).filter(Boolean),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Solar Energy Services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.description,
      },
    })),
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: siteConfig.faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.brand.legalName,
  alternateName: siteConfig.brand.name,
  url,
  logo: siteConfig.brand.logoUrl,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.contact.phone.href.replace('tel:', ''),
    contactType: 'customer service',
    areaServed: siteConfig.contact.address.country,
    availableLanguage: siteConfig.contact.languages,
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.brand.name,
  url,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${url}/projects?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export function StructuredData() {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
