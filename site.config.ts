/**
 * SITE CONFIG — single source of truth for the entire template.
 *
 * Edit this file to rebrand the site:
 *   - Company name, tagline, description
 *   - Contact details (phone, email, address)
 *   - Social media links
 *   - SEO metadata (title, keywords, OG image)
 *   - Headline copy across sections
 *   - Stats and feature highlights
 *
 * Demo / dummy data ships out-of-the-box. Replace before going live.
 */

export const siteConfig = {
  // ──────────────────────────────────────────────────────────
  // Brand
  // ──────────────────────────────────────────────────────────
  brand: {
    name: "SolarFlow",
    legalName: "SolarFlow Energy Inc.",
    tagline: "Power Your Future With Clean Energy",
    shortDescription:
      "Premium residential & commercial solar solutions. Cut your power bill, gain energy independence, and invest in a cleaner future.",
    foundedYear: 2017,
    logoUrl: "https://placehold.co/200x60/0B192C/73b042?text=SolarFlow&font=montserrat",
    logoAlt: "SolarFlow — Solar Panel Installation Company",
    favicon: "/icon.png",
  },

  // ──────────────────────────────────────────────────────────
  // Site
  // ──────────────────────────────────────────────────────────
  site: {
    url: "https://example.com",
    locale: "en_US",
    language: "en",
  },

  // ──────────────────────────────────────────────────────────
  // Contact
  // ──────────────────────────────────────────────────────────
  contact: {
    phone: {
      display: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    emails: {
      primary: "hello@example.com",
      support: "support@example.com",
    },
    address: {
      line1: "123 Sunshine Avenue",
      line2: "Solar District",
      city: "San Francisco",
      region: "CA",
      postalCode: "94107",
      country: "US",
      formatted: "123 Sunshine Avenue, Solar District, San Francisco, CA 94107",
    },
    geo: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    hours: {
      weekdays: "Monday – Friday: 8:00 AM – 6:00 PM",
      saturday: "Saturday: 9:00 AM – 2:00 PM",
      shortWeekdays: "Mon – Fri, 8am – 6pm",
    },
    languages: ["English", "Spanish"],
  },

  // ──────────────────────────────────────────────────────────
  // Social links — set href to "#" or empty to hide
  // ──────────────────────────────────────────────────────────
  social: {
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
    instagram: "",
    twitter: "",
    linkedin: "",
  },

  // ──────────────────────────────────────────────────────────
  // Global trust stats — used in Hero, About, Testimonials
  // ──────────────────────────────────────────────────────────
  stats: {
    averageRating: "4.9",
    happyCustomers: "120+",
    wouldRecommend: "98%",
    yearsOfTrust: "8+",
    energyInstalled: "1MW+",
    satisfactionRate: "100%",
  },

  // ──────────────────────────────────────────────────────────
  // Hero section
  // ──────────────────────────────────────────────────────────
  hero: {
    titleLine1: "Power Your Future",
    titleLine2Prefix: "With",
    titleLine2Highlight: "Clean Energy",
    subtitle:
      "Reduce your electricity bills and enjoy reliable, long-term savings with high-performance solar systems built for modern homes and businesses.",
    backgroundImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80",
  },

  // ──────────────────────────────────────────────────────────
  // About section
  // ──────────────────────────────────────────────────────────
  about: {
    subtitle: "WHO WE ARE",
    titlePrefix: "Powering Your",
    titleHighlight: "Community",
    titleSuffix: "with Smart Solar Energy",
    image:
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Solar installation team mounting panels on a rooftop",
    paragraphs: [
      "At SolarFlow, we believe going solar should be simple, affordable, and reliable for every home and business. With over 8 years of industry experience, our certified team delivers high-quality solar solutions designed to match your exact energy needs.",
      "We don't just install solar systems — we help you reduce your electricity bills, gain energy independence, and invest in a smarter future. From consultation to installation and after-sales support, we handle everything for you.",
    ],
    features: [
      {
        title: "Premium Tier-1 Equipment",
        text: "We only use top-grade solar panels and inverters for maximum performance.",
      },
      {
        title: "25-Year Warranty & Reliable Support",
        text: "Enjoy long-term peace of mind with strong warranties and ongoing technical support you can depend on.",
      },
      {
        title: "1MW+ Clean Energy Installed",
        text: "Trusted by 120+ customers across residential and commercial projects.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // SEO defaults
  // ──────────────────────────────────────────────────────────
  seo: {
    defaultTitle:
      "SolarFlow Energy | Premium Solar Panel Installation",
    titleTemplate: "%s | SolarFlow Energy",
    description:
      "SolarFlow Energy — trusted solar panel installation company. Residential & commercial solar systems, net metering, and renewable energy solutions.",
    keywords: [
      "solar panels",
      "solar installation",
      "solar energy",
      "net metering",
      "solar power system",
      "residential solar",
      "commercial solar installation",
      "renewable energy",
      "solar company",
      "on-grid solar system",
      "solar inverter",
    ],
    ogImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    twitterHandle: "",
  },

  // ──────────────────────────────────────────────────────────
  // FAQ — used in JSON-LD for "People Also Ask" SEO boxes
  // ──────────────────────────────────────────────────────────
  faqs: [
    {
      q: "How much does solar panel installation cost?",
      a: "Solar panel installation costs vary based on system size. A typical 3kW residential system starts from around $9,000, while larger 10kW–25kW systems range from $25,000 to $60,000. SolarFlow offers free consultations to provide accurate quotes based on your specific energy needs and roof space.",
    },
    {
      q: "What is net metering and how does it work?",
      a: "Net metering allows solar system owners to export excess electricity to the grid and receive credits on their electricity bill. Homeowners can significantly reduce or even eliminate their electricity bills while earning income from surplus generation.",
    },
    {
      q: "How many solar panels do I need for my home?",
      a: "The number of solar panels depends on your monthly electricity consumption. For a typical household, a 3kW–5kW system (8–14 panels) is ideal. For higher consumption or to maximize net metering income, systems up to 10kW–25kW may be recommended. We provide free energy audits to determine the optimal system size.",
    },
    {
      q: "Which solar panel brands are best?",
      a: "SolarFlow uses premium tier-1 solar panels from globally recognized brands. All equipment comes with comprehensive manufacturer warranties of 10–25 years.",
    },
    {
      q: "How long does solar panel installation take?",
      a: "A standard residential solar installation typically takes 1–3 days after all permits are approved. The complete process from consultation to commissioning usually takes 2–4 weeks, which includes site assessment, system design, permitting approvals, installation, and grid connection.",
    },
    {
      q: "Do solar panels work during the rainy season?",
      a: "Yes, solar panels still generate electricity during cloudy and rainy days, though at reduced efficiency (typically 10–30% of peak output). Modern high-efficiency panels are designed to perform well even in diffused light conditions.",
    },
    {
      q: "What is the payback period for solar panels?",
      a: "The typical payback period is 3–7 years, depending on system size, electricity tariff, and net metering schemes. After the payback period, you enjoy free electricity for the remaining 20+ years of the system lifespan.",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
