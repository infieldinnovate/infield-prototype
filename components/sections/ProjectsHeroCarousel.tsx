"use client";

import { useMemo } from "react";
import { MapPin, Calendar, Tag, ArrowRight, CircleCheck } from "lucide-react";
import {
  PremiumCarousel,
  type PremiumSlide,
} from "@/components/sections/PremiumCarousel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { projects } from "@/data/projectStats";
import { ServiceIcons } from "@/data/service-icons";

export default function ProjectsHeroCarousel() {
  const slides: PremiumSlide[] = useMemo(() => {
    const featured = projects.filter((p) => p.featured);
    const pool = featured.length >= 3 ? featured : projects;

    return pool.slice(0, 6).map((project) => {
      const image =
        project.gallery.find((g) => g.phase === "after")?.url ||
        project.gallery[0]?.url ||
        "";

      const badgeIcon = ServiceIcons[project.category] || CircleCheck;

      const description = project.results[0] || project.challenge;

      return {
        image,
        imageAlt: project.title,
        imagePriority: false,
        badge: project.category,
        badgeIcon,
        eyebrow: "Featured Project",
        title: project.title,
        description,
        meta: [
          { icon: MapPin, text: `${project.county} County` },
          { icon: Calendar, text: project.completionDate },
        ],
        primaryButton: {
          label: "View Projects",
          href: `/resources/projects`,
        },
        secondaryButton: {
          label: "Explore Service",
          href: `/services/${project.category}`,
        },
      };
    });
  }, []);

  return (
    <>
      <div className="container" style={{ paddingTop: "1.5rem" }}>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "/resources/knowledge-centre" },
            { label: "Projects", href: "/resources/projects" },
          ]}
        />
      </div>
      <PremiumCarousel
        slides={slides}
        autoplayDelay={6000}
        loop={slides.length > 1}
      />
    </>
  );
}
