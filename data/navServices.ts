// ============================================
// Navigation Services Menu Data
// ============================================

export interface NavServiceItem {
  id: string;
  number: string;
  label: string;
  slug: string;
  href: string;
  icon: string;
  subServices: string[];
}

export const navServices: NavServiceItem[] = [
  {
    id: "nav-solar",
    number: "01",
    label: "Solar",
    slug: "solar",
    href: "/services/solar",
    icon: "Sun",
    subServices: [
      "Solar System Design",
      "Solar Installation",
      "Solar Power Systems",
      "Battery Storage",
      "Solar Water Solutions",
      "Solar Maintenance",
      "Energy Efficiency",
    ],
  },
  {
    id: "nav-electrical",
    number: "02",
    label: "Electrical",
    slug: "electrical",
    href: "/services/electrical",
    icon: "Zap",
    subServices: [
      "Electrical Installation",
      "Wiring and Distribution",
      "Lighting Systems",
      "Electrical Protection",
      "Backup Power",
      "Electrical Upgrades",
      "Testing and Maintenance",
    ],
  },
  {
    id: "nav-plumbing",
    number: "03",
    label: "Plumbing",
    slug: "plumbing",
    href: "/services/plumbing",
    icon: "Droplets",
    subServices: [
      "Plumbing Installation",
      "Water Supply Systems",
      "Drainage and Sewer",
      "Plumbing Repairs",
      "Water Heaters",
      "Bathroom and Kitchen Plumbing",
      "Plumbing Maintenance",
    ],
  },
  {
    id: "nav-boreholes",
    number: "04",
    label: "Boreholes",
    slug: "boreholes",
    href: "/services/boreholes",
    icon: "Drill",
    subServices: [
      "Hydrogeological Surveys",
      "Borehole Drilling",
      "Borehole Testing",
      "Borehole Equipping",
      "Borehole Rehabilitation",
      "Solar Borehole Pumping",
      "Borehole Maintenance",
    ],
  },
  {
    id: "nav-water-storage",
    number: "05",
    label: "Water Storage",
    slug: "water-storage",
    href: "/services/water-storage",
    icon: "Database",
    subServices: [
      "Plastic Water Tanks",
      "Steel Water Tanks",
      "GRP Water Tanks",
      "Concrete Water Storage",
      "Water Towers",
      "Water Reservoirs",
      "Tank Installation and Maintenance",
    ],
  },
  {
    id: "nav-water-harvesting",
    number: "06",
    label: "Water Harvesting",
    slug: "water-harvesting",
    href: "/services/water-harvesting",
    icon: "CloudRain",
    subServices: [
      "Rainwater Harvesting",
      "Surface Water Harvesting",
      "Water Pans",
      "Farm Ponds",
      "Small Dams",
      "Water Reservoirs",
      "Harvesting System Installation",
    ],
  },
  {
    id: "nav-irrigation",
    number: "07",
    label: "Irrigation",
    slug: "irrigation",
    href: "/services/irrigation",
    icon: "Sprout",
    subServices: [
      "Irrigation Design",
      "Drip Irrigation",
      "Sprinkler Irrigation",
      "Solar Irrigation",
      "Farm Water Distribution",
      "Smart Irrigation",
      "Irrigation Maintenance",
    ],
  },
];
