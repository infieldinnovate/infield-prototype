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
        url: "/projects/greenwood-flushing-1.jpg",
        caption: "Borehole site before rehabilitation",
        phase: "before",
      },
      {
        url: "/projects/greenwood-flushing-2.jpg",
        caption: "Borehole flushing and cleaning in progress",
        phase: "during",
      },
      {
        url: "/projects/greenwood-flushing-3.jpg",
        caption: "Borehole flushing and cleaning in progress",
        phase: "during",
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
