// ============================================
// Services Data
// ============================================

import { type ServiceCardProps } from "@/components/cards/ServiceCard";
import { Sun, Droplets, Zap, Sprout, Lightbulb } from "lucide-react";

export const SERVICE_CATEGORIES = [
  "solar",
  "solar-pumping",
  "borehole",
  "irrigation",
  "electrical",
  "plumbing",
  "water-storage",
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

export interface Service {
  slug: ServiceCategory;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string; // lucide icon name
  image: string;
  features: ServiceFeature[];
  process: ServiceProcessStep[];
  startingPrice: string;
  popularServices: string[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
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
    features: [
      {
        title: "Panel Upgrades",
        description:
          "Modernize your electrical panel for increased capacity and safety.",
      },
      {
        title: "Wiring & Rewiring",
        description:
          "Complete wiring solutions for new builds and renovations.",
      },
      {
        title: "Lighting Installation",
        description: "Indoor and outdoor lighting design and installation.",
      },
      {
        title: "Safety Inspections",
        description:
          "Comprehensive electrical safety audits and compliance checks.",
      },
      {
        title: "Generator Installation",
        description: "Backup generator installation and transfer switch setup.",
      },
      {
        title: "Emergency Repairs",
        description: "24/7 emergency electrical repair services.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Consultation",
        description:
          "We assess your electrical needs and provide a detailed plan.",
      },
      {
        step: 2,
        title: "Quote",
        description: "Transparent, upfront pricing with no hidden fees.",
      },
      {
        step: 3,
        title: "Execution",
        description: "Licensed electricians complete the work to code.",
      },
      {
        step: 4,
        title: "Inspection",
        description: "Final safety inspection and walkthrough with you.",
      },
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
        answer:
          "Yes, all our electricians are fully licensed, insured, and certified to work in your area.",
      },
      {
        question: "Do you offer emergency services?",
        answer:
          "Yes, we provide 24/7 emergency electrical repair services. Call our emergency line for immediate assistance.",
      },
      {
        question: "How long does a panel upgrade take?",
        answer:
          "A typical panel upgrade takes 4-8 hours depending on the complexity and your home's current setup.",
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
    features: [
      {
        title: "Leak Detection & Repair",
        description: "Advanced technology to find and fix leaks fast.",
      },
      {
        title: "Drain Cleaning",
        description: "Clear stubborn clogs and restore proper flow.",
      },
      {
        title: "Water Heater Services",
        description:
          "Installation, repair, and maintenance of all water heater types.",
      },
      {
        title: "Pipe Installation",
        description: "New construction and repiping for homes and businesses.",
      },
      {
        title: "Bathroom & Kitchen",
        description: "Fixture installation and plumbing for renovations.",
      },
      {
        title: "Sewer Line Services",
        description: "Inspection, repair, and replacement of sewer lines.",
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
        answer:
          "Yes, we offer same-day service for most plumbing emergencies. Contact us early in the day for best availability.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We serve Meru and surrounding counties including Nairobi, Nyeri, Embu, Isiolo, and Thika. Contact us to confirm coverage for your location.",
      },
      {
        question: "Do you work on tankless water heaters?",
        answer:
          "Yes, we install, repair, and maintain both traditional and tankless water heater systems.",
      },
    ],
  },
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
    features: [
      {
        title: "Solar Panel Installation",
        description: "Premium panels for maximum efficiency and durability.",
      },
      {
        title: "Battery Storage",
        description: "Store excess energy for use when the sun isn't shining.",
      },
      {
        title: "System Design",
        description: "Custom-designed systems optimized for your property.",
      },
      {
        title: "Net Metering Setup",
        description: "Connect to the grid and earn credits for excess power.",
      },
      {
        title: "Monitoring Systems",
        description:
          "Real-time monitoring of your energy production and usage.",
      },
      {
        title: "Maintenance & Cleaning",
        description: "Keep your panels performing at peak efficiency.",
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
    popularServices: [
      "Residential solar installation",
      "Commercial solar systems",
      "Solar battery backup",
      "Solar panel maintenance",
      "Inverter replacement",
      "Solar carport installation",
    ],
    faqs: [
      {
        question: "How much can I save with solar?",
        answer:
          "Most customers save 50-90% on their electricity bills. We provide detailed savings estimates during your consultation.",
      },
      {
        question: "How long do solar panels last?",
        answer:
          "Our premium panels come with a 25-year warranty and typically last 25-30+ years with proper maintenance.",
      },
      {
        question: "Are there financing options?",
        answer:
          "Yes, we offer flexible payment plans and can connect you with financing partners. We also advise on available incentives and tax reliefs for solar installations in Kenya.",
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
    icon: "CloudRain",
    image:
      "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1200",
    startingPrice: "KSh 45,000",
    features: [
      {
        title: "System Design",
        description:
          "Custom irrigation design for optimal coverage and efficiency.",
      },
      {
        title: "Installation",
        description:
          "Professional installation with minimal disruption to your landscape.",
      },
      {
        title: "Smart Controllers",
        description: "WiFi-enabled controllers with weather-based scheduling.",
      },
      {
        title: "Drip Irrigation",
        description: "Targeted watering for gardens, trees, and shrubs.",
      },
      {
        title: "Repairs & Maintenance",
        description:
          "Seasonal tune-ups, leak repairs, and system optimization.",
      },
      {
        title: "Dry-Season Optimization",
        description:
          "System adjustments to maximize water efficiency during dry seasons.",
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
    popularServices: [
      "Sprinkler system installation",
      "Drip line installation",
      "Smart controller upgrade",
      "Sprinkler head repair",
      "System audit & optimization",
      "Rainy-season preparation service",
    ],
    faqs: [
      {
        question: "How much water can I save with a smart system?",
        answer:
          "Smart irrigation controllers can reduce water usage by 20-50% compared to traditional timer-based systems.",
      },
      {
        question: "How do I prepare my system for the dry season?",
        answer:
          "We recommend a system check before the dry season begins, typically in December to January, to ensure optimal water use during the dry months.",
      },
      {
        question: "Do you repair existing systems?",
        answer:
          "Yes, we service and repair all brands of irrigation systems, even if we didn't install them.",
      },
    ],
  },
  {
    slug: "borehole",
    name: "Borehole Drilling",
    shortName: "Borehole",
    tagline: "Access clean groundwater with professional drilling",
    description:
      "Professional borehole drilling, pump installation, and water treatment services for residential, agricultural, and commercial water needs.",
    longDescription:
      "Access your own reliable water supply with our professional borehole drilling services. We handle the entire process from geological survey and site selection through drilling, casing, pump installation, and water quality testing. Our boreholes provide a sustainable, independent water source for homes, farms, and businesses.",
    icon: "Drill",
    image:
      "https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=1200",
    startingPrice: "KSh 650,000",
    features: [
      {
        title: "Geological Survey",
        description:
          "Professional site assessment and water divining to locate the best drilling spot.",
      },
      {
        title: "Drilling Services",
        description:
          "State-of-the-art drilling equipment for various geological conditions.",
      },
      {
        title: "Pump Installation",
        description:
          "Submersible and surface pump installation for optimal water delivery.",
      },
      {
        title: "Water Testing",
        description:
          "Comprehensive water quality analysis and treatment recommendations.",
      },
      {
        title: "Casing & Sealing",
        description:
          "Proper casing and sanitary sealing to protect water quality.",
      },
      {
        title: "Storage Systems",
        description: "Tank and storage system design and installation.",
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
    popularServices: [
      "Residential borehole drilling",
      "Agricultural water wells",
      "Borehole pump replacement",
      "Water quality testing",
      "Borehole rehabilitation",
      "Storage tank installation",
    ],
    faqs: [
      {
        question: "How deep do you drill?",
        answer:
          "Depth varies by location and geology, typically ranging from 30 to 200 meters. Our survey helps determine the optimal depth.",
      },
      {
        question: "How long does drilling take?",
        answer:
          "Most boreholes are completed in 1-3 days depending on depth and geological conditions.",
      },
      {
        question: "Is the water safe to drink?",
        answer:
          "We conduct thorough water quality testing after drilling and recommend treatment if needed to ensure safe drinking water.",
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
      "System Design & Sizing",
      "Residential & Commercial Installation",
      "Solar Water Heating",
      "Battery Storage Systems",
      "Maintenance & Monitoring",
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
      "Complete House & Building Wiring",
      "Lighting Design & Installation",
      "Switches, Sockets & Power Outlets",
      "Distribution Boards & Circuit Breakers",
      "Electrical Inspection & Maintenance",
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
      "Fixture Installation & Repair",
      "Pipe Installation & Repiping",
      "Water Supply Systems",
      "Drainage & Sewer Systems",
      "Emergency Plumbing Services",
    ],
    color: "#1e40af",
  },
  {
    id: "borehole",
    title: "Borehole Solutions",
    description:
      "Professional borehole drilling, development, and maintenance services to ensure reliable water supply.",
    icon: Zap,
    image: "/borehole/borehole_215637822.jpg",
    features: [
      "Hydrogeological Surveying",
      "Drilling & Casing Installation",
      "Pump Installation & Repair",
      "Water Quality Testing",
      "Borehole Maintenance",
    ],
    color: "#0891b2",
  },
  {
    id: "irrigation",
    title: "Irrigation Systems",
    description:
      "Smart irrigation design and installation for efficient water management in agriculture and landscaping.",
    icon: Sprout,
    image: "/irrigation/irrigation_324628q798.jpg",
    features: [
      "System Design & Planning",
      "Pipe Network Installation",
      "Pressure Control Systems",
      "Filtration & Water Treatment",
      "Maintenance & Optimization",
    ],
    color: "#10b981",
  },
];
 