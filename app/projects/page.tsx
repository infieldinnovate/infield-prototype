// app\projects\page.tsx

"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  MapPin,
  Sun,
  Droplet,
  Sprout,
  Smile,
  Star,
  Phone,
  Calendar,
  Mail,
  Filter,
} from "lucide-react";
import { countiesServed } from "@/data/impactStats";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { SERVICE_CATEGORIES, type ServiceSlug } from "@/data/services";
import { projects, type Project } from "@/data/projectStats";
import ProjectModal from "./ProjectModal";
import ProjectMap from "../../components/ui/ProjectMap";
import styles from "./page.module.scss";
import ProjectCard from "@/components/cards/ProjectCard";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

type FilterCategory = "All Projects" | ServiceSlug;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] =
    useState<FilterCategory>("All Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = useMemo(
    () => projects.filter((p) => p.featured),
    [],
  );

  const filterCategories: FilterCategory[] = [
    "All Projects",
    ...SERVICE_CATEGORIES.map((category) => category.slug),
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Projects") return projects;

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <ImageWithFallback
          src="/projects/3467b787b566bu.jpg"
          alt="Solar installation"
          className={styles.heroBg}
          width={1280}
          height={640}
        />
        <div className={styles.heroContent}>
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Projects" }]}
            theme='dark'
          />
          <h1 className={styles.heroTitle}>Our Projects</h1>
          <p className={styles.heroSubtitle}>
            Explore our completed solar, borehole, irrigation, plumbing, and
            electrical projects across Kenya.
          </p>
          <AnimatedStats theme='light' />
        </div>
      </section>

      {/* Project Filters */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>
              <Filter size={14} />
              Browse by Service
            </span>
            <h2 className={styles.sectionTitle}>Filter Our Projects</h2>
            <p className={styles.sectionDescription}>
              Find projects by the type of service delivered. Select a category
              to narrow down the results.
            </p>
          </div>

          <div className={styles.filters}>
            {filterCategories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${
                  activeFilter === cat ? styles.filterBtnActive : ""
                }`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Projects */}
          {activeFilter === "All Projects" && featuredProjects.length > 0 && (
            <div style={{ marginBottom: "4rem" }}>
              <div
                className={styles.sectionHeader}
                style={{ marginBottom: "2rem" }}
              >
                <span className={styles.sectionLabel}>
                  <Star size={14} />
                  Flagship Work
                </span>
                <h2 className={styles.sectionTitle}>Featured Projects</h2>
              </div>
              <div className={styles.featuredGrid}>
                {featuredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Project Grid */}
          {filteredProjects.length > 0 ? (
            <>
              <div
                className={styles.sectionHeader}
                style={{
                  marginBottom: "2rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid rgb(0, 0, 0, 0.1)",
                }}
              >
                <h2 className={styles.sectionTitle}>
                  {activeFilter === "All Projects"
                    ? "All Projects"
                    : activeFilter}
                </h2>
              </div>
              <div className={styles.grid}>
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className={styles.empty}>
              <div className={styles.emptyTitle}>No projects found</div>
              <p>Try selecting a different service category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Project Impact</span>
            <h2 className={styles.sectionTitle}>Our Impact in Numbers</h2>
            <p className={styles.sectionDescription}>
              Measurable outcomes from a decade of delivering water and energy
              solutions across Kenya.
            </p>
          </div>

          <div className={styles.statsGrid}>
            <AnimatedStats />
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>
              <MapPin size={14} />
              Our Reach
            </span>
            <h2 className={styles.sectionTitle}>Projects Across Kenya</h2>
            <p className={styles.sectionDescription}>
              We have delivered projects across {countiesServed.length} counties
              in Kenya. Hover over the pins to see where we have worked.
            </p>
          </div>
          <ProjectMap />
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
