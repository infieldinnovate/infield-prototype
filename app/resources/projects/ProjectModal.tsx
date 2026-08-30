// app/resources/projects/ProjectModal.tsx

"use client";

import { useEffect, useMemo } from "react";
import { X, MapPin, Calendar, CircleCheck as CheckCircle2, Wrench, Quote, Camera } from "lucide-react";
import type { Project, ProjectVideo } from "@/data/projectStats";
import { useProjectImages } from "@/hooks/useProjectImages";
import ImageSwiper from "@/components/ui/ImageSwiper";
import styles from "./ProjectModal.module.scss";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const imageUrls = useMemo(
    () => project.gallery.map((img) => img.url),
    [project.gallery],
  );

  const { images, loading, error } = useProjectImages({
    images: imageUrls,
  });

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  function getEmbedUrl(video: ProjectVideo): string | null {
    switch (video.platform) {
      case "youtube": {
        let id = "";

        if (video.url.includes("youtu.be/")) {
          id = video.url.split("youtu.be/")[1].split("?")[0];
        } else {
          id = new URL(video.url).searchParams.get("v") ?? "";
        }

        return id ? `https://www.youtube.com/embed/${id}` : null;
      }

      case "tiktok": {
        const id = video.url.split("/video/")[1]?.split("?")[0];

        return id ? `https://www.tiktok.com/embed/v2/${id}` : null;
      }

      case "facebook":
        return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
          video.url,
        )}&show_text=false`;

      default:
        return null;
    }
  }

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.modalClose}
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={20} />
        </button>

        {/* Hero */}
        <div className={styles.modalHero}>
          <ImageSwiper
            images={images}
            loading={loading}
            error={error}
            alt={project.title}
          />

          <div className={styles.modalHeroOverlay} />

          <div className={styles.modalHeroInfo}>
            <span className={styles.modalCategory}>{project.category}</span>

            <h2 id="project-modal-title" className={styles.modalTitle}>
              {project.title}
            </h2>

            <div className={styles.modalMeta}>
              <span className={styles.modalMetaItem}>
                <MapPin size={16} />
                {project.county} County, Kenya
              </span>

              <span className={styles.modalMetaItem}>
                <Calendar size={16} />
                {project.completionDate}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.modalBody}>
          {/* Challenge */}
          <section className={styles.modalSection}>
            <h3 className={styles.modalSectionTitle}>Client Challenge</h3>

            <p className={styles.modalText}>{project.challenge}</p>
          </section>

          {/* Solution */}
          <section className={styles.modalSection}>
            <h3 className={styles.modalSectionTitle}>Our Solution</h3>

            <p className={styles.modalText}>{project.solution}</p>
          </section>

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <section className={styles.modalSection}>
              <h3 className={styles.modalSectionTitle}>
                <Camera size={20} />
                Project Gallery
              </h3>

              <div className={styles.gallery}>
                {project.gallery.map((image, index) => (
                  <div key={index} className={styles.galleryItem}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image.url}
                      alt={image.caption}
                      className={styles.galleryImage}
                    />

                    <span className={styles.galleryPhase}>{image.phase}</span>

                    <span className={styles.galleryCaption}>
                      {image.caption}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Details */}
          {project.details.length > 0 && (
            <section className={styles.modalSection}>
              <h3 className={styles.modalSectionTitle}>Project Details</h3>

              <div className={styles.detailsGrid}>
                {project.details.map((detail, index) => (
                  <div key={index} className={styles.detailItem}>
                    <div className={styles.detailLabel}>{detail.label}</div>

                    <div className={styles.detailValue}>{detail.value}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Results */}
          {project.results.length > 0 && (
            <section className={styles.modalSection}>
              <h3 className={styles.modalSectionTitle}>Results</h3>

              <ul className={styles.resultsList}>
                {project.results.map((result, index) => (
                  <li key={index} className={styles.resultItem}>
                    <span className={styles.resultCheck}>
                      <CheckCircle2 size={14} />
                    </span>

                    {result}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Services Delivered */}
          {project.servicesDelivered.length > 0 && (
            <section className={styles.modalSection}>
              <h3 className={styles.modalSectionTitle}>
                <Wrench size={20} />
                Services Delivered
              </h3>

              <div className={styles.serviceTags}>
                {project.servicesDelivered.map((service, index) => (
                  <span key={index} className={styles.serviceTag}>
                    <CheckCircle2 size={14} />
                    {service}
                  </span>
                ))}
              </div>
            </section>
          )}

          {project.video && (
            <section className={styles.modalSection}>
              {/* Video */}
              {project.video && (
                <section className={styles.modalSection}>
                  <h3 className={styles.modalSectionTitle}>Project Video</h3>

                  {getEmbedUrl(project.video) ? (
                    <div className={styles.videoWrapper}>
                      <iframe
                        src={getEmbedUrl(project.video)!}
                        title={project.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <a
                      href={project.video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.videoLink}
                    >
                      View on{" "}
                      {project.video.platform.charAt(0).toUpperCase() +
                        project.video.platform.slice(1)}
                    </a>
                  )}
                </section>
              )}
            </section>
          )}

          {/* Testimonial */}
          {project.testimonial && (
            <section className={styles.modalSection}>
              <h3 className={styles.modalSectionTitle}>
                <Quote size={20} />
                Client Testimonial
              </h3>

              <div className={styles.testimonial}>
                <p className={styles.testimonialQuote}>
                  {project.testimonial.quote}
                </p>

                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>
                    {project.testimonial.author.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <div className={styles.testimonialName}>
                      {project.testimonial.author}
                    </div>

                    <div className={styles.testimonialRole}>
                      {project.testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
