'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

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
              +1 234 567 8900
            </span>
            <span className={styles.contactItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              info@smartsolar.com
            </span>
          </div>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 2.8 13.5 3 12c1.4.2 2.8-.4 3.7-1.6-1.5-1.4-2.3-3.3-2-5.3 2.1 2.6 5.3 4.1 8.7 4.3.4-3.1 2.9-5.4 6-5.4 1.2 0 2.4.5 3.2 1.4.9-.2 1.8-.7 2.5-1.2-.3 1-.9 1.8-1.7 2.3.8-.1 1.6-.3 2.4-.7z"></path></svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
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
              href="#about" 
              className={`${styles.link} ${activeLink === 'about' ? styles.active : ''}`}
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className={`${styles.link} ${activeLink === 'contact' ? styles.active : ''}`}
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </Link>
          </div>
          <div className={styles.ctaContainer}>
            <button className={styles.ctaButton}>Get a Quote</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
