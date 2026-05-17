'use client';

import { useId, useState } from 'react';
import styles from './Newsletter.module.css';

type Status = 'idle' | 'sending' | 'success' | 'error';

export const Newsletter = () => {
  const inputId = useId();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT;

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ email }),
        });
        if (!res.ok) throw new Error(`Newsletter signup failed: ${res.status}`);
      } else {
        await new Promise((r) => setTimeout(r, 800));
      }
      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <form className={styles.wrap} onSubmit={handleSubmit} noValidate>
      <label htmlFor={inputId} className={styles.label}>Newsletter</label>
      <p className={styles.helper}>Solar tips, project case studies and offers — once a month, no spam.</p>
      <div className={styles.row}>
        <input
          id={inputId}
          type="email"
          className={styles.input}
          placeholder="you@example.com"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
          aria-invalid={status === 'error'}
          required
        />
        <button type="submit" className={styles.button} disabled={status === 'sending'}>
          {status === 'sending' ? 'Joining…' : 'Subscribe'}
        </button>
      </div>
      {status === 'success' && (
        <span className={`${styles.status} ${styles.statusSuccess}`}>Thanks — check your inbox to confirm.</span>
      )}
      {status === 'error' && (
        <span className={`${styles.status} ${styles.statusError}`}>Please enter a valid email.</span>
      )}
    </form>
  );
};
