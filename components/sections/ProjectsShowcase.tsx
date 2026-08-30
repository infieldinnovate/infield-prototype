// components/ProjectsShowcase/ProjectsShowcase.tsx

"use client";

import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import styles from "./ProjectsShowcase.module.scss";
import { SectionHeading } from "../ui/SectionHeading";
import ProjectCard from "../cards/ProjectCard";
import { type Project } from "@/data/projectStats";
import ProjectModal from "@/app/resources/projects/ProjectModal";

interface ProjectsShowcaseProps {
  projects: Project[];
}

const ProjectsShowcase = ({ projects }: ProjectsShowcaseProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Proven Results"
          title="Real projects. Real outcomes."
          description="Every installation is designed around a specific challenge. Here is what that looks like in practice."
        />

        <AnimatePresence mode="wait">
          <motion.div
            className={styles.projectsGrid}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            {projects.map((project) => (
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
          <Link href="/resources/projects" className={styles.viewAllButton}>
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
