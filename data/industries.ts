// ============================================
// Industries We Serve Data
// ============================================

// data/industries.ts

import {
  Building2,
  Factory,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Home,
  Hotel,
  Landmark,
  Wheat,
  type LucideIcon,
} from "lucide-react";

export interface Industry {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
}

export const industries: Industry[] = [
  {
    id: "i1",
    name: "Residential",
    icon: Home,
    description:
      "Water, energy, electrical, plumbing, and irrigation solutions for homes, apartments, and residential estates.",
  },

  {
    id: "i2",
    name: "Commercial",
    icon: Building2,
    description:
      "Reliable engineering solutions for offices, retail spaces, commercial buildings, and business facilities.",
  },

  {
    id: "i3",
    name: "Education",
    icon: GraduationCap,
    description:
      "Safe and dependable water, energy, and electrical solutions for schools, colleges, and educational institutions.",
  },

  {
    id: "i4",
    name: "Healthcare",
    icon: HeartPulse,
    description:
      "Reliable engineering solutions for hospitals, clinics, and healthcare facilities where dependable power and water are essential.",
  },

  {
    id: "i5",
    name: "Hospitality",
    icon: Hotel,
    description:
      "Integrated water, energy, electrical, plumbing, and irrigation solutions for hotels, lodges, resorts, and hospitality properties.",
  },

  {
    id: "i6",
    name: "Agriculture",
    icon: Wheat,
    description:
      "Integrated water, pumping, energy, and irrigation solutions for farms, greenhouses, ranches, and agricultural operations.",
  },

  {
    id: "i7",
    name: "Government & Public Sector",
    icon: Landmark,
    description:
      "Reliable engineering solutions for government facilities, public institutions, and public-sector projects.",
  },

  {
    id: "i8",
    name: "NGOs & Development Organizations",
    icon: HandHeart,
    description:
      "Sustainable water, energy, and electrical solutions for community, humanitarian, and development projects.",
  },

  {
    id: "i9",
    name: "Manufacturing & Industry",
    icon: Factory,
    description:
      "Industrial-grade water, energy, electrical, and plumbing solutions for factories, plants, and manufacturing facilities.",
  },
];
