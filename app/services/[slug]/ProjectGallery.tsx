"use client";

import { useState } from "react";
import ProjectCard from "@/components/cards/ProjectCard";
import ProjectModal from "@/app/projects/ProjectModal";
import { Project } from "@/data/projectStats";
import styles from "./[slug].module.scss";

interface Props {
  projects: Project[];
}

export default function ProjectGallery({ projects }: Props) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
