// data\links.ts

// ============================================
// Navigation Services Menu Data
// ============================================

import { SERVICES } from "./services";
import {
  BookOpen,
  FolderKanban,
  CircleHelp,
  Download,
  type LucideIcon,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
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

// RESOURCES DROPDOWN LINKS
export interface ResourceNavItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  description: string;
}

export const resourcesNavItems: ResourceNavItem[] = [
  {
    id: "nav-resources",
    label: "Knowledge Centre",
    href: "/resources/knowledge-centre",
    icon: BookOpen,
    description: "Expert articles, guides, and industry insights.",
  },
  {
    id: "nav-projects",
    label: "Projects",
    href: "/projects",
    icon: FolderKanban,
    description: "Completed installations and case studies across Kenya.",
  },
  {
    id: "nav-faq",
    label: "FAQ",
    href: "/resources/faq",
    icon: CircleHelp,
    description: "Answers to common questions about our services.",
  },
  {
    id: "nav-downloads",
    label: "Downloads",
    href: "/resources/downloads",
    icon: Download,
    description: "Brochures, datasheets, and maintenance guides.",
  },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Sitemap", href: "/sitemap.xml" },
];
