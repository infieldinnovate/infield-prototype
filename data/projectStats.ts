// data\projectStats.ts

import { ServiceSlug } from "./services";

// ============================================
// Project Groups — broader classification used
// on the projects page for filtering/display
// ============================================

export type ProjectGroup =
  | "solar-electrical"
  | "plumbing"
  | "boreholes"
  | "water-services"
  | "irrigation";

export interface ProjectGroupConfig {
  slug: ProjectGroup;
  label: string;
}

export const PROJECT_GROUPS: ProjectGroupConfig[] = [
  { slug: "solar-electrical", label: "Solar & Electrical" },
  { slug: "plumbing", label: "Plumbing" },
  { slug: "boreholes", label: "Boreholes" },
  { slug: "water-services", label: "Water Harvesting & Storage" },
  { slug: "irrigation", label: "Irrigation" },
];

export function getProjectGroupLabel(slug: ProjectGroup): string {
  return PROJECT_GROUPS.find((g) => g.slug === slug)?.label ?? slug;
}

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
  projectGroup: ProjectGroup;
  county: string;
  completionDate: string;
  featured: boolean;
  approved?: boolean;
  overview?: string;
  challenge: string;
  solution: string;
  details: ProjectDetail[];
  results: string[];
  servicesDelivered: string[];
  relatedServiceSlugs?: ServiceSlug[];
  gallery: ProjectGalleryImage[];
  videos?: ProjectVideo[];
  testimonial?: ProjectTestimonial;
}

export const projects: Project[] = [
  {
    id: "meru-commercial-solar",
    title: "100kW Hybrid Commercial Solar System",
    category: "solar",
    projectGroup: "solar-electrical",
    county: "Meru",
    completionDate: "October 2024",
    featured: true,
    approved: true,
    overview:
      "A commercial facility in Meru County engaged us to design and install a hybrid solar power system with battery storage, replacing unreliable grid supply with clean, dependable energy for daily operations and cold storage.",
    challenge:
      "Escalating electricity costs and frequent grid outages were affecting business productivity and cold storage operations.",
    solution:
      "We engineered and installed a 100kW hybrid solar system with battery storage and intelligent monitoring, delivering reliable power while significantly reducing operating costs.",
    relatedServiceSlugs: ["solar", "electrical"],
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
        url: "/placeholder_image.jpg",
        caption: "Site before solar installation",
        phase: "before",
      },
      {
        url: "/placeholder_image.jpg",
        caption: "Panel installation in progress",
        phase: "during",
      },
      {
        url: "/placeholder_image.jpg",
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
    id: "nairobi-electrical-power",
    title: "Commercial Electrical & Power Systems Installation",
    category: "electrical",
    projectGroup: "solar-electrical",
    county: "Nairobi",
    completionDate: "July 2024",
    featured: true,
    approved: true,
    overview:
      "A new commercial facility in Nairobi required complete electrical installation across three buildings. We delivered three-phase distribution, backup power integration, motor control panels for water pumps, VFD systems, and full EPRA certification.",
    challenge:
      "The facility needed a coordinated electrical system supporting building power, water pump controls, backup supply, and machinery — all within a tight project schedule.",
    solution:
      "We installed a complete three-phase electrical system with distribution boards, VFD-controlled pump motors, battery backup integration, surge protection, earthing, and certified testing and commissioning.",
    relatedServiceSlugs: ["electrical"],
    details: [
      { label: "Supply", value: "Three-Phase" },
      { label: "Capacity", value: "200A" },
      { label: "Backup", value: "50kVA Inverter" },
      { label: "Motor Controls", value: "VFD + DOL Starters" },
      { label: "Duration", value: "5 Weeks" },
      { label: "Certification", value: "EPRA" },
    ],
    results: [
      "100% code compliant",
      "Reliable backup power",
      "Optimized motor efficiency",
      "Zero electrical faults",
    ],
    servicesDelivered: [
      "Electrical Design",
      "Distribution & Wiring",
      "Control Panel Installation",
      "Testing & Commissioning",
    ],
    gallery: [
      {
        url: "/placeholder_image.jpg",
        caption: "Cable routing during installation",
        phase: "during",
      },
      {
        url: "/placeholder_image.jpg",
        caption: "Completed distribution board",
        phase: "after",
      },
      {
        url: "/placeholder_image.jpg",
        caption: "Motor control panel with VFD",
        phase: "after",
      },
    ],
    testimonial: {
      quote:
        "The installation was delivered on schedule, professionally executed, and passed inspection without a single issue. The backup system has worked flawlessly.",
      author: "Grace Wanjiru",
      role: "Project Manager",
    },
  },

  {
    id: "muranga-industrial-plumbing",
    title: "Industrial Plumbing System Upgrade",
    category: "plumbing",
    projectGroup: "plumbing",
    county: "Murang'a",
    completionDate: "August 2024",
    featured: false,
    approved: true,
    overview:
      "An industrial facility in Murang'a needed a complete plumbing overhaul. We replaced aging pipework with industrial-grade materials, added pressure boosting, and integrated multi-stage filtration for reliable plant operations.",
    challenge:
      "Frequent leaks, unstable pressure, and aging pipework were disrupting factory production and increasing maintenance costs.",
    solution:
      "We replaced the entire plumbing network with industrial-grade piping, pressure boosting, and advanced filtration for reliable plant operations.",
    relatedServiceSlugs: ["plumbing"],
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
        url: "/placeholder_image.jpg",
        caption: "Industrial plumbing installation in progress",
        phase: "during",
      },
      {
        url: "/placeholder_image.jpg",
        caption: "Completed pipework and filtration system",
        phase: "after",
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
    id: "elgeyo-borehole",
    title: "Commercial Borehole Water Supply",
    category: "boreholes",
    projectGroup: "boreholes",
    county: "Elgeyo Marakwet",
    completionDate: "January 2026",
    featured: false,
    approved: true,
    overview:
      "A tea processing facility in Elgeyo Marakwet required a dependable year-round water supply. We drilled a commercial borehole and installed pumping equipment with bulk storage to secure continuous production.",
    challenge:
      "Recurring water shortages disrupted tea processing and reduced production efficiency during dry seasons.",
    solution:
      "We delivered a high-yield borehole complete with pumping equipment and bulk water storage, ensuring dependable production throughout the year.",
    relatedServiceSlugs: ["boreholes", "water-storage"],
    details: [
      { label: "Depth", value: "300m" },
      { label: "Yield", value: "4,000L/hr" },
      { label: "Pump", value: "5HP Submersible" },
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
      "Hydrogeological Survey",
      "Drilling & Casing",
      "Pump Installation",
      "Commissioning",
    ],
    videos: [
      {
        platform: "youtube",
        url: "https://youtu.be/vrTxUhGeFbQ?rel=0",
      },
    ],
    gallery: [
      {
        url: "/placeholder_image.jpg",
        caption: "Borehole drilling operations",
        phase: "during",
      },
      {
        url: "/placeholder_image.jpg",
        caption: "Completed borehole with pump and storage",
        phase: "after",
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
    id: "kisumu-water-storage",
    title: "200,000L Elevated Water Storage System",
    category: "water-storage",
    projectGroup: "water-services",
    county: "Kisumu",
    completionDate: "April 2025",
    featured: false,
    approved: true,
    overview:
      "A facility in Kisumu experiencing frequent municipal water outages needed a reliable backup supply. We engineered and installed a 200,000L elevated water storage system with automatic source switching for uninterrupted availability.",
    challenge:
      "Frequent municipal water interruptions disrupted daily operations and reduced service reliability.",
    solution:
      "We engineered and installed a 200,000L elevated storage system with automatic source switching to ensure uninterrupted water availability.",
    relatedServiceSlugs: ["water-storage", "water-harvesting"],
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
      "Structural Fabrication",
      "Tank Installation",
      "Pipework & Connections",
      "Automation",
    ],
    gallery: [
      {
        url: "/placeholder_image.jpg",
        caption: "Elevated steel tank under construction",
        phase: "during",
      },
      {
        url: "/placeholder_image.jpg",
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
    id: "nakuru-water-harvesting",
    title: "Commercial Rainwater Harvesting System",
    category: "water-harvesting",
    projectGroup: "water-services",
    county: "Nakuru",
    completionDate: "November 2025",
    featured: false,
    approved: true,
    overview:
      "A commercial property in Nakuru wanted to reduce reliance on municipal water. We designed and installed a complete rainwater harvesting system with rooftop collection, filtration, and 80,000L storage integrated with the existing plumbing supply.",
    challenge:
      "Rising water costs and unreliable municipal supply were straining the facility's operating budget and water availability.",
    solution:
      "We installed a rooftop rainwater harvesting system with guttering, first-flush diversion, multi-stage filtration, and storage integrated into the building's existing water supply network.",
    relatedServiceSlugs: ["water-harvesting", "water-storage"],
    details: [
      { label: "Catchment Area", value: "1,200m²" },
      { label: "Storage", value: "80,000L" },
      { label: "Filtration", value: "Multi-Stage" },
      { label: "Duration", value: "3 Weeks" },
      { label: "Annual Yield", value: "~1.1M L" },
      { label: "Integration", value: "Plumbing Connected" },
    ],
    results: [
      "60% reduction in municipal water use",
      "1.1M litres harvested annually",
      "Lower water bills",
      "Reliable backup supply",
    ],
    servicesDelivered: [
      "System Design",
      "Guttering & Conveyance",
      "Filtration Installation",
      "Storage Integration",
    ],
    gallery: [
      {
        url: "/placeholder_image.jpg",
        caption: "Guttering and downpipe installation",
        phase: "during",
      },
      {
        url: "/placeholder_image.jpg",
        caption: "Completed filtration and storage system",
        phase: "after",
      },
    ],
    testimonial: {
      quote:
        "The harvesting system has dramatically cut our water bills and given us a reliable backup supply during municipal outages.",
      author: "Janet Wamaitha",
      role: "Facilities Manager",
    },
  },

  {
    id: "isiolo-drip-irrigation",
    title: "80-Acre Smart Drip Irrigation",
    category: "irrigation",
    projectGroup: "irrigation",
    county: "Isiolo",
    completionDate: "September 2025",
    featured: true,
    approved: true,
    overview:
      "An 80-acre farm in Isiolo commissioned us to replace inefficient flood irrigation with a fully automated drip system, integrating fertigation and multi-zone control to improve water efficiency and crop yields.",
    challenge:
      "Traditional flood irrigation consumed excessive water, increased labour costs, and produced uneven crop performance.",
    solution:
      "We installed a fully automated drip irrigation system with fertigation and multi-zone control, improving efficiency across the entire farm.",
    relatedServiceSlugs: ["irrigation", "water-storage"],
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
        url: "/placeholder_image.jpg",
        caption: "Drip line installation across the farm",
        phase: "during",
      },
      {
        url: "/placeholder_image.jpg",
        caption: "Completed drip irrigation system",
        phase: "after",
      },
      {
        url: "/placeholder_image.jpg",
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
];

export function getApprovedProjects(): Project[] {
  return projects.filter((p) => p.approved === true);
}

export function getProjectsByService(slug: string): Project[] {
  return projects.filter((p) => p.approved === true && p.category === slug);
}

export function getProjectsByGroup(group: ProjectGroup): Project[] {
  return projects.filter(
    (p) => p.approved === true && p.projectGroup === group,
  );
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.id === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.id);
}

export function getFeaturedProjects(limit = 3): Project[] {
  return projects
    .filter((p) => p.approved === true && p.featured)
    .slice(0, limit);
}

export interface GalleryMediaItem {
  id: string;
  url: string;
  caption: string;
  type: "image" | "video";
  projectTitle: string;
  projectCounty: string;
  platform?: "youtube" | "tiktok" | "facebook";
}

export function getAllGalleryMedia(): GalleryMediaItem[] {
  const media: GalleryMediaItem[] = [];

  for (const project of projects) {
    for (const galleryImage of project.gallery) {
      media.push({
        id: `${project.id}-img-${galleryImage.caption}`,
        url: galleryImage.url,
        caption: galleryImage.caption,
        type: "image",
        projectTitle: project.title,
        projectCounty: project.county,
      });
    }

    if (project.videos) {
      for (const video of project.videos) {
        media.push({
          id: `${project.id}-video-${video.platform}-${video.url}`,
          url: video.url,
          caption: `${project.title} — Project Video`,
          type: "video",
          projectTitle: project.title,
          projectCounty: project.county,
          platform: video.platform,
        });
      }
    }
  }

  return media;
}
