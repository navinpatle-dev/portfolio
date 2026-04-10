"use client";
import { portfolioData } from "@/data/portfolio";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Technical Skills</h2>
      <div className={styles.grid}>
        {portfolioData.skills.map((skill, index) => (
          <div key={index} className={styles.skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}