'use client';

import Image from 'next/image';
import styles from './Brands.module.css';

const brands = [
  { name: 'Huawei', logo: '/brands/huwawei.jpeg' },
  { name: 'Jinko Solar', logo: '/brands/jinko.svg' },
  { name: 'LONGi', logo: '/brands/longi.svg' },
  { name: 'Growatt', logo: '/brands/growatt.png' },
  { name: 'Solis', logo: '/brands/solis.png' },
  { name: 'Dyness', logo: '/brands/dyness.png' },
];

export const Brands = () => {
  // Duplicate the brands array for seamless infinite scroll
  const duplicated = [...brands, ...brands];

  return (
    <section id="brands" className={styles.brands}>
      <div className={styles.bgGlow}></div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.subtitle}>OUR PARTNERS</span>
          <h2 className={styles.title}>
            Trusted <span className={styles.highlight}>Brands</span> We Install
          </h2>
          <p className={styles.headerDescription}>
            We partner with the world&apos;s leading solar equipment manufacturers
            to deliver premium quality and long-lasting performance.
          </p>
        </div>

        {/* Auto-scrolling Carousel */}
        <div className={styles.carouselWrapper}>
          {/* Fade edges */}
          <div className={styles.fadeMaskLeft}></div>
          <div className={styles.fadeMaskRight}></div>

          <div className={styles.carouselTrack}>
            {duplicated.map((brand, index) => (
              <div key={`${brand.name}-${index}`} className={styles.brandCard}>
                <div className={styles.logoWrapper}>
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={140}
                    height={70}
                    className={styles.brandLogo}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <span className={styles.brandName}>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
