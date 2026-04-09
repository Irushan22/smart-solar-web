'use client';

import { useState, useCallback, useRef } from 'react';
import styles from './Testimonials.module.css';
import { allProjects } from '@/data/projects';

// Build testimonials from project data
const colors = ['#73b042', '#152e52', '#4a9630', '#1E3E62'];

const testimonials = allProjects
  .filter((p) => p.testimonial)
  .map((p, i) => ({
    quote: p.testimonial!.text,
    name: p.testimonial!.name,
    role: p.testimonial!.designation,
    initials: p.testimonial!.name
      .split(' ')
      .map((w) => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase(),
    color: colors[i % colors.length],
    rating: p.testimonial!.rating,
  }));

const ITEMS_PER_SLIDE = 3;
const totalSlides = Math.ceil(testimonials.length / ITEMS_PER_SLIDE);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// Helper to get testimonials for a given slide index (wraps around)
const getSlideTestimonials = (slideIndex: number) => {
  const wrappedIndex = ((slideIndex % totalSlides) + totalSlides) % totalSlides;
  return testimonials.slice(
    wrappedIndex * ITEMS_PER_SLIDE,
    wrappedIndex * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
  );
};

export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  }, [isTransitioning]);

  const goPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  }, [isTransitioning]);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
  }, [isTransitioning]);

  // After transition ends, silently reset position if out of real range
  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
    setCurrentSlide((prev) => {
      const wrapped = ((prev % totalSlides) + totalSlides) % totalSlides;
      if (prev !== wrapped) {
        if (sliderRef.current) {
          sliderRef.current.style.transition = 'none';
          requestAnimationFrame(() => {
            if (sliderRef.current) {
              sliderRef.current.style.transition = '';
            }
          });
        }
        return wrapped;
      }
      return prev;
    });
  }, []);

  // Render: clone of last slide + real slides + clone of first slide
  const renderSlides = [];
  for (let i = -1; i <= totalSlides; i++) {
    renderSlides.push(i);
  }

  const displayDotIndex = ((currentSlide % totalSlides) + totalSlides) % totalSlides;

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
              ref={sliderRef}
              className={styles.carouselSlider}
              style={{ transform: `translateX(-${(currentSlide + 1) * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {renderSlides.map((slideIndex) => (
                <div key={slideIndex} className={styles.slide}>
                  {getSlideTestimonials(slideIndex).map((t, i) => (
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
                className={`${styles.dot} ${displayDotIndex === i ? styles.dotActive : ''}`}
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
            <div className={styles.statValue}>120+</div>
            <div className={styles.statLabel}>Happy Customers</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>98%</div>
            <div className={styles.statLabel}>Would Recommend</div>
          </div>
          <div className={styles.statItem}>
            <div className={`${styles.statValue} ${styles.statValueGreen}`}>8+</div>
            <div className={styles.statLabel}>Years of Trust</div>
          </div>
        </div>
      </div>
    </section>
  );
};
