import {
  CheckCircle2,
  MapPin,
  CalendarDays,
  Users,
  Settings,
  Smile,
  Sun,
  Zap,
  Droplets,
  Drill,
  Database,
  CloudRain,
  Sprout,
  TrendingDown,
  Leaf,
  Wrench,
  ShieldCheck,
  Gauge,
  Layers,
  type LucideIcon,
} from "lucide-react";

import { countiesServed } from "@/data/serviceAreas";
import { siteConfig } from "./site.config";

export type StatCategory =
  | "all"
  | "solar"
  | "electrical"
  | "plumbing"
  | "boreholes"
  | "water-storage"
  | "water-harvesting"
  | "irrigation";

export interface ImpactStat {
  label: string;
  value: string;
  icon: LucideIcon;
  categories: StatCategory[];
}

export const COMMON_IMPACT_STATS: Record<string, ImpactStat> = {
  // ── Shared across all categories ──
  projectsCompleted: {
    label: "Projects Completed",
    value: "150+",
    icon: CheckCircle2,
    categories: ["all"],
  },
  countiesServed: {
    label: "Counties Served",
    value: `${countiesServed.length}`,
    icon: MapPin,
    categories: ["all"],
  },
  yearsExperience: {
    label: "Years Experience",
    value: `${new Date().getFullYear() - Number(siteConfig.foundedYear)}+`,
    icon: CalendarDays,
    categories: ["all"],
  },
  clientsServed: {
    label: "Clients Served",
    value: "120+",
    icon: Users,
    categories: ["all"],
  },
  customerSatisfaction: {
    label: "Customer Satisfaction",
    value: "99%",
    icon: Smile,
    categories: ["all"],
  },

  // ── Shared where a physical system is installed ──
  systemsInstalled: {
    label: "Systems Installed",
    value: "200+",
    icon: Settings,
    categories: ["all", "solar", "electrical", "boreholes", "irrigation"],
  },

  // ── Solar ──
  solarInstallations: {
    label: "Solar Installations",
    value: "85+",
    icon: Sun,
    categories: ["solar"],
  },
  energySavings: {
    label: "Avg. Energy Savings",
    value: "80%",
    icon: TrendingDown,
    categories: ["solar"],
  },
  co2Reduced: {
    label: "CO₂ Reduced (t/yr)",
    value: "450+",
    icon: Leaf,
    categories: ["solar"],
  },

  // ── Electrical ──
  electricalProjects: {
    label: "Electrical Projects",
    value: "60+",
    icon: Zap,
    categories: ["electrical"],
  },
  panelsUpgraded: {
    label: "Panels Upgraded",
    value: "40+",
    icon: Gauge,
    categories: ["electrical"],
  },

  // ── Shared emergency response ──
  emergencyCalls: {
    label: "Emergency Callouts",
    value: "500+",
    icon: ShieldCheck,
    categories: ["electrical", "plumbing"],
  },

  // ── Plumbing ──
  plumbingRepairs: {
    label: "Plumbing Repairs",
    value: "300+",
    icon: Wrench,
    categories: ["plumbing"],
  },
  pipesInstalled: {
    label: "Pipes Installed (km)",
    value: "15+",
    icon: Droplets,
    categories: ["plumbing"],
  },

  // ── Boreholes ──
  boreholesDrilled: {
    label: "Boreholes Drilled",
    value: "45+",
    icon: Drill,
    categories: ["boreholes"],
  },
  avgBoreholeDepth: {
    label: "Avg. Depth (m)",
    value: "220",
    icon: Drill,
    categories: ["boreholes"],
  },
  waterYield: {
    label: "Water Yield (L/hr)",
    value: "4,000+",
    icon: Droplets,
    categories: ["boreholes"],
  },

  // ── Water storage ──
  storageCapacity: {
    label: "Storage Capacity (L)",
    value: "500K+",
    icon: Database,
    categories: ["water-storage"],
  },
  tanksInstalled: {
    label: "Tanks Installed",
    value: "120+",
    icon: Database,
    categories: ["water-storage"],
  },

  // ── Water harvesting ──
  harvestingSystems: {
    label: "Harvesting Systems",
    value: "35+",
    icon: CloudRain,
    categories: ["water-harvesting"],
  },
  rainwaterCollected: {
    label: "Rainwater Collected (m³)",
    value: "12K+",
    icon: CloudRain,
    categories: ["water-harvesting"],
  },

  // ── Irrigation ──
  acresIrrigated: {
    label: "Acres Irrigated",
    value: "200+",
    icon: Sprout,
    categories: ["irrigation"],
  },
  waterSaved: {
    label: "Water Saved",
    value: "65%",
    icon: Droplets,
    categories: ["irrigation"],
  },
  irrigationZones: {
    label: "Irrigation Zones",
    value: "500+",
    icon: Layers,
    categories: ["irrigation"],
  },
};

export function getStatsByCategory(category: StatCategory): ImpactStat[] {
  return Object.values(COMMON_IMPACT_STATS).filter((stat) =>
    stat.categories.includes(category),
  );
}
