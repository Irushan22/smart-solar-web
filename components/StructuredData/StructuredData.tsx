import Script from 'next/script';

// LocalBusiness + SolarInstaller structured data
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ElectricalContractor'],
  name: 'Smart Solar Energy And Electricals (PVT) LTD',
  alternateName: 'Smart Solar Energy',
  url: 'https://smartsolar.lk',
  logo: 'https://smartsolar.lk/smart-solar-logo.png',
  image: 'https://smartsolar.lk/smart-solar-hero-banner.png',
  description:
    "Sri Lanka's trusted solar panel installation company. Premium residential and commercial solar systems with net metering, on-grid solutions, and expert installation island-wide across Sri Lanka.",
  telephone: '+94768283962',
  email: 'info@smartsolar.lk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No: 125, Aluthwaththa, Amunugama',
    addressLocality: 'Gunnapana',
    addressRegion: 'Kandy',
    addressCountry: 'LK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 7.2475,
    longitude: 80.6234,
  },
  areaServed: [
    { '@type': 'Country', name: 'Sri Lanka' },
    { '@type': 'City', name: 'Colombo' },
    { '@type': 'City', name: 'Kandy' },
    { '@type': 'City', name: 'Galle' },
    { '@type': 'City', name: 'Matale' },
    { '@type': 'City', name: 'Kurunegala' },
    { '@type': 'City', name: 'Jaffna' },
    { '@type': 'City', name: 'Anuradhapura' },
    { '@type': 'City', name: 'Negombo' },
    { '@type': 'City', name: 'Ratnapura' },
    { '@type': 'City', name: 'Badulla' },
    { '@type': 'City', name: 'Trincomalee' },
    { '@type': 'City', name: 'Batticaloa' },
    { '@type': 'City', name: 'Nuwara Eliya' },
    { '@type': 'City', name: 'Gampola' },
    { '@type': 'City', name: 'Kegalle' },
    { '@type': 'City', name: 'Peradeniya' },
    { '@type': 'City', name: 'Hambantota' },
    { '@type': 'City', name: 'Matara' },
    { '@type': 'City', name: 'Polonnaruwa' },
  ],
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
    ratingValue: '4.9',
    bestRating: '5',
    ratingCount: '120',
    reviewCount: '120',
  },
  sameAs: [
    'https://www.facebook.com/share/1L7rppR49U/?mibextid=LQQJ4d',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Solar Energy Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Residential Solar Panel Installation',
          description:
            'Complete home solar panel installation with premium tier-1 panels. Reduce your electricity bills by up to 90% with on-grid and net metering systems.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Solar Installation',
          description:
            'Large-scale solar solutions for businesses and enterprises. Custom-designed systems to maximize ROI under Net Plus Plus and Net Accounting schemes.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Solar Panel Maintenance',
          description:
            'Comprehensive panel cleaning, inspection, and repair services to keep your solar system performing at peak efficiency year-round.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Energy Storage & Battery Systems',
          description:
            'Advanced battery storage and backup power systems. Store excess solar energy and achieve energy independence.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Free Solar Consultation',
          description:
            'Free comprehensive energy audit and feasibility study. Our experts analyze your property to design the perfect solar solution.',
        },
      },
    ],
  },
};

// FAQ Schema — targets "People Also Ask" boxes on Google
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does solar panel installation cost in Sri Lanka?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solar panel installation costs in Sri Lanka vary based on system size. A typical 3kW residential system starts from around LKR 900,000, while larger 10kW–25kW systems range from LKR 2.5M to LKR 6M. Smart Solar Energy offers free consultations to provide accurate quotes based on your specific energy needs and roof space.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is net metering in Sri Lanka and how does it work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Net metering in Sri Lanka allows solar system owners to export excess electricity to the national grid and receive credits on their electricity bill. Under the CEB's Net Metering, Net Accounting, and Net Plus Plus schemes, homeowners can significantly reduce or even eliminate their electricity bills while earning income from surplus generation.",
      },
    },
    {
      '@type': 'Question',
      name: 'How many solar panels do I need for my home in Sri Lanka?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The number of solar panels depends on your monthly electricity consumption. For a typical Sri Lankan household consuming 200–300 units per month, a 3kW–5kW system (8–14 panels) is ideal. For higher consumption or to maximize net metering income, systems up to 10kW–25kW may be recommended. Smart Solar provides free energy audits to determine the optimal system size.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which solar panel brands are best for Sri Lanka?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Smart Solar Energy uses premium tier-1 solar panels from globally recognized brands including Jinko Solar, LONGi, and Huawei for inverters. We also install Growatt, Solis inverters, and Dyness battery storage systems. All equipment comes with comprehensive manufacturer warranties of 10–25 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does solar panel installation take in Sri Lanka?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard residential solar installation in Sri Lanka typically takes 1–3 days after all permits are approved. The complete process from consultation to commissioning usually takes 2–4 weeks, which includes site assessment, system design, CEB approval, installation, and grid connection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do solar panels work during the rainy season in Sri Lanka?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, solar panels still generate electricity during cloudy and rainy days, though at reduced efficiency (typically 10–30% of peak output). Sri Lanka receives abundant sunshine year-round, and modern high-efficiency panels are designed to perform well even in diffused light conditions. Annual energy production remains highly viable across all regions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the payback period for solar panels in Sri Lanka?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The typical payback period for solar panels in Sri Lanka is 3–5 years, depending on system size, electricity tariff, and the net metering scheme used. After the payback period, you enjoy free electricity for the remaining 20+ years of the system lifespan, making solar one of the best investments available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Smart Solar Energy provide service across all of Sri Lanka?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Smart Solar Energy provides solar panel installation services island-wide across Sri Lanka. We have completed projects in Kandy, Matale, Panwila, Katugasthota, Ukuwela, Hadeniya, Mahawatte, Samandhwa, Meegammana, and many other locations across all provinces. We serve both residential and commercial customers anywhere in Sri Lanka.',
      },
    },
  ],
};

// Organization schema for brand knowledge panel
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Smart Solar Energy And Electricals (PVT) LTD',
  alternateName: 'Smart Solar Energy',
  url: 'https://smartsolar.lk',
  logo: 'https://smartsolar.lk/smart-solar-logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+94768283962',
    contactType: 'customer service',
    areaServed: 'LK',
    availableLanguage: ['English', 'Sinhala', 'Tamil'],
  },
};

// WebSite schema for sitelinks search box
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Smart Solar Energy',
  url: 'https://smartsolar.lk',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://smartsolar.lk/projects?q={search_term_string}',
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
