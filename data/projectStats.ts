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
  // {
  //   id: "borehole-rehabilitation-flushing-cleaning-2026",
  //   title:
  //     "Borehole Rehabilitation: Compressor Flushing, Chemical Cleaning & Yield Improvement",
  //   category: "boreholes",
  //   projectGroup: "boreholes",
  //   county: "Meru",
  //   completionDate: "January 2026",
  //   featured: true,
  //   approved: true,

  //   overview:
  //     "Completed the rehabilitation of a 200-metre-deep borehole through pump and motor retrieval, compressed-air flushing, chemical cleaning, borehole redevelopment and post-rehabilitation pump testing. The existing submersible pump and motor were cleaned and reinstalled. Pump-test discharge increased from 3 m³/h to 9 m³/h, representing a 200% increase in the measured discharge rate following the intervention.",

  //   challenge:
  //     "The 200 m borehole recorded an initial pumping-test discharge of 3 m³/h. Rehabilitation was undertaken to improve borehole performance through targeted cleaning and redevelopment while retaining the existing pump and motor assembly. The work required safe retrieval of the installed equipment, removal of accumulated deposits and suspended material, appropriate chemical treatment, and verification of performance after the intervention.",

  //   solution:
  //     "The existing submersible pump and motor assembly was retrieved from the 200 m borehole using a specialised PRD pump lifting and lowering lorry. The borehole was flushed using a compressor-based airlifting process to help remove sediment and loosened deposits. Chemical cleaning was then carried out, followed by borehole redevelopment to remove mobilised material and residual treatment chemicals. The retrieved pump and motor were cleaned and prepared for reinstallation. After the rehabilitation works, the cleaned pump and motor assembly was returned to the borehole, and pump testing was conducted to assess the resulting discharge performance.",

  //   details: [
  //     {
  //       label: "Project type",
  //       value: "Borehole rehabilitation and performance improvement",
  //     },
  //     {
  //       label: "Borehole depth",
  //       value: "200 m",
  //     },
  //     {
  //       label: "Completion period",
  //       value: "January 2026",
  //     },
  //     {
  //       label: "Initial recorded discharge",
  //       value: "3 m³/h",
  //     },
  //     {
  //       label: "Post-rehabilitation test discharge",
  //       value: "9 m³/h",
  //     },
  //     {
  //       label: "Absolute discharge improvement",
  //       value: "+6 m³/h",
  //     },
  //     {
  //       label: "Relative discharge improvement",
  //       value: "200% increase; three times the initial measured rate",
  //     },
  //     {
  //       label: "Pump retrieval equipment",
  //       value: "PRD pump lifting and lowering lorry",
  //     },
  //     {
  //       label: "Borehole flushing method",
  //       value: "Compressed-air flushing and airlifting",
  //     },
  //     {
  //       label: "Cleaning treatment",
  //       value: "Chemical borehole cleaning",
  //     },
  //     {
  //       label: "Redevelopment method",
  //       value: "Post-treatment borehole redevelopment using compressed air",
  //     },
  //     {
  //       label: "Pump and motor servicing",
  //       value: "Retrieved, cleaned and reinstalled",
  //     },
  //     {
  //       label: "Performance verification",
  //       value: "Post-rehabilitation pump testing",
  //     },
  //   ],

  //   results: [
  //     "Recorded pump-test discharge increased from 3 m³/h to 9 m³/h, an improvement of 6 m³/h or 200% over the initial measured rate.",
  //     "Completed compressed-air flushing and chemical cleaning of the 200 m borehole.",
  //     "Redeveloped the borehole following chemical treatment to remove loosened deposits, mobilised sediment and residual treatment chemicals.",
  //     "Retrieved the existing submersible pump and motor using a specialised PRD pump lifting and lowering lorry.",
  //     "Cleaned and reinstalled the existing pump and motor assembly, avoiding an unsupported assumption that replacement equipment was required.",
  //     "Conducted post-rehabilitation pump testing to document the improved measured discharge performance.",
  //   ],

  //   servicesDelivered: [
  //     "Borehole rehabilitation and performance restoration",
  //     "Submersible pump and motor extraction",
  //     "Specialised pump lifting and lowering operations",
  //     "Compressed-air borehole flushing and airlifting",
  //     "Chemical borehole cleaning",
  //     "Borehole redevelopment after chemical treatment",
  //     "Pump and motor cleaning and reinstallation",
  //     "Post-rehabilitation pump testing and performance assessment",
  //   ],

  //   gallery: [
  //     {
  //       url: "/placeholder_image.jpg",
  //       caption: "Site before solar installation",
  //       phase: "before",
  //     },
  //     {
  //       url: "/placeholder_image.jpg",
  //       caption: "Panel installation in progress",
  //       phase: "during",
  //     },
  //     {
  //       url: "/placeholder_image.jpg",
  //       caption: "Completed rooftop solar installation",
  //       phase: "after",
  //     },
  //   ],

  //   videos: [
  //     {
  //       platform: "youtube",
  //       url: "https://youtu.be/vrTxUhGeFbQ",
  //     },
  //   ],
  // },

  {
    id: "borehole-rehabilitation-flushing-cleaning-2026",
    title: "Borehole Rehabilitation & Yield Improvement",
    category: "boreholes",
    projectGroup: "boreholes",
    county: "Meru",
    completionDate: "January 2026",
    featured: true,
    approved: true,

    overview:
      "Rehabilitated a 200 m-deep borehole through compressor flushing, chemical cleaning and redevelopment. The measured discharge increased from 3 m³/h to 9 m³/h.",

    challenge:
      "The borehole had an initial recorded discharge of 3 m³/h, requiring cleaning and redevelopment to improve its performance.",

    solution:
      "Retrieved the submersible pump and motor using a PRD pump lifting and lowering lorry. Flushed the borehole with compressed air, applied chemical cleaning and redeveloped the borehole. Cleaned and reinstalled the pump and motor, then conducted post-rehabilitation pump testing.",

    details: [
      {
        label: "Borehole depth",
        value: "200 m",
      },
      {
        label: "Initial discharge",
        value: "3 m³/h",
      },
      {
        label: "Final tested discharge",
        value: "9 m³/h",
      },
      {
        label: "Discharge improvement",
        value: "+6 m³/h (200%)",
      },
      {
        label: "Flushing method",
        value: "Compressed-air flushing",
      },
      {
        label: "Cleaning method",
        value: "Chemical cleaning and borehole redevelopment",
      },
      {
        label: "Equipment works",
        value: "Pump and motor retrieval, cleaning and reinstallation",
      },
      {
        label: "Performance verification",
        value: "Post-rehabilitation pump testing",
      },
    ],

    results: [
      "Discharge increased from 3 m³/h to 9 m³/h—a 200% improvement.",
      "Completed borehole flushing, chemical cleaning and redevelopment.",
      "Cleaned and reinstalled the existing pump and motor.",
    ],

    servicesDelivered: [
      "Borehole rehabilitation",
      "Pump and motor retrieval and reinstallation",
      "Compressed-air flushing",
      "Chemical cleaning and borehole redevelopment",
      "Pump testing and discharge assessment",
    ],

    relatedServiceSlugs: [],

    gallery: [
      {
        url: "/placeholder_image.jpg",
        caption: "Borehole site before rehabilitation",
        phase: "before",
      },
      {
        url: "/placeholder_image.jpg",
        caption: "Borehole flushing and cleaning in progress",
        phase: "during",
      },
      {
        url: "/placeholder_image.jpg",
        caption: "Completed rehabilitation and pump reinstallation",
        phase: "after",
      },
    ],

    videos: [
      {
        platform: "youtube",
        url: "https://youtu.be/yS_tWjUcZ2Y",
      },
    ],
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
