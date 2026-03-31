import Link from 'next/link';
import { Project } from '@/data/projects';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className={styles.card}>
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className={styles.cardImage}
        />

        {/* Badge */}
        <span className={styles.cardBadge}>
          {project.category}
        </span>

        {/* Default gradient overlay with basic info */}
        <div className={styles.cardGradient}></div>
        <div className={styles.cardInfo}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <p className={styles.cardLocation}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {project.location}
          </p>
        </div>

        {/* Glassmorphism hover overlay */}
        <div className={styles.cardOverlay}>
          <div className={styles.overlayContent}>
            <h3 className={styles.overlayTitle}>{project.title}</h3>
            <p className={styles.overlayDescription}>
              {project.description}
            </p>
            <div className={styles.overlayStats}>
              {project.stats.map((stat, si) => (
                <div key={si} className={styles.overlayStat}>
                  <span className={styles.overlayStatValue}>
                    {stat.value}
                  </span>
                  <span className={styles.overlayStatLabel}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
