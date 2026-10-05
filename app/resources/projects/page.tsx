// app\resources\projects\page.tsx

"use client";

import { useState, useMemo } from "react";
import { MapPin, ListFilter as Filter } from "lucide-react";
import { countiesServed } from "@/data/serviceAreas";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import {
  PROJECT_GROUPS,
  type ProjectGroup,
  projects,
  type Project,
} from "@/data/projectStats";
import ProjectModal from "./ProjectModal";
import ProjectMap from "../../../components/ui/ProjectMap";
import styles from "./page.module.scss";
import ProjectCard from "@/components/cards/ProjectCard";
import ProjectsHeroCarousel from "@/components/sections/ProjectsHeroCarousel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Dropdown, type DropdownOption } from "@/components/ui/Dropdown";

type FilterCategory = "All" | ProjectGroup;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] =
    useState<FilterCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions: DropdownOption<FilterCategory>[] = [
    { value: "All", label: "All Projects" },
    ...PROJECT_GROUPS.map((group) => ({
      value: group.slug,
      label: group.label,
    })),
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;

    return projects.filter(
      (project) => project.projectGroup === activeFilter,
    );
  }, [activeFilter]);

  return (
    <div className={styles.page}>
      <h1 className="sr-only">
        Our Projects — Engineering Installations Across Kenya
      </h1>

      {/* Breadcrumbs */}
      <div className={styles.container}>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "/resources/knowledge-centre" },
            { label: "Projects" },
          ]}
        />
      </div>

      {/* Hero Carousel */}
      <ProjectsHeroCarousel />

      {/* Project Filters */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>
              <Filter size={14} />
              Browse by Category
            </span>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <p className={styles.sectionDescription}>
              Find projects by the type of service delivered. Select a category
              to narrow down the results.
            </p>
          </div>

          <div className={styles.filterBar}>
            <Dropdown
              options={filterOptions}
              value={activeFilter}
              onChange={setActiveFilter}
              ariaLabel="Filter projects by category"
            />
          </div>

          {/* Project Grid */}
          {filteredProjects.length > 0 ? (
            <>
              <div
                className={`${styles.sectionHeader} ${styles.allProjectsHeader}`}
              />
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
            <AnimatedStats
              eyebrow="Project Impact"
              title="Our Impact in Numbers"
              description="Measurable outcomes from a decade of delivering water and energy solutions across Kenya."
            />
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
