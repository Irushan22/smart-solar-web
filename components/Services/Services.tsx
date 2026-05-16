'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Services.module.css';
import { services, type Service } from '@/data/services';

export const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = (service: Service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="services" className={styles.services}>
      <div className={styles.parallaxBg}></div>
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
              key={service.title}
              className={`${styles.card} ${index === 0 ? styles.active : ''}`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className={styles.cardIconWrapper}>
                <div className={styles.cardIcon}>{service.iconPath}</div>
                <div className={styles.cardIconGlow}></div>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <button className={styles.cardLink} onClick={() => openModal(service)}>
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <div className={styles.cardAccent}></div>
            </div>
          ))}
        </div>
      </div>

      {mounted && selectedService && createPortal(
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseButton} onClick={closeModal} aria-label="Close modal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{selectedService.title}</h3>
            </div>

            <div className={styles.modalBody}>
              <p className={styles.modalDescription}>{selectedService.description}</p>

              <div className={styles.modalDetailsBox}>
                <h4 className={styles.detailsTitle}>Service Details</h4>
                <p className={styles.detailsText}>{selectedService.details}</p>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button className={styles.modalCta} onClick={closeModal}>Got it</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};
