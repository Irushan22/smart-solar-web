import Image from 'next/image';
import styles from './About.module.css';
import { siteConfig } from '@/site.config';

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const BoltIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const featureIcons = [CheckIcon, ShieldIcon, BoltIcon];

export const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.bgPattern}></div>

      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src={siteConfig.about.image}
                alt={siteConfig.about.imageAlt}
                fill
                className={styles.image}
                unoptimized
              />
              <div className={styles.imageAccent}></div>
            </div>

            <div className={styles.experienceBadge}>
              <span className={styles.badgeNumber}>{siteConfig.stats.yearsOfTrust}</span>
              <span className={styles.badgeLabel}>Years of<br />Experience</span>
            </div>
          </div>

          <div className={styles.contentColumn}>
            <span className={styles.subtitle}>{siteConfig.about.subtitle}</span>
            <h2 className={styles.title}>
              {siteConfig.about.titlePrefix}{' '}
              <span className={styles.highlight}>{siteConfig.about.titleHighlight}</span>{' '}
              {siteConfig.about.titleSuffix}
            </h2>
            {siteConfig.about.paragraphs.map((p, i) => (
              <p key={i} className={styles.description}>{p}</p>
            ))}

            <div className={styles.features}>
              {siteConfig.about.features.map((feature, i) => {
                const Icon = featureIcons[i] ?? CheckIcon;
                return (
                  <div key={i} className={styles.featureItem}>
                    <div className={styles.featureIcon}>
                      <Icon />
                    </div>
                    <div>
                      <h4 className={styles.featureTitle}>{feature.title}</h4>
                      <p className={styles.featureText}>{feature.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{siteConfig.stats.happyCustomers}</span>
                <span className={styles.statLabel}>Happy Customers</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{siteConfig.stats.energyInstalled}</span>
                <span className={styles.statLabel}>Energy Installed</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{siteConfig.stats.satisfactionRate}</span>
                <span className={styles.statLabel}>Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
