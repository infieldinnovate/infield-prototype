"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Calendar,
  CircleCheck as CheckCircle2,
  Wrench,
  Quote,
  Camera,
  Target,
  Lightbulb,
  TrendingUp,
  ArrowRightCircle,
} from "lucide-react";
import type { Project } from "@/data/projectStats";
import {
  getProjectGroupLabel,
  getVideoEmbedUrl,
} from "@/data/projectStats";
import type { Service } from "@/data/services";
import { useProjectImages } from "@/hooks/useProjectImages";
import ImageSwiper from "@/components/ui/ImageSwiper";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LinkButton } from "@/components/ui/LinkButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/cards/ProjectCard";
import styles from "./page.module.scss";

interface ProjectDetailClientProps {
  project: Project;
  relatedProjects: Project[];
  relatedServices: Service[];
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4 },
};

export default function ProjectDetailClient({
  project,
  relatedProjects,
  relatedServices,
}: ProjectDetailClientProps) {
  const galleryImages = project.projectImages;
  const galleryVideos = project.projectVideos;

  const heroImageUrls = useMemo(
    () => galleryImages.map((img) => img.url),
    [galleryImages],
  );

  const { images, loading, error } = useProjectImages({
    images: heroImageUrls,
  });

  const ctaText = useMemo(() => {
    const groupName = getProjectGroupLabel(project.projectGroup);
    return `Planning a similar ${groupName.toLowerCase()} project? Our team can assess your requirements and deliver a tailored solution.`;
  }, [project.projectGroup]);

  return (
    <article className={styles.page}>
      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.heroImageWrap}>
          <ImageSwiper
            images={images}
            loading={loading}
            error={error}
            alt={project.title}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroInfo}>
            <span className={styles.categoryBadge}>
              {getProjectGroupLabel(project.projectGroup)}
            </span>
            <h1 className={styles.title}>{project.title}</h1>
            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <MapPin size={16} />
                {project.county} County, Kenya
              </span>
              <span className={styles.metaItem}>
                <Calendar size={16} />
                {project.completionDate}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.breadcrumbsRow}>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources/knowledge-centre" },
              { label: "Projects", href: "/resources/projects" },
              { label: project.title },
            ]}
          />
        </div>
      </header>

      {/* Body */}
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.layout}>
            {/* Main Content */}
            <div className={styles.content}>
              {/* Project Overview */}
              {project.overview && (
                <motion.section className={styles.section} {...fadeUp}>
                  <h2 className={styles.sectionHeading}>Project Overview</h2>
                  <p className={styles.paragraph}>{project.overview}</p>
                </motion.section>
              )}

              {/* The Challenge */}
              <motion.section
                className={styles.section}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.05 }}
              >
                <h2 className={styles.sectionHeading}>
                  <Target size={20} />
                  The Challenge
                </h2>
                <p className={styles.paragraph}>{project.challenge}</p>
              </motion.section>

              {/* Our Solution */}
              <motion.section
                className={styles.section}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.05 }}
              >
                <h2 className={styles.sectionHeading}>
                  <Lightbulb size={20} />
                  Our Solution
                </h2>
                <p className={styles.paragraph}>{project.solution}</p>
              </motion.section>

              {/* Results */}
              {project.results.length > 0 && (
                <motion.section
                  className={styles.section}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: 0.05 }}
                >
                  <h2 className={styles.sectionHeading}>
                    <TrendingUp size={20} />
                    Project Results
                  </h2>
                  <div className={styles.resultsGrid}>
                    {project.results.map((result, index) => (
                      <div key={index} className={styles.resultCard}>
                        <span className={styles.resultIcon}>
                          <CheckCircle2 size={18} />
                        </span>
                        <span className={styles.resultText}>{result}</span>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Gallery — images */}
              {galleryImages.length > 0 && (
                <motion.section
                  className={styles.section}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: 0.1 }}
                >
                  <h2 className={styles.sectionHeading}>
                    <Camera size={20} />
                    Project Gallery
                  </h2>
                  <div className={styles.gallery}>
                    {galleryImages.map((image, index) => (
                      <div key={index} className={styles.galleryItem}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={image.url}
                          alt={image.caption}
                          className={styles.galleryImage}
                        />
                        <span className={styles.galleryPhase}>
                          {image.phase}
                        </span>
                        <span className={styles.galleryCaption}>
                          {image.caption}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Gallery — videos */}
              {galleryVideos.length > 0 && (
                <motion.section
                  className={styles.section}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: 0.1 }}
                >
                  <h2 className={styles.sectionHeading}>
                    Project in Action
                  </h2>
                  <div className={styles.videoStack}>
                    {galleryVideos.map((video, index) => (
                      <div key={index}>
                        {getVideoEmbedUrl(video) ? (
                          <div className={styles.videoWrapper}>
                            <iframe
                              src={getVideoEmbedUrl(video)!}
                              title={`${project.title} — Video ${index + 1}`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <a
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.videoLink}
                          >
                            View on{" "}
                            {video.platform.charAt(0).toUpperCase() +
                              video.platform.slice(1)}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Testimonial */}
              {project.testimonial && (
                <motion.section
                  className={styles.section}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: 0.1 }}
                >
                  <h2 className={styles.sectionHeading}>
                    <Quote size={20} />
                    Client Testimonial
                  </h2>
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
                </motion.section>
              )}

              {/* CTA */}
              <div className={styles.cta}>
                <div className={styles.ctaContent}>
                  <h3>Planning a similar project?</h3>
                  <p>{ctaText}</p>
                </div>
                <LinkButton href="/quote" rightIcon={ArrowRight}>
                  Get a Free Quote
                </LinkButton>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className={styles.relatedServices}>
                  <span className={styles.relatedServicesLabel}>
                    Services used in this project
                  </span>
                  <div className={styles.relatedServicesLinks}>
                    {relatedServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className={styles.relatedServiceLink}
                      >
                        {service.shortName}
                        <ArrowRightCircle size={16} />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back Link */}
              <Link
                href="/resources/projects"
                className={styles.backLink}
              >
                <ArrowLeft size={18} />
                Back to all projects
              </Link>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {project.details.length > 0 && (
                <div className={styles.infoCard}>
                  <h3 className={styles.infoTitle}>Project Information</h3>
                  <dl className={styles.infoList}>
                    {project.details.map((detail, index) => (
                      <div key={index} className={styles.infoItem}>
                        <dt>{detail.label}</dt>
                        <dd>{detail.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {project.servicesDelivered.length > 0 && (
                <div className={styles.infoCard}>
                  <h3 className={styles.infoTitle}>
                    <Wrench size={14} />
                    Our Role
                  </h3>
                  <div className={styles.serviceTags}>
                    {project.servicesDelivered.map((service, index) => (
                      <span key={index} className={styles.serviceTag}>
                        <CheckCircle2 size={14} />
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.results.length > 0 && (
                <div className={styles.infoCard}>
                  <h3 className={styles.infoTitle}>Key Results</h3>
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
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="More Work"
              title="Related Projects"
              description="Explore more installations delivered by our team."
            />
            <div className={styles.relatedGrid}>
              {relatedProjects.map((relProject) => (
                <ProjectCard key={relProject.id} project={relProject} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
