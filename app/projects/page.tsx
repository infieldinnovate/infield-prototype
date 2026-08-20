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
import { impactStats, countiesServed } from "../../data/projectStats";
import { SERVICE_CATEGORIES, type ServiceCategory } from "@/data/services";
import { projects, type Project } from "@/data/projectStats";
import ProjectModal from "./ProjectModal";
import ProjectMap from "../../components/ui/ProjectMap";
import styles from "./page.module.scss";
import ProjectCard from "@/components/cards/ProjectCard";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

type FilterCategory = "All Projects" | ServiceCategory;

const iconMap: Record<string, React.ReactNode> = {
  sun: <Sun size={28} />,
  droplet: <Droplet size={28} />,
  sprout: <Sprout size={28} />,
  smile: <Smile size={28} />,
  CalendarDays: <Calendar size={28} />,
  map: <MapPin size={28} />,
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] =
    useState<FilterCategory>("All Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Projects") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const featuredProjects = useMemo(
    () => projects.filter((p) => p.featured),
    [],
  );

  const filterCategories: FilterCategory[] = [
    "All Projects",
    ...SERVICE_CATEGORIES,
  ];

  const getCount = (cat: FilterCategory) => {
    if (cat === "All Projects") return projects.length;
    return projects.filter((p) => p.category === cat).length;
  };

  const heroStatKeys = new Set([
    "projectsCompleted",
    "yearsExperience",
    "countiesServed",
  ]);

  const projectStats = Object.fromEntries(
    impactStats.map((stat) => [stat.key, stat]),
  );

  const impactStatsGrid = impactStats.filter(
    (stat) => !heroStatKeys.has(stat.key),
  );

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
          />
          <h1 className={styles.heroTitle}>Our Projects</h1>
          <p className={styles.heroSubtitle}>
            Explore our completed solar, borehole, irrigation, plumbing, and
            electrical projects across Kenya.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>
                {projectStats.projectsCompleted.value}
              </span>
              <span className={styles.heroStatLabel}>Projects Completed</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>
                {projectStats.yearsExperience.value}
              </span>
              <span className={styles.heroStatLabel}>Years Experience</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>
                {projectStats.countiesServed.value}
              </span>
              <span className={styles.heroStatLabel}>Counties Served</span>
            </div>
          </div>
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
            {impactStatsGrid.map((stat) => (
              <div key={stat.key} className={styles.statCard}>
                <div className={styles.statIcon}>{iconMap[stat.icon]}</div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <ImageWithFallback
          src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Solar panels"
          className={styles.ctaBg}
          width={1600}
          height={800}
        />
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Have a Similar Project in Mind?</h2>
          <p className={styles.ctaText}>
            Contact Infield Innovations for professional water and energy
            solutions. Our team is ready to design, install, and maintain
            systems tailored to your needs.
          </p>
          <div className={styles.ctaButtons}>
            <Link
              href="/quote"
              className={`${styles.ctaBtn} ${styles.ctaBtnPrimary}`}
            >
              <Mail size={18} />
              Request a Quote
            </Link>

            <button className={`${styles.ctaBtn} ${styles.ctaBtnSecondary}`}>
              <Calendar size={18} />
              Book Site Visit
            </button>
            <button className={`${styles.ctaBtn} ${styles.ctaBtnSecondary}`}>
              <Phone size={18} />
              Call Us
            </button>
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
