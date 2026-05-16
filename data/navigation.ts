export interface NavLink {
  label: string;
  /** matches section id on home page (e.g. "about" → "/#about") */
  section: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", section: "home" },
  { label: "About", section: "about" },
  { label: "Services", section: "services" },
  { label: "Portfolio", section: "portfolio" },
  { label: "Testimonials", section: "testimonials" },
];

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Services",
    links: [
      { label: "Residential Solar", href: "/#services" },
      { label: "Commercial Solar", href: "/#services" },
      { label: "Solar Maintenance", href: "/#services" },
      { label: "Energy Storage", href: "/#services" },
      { label: "EV Charging", href: "/#services" },
      { label: "Free Consultation", href: "/#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Our Projects", href: "/projects" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];

export const contactFormServices: { value: string; label: string }[] = [
  { value: "residential", label: "Residential Solar" },
  { value: "commercial", label: "Commercial Solar" },
  { value: "maintenance", label: "Solar Maintenance" },
  { value: "storage", label: "Energy Storage" },
  { value: "ev", label: "EV Charging" },
  { value: "consultation", label: "Free Consultation" },
];
