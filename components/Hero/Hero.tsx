'use client';

import styles from './Hero.module.css';
import { siteConfig } from '@/site.config';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div
        className={styles.bgImage}
        style={{ backgroundImage: `url("${siteConfig.hero.backgroundImage}")` }}
      />
      <div className={styles.bgOverlay}></div>

      <div className={styles.particles}>
        <div className={styles.particle} style={{ left: '15%', animationDelay: '0s' }}></div>
        <div className={styles.particle} style={{ left: '35%', animationDelay: '2s' }}></div>
        <div className={styles.particle} style={{ left: '55%', animationDelay: '4s' }}></div>
        <div className={styles.particle} style={{ left: '75%', animationDelay: '1s' }}></div>
        <div className={styles.particle} style={{ left: '90%', animationDelay: '3s' }}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {siteConfig.hero.titleLine1}
            <br />
            {siteConfig.hero.titleLine2Prefix}{' '}
            <span className={styles.gradientText}>{siteConfig.hero.titleLine2Highlight}</span>
          </h1>

          <p className={styles.subtitle}>{siteConfig.hero.subtitle}</p>
        </div>

        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{siteConfig.stats.averageRating}</span>
            <span className={styles.statLabel}>Average Rating</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{siteConfig.stats.happyCustomers}</span>
            <span className={styles.statLabel}>Happy Customers</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{siteConfig.stats.wouldRecommend}</span>
            <span className={styles.statLabel}>Would Recommend</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{siteConfig.stats.yearsOfTrust}</span>
            <span className={styles.statLabel}>Years of Trust</span>
          </div>
        </div>
      </div>
    </section>
  );
};
