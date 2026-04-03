import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* ── Brand Column ── */}
            <div className={styles.brandColumn}>
              <p className={styles.brandDescription}>
                Leading the renewable energy revolution with premium solar solutions.
                Powering homes and businesses with clean, sustainable energy since 2009.
              </p>
              <div className={styles.socialLinks}>
                <a href="https://www.facebook.com/share/1L7rppR49U/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* ── Services Column ── */}
            <div className={styles.linkColumn}>
              <span className={styles.linkColumnTitle}>Services</span>
              <a href="#services" className={styles.footerLink}>Residential Solar</a>
              <a href="#services" className={styles.footerLink}>Commercial Solar</a>
              <a href="#services" className={styles.footerLink}>Solar Maintenance</a>
              <a href="#services" className={styles.footerLink}>Energy Storage</a>
              <a href="#services" className={styles.footerLink}>EV Charging</a>
              <a href="#services" className={styles.footerLink}>Free Consultation</a>
            </div>

            {/* ── Company Column ── */}
            <div className={styles.linkColumn}>
              <span className={styles.linkColumnTitle}>Company</span>
              <a href="#about" className={styles.footerLink}>About Us</a>
              <a href="#portfolio" className={styles.footerLink}>Our Projects</a>
              <a href="#testimonials" className={styles.footerLink}>Testimonials</a>
              <a href="#calculator" className={styles.footerLink}>Solar Calculator</a>
            </div>

            {/* ── Contact + Newsletter Column ── */}
            <div className={styles.linkColumn}>
              <span className={styles.linkColumnTitle}>Contact</span>
              <div className={styles.footerContact}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>No: 125, Aluthwaththa,<br />Amunugama, Gunnapana, Kandy</span>
              </div>
              <div className={styles.footerContact}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+94768283962" style={{ color: 'inherit' }}>076 828 3962</a>
              </div>
              <div className={styles.footerContact}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:info@smartsolar.lk" style={{ color: 'inherit' }}>info@smartsolar.lk</a>
              </div>

              {/* Newsletter */}
              <div className={styles.newsletter}>
                <span className={styles.linkColumnTitle}>Newsletter</span>
                <div className={styles.newsletterInput}>
                  <input
                    type="email"
                    className={styles.newsletterField}
                    placeholder="Your email"
                  />
                  <button className={styles.newsletterBtn} aria-label="Subscribe">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className={styles.footerBottom}>
        <div className={styles.bottomContent}>
          <span className={styles.copyright}>
            &copy; {new Date().getFullYear()} Smart Solar Energy. All rights reserved.
          </span>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy" className={styles.bottomLink}>Privacy Policy</Link>
            <Link href="/terms-of-service" className={styles.bottomLink}>Terms of Service</Link>
            <Link href="/cookie-policy" className={styles.bottomLink}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
