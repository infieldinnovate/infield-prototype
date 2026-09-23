export interface HeroSlideData {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  panelTitle: string;
  panelMeta: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export const slides: HeroSlideData[] = [
  {
    id: "brand",
    eyebrow: "WATER \u2022 ENERGY \u2022 ENGINEERING",
    title: "Powering Progress.\nBuilding What Matters.",
    description:
      "Integrated water, energy and engineering solutions designed for homes, businesses and institutions.",
    image: "/home/solar_64576898001.jpg",
    imageAlt:
      "Wide-angle view of a large-scale construction site with cranes under a vibrant blue sky",
    panelTitle: "SOLAR ENERGY",
    panelMeta: "Clean Power \u2022 Storage \u2022 Installation",
    primaryCta: { label: "Get Free Consultation", href: "/quote" },
    secondaryCta: { label: "Explore Our Services", href: "/services" },
  },
  {
    id: "solar",
    eyebrow: "SOLAR ENERGY",
    title: "Turn Sunshine Into\nReliable Power.",
    description:
      "Custom solar systems, battery storage and energy solutions designed around your power needs.",
    image: "/home/solar_pumping_645836459.jpg",
    imageAlt:
      "A large field of solar panels capturing renewable energy under a clear sky",
    panelTitle: "SOLAR ENERGY",
    panelMeta: "Clean Power \u2022 Storage \u2022 Installation",
    primaryCta: { label: "Solars - How We Do It", href: "/services/solar" },
  },
  {
    id: "water",
    eyebrow: "WATER SOLUTIONS",
    title: "Reliable Water\nStarts Here.",
    description:
      "From borehole drilling to water storage and harvesting, we develop dependable water systems for homes, businesses and institutions.",
    image: "/home/borehole_456453045.jpg",
    imageAlt:
      "Aerial shot of a sunlit construction site highlighting a deep borehole",
    panelTitle: "WATER SOLUTIONS",
    panelMeta: "Boreholes \u2022 Storage \u2022 Harvesting",
    primaryCta: {
      label: "Explore Water Solutions",
      href: "/services/water-storage",
    },
  },
  {
    id: "electrical",
    eyebrow: "ELECTRICAL ENGINEERING",
    title: "Power Systems\nBuilt To Perform.",
    description:
      "Safe, reliable electrical installations and engineering solutions built for modern properties and demanding environments.",
    image: "/home/electrical_47625345235.jpg",
    imageAlt:
      "Professional engineer inspecting industrial electrical circuit board",
    panelTitle: "ELECTRICAL",
    panelMeta: "Installation \u2022 Maintenance \u2022 Upgrades",
    primaryCta: { label: "Explore Electrical", href: "/services/electrical" },
  },
  {
    id: "irrigation",
    eyebrow: "IRRIGATION",
    title: "Smarter Water.\nBetter Growth.",
    description:
      "Efficient irrigation systems designed to deliver the right amount of water where it matters most.",
    image: "/home/irrigation_7486789098.jpg",
    imageAlt:
      "Drone shot of a circular irrigation system watering a green agricultural field",
    panelTitle: "IRRIGATION",
    panelMeta: "Design \u2022 Installation \u2022 Efficiency",
    primaryCta: { label: "Explore Irrigation", href: "/services/irrigation" },
  },
];
