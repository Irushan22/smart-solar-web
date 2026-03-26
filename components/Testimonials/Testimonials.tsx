'use client';

import { useState, useCallback } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote:
      'Smart Solar transformed our home. The installation was seamless and our electricity bill dropped by 85% in the very first month. Couldn\u0027t be happier with the results!',
    name: 'Sarah Mitchell',
    role: 'Homeowner, California',
    initials: 'SM',
    color: '#73b042',
    rating: 5,
  },
  {
    quote:
      'As a business owner, ROI matters most. Smart Solar delivered a 2-year payback period on our commercial installation. Their team was professional from start to finish.',
    name: 'David Chen',
    role: 'CEO, TechBridge Inc.',
    initials: 'DC',
    color: '#152e52',
    rating: 5,
  },
  {
    quote:
      'The monitoring system is incredible — I can track every watt generated in real-time. The 25-year warranty gives us complete peace of mind for the long term.',
    name: 'Amanda Foster',
    role: 'Property Manager',
    initials: 'AF',
    color: '#4a9630',
    rating: 5,
  },
  {
    quote:
      'We installed a 15kW system for our restaurant chain. Energy costs dropped by 70% across all locations. Smart Solar made the whole process effortless.',
    name: 'Michael Roberts',
    role: 'Owner, Roberts Dining Group',
    initials: 'MR',
    color: '#1E3E62',
    rating: 5,
  },
  {
    quote:
      'From the initial consultation to the final panel installation, everything was handled with amazing attention to detail. The team even helped with the government rebate paperwork!',
    name: 'Jessica Wong',
    role: 'Homeowner, New York',
    initials: 'JW',
    color: '#73b042',
    rating: 5,
  },
  {
    quote:
      'Our warehouse now runs entirely on solar. The ground-mounted system was designed perfectly for our property. We are saving over $3,000 per month on energy costs.',
    name: 'Robert Anderson',
    role: 'Operations Director',
    initials: 'RA',
    color: '#152e52',
    rating: 5,
  },
];

const ITEMS_PER_SLIDE = 3;
const totalSlides = Math.ceil(testimonials.length / ITEMS_PER_SLIDE);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, []);

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.bgGlow}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>TESTIMONIALS</span>
          <h2 className={styles.title}>
            What Our <span className={styles.highlight}>Clients Say</span>
          </h2>
          <p className={styles.headerDescription}>
            Don&apos;t just take our word for it — hear from homeowners and businesses
            who made the switch to solar with us.
          </p>
        </div>

        {/* Carousel */}
        <div className={styles.carousel}>
          {/* Nav Arrows */}
          <button
            className={`${styles.navArrow} ${styles.navArrowLeft}`}
            onClick={goPrev}
            aria-label="Previous testimonials"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            className={`${styles.navArrow} ${styles.navArrowRight}`}
            onClick={goNext}
            aria-label="Next testimonials"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className={styles.carouselTrack}>
            <div
              className={styles.carouselSlider}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className={styles.slide}>
                  {testimonials
                    .slice(
                      slideIndex * ITEMS_PER_SLIDE,
                      slideIndex * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
                    )
                    .map((t, i) => (
                      <div key={i} className={styles.card}>
                        <div className={styles.cardAccent}></div>

                        <div className={styles.quoteIcon}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                          </svg>
                        </div>

                        <div className={styles.stars}>
                          {Array.from({ length: t.rating }).map((_, si) => (
                            <span key={si} className={styles.star}>
                              <StarIcon />
                            </span>
                          ))}
                        </div>

                        <p className={styles.quoteText}>&ldquo;{t.quote}&rdquo;</p>

                        <div className={styles.author}>
                          <div
                            className={styles.avatar}
                            style={{ backgroundColor: t.color }}
                          >
                            {t.initials}
                          </div>
                          <div className={styles.authorInfo}>
                            <span className={styles.authorName}>{t.name}</span>
                            <span className={styles.authorRole}>{t.role}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className={styles.dots}>
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${currentSlide === i ? styles.dotActive : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <div className={`${styles.statValue} ${styles.statValueGreen}`}>4.9</div>
            <div className={styles.statLabel}>Average Rating</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>10,000+</div>
            <div className={styles.statLabel}>Happy Customers</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>98%</div>
            <div className={styles.statLabel}>Would Recommend</div>
          </div>
          <div className={styles.statItem}>
            <div className={`${styles.statValue} ${styles.statValueGreen}`}>15+</div>
            <div className={styles.statLabel}>Years of Trust</div>
          </div>
        </div>
      </div>
    </section>
  );
};
