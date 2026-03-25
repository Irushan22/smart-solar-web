import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Dynamic Background Layout */}
      <div className={styles.backgroundContainer}>
        <div className={styles.glowBlob1}></div>
        <div className={styles.glowBlob2}></div>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.heroLayout}>
        {/* Left Column - Content */}
        <div className={styles.contentLeft}>
          {/* Decorative orbit rings */}
          <div className={styles.orbitContainer}>
            <div className={styles.orbitRing1}></div>
            <div className={styles.orbitRing2}></div>
          </div>



          <h1 className={styles.title}>
            Power Your Future With <br />
            <span className={styles.gradientText}>Clean Energy</span>
          </h1>
          
          <p className={styles.subtitle}>
            Transform your home into a sustainable powerhouse. High-efficiency solar panels designed for maximum performance and premium aesthetics.
          </p>
          
          <div className={styles.actions}>
            <button className={styles.primaryButton}>Start Your Journey</button>
            <button className={styles.secondaryButton}>Learn More</button>
          </div>
        </div>
        
        {/* Right Column - Image */}
        <div className={styles.contentRight}>
          <div className={styles.imageWrapper}>
            <img 
              src="/hero-bg.png" 
              alt="Solar Panels Installation" 
              className={styles.heroImage}
            />

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>25%</span>
                <span className={styles.statLabel}>Efficiency</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>10k+</span>
                <span className={styles.statLabel}>Installs</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>24/7</span>
                <span className={styles.statLabel}>Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
