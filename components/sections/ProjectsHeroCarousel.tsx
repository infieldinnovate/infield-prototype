"use client";

import { useMemo } from "react";
import { MapPin, Calendar, CircleCheck } from "lucide-react";
import {
  PremiumCarousel,
  type PremiumSlide,
} from "@/components/sections/PremiumCarousel";
import {
  projects,
  getProjectGroupLabel,
  getYouTubeThumb,
} from "@/data/projectStats";
import { ServiceIcons } from "@/data/service-icons";

export default function ProjectsHeroCarousel() {
  const slides: PremiumSlide[] = useMemo(() => {
    const approved = projects.filter((p) => p.approved === true);
    const featured = approved.filter((p) => p.featured);
    const pool = featured.length >= 3 ? featured : approved;

    return pool.slice(0, 6).map((project) => {
      const imgs = project.projectImages;
      const vids = project.projectVideos;

      const afterImage = imgs.find((g) => g.phase === "after");
      const firstVideoThumb =
        vids.length > 0 && vids[0].platform === "youtube"
          ? getYouTubeThumb(vids[0].url)
          : null;

      const image =
        afterImage?.url ||
        firstVideoThumb ||
        imgs[0]?.url ||
        "";

      const badgeIcon = ServiceIcons[project.category] || CircleCheck;

      const description = project.results[0] || project.challenge;

      return {
        image,
        imageAlt: project.title,
        imagePriority: false,
        badge: getProjectGroupLabel(project.projectGroup),
        badgeIcon,
        eyebrow: "Featured Project",
        title: project.title,
        description,
        meta: [
          { icon: MapPin, text: `${project.county} County` },
          { icon: Calendar, text: project.completionDate },
        ],
        primaryButton: {
          label: "View Project",
          href: `/resources/projects/${project.id}`,
        },
        secondaryButton: {
          label: "Explore Service",
          href: `/services/${project.category}`,
        },
      };
    });
  }, []);

  return (
    <PremiumCarousel
      slides={slides}
      autoplayDelay={6000}
      loop={slides.length > 1}
    />
  );
}
