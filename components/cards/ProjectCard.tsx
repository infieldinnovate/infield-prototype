// components\cards\ProjectCard.tsx

"use client";

import { ArrowRight, CheckCircle2, MapPin, Star } from "lucide-react";
import type { Project } from "@/data/projectStats";
import styles from "./ProjectCard.module.scss";
import { useProjectImages } from "@/hooks/useProjectImages";
import ImageSwiper from "../ui/ImageSwiper";
import { useMemo } from "react";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const imageUrls = useMemo(
    () => project.gallery.map((img) => img.url),
    [project.gallery],
  );

  const { images, loading, error } = useProjectImages({
    images: imageUrls,
  });

  return (
    <article
      className={project.featured ? styles.projectCard : styles.gridCard}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className={styles.imageContainer}>
        <ImageSwiper
          images={images}
          loading={loading}
          error={error}
          alt={project.title}
        />
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardLocation}>
          <MapPin size={14} />
          {project.county} County, Kenya
        </div>

        <h4>{project.title}</h4>
        <p>{project.challenge}</p>

        <div className={styles.cardResults}>
          <ul className={styles.cardResultList}>
            {project.results.map((result, index) => (
              <li key={index} className={styles.cardResultItem}>
                <CheckCircle2 size={18} className={styles.cardResultIcon} />{" "}
                {result}
              </li>
            ))}
          </ul>
        </div>

        <button
          className={styles.cardBtn}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          Read Case Study
          <ArrowRight size={16} />
        </button>
      </div>
    </article>
  );
}
