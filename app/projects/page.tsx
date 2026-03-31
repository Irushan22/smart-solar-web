'use client';

import Link from 'next/link';
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';
import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import styles from './Projects.module.css';
import { allProjects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className={styles.projectsPage}>
        {/* Decorative backgrounds */}
        <div className={styles.bgDot}></div>
        <div className={styles.bgGlow}></div>

        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <span className={styles.subtitle}>COMPLETE PORTFOLIO</span>
            <h1 className={styles.title}>
              Our Global <span className={styles.highlight}>Impact</span>
            </h1>
            <p className={styles.description}>
              Explore 15 of our most groundbreaking installations worldwide. Whether it&apos;s a remote cabin or a gigantic industrial plant, we bring the power of the sun to every roof.
            </p>
          </div>

          {/* Grid Layout for all 15 Items */}
          <div className={styles.grid}>
            {allProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
