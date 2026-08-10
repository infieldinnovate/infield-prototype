// components/ProjectsShowcase/ProjectsShowcase.tsx

"use client";

import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import styles from "./ProjectsShowcase.module.scss";
import { SectionHeading } from "../ui/SectionHeading";
import ProjectCard from "../cards/ProjectCard";
import { projects, type Project } from "@/data/projectStats";
import ProjectModal from "@/app/projects/ProjectModal";

const ProjectsShowcase = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = useMemo(
    () => projects.filter((p) => p.featured),
    [],
  );
  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Proven Results"
          title="Featured Case Studies"
          description="Real projects, real outcomes. See how we've delivered measurable results for our clients."
        />

        <AnimatePresence mode="wait">
          <motion.div
            className={styles.projectsGrid}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/projects" className={styles.viewAllButton}>
            See More Case Studies
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsShowcase;
