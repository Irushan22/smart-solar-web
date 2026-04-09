'use client';

import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Full-screen background image */}
      <div className={styles.bgImage}></div>
      <div className={styles.bgOverlay}></div>

      {/* Animated particles */}
      <div className={styles.particles}>
        <div className={styles.particle} style={{ left: '15%', animationDelay: '0s' }}></div>
        <div className={styles.particle} style={{ left: '35%', animationDelay: '2s' }}></div>
        <div className={styles.particle} style={{ left: '55%', animationDelay: '4s' }}></div>
        <div className={styles.particle} style={{ left: '75%', animationDelay: '1s' }}></div>
        <div className={styles.particle} style={{ left: '90%', animationDelay: '3s' }}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge */}
          <div className={styles.badge}>
            
          </div>

          <h1 className={styles.title}>
            Power Your Future
            <br />
            With <span className={styles.gradientText}>Clean Energy</span>
          </h1>

          <p className={styles.subtitle}>
            {/* Transform your home into a sustainable powerhouse with premium
            solar solutions. High-efficiency panels designed for maximum
            performance and long-term savings.
             */}
             Reduce your electricity bills and enjoy reliable, long-term savings with high-performance solar systems built for Sri Lankan homes.
          </p>

        </div>

        {/* Bottom stats bar */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>4.9</span>
            <span className={styles.statLabel}>Average Rating</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>120+</span>
            <span className={styles.statLabel}>Happy Customers</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>98%</span>
            <span className={styles.statLabel}>Would Recommend</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>8+</span>
            <span className={styles.statLabel}>Years of Trust</span>
          </div>
        </div>
      </div>
    </section>
  );
};
