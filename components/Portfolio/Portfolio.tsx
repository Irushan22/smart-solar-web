'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Portfolio.module.css';

import { Category, allProjects } from '@/data/projects';

const filters: { label: string; value: Category }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Residential', value: 'residential' },
  { label: 'Commercial', value: 'commercial' },
];

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filtered =
    activeFilter === 'all'
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  // Make sure we always show up to 5 cards for the bento layout
  const displayed = filtered.slice(0, 5);

  return (
    <section id="portfolio" className={styles.portfolio}>
      {/* Decorative backgrounds */}
      <div className={styles.bgDot}></div>
      <div className={styles.bgGlow}></div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.subtitle}>OUR WORK</span>
          <h2 className={styles.title}>
            Featured <span className={styles.highlight}>Projects</span>
          </h2>
          <p className={styles.headerDescription}>
            Explore our portfolio of completed solar installations — from
            residential rooftops to commercial-scale solar systems island-wide.
          </p>
        </div>

        {/* Filter Pills */}
        <div className={styles.filters}>
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`${styles.filterPill} ${
                activeFilter === filter.value ? styles.filterPillActive : ''
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className={styles.bentoGrid}>
          {displayed.map((project, index) => (
            <Link 
              href={`/projects/${project.id}`} 
              key={project.id} 
              className={styles.card}
            >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title || `${project.stats.find(s => s.label === 'System Size')?.value || ''} solar installation in ${project.location}, Sri Lanka`}
                  className={styles.cardImage}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />

                {/* Badge */}
                <span className={styles.cardBadge}>
                  {project.category}
                </span>

                {/* Decorative ring on first card */}
                {index === 0 && <div className={styles.cardRing}></div>}

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
                    <div className={styles.overlayLink}>
                      View More
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </div>
                </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCta}>
          <Link href="/projects" className={styles.ctaButton}>
            <span>View All Projects</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
