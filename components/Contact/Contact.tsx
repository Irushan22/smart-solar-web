'use client';

import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.bgGlow1}></div>
      <div className={styles.bgGlow2}></div>
      <div className={styles.gridPattern}></div>

      <div className={styles.container}>
        <div className={styles.layout}>
          {/* ── Left: Contact Info ── */}
          <div className={styles.infoColumn}>
            <div className={styles.header}>
              <span className={styles.subtitle}>GET IN TOUCH</span>
              <h2 className={styles.title}>
                Start Your <span className={styles.highlight}>Solar Journey</span>
              </h2>
              <p className={styles.headerDescription}>
                Ready to switch to clean energy? Contact us for a free consultation
                and custom solar solution tailored to your needs.
              </p>
            </div>


            <div className={styles.infoCard} style={{ animationDelay: '0.2s' }}>
              <div className={styles.infoCardIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className={styles.infoCardContent}>
                <span className={styles.infoCardTitle}>Call Us</span>
                <span className={styles.infoCardText}>
                  +1 234 567 8900<br />
                  Mon – Fri, 8am – 6pm
                </span>
              </div>
            </div>

            <div className={styles.infoCard} style={{ animationDelay: '0.3s' }}>
              <div className={styles.infoCardIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className={styles.infoCardContent}>
                <span className={styles.infoCardTitle}>Email Us</span>
                <span className={styles.infoCardText}>
                  info@smartsolar.com<br />
                  support@smartsolar.com
                </span>
              </div>
            </div>

            <div className={styles.infoCard} style={{ animationDelay: '0.4s' }}>
              <div className={styles.infoCardIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className={styles.infoCardContent}>
                <span className={styles.infoCardTitle}>Business Hours</span>
                <span className={styles.infoCardText}>
                  Monday – Friday: 8:00 AM – 6:00 PM<br />
                  Saturday: 9:00 AM – 2:00 PM
                </span>
              </div>
            </div>


          </div>

          {/* ── Right: Contact Form ── */}
          <div className={styles.formCard}>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>First Name</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    placeholder="John"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Last Name</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Email</label>
                  <input
                    type="email"
                    className={styles.formInput}
                    placeholder="john@example.com"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Phone</label>
                  <input
                    type="tel"
                    className={styles.formInput}
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Service Interested In</label>
                <select className={styles.formInput} defaultValue="">
                  <option value="" disabled>Select a service...</option>
                  <option value="residential">Residential Solar</option>
                  <option value="commercial">Commercial Solar</option>
                  <option value="maintenance">Solar Maintenance</option>
                  <option value="storage">Energy Storage</option>
                  <option value="ev">EV Charging</option>
                  <option value="consultation">Free Consultation</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Message</label>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Tell us about your project..."
                  rows={4}
                ></textarea>
              </div>

              <button type="submit" className={styles.formSubmit}>
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
