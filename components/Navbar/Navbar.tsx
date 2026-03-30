'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, linkName: string) => {
    setIsMobileMenuOpen(false);
    // If it's the home link, we can just scroll to top
    if (linkName === 'home') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveLink(linkName);
      return;
    }
    
    // For other links, find the element and scroll to it
    e.preventDefault();
    setActiveLink(linkName);
    
    const targetId = linkName;
    const element = document.getElementById(targetId);
    
    if (element) {
      // Get the navbar height to offset the scroll
      const navbarHeight = 114; // 80px nav + 34px topbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ''}`}>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <div className={styles.contactInfo}>
            <span className={styles.contactItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
               076 828 3962
            </span>
            <span className={styles.contactItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              info@smartsolar.lk
            </span>
          </div>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/share/1L7rppR49U/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
             <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
             <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="YouTube">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <Link href="/" className={styles.logoContainer}>
          <Image src="/logo_new2.png" alt="Smart Solar Logo" width={160} height={48} className={styles.logoImage} priority />
          {/* <Image src="/logo2.png" alt="Logo 2" width={160} height={48} className={styles.logoImage} priority /> */}
        </Link>
        <div className={styles.rightContent}>
          <div className={styles.navLinks}>
            <Link 
              href="/" 
              className={`${styles.link} ${activeLink === 'home' ? styles.active : ''}`}
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Home
            </Link>
              <Link 
              href="#about" 
              className={`${styles.link} ${activeLink === 'about' ? styles.active : ''}`}
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </Link>
            <Link 
              href="#services" 
              className={`${styles.link} ${activeLink === 'services' ? styles.active : ''}`}
              onClick={(e) => handleNavClick(e, 'services')}
            >
              Services
            </Link>
            <Link 
              href="#portfolio" 
              className={`${styles.link} ${activeLink === 'portfolio' ? styles.active : ''}`}
              onClick={(e) => handleNavClick(e, 'portfolio')}
            >
              Portfolio
            </Link>
            <Link 
              href="#testimonials" 
              className={`${styles.link} ${activeLink === 'testimonials' ? styles.active : ''}`}
              onClick={(e) => handleNavClick(e, 'testimonials')}
            >
              Testimonials
            </Link>
          </div>
          <div className={styles.ctaContainer}>
            <Link 
              href="#contact" 
              className={styles.ctaButton}
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </Link>
          </div>
          <button className={styles.hamburgerBtn} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.mobileOverlayOpen : ''}`}>
        <Link href="/" className={`${styles.mobileLink} ${activeLink === 'home' ? styles.active : ''}`} onClick={(e) => handleNavClick(e, 'home')}>Home</Link>
        <Link href="#about" className={`${styles.mobileLink} ${activeLink === 'about' ? styles.active : ''}`} onClick={(e) => handleNavClick(e, 'about')}>About</Link>
        <Link href="#services" className={`${styles.mobileLink} ${activeLink === 'services' ? styles.active : ''}`} onClick={(e) => handleNavClick(e, 'services')}>Services</Link>
        <Link href="#portfolio" className={`${styles.mobileLink} ${activeLink === 'portfolio' ? styles.active : ''}`} onClick={(e) => handleNavClick(e, 'portfolio')}>Portfolio</Link>
        <Link href="#testimonials" className={`${styles.mobileLink} ${activeLink === 'testimonials' ? styles.active : ''}`} onClick={(e) => handleNavClick(e, 'testimonials')}>Testimonials</Link>
        <div className={styles.mobileCtaContainer}>
          <Link href="#contact" className={styles.ctaButton} onClick={(e) => handleNavClick(e, 'contact')}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};
