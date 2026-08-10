// ============================================
// Services Data
// ============================================

import { type ServiceCardProps } from "@/components/cards/ServiceCard";
import { Sun, Droplets, Zap, Sprout, Lightbulb, Drill, Database, CloudRain } from "lucide-react";

export const SERVICE_CATEGORIES = [
  "solar",
  "electrical",
  "plumbing",
  "boreholes",
  "water-storage",
  "water-harvesting",
  "irrigation",
] as const;

export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface InfographicStep {
  icon: string;
  label: string;
  description: string;
}

export interface Service {
  slug: ServiceCategory;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  features: ServiceFeature[];
  process: ServiceProcessStep[];
  startingPrice: string;
  popularServices: string[];
  faqs: { question: string; answer: string }[];
  infographic: InfographicStep[];
  infographicTitle: string;
  infographicSubtitle: string;
}

export const services: Service[] = [
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
    image:
      "https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=1200",
    startingPrice: "KSh 450,000",
    infographicTitle: "Integrated Solar Energy Flow",
    infographicSubtitle: "From sunlight to power — a complete clean energy system",
    infographic: [
      { icon: "Sun", label: "Solar Capture", description: "Panels harvest sunlight" },
      { icon: "Zap", label: "Inverter", description: "DC converted to AC power" },
      { icon: "BatteryCharging", label: "Battery Storage", description: "Excess energy stored" },
      { icon: "Lightbulb", label: "Power Supply", description: "Reliable electricity to your property" },
    ],
    features: [
      {
        title: "Solar System Design",
        description: "System sizing, energy assessment and solution planning.",
      },
      {
        title: "Solar Installation",
        description: "Residential, commercial and industrial solar installations.",
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
      { step: 1, title: "Site Assessment", description: "We evaluate your roof, sun exposure, and energy needs." },
      { step: 2, title: "System Design", description: "Custom solar system design with detailed production estimates." },
      { step: 3, title: "Permitting", description: "We handle all permits and utility interconnection paperwork." },
      { step: 4, title: "Installation", description: "Professional installation typically completed in 1-2 days." },
      { step: 5, title: "Activation", description: "System testing, activation, and monitoring setup." },
    ],
    popularServices: [
      "Residential solar installation",
      "Commercial solar systems",
      "Solar battery backup",
      "Solar panel maintenance",
      "Inverter replacement",
      "Solar water pumping",
    ],
    faqs: [
      {
        question: "How much can I save with solar?",
        answer: "Most customers save 50-90% on their electricity bills. We provide detailed savings estimates during your consultation.",
      },
      {
        question: "How long do solar panels last?",
        answer: "Our premium panels come with a 25-year warranty and typically last 25-30+ years with proper maintenance.",
      },
      {
        question: "Are there financing options?",
        answer: "Yes, we offer flexible payment plans and can connect you with financing partners. We also advise on available incentives and tax reliefs for solar installations in Kenya.",
      },
    ],
  },
  {
    slug: "electrical",
    name: "Electrical Services",
    shortName: "Electrical",
    tagline: "Safe, certified electrical work for any property",
    description:
      "From wiring and panel upgrades to lighting installation and emergency repairs, our licensed electricians deliver safe, code-compliant solutions.",
    longDescription:
      "Our certified electricians handle everything from routine maintenance to complex installations. We specialize in residential and commercial electrical systems, ensuring every project meets or exceeds local codes and safety standards. Whether you need a new circuit installed, a panel upgrade, or 24/7 emergency repairs, our team responds quickly and works efficiently.",
    icon: "Zap",
    image:
      "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200",
    startingPrice: "KSh 15,000",
    infographicTitle: "Integrated Electrical Power Flow",
    infographicSubtitle: "From grid to appliance — safe, reliable power distribution",
    infographic: [
      { icon: "Zap", label: "Power Source", description: "Grid or backup supply" },
      { icon: "SquareSlash", label: "Distribution Board", description: "Power routed and protected" },
      { icon: "ShieldCheck", label: "Protection", description: "Surge & RCD safety" },
      { icon: "Lightbulb", label: "End Use", description: "Lighting, sockets & equipment" },
    ],
    features: [
      {
        title: "Electrical Installation",
        description: "Residential, commercial and industrial electrical installations.",
      },
      {
        title: "Wiring and Distribution",
        description: "House wiring, power distribution, distribution boards and electrical panels.",
      },
      {
        title: "Lighting Systems",
        description: "Indoor, outdoor, residential and commercial lighting installations.",
      },
      {
        title: "Electrical Protection",
        description: "Earthing, lightning protection and surge protection systems.",
      },
      {
        title: "Backup Power",
        description: "Generator and UPS integration with electrical systems.",
      },
      {
        title: "Electrical Upgrades",
        description: "Rewiring, panel upgrades and electrical capacity improvements.",
      },
      {
        title: "Testing and Maintenance",
        description: "Electrical inspection, testing, servicing and preventive maintenance.",
      },
    ],
    process: [
      { step: 1, title: "Consultation", description: "We assess your electrical needs and provide a detailed plan." },
      { step: 2, title: "Quote", description: "Transparent, upfront pricing with no hidden fees." },
      { step: 3, title: "Execution", description: "Licensed electricians complete the work to code." },
      { step: 4, title: "Inspection", description: "Final safety inspection and walkthrough with you." },
    ],
    popularServices: [
      "Circuit breaker replacement",
      "Socket & switch installation",
      "Ceiling fan installation",
      "Security lighting installation",
      "Generator installation & wiring",
      "Three-phase power installation",
    ],
    faqs: [
      {
        question: "Are your electricians licensed?",
        answer: "Yes, all our electricians are fully licensed, insured, and certified to work in your area.",
      },
      {
        question: "Do you offer emergency services?",
        answer: "Yes, we provide 24/7 emergency electrical repair services. Call our emergency line for immediate assistance.",
      },
      {
        question: "How long does a panel upgrade take?",
        answer: "A typical panel upgrade takes 4-8 hours depending on the complexity and your home's current setup.",
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
    image:
      "https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1200",
    startingPrice: "KSh 5,000",
    infographicTitle: "Integrated Water Plumbing Flow",
    infographicSubtitle: "From source to drain — a complete water management system",
    infographic: [
      { icon: "Droplets", label: "Water Source", description: "Mains or tank supply" },
      { icon: "GitBranch", label: "Distribution", description: "Pipes route water to fixtures" },
      { icon: "ShowerHead", label: "Fixtures", description: "Taps, showers & appliances" },
      { icon: "ArrowDownToLine", label: "Drainage", description: "Wastewater safely removed" },
    ],
    features: [
      {
        title: "Plumbing Installation",
        description: "Residential, commercial and industrial plumbing installations.",
      },
      {
        title: "Water Supply Systems",
        description: "Water pipes, distribution networks, fixtures and pump connections.",
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
      { step: 1, title: "Diagnosis", description: "We identify the issue using advanced diagnostic equipment." },
      { step: 2, title: "Estimate", description: "Clear pricing and options before any work begins." },
      { step: 3, title: "Repair", description: "Professional repair using quality materials and parts." },
      { step: 4, title: "Cleanup", description: "We leave your space clean and test all work thoroughly." },
    ],
    popularServices: [
      "Tap repair & replacement",
      "Toilet installation",
      "Water tank installation",
      "Pump installation & repair",
      "Water filtration systems",
      "Manhole & sewer line services",
    ],
    faqs: [
      {
        question: "Do you offer same-day service?",
        answer: "Yes, we offer same-day service for most plumbing emergencies. Contact us early in the day for best availability.",
      },
      {
        question: "What areas do you serve?",
        answer: "We serve Meru and surrounding counties including Nairobi, Nyeri, Embu, Isiolo, and Thika. Contact us to confirm coverage for your location.",
      },
      {
        question: "Do you work on tankless water heaters?",
        answer: "Yes, we install, repair, and maintain both traditional and tankless water heater systems.",
      },
    ],
  },
  {
    slug: "boreholes",
    name: "Borehole Drilling",
    shortName: "Boreholes",
    tagline: "Access clean groundwater with professional drilling",
    description:
      "Professional borehole drilling, pump installation, and water treatment services for residential, agricultural, and commercial water needs.",
    longDescription:
      "Access your own reliable water supply with our professional borehole drilling services. We handle the entire process from geological survey and site selection through drilling, casing, pump installation, and water quality testing. Our boreholes provide a sustainable, independent water source for homes, farms, and businesses.",
    icon: "Drill",
    image:
      "https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=1200",
    startingPrice: "KSh 650,000",
    infographicTitle: "Integrated Borehole Water Flow",
    infographicSubtitle: "From underground to irrigation — a complete water supply system",
    infographic: [
      { icon: "Drill", label: "Borehole", description: "Drilling taps groundwater" },
      { icon: "Sun", label: "Solar Pump", description: "Solar-powered pumping" },
      { icon: "Database", label: "Storage Tank", description: "Water stored for use" },
      { icon: "Sprout", label: "Irrigation", description: "Water delivered to crops" },
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
        description: "Test pumping, yield assessment and water quality testing.",
      },
      {
        title: "Borehole Equipping",
        description: "Submersible pump installation, controls and water delivery systems.",
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
        description: "Pump servicing, borehole servicing and preventive maintenance.",
      },
    ],
    process: [
      { step: 1, title: "Survey", description: "Geological survey and site selection for optimal yield." },
      { step: 2, title: "Permitting", description: "We handle all required permits and regulatory compliance." },
      { step: 3, title: "Drilling", description: "Professional drilling to the required depth with proper casing." },
      { step: 4, title: "Development", description: "Borehole development, pump installation, and flow testing." },
      { step: 5, title: "Testing", description: "Water quality testing and treatment system setup if needed." },
    ],
    popularServices: [
      "Residential borehole drilling",
      "Agricultural water wells",
      "Borehole pump replacement",
      "Water quality testing",
      "Borehole rehabilitation",
      "Solar borehole pumping",
    ],
    faqs: [
      {
        question: "How deep do you drill?",
        answer: "Depth varies by location and geology, typically ranging from 30 to 200 meters. Our survey helps determine the optimal depth.",
      },
      {
        question: "How long does drilling take?",
        answer: "Most boreholes are completed in 1-3 days depending on depth and geological conditions.",
      },
      {
        question: "Is the water safe to drink?",
        answer: "We conduct thorough water quality testing after drilling and recommend treatment if needed to ensure safe drinking water.",
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
    image:
      "https://images.pexels.com/photos/2625928/pexels-photo-2625928.jpeg?auto=compress&cs=tinysrgb&w=1200",
    startingPrice: "KSh 8,500",
    infographicTitle: "Integrated Water Storage Flow",
    infographicSubtitle: "From capture to reserve — secure water availability",
    infographic: [
      { icon: "CloudRain", label: "Water Source", description: "Borehole or harvested water" },
      { icon: "Database", label: "Storage Tank", description: "Water held in reserve" },
      { icon: "Building2", label: "Water Tower", description: "Elevated for gravity pressure" },
      { icon: "Droplets", label: "Distribution", description: "Reliable supply to taps & fields" },
    ],
    features: [
      {
        title: "Plastic Water Tanks",
        description: "Domestic, agricultural and commercial plastic water storage tanks.",
      },
      {
        title: "Steel Water Tanks",
        description: "Large-capacity storage for commercial, industrial and institutional applications.",
      },
      {
        title: "GRP Water Tanks",
        description: "Modular and sectional water storage systems.",
      },
      {
        title: "Concrete Water Storage",
        description: "Concrete tanks, underground storage and permanent reservoirs.",
      },
      {
        title: "Water Towers",
        description: "Elevated tanks, tower structures and tank platforms.",
      },
      {
        title: "Water Reservoirs",
        description: "Above-ground and underground large-capacity water storage.",
      },
      {
        title: "Tank Installation and Maintenance",
        description: "Tank foundations, connections, installation and servicing.",
      },
    ],
    process: [
      { step: 1, title: "Needs Assessment", description: "We evaluate your water demand and available space." },
      { step: 2, title: "System Design", description: "Custom storage design with capacity and pressure calculations." },
      { step: 3, title: "Foundation Prep", description: "Tank pads, platforms, and structural supports prepared." },
      { step: 4, title: "Installation", description: "Professional tank installation with all connections." },
      { step: 5, title: "Commissioning", description: "System testing, water quality check, and handover." },
    ],
    popularServices: [
      "Plastic tank supply & installation",
      "Steel tank fabrication",
      "GRP modular tank installation",
      "Water tower construction",
      "Underground reservoir installation",
      "Tank maintenance & cleaning",
    ],
    faqs: [
      {
        question: "What tank size do I need?",
        answer: "Tank size depends on your daily water usage and supply reliability. We assess your needs and recommend the optimal capacity — typically 1,000L to 10,000L for homes and much larger for commercial use.",
      },
      {
        question: "Do you build water towers?",
        answer: "Yes, we design and construct elevated water towers with steel or concrete structures for gravity-fed distribution systems.",
      },
      {
        question: "How long do water tanks last?",
        answer: "Plastic tanks last 15-20 years, steel tanks 20-30+ years with proper maintenance, and concrete storage can last 50+ years. We provide maintenance guidance for every system we install.",
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
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200",
    startingPrice: "KSh 25,000",
    infographicTitle: "Integrated Water Harvesting Flow",
    infographicSubtitle: "From rainfall to reserve — capturing nature's water supply",
    infographic: [
      { icon: "CloudRain", label: "Rainfall", description: "Rain falls on rooftops & surfaces" },
      { icon: "Gutter", label: "Gutters & Capture", description: "Water collected and channelled" },
      { icon: "Filter", label: "Filtration", description: "Debris removed, water cleaned" },
      { icon: "Database", label: "Storage", description: "Harvested water stored for use" },
    ],
    features: [
      {
        title: "Rainwater Harvesting",
        description: "Rooftop collection, gutters and rainwater harvesting systems.",
      },
      {
        title: "Surface Water Harvesting",
        description: "Runoff capture, stormwater harvesting and diversion systems.",
      },
      {
        title: "Water Pans",
        description: "Farm water pans, lined pans and rehabilitation works.",
      },
      {
        title: "Farm Ponds",
        description: "Agricultural ponds, lined ponds and water-retention systems.",
      },
      {
        title: "Small Dams",
        description: "Earth dams, sand dams and small water-retention structures.",
      },
      {
        title: "Water Reservoirs",
        description: "Harvesting reservoirs, lined reservoirs and water-retention storage.",
      },
      {
        title: "Harvesting System Installation",
        description: "Water conveyance, filtration and integration with storage systems.",
      },
    ],
    process: [
      { step: 1, title: "Site Survey", description: "We assess rainfall patterns, catchment area, and terrain." },
      { step: 2, title: "System Design", description: "Custom harvesting design sized to your catchment and demand." },
      { step: 3, title: "Construction", description: "Excavation, lining, guttering, and conveyance installation." },
      { step: 4, title: "Filtration Setup", description: "First-flush diverters, filters, and water quality treatment." },
      { step: 5, title: "Integration", description: "Connection to storage tanks and irrigation systems." },
    ],
    popularServices: [
      "Rooftop rainwater harvesting",
      "Farm pan construction",
      "Lined pond installation",
      "Earth dam construction",
      "Gutter installation",
      "Harvesting system maintenance",
    ],
    faqs: [
      {
        question: "How much water can I harvest?",
        answer: "A 100 sqm roof can harvest approximately 23,000 litres from 230mm of annual rainfall. We calculate your specific yield based on roof area and local rainfall data.",
      },
      {
        question: "Is harvested rainwater safe to drink?",
        answer: "With proper filtration and first-flush diversion, harvested rainwater is safe for most uses. For drinking, we recommend additional UV or chlorination treatment.",
      },
      {
        question: "Do you build farm ponds and dams?",
        answer: "Yes, we construct lined farm ponds, water pans, earth dams, and sand dams for agricultural water retention and supply.",
      },
    ],
  },
  {
    slug: "irrigation",
    name: "Irrigation Systems",
    shortName: "Irrigation",
    tagline: "Smart watering solutions for healthy landscapes",
    description:
      "Design, installation, and maintenance of efficient irrigation systems that keep your landscape thriving while conserving water.",
    longDescription:
      "A well-designed irrigation system is essential for maintaining a healthy landscape while conserving water. We design and install custom irrigation solutions tailored to your property's unique needs, incorporating smart controllers, efficient sprinkler heads, and drip systems for optimal water distribution.",
    icon: "Sprout",
    image:
      "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1200",
    startingPrice: "KSh 45,000",
    infographicTitle: "Integrated Irrigation Flow",
    infographicSubtitle: "From source to root — efficient water delivery for every crop",
    infographic: [
      { icon: "Droplets", label: "Water Source", description: "Borehole, tank or mains" },
      { icon: "Filter", label: "Filtration", description: "Water filtered for purity" },
      { icon: "GitBranch", label: "Distribution", description: "Pipes deliver water to zones" },
      { icon: "Sprout", label: "Irrigation", description: "Drip or sprinkler feeds crops" },
    ],
    features: [
      {
        title: "Irrigation Design",
        description: "System planning, water-demand assessment and irrigation sizing.",
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
        description: "Solar-powered pumping and complete solar irrigation systems.",
      },
      {
        title: "Farm Water Distribution",
        description: "Irrigation pipelines, pumping, filtration and water distribution.",
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
      { step: 1, title: "Property Survey", description: "We assess your landscape, soil, and water pressure." },
      { step: 2, title: "Design", description: "Custom zone layout with head placement for full coverage." },
      { step: 3, title: "Installation", description: "Efficient installation with clean trenching and restoration." },
      { step: 4, title: "Programming", description: "We set up smart scheduling and show you how to use it." },
    ],
    popularServices: [
      "Sprinkler system installation",
      "Drip line installation",
      "Smart controller upgrade",
      "Sprinkler head repair",
      "System audit & optimization",
      "Solar irrigation systems",
    ],
    faqs: [
      {
        question: "How much water can I save with a smart system?",
        answer: "Smart irrigation controllers can reduce water usage by 20-50% compared to traditional timer-based systems.",
      },
      {
        question: "How do I prepare my system for the dry season?",
        answer: "We recommend a system check before the dry season begins, typically in December to January, to ensure optimal water use during the dry months.",
      },
      {
        question: "Do you repair existing systems?",
        answer: "Yes, we service and repair all brands of irrigation systems, even if we didn't install them.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export const servicesPreview: ServiceCardProps[] = [
  {
    id: "solar",
    title: "Solar Solutions",
    description:
      "Complete solar installation services from residential to commercial systems, including design, installation, and maintenance.",
    icon: Sun,
    image: "/solar/solar_234378059.jpg",
    features: [
      "Solar System Design",
      "Solar Installation",
      "Solar Power Systems",
      "Battery Storage",
      "Solar Water Solutions",
      "Solar Maintenance",
    ],
    color: "#fbbf24",
  },
  {
    id: "electrical",
    title: "Electrical Installations",
    description:
      "Get professional electrical installation services for residential, commercial, and industrial projects.",
    icon: Lightbulb,
    image: "/electrical/electrical_4829383w432.jpg",
    features: [
      "Electrical Installation",
      "Wiring and Distribution",
      "Lighting Systems",
      "Electrical Protection",
      "Backup Power",
      "Testing and Maintenance",
    ],
    color: "#f59e0b",
  },
  {
    id: "plumbing",
    title: "Plumbing Services",
    description:
      "Professional plumbing solutions for all your water and drainage needs, from installations to emergency repairs.",
    icon: Droplets,
    image: "/plumbing/plumbing_2798763625.jpg",
    features: [
      "Plumbing Installation",
      "Water Supply Systems",
      "Drainage and Sewer",
      "Plumbing Repairs",
      "Water Heaters",
      "Plumbing Maintenance",
    ],
    color: "#1e40af",
  },
  {
    id: "boreholes",
    title: "Borehole Solutions",
    description:
      "Professional borehole drilling, development, and maintenance services to ensure reliable water supply.",
    icon: Drill,
    image: "/borehole/borehole_215637822.jpg",
    features: [
      "Hydrogeological Surveys",
      "Borehole Drilling",
      "Borehole Testing",
      "Borehole Equipping",
      "Solar Borehole Pumping",
      "Borehole Maintenance",
    ],
    color: "#0891b2",
  },
  {
    id: "water-storage",
    title: "Water Storage",
    description:
      "Comprehensive water storage solutions from domestic plastic tanks to large-capacity elevated towers and reservoirs.",
    icon: Database,
    image:
      "https://images.pexels.com/photos/2625928/pexels-photo-2625928.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Plastic Water Tanks",
      "Steel Water Tanks",
      "GRP Water Tanks",
      "Concrete Water Storage",
      "Water Towers",
      "Tank Installation & Maintenance",
    ],
    color: "#0ea5e9",
  },
  {
    id: "water-harvesting",
    title: "Water Harvesting",
    description:
      "Rainwater and surface water harvesting systems — from rooftop collection to farm pans, ponds, and small dams.",
    icon: CloudRain,
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Rainwater Harvesting",
      "Surface Water Harvesting",
      "Water Pans",
      "Farm Ponds",
      "Small Dams",
      "Harvesting System Installation",
    ],
    color: "#0d9488",
  },
  {
    id: "irrigation",
    title: "Irrigation Systems",
    description:
      "Smart irrigation design and installation for efficient water management in agriculture and landscaping.",
    icon: Sprout,
    image: "/irrigation/irrigation_324628q798.jpg",
    features: [
      "Irrigation Design",
      "Drip Irrigation",
      "Sprinkler Irrigation",
      "Solar Irrigation",
      "Smart Irrigation",
      "Irrigation Maintenance",
    ],
    color: "#10b981",
  },
];
