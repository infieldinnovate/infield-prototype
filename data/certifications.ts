// ============================================
// Certifications & Licences Data
// ============================================

import {
  Award,
  BadgeCheck,
  Droplets,
  ShieldCheck,
  Sun,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/data/site.config";

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  description: string;
  icon: LucideIcon;
  year: string;
}

export const certificationsList: Certification[] = [
  {
    id: "c1",
    name: "Licensed Electrical Contractor",
    issuer: "Energy & Petroleum Regulatory Authority (EPRA)",
    description:
      "Fully licensed to perform electrical installations and maintenance across Kenya.",
    icon: BadgeCheck,
    year: siteConfig.foundedYear,
  },

  {
    id: "c2",
    name: "ISO 9001:2015 Certified",
    issuer: "International Organization for Standardization",
    description:
      "Quality management systems certified for consistent, reliable service delivery.",
    icon: Award,
    year: "2018",
  },

  {
    id: "c3",
    name: "Solar Energy Professional",
    issuer: "Solar Trade Association of Kenya",
    description:
      "Certified for solar system design, installation, and maintenance.",
    icon: Sun,
    year: "2017",
  },

  {
    id: "c4",
    name: "Borehole Drilling Permit",
    issuer: "Water Resources Authority (WRA)",
    description:
      "Authorised borehole drilling and water abstraction permit holder.",
    icon: Droplets,
    year: "2020",
  },

  {
    id: "c5",
    name: "Occupational Health & Safety",
    issuer: "Directorate of Occupational Safety & Health",
    description:
      "Compliant with workplace safety standards across all project sites.",
    icon: ShieldCheck,
    year: "2015",
  },

  {
    id: "c6",
    name: "Plumbing Practitioners Licence",
    issuer: "Nairobi County Government",
    description:
      "Licensed plumbing practitioners for residential and commercial work.",
    icon: Wrench,
    year: "2013",
  },
];
