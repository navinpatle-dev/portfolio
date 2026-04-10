"use client";
import { portfolioData } from "@/data/portfolio";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <h2>Professional Experience</h2>
      <div className={styles.timeline}>
        {portfolioData.experience.map((exp, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.date}>
              {exp.startDate} - {exp.endDate}
            </div>
            <h3 className={styles.role}>{exp.role}</h3>
            <p className={styles.company}>{exp.company} | {exp.location}</p>
            <p className={styles.description}>{exp.description}</p>
            <div className={styles.techs}>
              {exp.technologies.map((tech, i) => (
                <span key={i} className={styles.tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}