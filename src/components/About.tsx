"use client";
import { portfolioData } from "@/data/portfolio";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.content}>
        <p className={styles.text}>{portfolioData.about}</p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.number}>2+</span>
            <span className={styles.label}>Years Experience</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.number}>15+</span>
            <span className={styles.label}>Projects</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.number}>5+</span>
            <span className={styles.label}>Certifications</span>
          </div>
        </div>
      </div>
    </section>
  );
}