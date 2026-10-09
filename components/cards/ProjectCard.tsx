"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import type { Project } from "@/data/projectStats";
import { getYouTubeThumb } from "@/data/projectStats";
import styles from "./ProjectCard.module.scss";
import { useProjectImages } from "@/hooks/useProjectImages";
import ImageSwiper from "../ui/ImageSwiper";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { useMemo } from "react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const galleryImages = project.projectImages;
  const galleryVideos = project.projectVideos;

  const videoThumbs = useMemo(() => {
    return galleryVideos
      .map((v) => {
        const thumb =
          v.platform === "youtube" ? getYouTubeThumb(v.url) : null;
        return thumb ? { src: thumb, caption: v.caption } : null;
      })
      .filter(
        (t): t is { src: string; caption: string } => t !== null,
      );
  }, [galleryVideos]);

  const carouselUrls = useMemo(
    () => [
      ...galleryImages.map((img) => img.url),
      ...videoThumbs.map((v) => v.src),
    ],
    [galleryImages, videoThumbs],
  );

  const heroImageUrl = useMemo(() => {
    const afterImage = galleryImages.find((g) => g.phase === "after");
    if (afterImage) return afterImage.url;
    if (videoThumbs.length > 0) return videoThumbs[0].src;
    if (galleryImages.length > 0) return galleryImages[0].url;
    return "/placeholder_image.jpg";
  }, [galleryImages, videoThumbs]);

  const { images, loading, error } = useProjectImages({
    images: carouselUrls,
  });

  const hasMultiple = carouselUrls.length > 1;

  return (
    <Link
      href={`/resources/projects/${project.id}`}
      className={project.featured ? styles.projectCard : styles.gridCard}
    >
      <div className={styles.imageContainer}>
        {hasMultiple ? (
          <ImageSwiper
            images={images}
            loading={loading}
            error={error}
            alt={project.title}
          />
        ) : (
          <ImageWithFallback
            src={heroImageUrl}
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
        <p>{project.overview}</p>

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

        <span className={styles.cardBtn}>
          Read Case Study
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
