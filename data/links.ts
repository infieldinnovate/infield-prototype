// data\links.ts

// ============================================
// Navigation Services Menu Data
// ============================================

import { SERVICES } from "./services";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "Quote", href: "/quote" },
] as const;

// SERVICE LINKS
export const servicesNavItems = SERVICES.map((service, index) => ({
  id: `nav-${service.slug}`,
  number: String(index + 1).padStart(2, "0"),
  label: service.shortName,
  slug: service.slug,
  href: `/services/${service.slug}`,
  icon: service.icon,
  subServices: service.features.map((feature) => feature.title),
}));

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Sitemap", href: "/sitemap.xml" },
];
