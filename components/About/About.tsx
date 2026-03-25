import Image from 'next/image';
import styles from './About.module.css';

export const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>WHO WE ARE</span>
          <h2 className={styles.title}>
            Powering a <span className={styles.highlight}>Sustainable Future</span>
          </h2>
        </div>

        <div className={styles.content}>
          <div className={styles.cardsColumn}>
            <div className={styles.cardGrid}>
              
              <div className={`${styles.infoCard} ${styles.cardGreen}`}>
                <div className={styles.cardIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h4 className={styles.cardValue}>10k+</h4>
                <p className={styles.cardLabel}>Happy Customers</p>
              </div>

              <div className={`${styles.infoCard} ${styles.cardNavy}`}>
                <div className={styles.cardIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                </div>
                <h4 className={styles.cardValue}>50MW</h4>
                <p className={styles.cardLabel}>Clean Energy Installed</p>
              </div>

              <div className={`${styles.infoCard} ${styles.cardWhite}`}>
                <div className={styles.cardIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <h4 className={styles.cardValue}>15+</h4>
                <p className={styles.cardLabel}>Years Experience</p>
              </div>

              <div className={`${styles.infoCard} ${styles.cardLightGreen}`}>
                <div className={styles.cardIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h4 className={styles.cardValue}>100%</h4>
                <p className={styles.cardLabel}>Client Satisfaction</p>
              </div>

            </div>
          </div>

          <div className={styles.textColumn}>
            <p className={styles.description}>
              At Smart Solar, we believe clean energy should be accessible to everyone. With over 15 years of experience, our certified professionals deliver state-of-the-art solar solutions tailored to your specific needs.
            </p>

            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div className={styles.featureText}>
                  <h3>Premium Equipment</h3>
                  <p>We only use tier-1 solar panels and tier-1 inverters.</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <div className={styles.featureText}>
                  <h3>25-Year Warranty</h3>
                  <p>Comprehensive coverage for both products and workmanship.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
