// data/services.ts

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

interface InfographicStep {
  icon: string;
  label: string;
  description: string;
}

export interface Service {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  image: string;
  features: ServiceFeature[];
  process: ServiceProcessStep[];
  infographic: InfographicStep[];
  infographicTitle: string;
  infographicSubtitle: string;
}

export type ServiceSlug =
  | "solar"
  | "electrical"
  | "plumbing"
  | "boreholes"
  | "water-storage"
  | "water-harvesting"
  | "irrigation";

/* -------------------------------------------------------------------------- */
/* SERVICES                                                    */
/* -------------------------------------------------------------------------- */

export const SERVICES: Service[] = [
  {
    slug: "solar",
    name: "Solar Energy Solutions",
    shortName: "Solar",
    tagline: "Harness the sun for clean, affordable energy",
    description:
      "Custom solar panel installation, battery storage, and energy system design for residential and commercial properties looking to reduce energy costs.",
    longDescription:
      "Transition to clean energy with our comprehensive solar solutions. We handle every aspect from initial assessment and system design to installation, permitting, and ongoing maintenance. Our solar systems are designed to maximize energy production and savings, with battery storage options for energy independence.",
    icon: "Sun",
    color: "#fbbf24",
    image: "/services/solar-154910_690.jpg",
    infographicTitle: "Integrated Solar Energy Flow",
    infographicSubtitle:
      "From sunlight to power — a complete clean energy system",
    infographic: [
      {
        icon: "Sun",
        label: "Solar Capture",
        description: "Panels harvest sunlight",
      },
      {
        icon: "Zap",
        label: "Inverter",
        description: "DC converted to AC power",
      },
      {
        icon: "BatteryCharging",
        label: "Battery Storage",
        description: "Excess energy stored",
      },
      {
        icon: "Lightbulb",
        label: "Power Supply",
        description: "Reliable electricity to your property",
      },
    ],
    features: [
      {
        title: "Solar System Design",
        description: "System sizing, energy assessment and solution planning.",
      },
      {
        title: "Solar Installation",
        description:
          "Residential, commercial and industrial solar installations.",
      },
      {
        title: "Solar Power Systems",
        description: "Grid-tied, off-grid and hybrid solar systems.",
      },
      {
        title: "Battery Storage",
        description: "Battery energy storage and backup power integration.",
      },
      {
        title: "Solar Water Solutions",
        description: "Solar water heating, water pumping and solar irrigation.",
      },
      {
        title: "Solar Maintenance",
        description: "System servicing, upgrades and performance monitoring.",
      },
      {
        title: "Energy Efficiency",
        description: "Energy audits and energy-saving recommendations.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Site Assessment",
        description: "We evaluate your roof, sun exposure, and energy needs.",
      },
      {
        step: 2,
        title: "System Design",
        description:
          "Custom solar system design with detailed production estimates.",
      },
      {
        step: 3,
        title: "Permitting",
        description:
          "We handle all permits and utility interconnection paperwork.",
      },
      {
        step: 4,
        title: "Installation",
        description:
          "Professional installation typically completed in 1-2 days.",
      },
      {
        step: 5,
        title: "Activation",
        description: "System testing, activation, and monitoring setup.",
      },
    ],
  },
  {
    slug: "electrical",
    name: "Electrical & Power Solutions",
    shortName: "Electrical",
    tagline: "Powering buildings, machines, pumps and energy systems",
    description:
      "Professional electrical installation and power solutions for buildings, solar systems, backup systems, pumps, motors, VFDs and specialized equipment.",
    longDescription:
      "We provide complete electrical solutions that connect, control and protect the systems that keep your property and operations running. Our services cover building wiring and electrical distribution, solar and inverter connections, backup power integration, pump and motor installations, VFD systems, control panels and electrical works for water, irrigation and other machinery. From new installations and system upgrades to fault diagnosis, testing and preventive maintenance, we deliver practical and reliable electrical solutions for residential, commercial, agricultural and industrial applications.",
    icon: "Zap",
    color: "#f59e0b",
    image: "/services/electrical_151924_026.jpg",
    infographicTitle: "Integrated Power & Control Flow",
    infographicSubtitle:
      "From power source to building, pump and machinery — safe and reliable electrical control",
    infographic: [
      {
        icon: "Zap",
        label: "Power Source",
        description: "Grid, solar or generator supply",
      },
      {
        icon: "BatteryCharging",
        label: "Backup & Conversion",
        description: "Inverters, batteries and backup systems",
      },
      {
        icon: "SquareSlash",
        label: "Distribution & Protection",
        description: "DBs, panels and electrical protection",
      },
      {
        icon: "Gauge",
        label: "Control",
        description: "Starters, VFDs and motor controls",
      },
      {
        icon: "Cog",
        label: "Equipment",
        description: "Pumps, motors and other machinery",
      },
    ],
    features: [
      {
        title: "Solar Electrical Connections",
        description:
          "Electrical installation and integration of solar panels, inverters, batteries and related power systems.",
      },
      {
        title: "Backup Power Systems",
        description:
          "Installation and integration of batteries, inverters, UPS systems and generators for dependable backup power.",
      },
      {
        title: "Pump & Motor Installation",
        description:
          "Electrical installation, connection and commissioning of water pumps, irrigation pumps and electric motors.",
      },
      {
        title: "VFD Installation & Motor Control",
        description:
          "Variable frequency drive installation, configuration and commissioning for efficient motor speed and process control.",
      },
      {
        title: "Electrical Distribution",
        description:
          "Distribution boards, consumer units, power circuits, isolators, breakers and electrical load distribution systems.",
      },
      {
        title: "Control Panels & Starters",
        description:
          "Motor control panels, direct-on-line starters, changeover systems, protection devices and customized control assemblies.",
      },
      {
        title: "Protection & Earthing",
        description:
          "Earthing, bonding, surge protection and electrical protection systems for people and equipment.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Site Assessment",
        description:
          "We assess your power requirements, equipment, existing electrical system and site conditions.",
      },
      {
        step: 2,
        title: "System Design",
        description:
          "We develop the appropriate wiring, power distribution, motor control and protection solution.",
      },
      {
        step: 3,
        title: "Installation",
        description:
          "Our team installs the electrical equipment, cabling, control systems and protection devices.",
      },
      {
        step: 4,
        title: "Testing & Commissioning",
        description:
          "We test connections, protection systems, motors, VFDs and equipment before putting the system into service.",
      },
      {
        step: 5,
        title: "Maintenance & Support",
        description:
          "We provide servicing, troubleshooting, upgrades and ongoing technical support to keep your systems operating reliably.",
      },
    ],
  },
  {
    slug: "plumbing",
    name: "Plumbing Services",
    shortName: "Plumbing",
    tagline: "Reliable plumbing solutions from leak to main line",
    description:
      "Comprehensive plumbing services including repairs, installations, drain cleaning, and water heater services for homes and businesses.",
    longDescription:
      "Our expert plumbers tackle everything from minor leaks to major pipe replacements. We use the latest diagnostic tools to identify issues quickly and provide lasting solutions. Our services cover residential and commercial properties, with a commitment to clean, professional work that respects your property.",
    icon: "Droplets",
    color: "#1e40af",
    image: "/services/plumbing_113735_651.jpg",
    infographicTitle: "Integrated Water Plumbing Flow",
    infographicSubtitle:
      "From source to drain — a complete water management system",
    infographic: [
      {
        icon: "Droplets",
        label: "Water Source",
        description: "Mains or tank supply",
      },
      {
        icon: "GitBranch",
        label: "Distribution",
        description: "Pipes route water to fixtures",
      },
      {
        icon: "ShowerHead",
        label: "Fixtures",
        description: "Taps, showers & appliances",
      },
      {
        icon: "ArrowDownToLine",
        label: "Drainage",
        description: "Wastewater safely removed",
      },
    ],
    features: [
      {
        title: "Plumbing Installation",
        description:
          "Residential, commercial and industrial plumbing installations.",
      },
      {
        title: "Water Supply Systems",
        description:
          "Water pipes, distribution networks, fixtures and pump connections.",
      },
      {
        title: "Drainage and Sewer",
        description: "Drainage networks, wastewater systems and sewer lines.",
      },
      {
        title: "Plumbing Repairs",
        description: "Leak detection, pipe repairs and fixture repairs.",
      },
      {
        title: "Water Heaters",
        description: "Water heater installation, servicing and replacement.",
      },
      {
        title: "Bathroom and Kitchen Plumbing",
        description: "Plumbing fixtures, connections and renovation works.",
      },
      {
        title: "Plumbing Maintenance",
        description: "Inspection, servicing and preventive maintenance.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Diagnosis",
        description:
          "We identify the issue using advanced diagnostic equipment.",
      },
      {
        step: 2,
        title: "Estimate",
        description: "Clear pricing and options before any work begins.",
      },
      {
        step: 3,
        title: "Repair",
        description: "Professional repair using quality materials and parts.",
      },
      {
        step: 4,
        title: "Cleanup",
        description: "We leave your space clean and test all work thoroughly.",
      },
    ],
  },
  {
    slug: "boreholes",
    name: "Borehole & Groundwater",
    shortName: "Boreholes",
    tagline: "Access clean groundwater with professional drilling",
    description:
      "Professional borehole drilling, pump installation, and water treatment services for residential, agricultural, and commercial water needs.",
    longDescription:
      "Access your own reliable water supply with our professional borehole drilling services. We handle the entire process from geological survey and site selection through drilling, casing, pump installation, and water quality testing. Our boreholes provide a sustainable, independent water source for homes, farms, and businesses.",
    icon: "Drill",
    color: "#0891b2",
    image: "/services/borehole_132109_705.jpg",
    infographicTitle: "Integrated Borehole Water Flow",
    infographicSubtitle:
      "From underground to irrigation — a complete water supply system",
    infographic: [
      {
        icon: "Drill",
        label: "Borehole",
        description: "Drilling taps groundwater",
      },
      {
        icon: "Sun",
        label: "Solar Pump",
        description: "Solar-powered pumping",
      },
      {
        icon: "Database",
        label: "Storage Tank",
        description: "Water stored for use",
      },
      {
        icon: "Sprout",
        label: "Irrigation",
        description: "Water delivered to crops",
      },
    ],
    features: [
      {
        title: "Hydrogeological Surveys",
        description: "Borehole siting and groundwater assessment.",
      },
      {
        title: "Borehole Drilling",
        description: "Drilling, casing and borehole development.",
      },
      {
        title: "Borehole Testing",
        description:
          "Test pumping, yield assessment and water quality testing.",
      },
      {
        title: "Borehole Equipping",
        description:
          "Submersible pump installation, controls and water delivery systems.",
      },
      {
        title: "Borehole Rehabilitation",
        description: "Borehole cleaning, repairs and performance restoration.",
      },
      {
        title: "Solar Borehole Pumping",
        description: "Solar-powered pumping systems for reliable water supply.",
      },
      {
        title: "Borehole Maintenance",
        description:
          "Pump servicing, borehole servicing and preventive maintenance.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Survey",
        description: "Geological survey and site selection for optimal yield.",
      },
      {
        step: 2,
        title: "Permitting",
        description:
          "We handle all required permits and regulatory compliance.",
      },
      {
        step: 3,
        title: "Drilling",
        description:
          "Professional drilling to the required depth with proper casing.",
      },
      {
        step: 4,
        title: "Development",
        description:
          "Borehole development, pump installation, and flow testing.",
      },
      {
        step: 5,
        title: "Testing",
        description:
          "Water quality testing and treatment system setup if needed.",
      },
    ],
  },
  {
    slug: "water-storage",
    name: "Water Storage Solutions",
    shortName: "Water Storage",
    tagline: "Reliable water storage for every need and scale",
    description:
      "Comprehensive water storage solutions — from domestic plastic tanks to large-capacity commercial reservoirs and elevated water towers.",
    longDescription:
      "Ensure a reliable water supply with our comprehensive water storage solutions. We supply and install plastic, steel, GRP, and concrete storage systems for domestic, agricultural, and commercial applications. From small household tanks to large-capacity elevated towers and underground reservoirs, we design storage systems that guarantee water availability when you need it most.",
    icon: "Database",
    color: "#0ea5e9",
    image: "/services/tank_7465893.jpg",
    infographicTitle: "Integrated Water Storage Flow",
    infographicSubtitle: "From capture to reserve — secure water availability",
    infographic: [
      {
        icon: "CloudRain",
        label: "Water Source",
        description: "Borehole or harvested water",
      },
      {
        icon: "Database",
        label: "Storage Tank",
        description: "Water held in reserve",
      },
      {
        icon: "Building2",
        label: "Water Tower",
        description: "Elevated for gravity pressure",
      },
      {
        icon: "Droplets",
        label: "Distribution",
        description: "Reliable supply to taps & fields",
      },
    ],
    features: [
      {
        title: "Plastic Water Tanks",
        description:
          "Domestic, agricultural and commercial plastic water storage tanks.",
      },
      {
        title: "Steel Water Tanks",
        description:
          "Large-capacity storage for commercial, industrial and institutional applications.",
      },
      {
        title: "GRP Water Tanks",
        description: "Modular and sectional water storage systems.",
      },
      {
        title: "Concrete Water Storage",
        description:
          "Concrete tanks, underground storage and permanent reservoirs.",
      },
      {
        title: "Water Towers",
        description: "Elevated tanks, tower structures and tank platforms.",
      },
      {
        title: "Water Reservoirs",
        description:
          "Above-ground and underground large-capacity water storage.",
      },
      {
        title: "Tank Installation and Maintenance",
        description:
          "Tank foundations, connections, installation and servicing.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Needs Assessment",
        description: "We evaluate your water demand and available space.",
      },
      {
        step: 2,
        title: "System Design",
        description:
          "Custom storage design with capacity and pressure calculations.",
      },
      {
        step: 3,
        title: "Foundation Prep",
        description: "Tank pads, platforms, and structural supports prepared.",
      },
      {
        step: 4,
        title: "Installation",
        description: "Professional tank installation with all connections.",
      },
      {
        step: 5,
        title: "Commissioning",
        description: "System testing, water quality check, and handover.",
      },
    ],
  },
  {
    slug: "water-harvesting",
    name: "Water Harvesting Solutions",
    shortName: "Water Harvesting",
    tagline: "Capture and store every drop of available water",
    description:
      "Rainwater and surface water harvesting systems — from rooftop collection to farm pans, ponds, and small dams for agricultural and domestic use.",
    longDescription:
      "Maximize your water security with our comprehensive water harvesting solutions. We design and install rainwater collection systems, surface water capture, farm pans, ponds, and small dams that turn seasonal rainfall into a reliable year-round water supply. Our systems integrate seamlessly with storage and irrigation for a complete water management solution.",
    icon: "CloudRain",
    color: "#0d9488",
    image: "/services/dam_84567984.jpg",
    infographicTitle: "Integrated Water Harvesting Flow",
    infographicSubtitle:
      "From rainfall to reserve — capturing nature's water supply",
    infographic: [
      {
        icon: "CloudRain",
        label: "Rainfall",
        description: "Rain falls on rooftops & surfaces",
      },
      {
        icon: "Droplets",
        label: "Gutters & Capture",
        description: "Water collected and channelled",
      },
      {
        icon: "Filter",
        label: "Filtration",
        description: "Debris removed, water cleaned",
      },
      {
        icon: "Database",
        label: "Storage",
        description: "Harvested water stored for use",
      },
    ],
    features: [
      {
        title: "Rainwater Harvesting",
        description:
          "Rooftop collection, gutters and rainwater harvesting systems.",
      },
      {
        title: "Surface Water Harvesting",
        description:
          "Runoff capture, stormwater harvesting and diversion systems.",
      },
      {
        title: "Water Pans",
        description: "Farm water pans, lined pans and rehabilitation works.",
      },
      {
        title: "Farm Ponds",
        description:
          "Agricultural ponds, lined ponds and water-retention systems.",
      },
      {
        title: "Small Dams",
        description:
          "Earth dams, sand dams and small water-retention structures.",
      },
      {
        title: "Water Reservoirs",
        description:
          "Harvesting reservoirs, lined reservoirs and water-retention storage.",
      },
      {
        title: "Harvesting System Installation",
        description:
          "Water conveyance, filtration and integration with storage systems.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Site Survey",
        description:
          "We assess rainfall patterns, catchment area, and terrain.",
      },
      {
        step: 2,
        title: "System Design",
        description:
          "Custom harvesting design sized to your catchment and demand.",
      },
      {
        step: 3,
        title: "Construction",
        description:
          "Excavation, lining, guttering, and conveyance installation.",
      },
      {
        step: 4,
        title: "Filtration Setup",
        description:
          "First-flush diverters, filters, and water quality treatment.",
      },
      {
        step: 5,
        title: "Integration",
        description: "Connection to storage tanks and irrigation systems.",
      },
    ],
  },
  {
    slug: "irrigation",
    name: "Irrigation Solutions",
    shortName: "Irrigation",
    tagline: "Smart watering solutions for healthy landscapes",
    description:
      "Design, installation, and maintenance of efficient irrigation systems that keep your landscape thriving while conserving water.",
    longDescription:
      "A well-designed irrigation system is essential for maintaining a healthy landscape while conserving water. We design and install custom irrigation solutions tailored to your property's unique needs, incorporating smart controllers, efficient sprinkler heads, and drip systems for optimal water distribution.",
    icon: "Sprout",
    color: "#10b981",
    image: "/services/irrigation_54865165.jpg",
    infographicTitle: "Integrated Irrigation Flow",
    infographicSubtitle:
      "From source to root — efficient water delivery for every crop",
    infographic: [
      {
        icon: "Droplets",
        label: "Water Source",
        description: "Borehole, tank or mains",
      },
      {
        icon: "Filter",
        label: "Filtration",
        description: "Water filtered for purity",
      },
      {
        icon: "GitBranch",
        label: "Distribution",
        description: "Pipes deliver water to zones",
      },
      {
        icon: "Sprout",
        label: "Irrigation",
        description: "Drip or sprinkler feeds crops",
      },
    ],
    features: [
      {
        title: "Irrigation Design",
        description:
          "System planning, water-demand assessment and irrigation sizing.",
      },
      {
        title: "Drip Irrigation",
        description: "Farm, greenhouse and micro-irrigation systems.",
      },
      {
        title: "Sprinkler Irrigation",
        description: "Agricultural, landscape and automated sprinkler systems.",
      },
      {
        title: "Solar Irrigation",
        description:
          "Solar-powered pumping and complete solar irrigation systems.",
      },
      {
        title: "Farm Water Distribution",
        description:
          "Irrigation pipelines, pumping, filtration and water distribution.",
      },
      {
        title: "Smart Irrigation",
        description: "Controllers, automation and irrigation scheduling.",
      },
      {
        title: "Irrigation Maintenance",
        description: "Repairs, servicing, system optimization and upgrades.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Property Survey",
        description: "We assess your landscape, soil, and water pressure.",
      },
      {
        step: 2,
        title: "Design",
        description:
          "Custom zone layout with head placement for full coverage.",
      },
      {
        step: 3,
        title: "Installation",
        description:
          "Efficient installation with clean trenching and restoration.",
      },
      {
        step: 4,
        title: "Programming",
        description: "We set up smart scheduling and show you how to use it.",
      },
    ],
  },
];

export const SERVICE_CATEGORIES = SERVICES.map((service) => ({
  slug: service.slug,
  label: service.shortName,
}));

export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];

/* -------------------------------------------------------------------------- */
/* GET SERVICE HELPERS                                                    */
/* -------------------------------------------------------------------------- */

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
