"use client";
import { portfolioData } from "@/data/portfolio";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>
          &copy; {currentYear} {portfolioData.name}. All rights reserved.
        </p>
        <div className={styles.socials}>
          <a href={portfolioData.linkedin} target="_blank" className={styles.social}>
            LinkedIn
          </a>
          <a href={portfolioData.github} target="_blank" className={styles.social}>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}