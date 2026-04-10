"use client";
import { portfolioData } from "@/data/portfolio";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Top Projects</h2>
      <div className={styles.grid}>
        {portfolioData.projects.map((project, index) => (
          <a key={index} href={project.link} className={styles.card}>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.techs}>
              {project.technologies.map((tech, i) => (
                <span key={i} className={styles.tech}>{tech}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}