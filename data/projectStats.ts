// data\projectStats.ts

import { ServiceSlug } from "./services";

export interface ProjectDetail {
  label: string;
  value: string;
}

export interface ProjectGalleryImage {
  url: string;
  caption: string;
  phase: "before" | "during" | "after" | "drone";
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ProjectVideo {
  platform: "youtube" | "tiktok" | "facebook";
  url: string;
}

export interface Project {
  id: string;
  title: string;
  category: ServiceSlug;
  county: string;
  completionDate: string;
  featured: boolean;
  challenge: string;
  solution: string;
  details: ProjectDetail[];
  results: string[];
  servicesDelivered: string[];
  gallery: ProjectGalleryImage[];
  video?: ProjectVideo;
  testimonial?: ProjectTestimonial;
}

export const projects: Project[] = [
  {
    id: "meru-commercial-solar",
    title: "100kW Hybrid Commercial Solar System",
    category: "solar",
    county: "Meru",
    completionDate: "October 2024",
    featured: true,
    challenge:
      "Escalating electricity costs and frequent grid outages were affecting business productivity and cold storage operations.",
    solution:
      "We engineered and installed a 100kW hybrid solar system with battery storage and intelligent monitoring, delivering reliable power while significantly reducing operating costs.",
    details: [
      { label: "System Size", value: "100kW" },
      { label: "Battery Storage", value: "160kWh" },
      { label: "Solar Panels", value: "240" },
      { label: "Inverter", value: "Hybrid 100kW" },
      { label: "Duration", value: "6 Weeks" },
      { label: "Monitoring", value: "Remote" },
    ],
    results: [
      "85% lower power bills",
      "24/7 power reliability",
      "3.5-year ROI",
      "90t CO₂ reduced annually",
    ],
    servicesDelivered: [
      "System Design",
      "Installation",
      "Battery Integration",
      "Commissioning",
    ],
    gallery: [
      {
        url: "https://images.pexels.com/photos/9897190/pexels-photo-9897190.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Site before solar installation",
        phase: "before",
      },
      {
        url: "https://images.pexels.com/photos/9897190/pexels-photo-9897190.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Panel installation in progress",
        phase: "during",
      },
      {
        url: "https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Completed rooftop solar installation",
        phase: "after",
      },
    ],
    testimonial: {
      quote:
        "Exceptional workmanship and timely delivery. Our energy costs dropped immediately and operations have never been more reliable.",
      author: "John Mwangi",
      role: "Operations Manager",
    },
  },

  {
    id: "elgeyo-borehole",
    title: "Commercial Borehole Water Supply",
    category: "boreholes",
    county: "Elgeyo Marakwet",
    completionDate: "January 2026",
    featured: false,
    challenge:
      "Recurring water shortages disrupted tea processing and reduced production efficiency during dry seasons.",
    solution:
      "We delivered a high-yield borehole complete with pumping equipment and bulk water storage, ensuring dependable production throughout the year.",
    details: [
      { label: "Depth", value: "300m" },
      { label: "Yield", value: "4,000L/hr" },
      { label: "Pump", value: "5HP" },
      { label: "Storage", value: "100,000L" },
      { label: "Duration", value: "5 Weeks" },
      { label: "Water Source", value: "Groundwater" },
    ],
    results: [
      "Continuous water supply",
      "40% higher output",
      "Reduced downtime",
      "Improved water quality",
    ],
    servicesDelivered: [
      "Site Survey",
      "Drilling",
      "Pump Installation",
      "Commissioning",
    ],
    gallery: [
      {
        url: "https://images.pexels.com/photos/2932274/pexels-photo-2932274.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Borehole drilling operations",
        phase: "during",
      },
    ],
    testimonial: {
      quote:
        "The project was completed professionally and has given us a dependable water supply every day of the year.",
      author: "David Kiprono",
      role: "Factory Manager",
    },
  },

  {
    id: "isiolo-drip-irrigation",
    title: "80-Acre Smart Drip Irrigation",
    category: "irrigation",
    county: "Isiolo",
    completionDate: "September 2025",
    featured: true,
    challenge:
      "Traditional flood irrigation consumed excessive water, increased labour costs, and produced uneven crop performance.",
    solution:
      "We installed a fully automated drip irrigation system with fertigation and multi-zone control, improving efficiency across the entire farm.",
    details: [
      { label: "Coverage", value: "80 Acres" },
      { label: "System", value: "Drip" },
      { label: "Zones", value: "16" },
      { label: "Filtration", value: "Disc Filter" },
      { label: "Duration", value: "4 Weeks" },
      { label: "Control", value: "Automated" },
    ],
    results: [
      "70% water savings",
      "45% higher yields",
      "50% lower labour",
      "Precision fertigation",
    ],
    servicesDelivered: [
      "System Design",
      "Installation",
      "Automation",
      "Training",
    ],
    gallery: [
      {
        url: "https://images.pexels.com/photos/2625162/pexels-photo-2625162.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Completed drip irrigation system",
        phase: "after",
      },
      {
        url: "https://images.pexels.com/photos/4403932/pexels-photo-4403932.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Filtration and control unit",
        phase: "after",
      },
    ],
    testimonial: {
      quote:
        "The system has transformed our operation. Water use dropped significantly while crop performance improved from the first season.",
      author: "Peter Lekupe",
      role: "Farm Director",
    },
  },

  {
    id: "garissa-solar-pumping",
    title: "Solar Water Pumping for Livestock Ranch",
    category: "solar",
    county: "Garissa",
    completionDate: "November 2025",
    featured: false,
    challenge:
      "The ranch relied on diesel-powered pumping, resulting in high fuel costs, frequent breakdowns, and unreliable water supply for livestock.",
    solution:
      "We deployed a fully solar-powered pumping system with MPPT control and elevated storage, providing dependable daily water without fuel expenses.",
    details: [
      { label: "Solar Array", value: "6kW" },
      { label: "Pump", value: "Solar Submersible" },
      { label: "Output", value: "35,000L/day" },
      { label: "Storage", value: "30,000L" },
      { label: "Duration", value: "1 Week" },
      { label: "Controller", value: "MPPT" },
    ],
    results: [
      "100% fuel savings",
      "35,000L pumped daily",
      "80% lower maintenance",
      "Reliable livestock supply",
    ],
    servicesDelivered: [
      "System Design",
      "Solar Installation",
      "Pump Installation",
      "Commissioning",
    ],
    gallery: [
      {
        url: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Completed solar pumping installation",
        phase: "after",
      },
    ],
    testimonial: {
      quote:
        "Our water supply is now dependable every day, and eliminating diesel costs has made a huge difference to our operations.",
      author: "Mohamed Hassan",
      role: "Ranch Manager",
    },
  },

  {
    id: "nairobi-commercial-electrical",
    title: "Commercial Electrical Installation",
    category: "electrical",
    county: "Nairobi",
    completionDate: "July 2024",
    featured: false,
    challenge:
      "A new commercial facility required a compliant electrical installation capable of supporting continuous business operations.",
    solution:
      "We completed a full electrical installation with three-phase distribution, backup integration, protection systems, and certified testing.",
    details: [
      { label: "Supply", value: "Three-Phase" },
      { label: "Capacity", value: "200A" },
      { label: "Backup", value: "50kVA" },
      { label: "Duration", value: "5 Weeks" },
      { label: "Certification", value: "EPRA" },
      { label: "Protection", value: "Surge & RCD" },
    ],
    results: [
      "100% code compliant",
      "Zero electrical faults",
      "Reliable backup power",
      "Improved energy efficiency",
    ],
    servicesDelivered: [
      "Electrical Design",
      "Installation",
      "Testing",
      "Certification",
    ],
    gallery: [
      {
        url: "https://images.pexels.com/photos/8005366/pexels-photo-8005366.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Cable routing during installation",
        phase: "during",
      },
      {
        url: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Completed distribution system",
        phase: "after",
      },
    ],
    testimonial: {
      quote:
        "The installation was delivered on schedule, professionally executed, and passed inspection without a single issue.",
      author: "Grace Wanjiru",
      role: "Project Manager",
    },
  },

  {
    id: "muranga-industrial-plumbing",
    title: "Industrial Plumbing Upgrade",
    category: "plumbing",
    county: "Murang'a",
    completionDate: "August 2024",
    featured: false,
    challenge:
      "Frequent leaks, unstable pressure, and aging pipework were disrupting factory production and increasing maintenance costs.",
    solution:
      "We replaced the entire plumbing network with industrial-grade piping, pressure boosting, and advanced filtration for reliable plant operations.",
    details: [
      { label: "Pipework", value: "Stainless Steel" },
      { label: "Booster Pump", value: "3HP" },
      { label: "Filtration", value: "Multi-Stage" },
      { label: "Duration", value: "4 Weeks" },
      { label: "Pressure", value: "Balanced" },
      { label: "Testing", value: "Completed" },
    ],
    results: [
      "Zero reported leaks",
      "Stable water pressure",
      "Cleaner process water",
      "Lower maintenance costs",
    ],
    servicesDelivered: [
      "System Design",
      "Pipe Installation",
      "Filtration",
      "Testing",
    ],
    gallery: [
      {
        url: "https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Industrial plumbing installation",
        phase: "during",
      },
    ],
    testimonial: {
      quote:
        "The upgraded system has performed flawlessly, improving production efficiency while virtually eliminating maintenance issues.",
      author: "Samuel Kariuki",
      role: "Factory Engineer",
    },
  },

  {
    id: "kisumu-water-storage",
    title: "200,000L Elevated Water Storage System",
    category: "water-storage",
    county: "Kisumu",
    completionDate: "April 2025",
    featured: false,
    challenge:
      "Frequent municipal water interruptions disrupted daily operations and reduced service reliability.",
    solution:
      "We engineered and installed a 200,000L elevated storage system with automatic source switching to ensure uninterrupted water availability.",
    details: [
      { label: "Capacity", value: "200,000L" },
      { label: "Tower Height", value: "14m" },
      { label: "Structure", value: "Galvanized Steel" },
      { label: "Backup", value: "Auto Switch" },
      { label: "Duration", value: "5 Weeks" },
      { label: "Supply", value: "Municipal + Borehole" },
    ],
    results: [
      "200,000L reserve capacity",
      "24/7 water availability",
      "7-day backup supply",
      "Reduced operating downtime",
    ],
    servicesDelivered: [
      "Fabrication",
      "Tank Installation",
      "Pipework",
      "Automation",
    ],
    gallery: [
      {
        url: "https://images.pexels.com/photos/2625928/pexels-photo-2625928.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Completed elevated water storage system",
        phase: "after",
      },
    ],
    testimonial: {
      quote:
        "The storage system has completely eliminated water interruptions and improved operational reliability.",
      author: "Daniel Otieno",
      role: "Estate Manager",
    },
  },

  {
    id: "kajiado-commercial-solar",
    title: "75kW Commercial Grid-Tied Solar System",
    category: "solar",
    county: "Kajiado",
    completionDate: "August 2025",
    featured: false,
    challenge:
      "Escalating electricity costs and unreliable grid supply were affecting production efficiency.",
    solution:
      "We installed a high-performance grid-tied solar solution with battery backup to reduce energy costs and improve power stability.",
    details: [
      { label: "System Size", value: "75kW" },
      { label: "Battery", value: "100kWh" },
      { label: "Panels", value: "180" },
      { label: "Type", value: "Grid-Tied" },
      { label: "Duration", value: "5 Weeks" },
      { label: "Monitoring", value: "Remote" },
    ],
    results: [
      "80% lower energy bills",
      "60% higher uptime",
      "Reliable backup power",
      "Lower carbon footprint",
    ],
    servicesDelivered: [
      "System Design",
      "Installation",
      "Electrical Works",
      "Commissioning",
    ],
    gallery: [
      {
        url: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Completed commercial solar installation",
        phase: "after",
      },
    ],
    testimonial: {
      quote:
        "Professional execution from start to finish. The system immediately reduced our electricity costs and improved business continuity.",
      author: "Susan Njeri",
      role: "Operations Director",
    },
  },

  {
    id: "kirinyaga-irrigation-borehole",
    title: "Agricultural Borehole Water System",
    category: "boreholes",
    county: "Kirinyaga",
    completionDate: "May 2025",
    featured: false,
    challenge:
      "Seasonal water shortages prevented year-round farming and limited crop productivity.",
    solution:
      "We delivered a complete borehole water system with pumping equipment and bulk storage to provide dependable irrigation throughout the year.",
    details: [
      { label: "Depth", value: "250m" },
      { label: "Yield", value: "3,500L/hr" },
      { label: "Pump", value: "4HP" },
      { label: "Storage", value: "60,000L" },
      { label: "Duration", value: "4 Weeks" },
      { label: "Distribution", value: "Gravity Fed" },
    ],
    results: [
      "50,000L supplied daily",
      "Year-round irrigation",
      "35% higher yields",
      "Reliable water source",
    ],
    servicesDelivered: [
      "Hydro Survey",
      "Drilling",
      "Pump Installation",
      "Storage",
    ],
    gallery: [
      {
        url: "https://images.pexels.com/photos/4750254/pexels-photo-4750254.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Completed agricultural borehole",
        phase: "after",
      },
    ],
    testimonial: {
      quote:
        "The borehole has transformed our farming operations by providing reliable water throughout every season.",
      author: "Joseph Kariuki",
      role: "Farm Owner",
    },
  },

  {
    id: "embu-greenhouse-irrigation",
    title: "Automated Greenhouse Irrigation",
    category: "irrigation",
    county: "Embu",
    completionDate: "December 2025",
    featured: false,
    challenge:
      "The client required accurate irrigation and fertigation to maximize greenhouse productivity while minimizing water use.",
    solution:
      "We deployed an automated drip irrigation and fertigation system with independent zone control across multiple greenhouses.",
    details: [
      { label: "Greenhouses", value: "15" },
      { label: "System", value: "Automated Drip" },
      { label: "Zones", value: "15" },
      { label: "Control", value: "Smart Controller" },
      { label: "Duration", value: "2 Weeks" },
      { label: "Fertigation", value: "Integrated" },
    ],
    results: [
      "65% water savings",
      "50% higher yields",
      "Automated crop feeding",
      "Lower labour costs",
    ],
    servicesDelivered: [
      "System Design",
      "Installation",
      "Automation",
      "Training",
    ],
    gallery: [
      {
        url: "https://images.pexels.com/photos/4403932/pexels-photo-4403932.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Completed greenhouse irrigation system",
        phase: "after",
      },
    ],
    testimonial: {
      quote:
        "The automation has made irrigation effortless while significantly improving crop quality and production.",
      author: "Peter Muriithi",
      role: "Greenhouse Manager",
    },
  },
];

export function getProjectsByService(slug: string): Project[] {
  return projects.filter((p) => p.category === slug);
}

export function getFeaturedProjects(limit = 3): Project[] {
  return projects.filter((p) => p.featured).slice(0, limit);
}
