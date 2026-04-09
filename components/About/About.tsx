import Image from 'next/image';
import styles from './About.module.css';

export const About = () => {
  return (
    <section id="about" className={styles.about}>
      {/* Subtle background pattern */}
      <div className={styles.bgPattern}></div>

      <div className={styles.container}>
        <div className={styles.layout}>
          {/* ── Left: Image with floating stats ── */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src="/smart-solar-team-sri-lanka.png"
                alt="Smart Solar team installing solar panels"
                fill
                className={styles.image}
              />
              {/* Green accent corner */}
              <div className={styles.imageAccent}></div>
            </div>

            {/* Floating experience badge */}
            <div className={styles.experienceBadge}>
              <span className={styles.badgeNumber}>8+</span>
              <span className={styles.badgeLabel}>Years of<br />Experience</span>
            </div>

            {/* Floating project count */}
          </div>

          {/* ── Right: Content ── */}
          <div className={styles.contentColumn}>
            <span className={styles.subtitle}>WHO WE ARE</span>
            <h2 className={styles.title}>
              Powering <span className={styles.highlight}>Sri Lanka</span> with Smart Solar Energy
            </h2>
            <p className={styles.description}>
              At Smart Solar, we believe going solar should be simple, affordable, and reliable for every home and business in Sri Lanka. With over 8 years of industry experience, our certified team delivers high-quality solar solutions designed to match your exact energy needs.
            </p>
            <p className={styles.description}>
             We don’t just install solar systems we help you reduce your electricity bills, gain energy independence, and invest in a smarter future. From consultation to installation and after-sales support, we handle everything for you.
            </p>

            {/* Feature highlights */}
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.featureTitle}>Premium Tier-1 Equipment</h4>
                  <p className={styles.featureText}>We only use top-grade solar panels and inverters for maximum performance.</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.featureTitle}>25-Year Warranty & Reliable Support</h4>
                  <p className={styles.featureText}>Enjoy long-term peace of mind with strong warranties and ongoing technical support you can depend on.</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.featureTitle}>1MW+ Clean Energy Installed</h4>
                  <p className={styles.featureText}>Trusted by 120+ customers across residential and commercial projects.</p>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>120+</span>
                <span className={styles.statLabel}>Happy Customers</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1MW+</span>
                <span className={styles.statLabel}>Energy Installed</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
