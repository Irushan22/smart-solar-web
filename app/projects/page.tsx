'use client';

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
        <div className={styles.bgDot}></div>
        <div className={styles.bgGlow}></div>

        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              Recent <span className={styles.highlight}>Projects</span>
            </h1>
            <p className={styles.description}>
              Explore our residential and commercial solar installations. From rooftop systems to large-scale commercial setups, we bring the power of the sun to every roof.
            </p>
          </div>

          <div className={styles.grid}>
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
