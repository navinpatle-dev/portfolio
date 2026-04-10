"use client";
import { portfolioData } from "@/data/portfolio";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Get in Touch</h2>
      <div className={styles.content}>
        <p className={styles.text}>
          Feel free to reach out for collaborations, opportunities, or just to say hello!
        </p>
        <div className={styles.links}>
          <a href={`mailto:${portfolioData.email}`} className={styles.link}>
            <span className={styles.icon}>📧</span>
            {portfolioData.email}
          </a>
          <a href={portfolioData.linkedin} target="_blank" className={styles.link}>
            <span className={styles.icon}>💼</span>
            LinkedIn
          </a>
          <a href={portfolioData.github} target="_blank" className={styles.link}>
            <span className={styles.icon}>🐙</span>
            GitHub
          </a>
        </div>
        <a href={`mailto:${portfolioData.email}`} className="btn btn-primary" style={{marginTop: '32px'}}>
          Send Message
        </a>
      </div>
    </section>
  );
}