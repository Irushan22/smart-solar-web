'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './CookieBanner.module.css';

const STORAGE_KEY = 'cookie-consent';

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    window.localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    window.localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className={styles.content}>
        <svg className={styles.icon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21.598 11.064a1.006 1.006 0 0 0-.854-.873 4.943 4.943 0 0 1-4.476-5.343 1 1 0 0 0-1.219-1.055 4.952 4.952 0 0 1-4.66-1.621 1 1 0 0 0-1.487-.022A10 10 0 1 0 21.598 11.064z" />
          <circle cx="12" cy="12" r="0.5" fill="currentColor" />
          <circle cx="8" cy="14" r="0.5" fill="currentColor" />
          <circle cx="15" cy="9" r="0.5" fill="currentColor" />
          <circle cx="16" cy="16" r="0.5" fill="currentColor" />
        </svg>
        <p className={styles.text}>
          We use cookies to improve your experience and analyse traffic. Read our{' '}
          <Link href="/cookie-policy" className={styles.link}>cookie policy</Link>.
        </p>
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={handleAccept} className={styles.acceptBtn}>Accept all</button>
        <button type="button" onClick={handleDecline} className={styles.declineBtn}>Decline</button>
      </div>
    </div>
  );
};
