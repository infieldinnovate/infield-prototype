import {
  Building2,
  CloudRain,
  FileBadge,
  FileText,
  ShieldCheck,
  Sun,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

// ============================================
// Downloads Centre Data
// ============================================

export type DownloadCategory =
  | "Company"
  | "Products"
  | "Warranty"
  | "Maintenance"
  | "Technical";

export interface Download {
  id: string;
  title: string;
  description: string;
  category: DownloadCategory;
  fileType: "PDF" | "DOCX" | "XLSX" | "ZIP";
  fileSize: string;
  icon: LucideIcon;
  pages?: number;
  updatedAt: string;
}

export const downloads: Download[] = [
  {
    id: "d1",
    title: "Company Profile",
    description:
      "Learn about Infield Innovations — our history, mission, certifications, and the full range of engineering services we offer.",
    category: "Company",
    fileType: "PDF",
    fileSize: "2.4 MB",
    icon: Building2,
    pages: 12,
    updatedAt: "2024-06-01",
  },

  {
    id: "d2",
    title: "Capability Statement",
    description:
      "A detailed overview of our technical capabilities, project experience, certifications, and safety record.",
    category: "Company",
    fileType: "PDF",
    fileSize: "1.8 MB",
    icon: FileBadge,
    pages: 8,
    updatedAt: "2024-05-15",
  },

  {
    id: "d3",
    title: "Solar Product Brochure",
    description:
      "Explore our range of solar panels, inverters, and battery storage systems with specifications and pricing.",
    category: "Products",
    fileType: "PDF",
    fileSize: "5.2 MB",
    icon: Sun,
    pages: 24,
    updatedAt: "2024-06-10",
  },

  {
    id: "d4",
    title: "Electrical Products Brochure",
    description:
      "Complete catalogue of electrical products including smart panels, backup generators, and lighting solutions.",
    category: "Products",
    fileType: "PDF",
    fileSize: "4.1 MB",
    icon: Zap,
    pages: 18,
    updatedAt: "2024-05-20",
  },

  {
    id: "d5",
    title: "Warranty Information Guide",
    description:
      "Comprehensive warranty terms for all products and services, including coverage periods and claim procedures.",
    category: "Warranty",
    fileType: "PDF",
    fileSize: "1.2 MB",
    icon: ShieldCheck,
    pages: 6,
    updatedAt: "2024-04-01",
  },

  {
    id: "d6",
    title: "Solar System Maintenance Guide",
    description:
      "Step-by-step guide to maintaining your solar system for peak performance and longevity.",
    category: "Maintenance",
    fileType: "PDF",
    fileSize: "3.5 MB",
    icon: Wrench,
    pages: 16,
    updatedAt: "2024-03-15",
  },

  {
    id: "d7",
    title: "Irrigation System Maintenance Guide",
    description:
      "Seasonal maintenance tips, troubleshooting, and optimization guides for irrigation systems.",
    category: "Maintenance",
    fileType: "PDF",
    fileSize: "2.8 MB",
    icon: CloudRain,
    pages: 14,
    updatedAt: "2024-02-20",
  },

  {
    id: "d8",
    title: "Borehole Pump Technical Datasheets",
    description:
      "Complete technical specifications for our range of submersible and surface borehole pumps.",
    category: "Technical",
    fileType: "PDF",
    fileSize: "6.7 MB",
    icon: FileText,
    pages: 32,
    updatedAt: "2024-04-10",
  },

  {
    id: "d9",
    title: "Electrical Panel Technical Specs",
    description:
      "Detailed technical datasheets for our smart electrical panels, including wiring diagrams and ratings.",
    category: "Technical",
    fileType: "PDF",
    fileSize: "4.9 MB",
    icon: FileText,
    pages: 28,
    updatedAt: "2024-03-25",
  },
];

export const downloadCategories: DownloadCategory[] = [
  "Company",
  "Products",
  "Warranty",
  "Maintenance",
  "Technical",
];

export function getDownloadsByCategory(category: DownloadCategory): Download[] {
  return downloads.filter((d) => d.category === category);
}
