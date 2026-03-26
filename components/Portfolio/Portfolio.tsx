'use client';

import { useState } from 'react';
import styles from './Portfolio.module.css';

type Category = 'all' | 'residential' | 'commercial' | 'industrial';

interface Project {
  image: string;
  title: string;
  location: string;
  category: Category;
  description: string;
  stats: { value: string; label: string }[];
}

const projects: Project[] = [
  {
    image: '/portfolio-1.png',
    title: 'Luxury Villa Installation',
    location: 'Malibu, California',
    category: 'residential',
    description:
      'Complete 45kW solar system with integrated battery storage for this premium hillside residence. Achieved 95% energy independence.',
    stats: [
      { value: '45kW', label: 'System Size' },
      { value: '95%', label: 'Energy Offset' },
      { value: '$280k', label: 'Savings / 25yr' },
    ],
  },
  {
    image: '/portfolio-2.png',
    title: 'Distribution Center',
    location: 'New Jersey, USA',
    category: 'commercial',
    description:
      'Massive 2.4MW rooftop installation on a 180,000 sq ft distribution warehouse. Powering daily operations with clean energy.',
    stats: [
      { value: '2.4MW', label: 'System Size' },
      { value: '3,200', label: 'Panels' },
      { value: '€1.8M', label: 'Savings / 25yr' },
    ],
  },
  {
    image: '/portfolio-3.png',
    title: 'Mediterranean Estate',
    location: 'French Riviera',
    category: 'residential',
    description:
      'Seamless integration of 30kW solar array on a heritage villa, preserving architectural aesthetics while maximizing output.',
    stats: [
      { value: '30kW', label: 'System Size' },
      { value: '100%', label: 'Energy Offset' },
      { value: '€180k', label: 'Savings / 25yr' },
    ],
  },
  {
    image: '/portfolio-4.png',
    title: 'Mountain Solar Farm',
    location: 'Canterbury, New Zealand',
    category: 'industrial',
    description:
      'Utility-scale 15MW ground-mounted solar farm spanning 75 acres, supplying clean energy to over 4,000 households.',
    stats: [
      { value: '15MW', label: 'Capacity' },
      { value: '4,000+', label: 'Homes Powered' },
      { value: '75', label: 'Acres' },
    ],
  },
  {
    image: '/portfolio-5.png',
    title: 'Urban Office Complex',
    location: 'San Francisco, USA',
    category: 'commercial',
    description:
      'Multi-rooftop 800kW installation across a downtown commercial complex, achieving LEED Platinum certification.',
    stats: [
      { value: '800kW', label: 'System Size' },
      { value: 'LEED', label: 'Platinum' },
      { value: '$950k', label: 'Savings / 25yr' },
    ],
  },
  {
    image: '/portfolio-6.png',
    title: 'Heritage Farmstead',
    location: 'Pennsylvania, USA',
    category: 'residential',
    description:
      'Solar-powered modern farmhouse with 22kW system and full battery backup, blending sustainable tech with rural charm.',
    stats: [
      { value: '22kW', label: 'System Size' },
      { value: '100%', label: 'Off-Grid' },
      { value: '$120k', label: 'Savings / 25yr' },
    ],
  },
];

const filters: { label: string; value: Category }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Residential', value: 'residential' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Industrial', value: 'industrial' },
];

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
            Explore our portfolio of completed solar installations — from luxury
            residences to utility-scale solar farms across the globe.
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
            <div
              key={`${project.title}-${index}`}
              className={styles.card}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
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
                  <a className={styles.overlayLink}>
                    View Case Study
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
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCta}>
          <button className={styles.ctaButton}>
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
          </button>
        </div>
      </div>
    </section>
  );
};
