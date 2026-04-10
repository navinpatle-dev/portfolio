"use client";
import { portfolioData } from "@/data/portfolio";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.greeting}>Hello, I&apos;m</p>
          <h1 className={styles.name}>{portfolioData.name}</h1>
          <p className={styles.title}>{portfolioData.title}</p>
          <p className={styles.tagline}>{portfolioData.tagline}</p>
          
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.filename}>main.py</span>
            </div>
            <pre className={styles.code}>
{`class ${portfolioData.name.split(' ')[0].replace(/[^a-zA-Z]/g, '')}:
    def __init__(self):
        self.role = "GenAI Specialist"
        self.skills = ${JSON.stringify(portfolioData.skills.slice(0, 5))}
    
    def deploy(self):
        print("Architecting AI Solutions... 🚀")

me = ${portfolioData.name.split(' ')[0].replace(/[^a-zA-Z]/g, '')}()
me.deploy()`}
            </pre>
          </div>
          
          <div className={styles.cta}>
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            <a href="#projects" className="btn btn-outline" style={{marginLeft: '16px'}}>View Projects</a>
          </div>
        </div>
        
        <div className={styles.imageContainer}>
          <Image 
            src="/profile.jpg" 
            alt={portfolioData.name} 
            width={400} 
            height={400} 
            className={styles.profileImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}