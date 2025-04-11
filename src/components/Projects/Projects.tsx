import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

// Define the shape of a project to match what's in projects.json
interface Project {
  title: string;
  imageSrc: string;
  description: string;
  skills: string[];
  demo: string;
  source: string;
}

export const Projects: React.FC = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {(projects as Project[]).map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
