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
    value: "27+",
    icon: MapPin,
    categories: ["all"],
  },
  yearsExperience: {
    label: "Years Experience",
    value: "10+",
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

export const countiesServed = [
  { countyName: "Meru", projectsCount: 32, coordinates: { x: 62, y: 38 } },
  { countyName: "Isiolo", projectsCount: 18, coordinates: { x: 55, y: 32 } },
  { countyName: "Marsabit", projectsCount: 15, coordinates: { x: 55, y: 20 } },
  { countyName: "Wajir", projectsCount: 12, coordinates: { x: 65, y: 25 } },
  { countyName: "Garissa", projectsCount: 9, coordinates: { x: 65, y: 38 } },
  { countyName: "Mandera", projectsCount: 7, coordinates: { x: 72, y: 20 } },
  { countyName: "Turkana", projectsCount: 6, coordinates: { x: 25, y: 25 } },
  { countyName: "Samburu", projectsCount: 5, coordinates: { x: 50, y: 28 } },
  { countyName: "Laikipia", projectsCount: 5, coordinates: { x: 50, y: 42 } },
  {
    countyName: "Tharaka Nithi",
    projectsCount: 5,
    coordinates: { x: 60, y: 44 },
  },
  { countyName: "Embu", projectsCount: 4, coordinates: { x: 58, y: 48 } },
  { countyName: "Machakos", projectsCount: 4, coordinates: { x: 52, y: 55 } },
  { countyName: "Kajiado", projectsCount: 3, coordinates: { x: 47, y: 58 } },
  { countyName: "Kiambu", projectsCount: 3, coordinates: { x: 50, y: 52 } },
  { countyName: "Nairobi", projectsCount: 3, coordinates: { x: 48, y: 55 } },
  { countyName: "Nakuru", projectsCount: 3, coordinates: { x: 45, y: 48 } },
  { countyName: "Nyeri", projectsCount: 2, coordinates: { x: 55, y: 45 } },
  { countyName: "Kirinyaga", projectsCount: 2, coordinates: { x: 58, y: 48 } },
  { countyName: "Murang'a", projectsCount: 2, coordinates: { x: 55, y: 52 } },
  { countyName: "Kisumu", projectsCount: 2, coordinates: { x: 38, y: 52 } },
  { countyName: "Kakamega", projectsCount: 2, coordinates: { x: 35, y: 42 } },
  { countyName: "Vihiga", projectsCount: 1, coordinates: { x: 37, y: 44 } },
  { countyName: "Homa Bay", projectsCount: 1, coordinates: { x: 40, y: 55 } },
  { countyName: "Migori", projectsCount: 1, coordinates: { x: 43, y: 58 } },
  { countyName: "Bomet", projectsCount: 1, coordinates: { x: 38, y: 48 } },
  {
    countyName: "Elgeyo Marakwet",
    projectsCount: 1,
    coordinates: { x: 40, y: 35 },
  },
  { countyName: "Lamu", projectsCount: 1, coordinates: { x: 70, y: 55 } },
];
