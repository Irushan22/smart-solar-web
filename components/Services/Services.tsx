'use client';

import styles from './Services.module.css';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
        <circle cx="12" cy="4" r="0" />
        <path d="M14 2l2 2-2 2" opacity="0.6" />
        <path d="M10 2l-2 2 2 2" opacity="0.6" />
      </svg>
    ),
    title: 'Residential Solar',
    description:
      'Complete home solar panel installation with premium tier-1 panels. Reduce your electricity bills by up to 90% while increasing your property value.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="9" y1="22" x2="9" y2="2" />
        <line x1="15" y1="22" x2="15" y2="2" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="7" x2="20" y2="7" />
        <line x1="4" y1="17" x2="20" y2="17" />
      </svg>
    ),
    title: 'Commercial Solar',
    description:
      'Large-scale solar solutions for businesses and enterprises. Custom-designed systems to maximize ROI and meet your sustainability goals.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Solar Maintenance',
    description:
      'Comprehensive panel cleaning, inspection, and repair services. Keep your system performing at peak efficiency all year round.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="7" width="12" height="14" rx="2" />
        <line x1="10" y1="3" x2="10" y2="7" />
        <line x1="14" y1="3" x2="14" y2="7" />
        <line x1="10" y1="12" x2="14" y2="12" />
        <line x1="12" y1="10" x2="12" y2="14" />
      </svg>
    ),
    title: 'Energy Storage',
    description:
      'Advanced battery storage and backup power systems. Store excess solar energy and achieve true energy independence for your property.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'EV Charging',
    description:
      'Solar-powered electric vehicle charging stations for homes and businesses. Charge your EV with 100% clean, renewable energy.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="9" y1="16" x2="13" y2="16" />
      </svg>
    ),
    title: 'Consultation',
    description:
      'Free comprehensive energy audit and feasibility study. Our experts analyze your property to design the perfect solar solution.',
  },
];

export const Services = () => {
  return (
    <section id="services" className={styles.services}>
      {/* Parallax background */}
      <div className={styles.parallaxBg}></div>
      {/* Decorative background elements */}
      <div className={styles.bgGlow1}></div>
      <div className={styles.bgGlow2}></div>
      <div className={styles.gridPattern}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>WHAT WE DO</span>
          <h2 className={styles.title}>
            Our Premium <span className={styles.highlight}>Solar Services</span>
          </h2>
          <p className={styles.headerDescription}>
            End-to-end solar solutions tailored to your needs. From consultation
            to installation and beyond, we&apos;ve got you covered.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.card} ${index === 0 ? styles.active : ''}`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className={styles.cardIconWrapper}>
                <div className={styles.cardIcon}>{service.icon}</div>
                <div className={styles.cardIconGlow}></div>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <a className={styles.cardLink}>
                Learn More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <div className={styles.cardAccent}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
