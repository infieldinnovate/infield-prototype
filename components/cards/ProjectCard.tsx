// components\cards\ProjectCard.tsx

"use client";

import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import type { Project } from "@/data/projectStats";
import styles from "./ProjectCard.module.scss";
import { useProjectImages } from "@/hooks/useProjectImages";
import ImageSwiper from "../ui/ImageSwiper";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { useMemo } from "react";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const afterImageUrls = useMemo(
    () =>
      project.gallery
        .filter((img) => img.phase === "after")
        .map((img) => img.url),
    [project.gallery],
  );

  const { images, loading, error } = useProjectImages({
    images: afterImageUrls,
  });

  const hasMultipleAfterImages = afterImageUrls.length > 1;

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
        {hasMultipleAfterImages ? (
          <ImageSwiper
            images={images}
            loading={loading}
            error={error}
            alt={project.title}
          />
        ) : (
          <ImageWithFallback
            src={afterImageUrls[0]}
            alt={project.title}
            fill
            sizes="(max-width:768px)100vw,50vw"
            className={styles.cardImage}
          />
        )}
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
