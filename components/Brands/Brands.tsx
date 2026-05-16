'use client';

import Image from 'next/image';
import styles from './Brands.module.css';
import { brands } from '@/data/brands';

export const Brands = () => {
  const duplicated = [...brands, ...brands];

  return (
    <section id="brands" className={styles.brands}>
      <div className={styles.bgGlow}></div>

      <div className={styles.container}>
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

        <div className={styles.carouselWrapper}>
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
                    unoptimized
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
