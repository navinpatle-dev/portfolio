"use client";
import { portfolioData } from "@/data/portfolio";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className={styles.education}>
      <h2>Education</h2>
      <div className={styles.card}>
        <h3 className={styles.degree}>{portfolioData.education.degree}</h3>
        <p className={styles.institution}>{portfolioData.education.institution}</p>
        <p className={styles.year}>Year of Pass: {portfolioData.education.year}</p>
      </div>
      <div className={styles.certifications}>
        <h3>Certifications</h3>
        <div className={styles.certs}>
          {portfolioData.certifications.map((cert, index) => (
            <span key={index} className={styles.cert}>{cert}</span>
          ))}
        </div>
      </div>
    </section>
  );
}