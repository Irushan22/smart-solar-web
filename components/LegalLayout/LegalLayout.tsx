import Link from 'next/link';
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';
import styles from './LegalLayout.module.css';

interface LegalLayoutProps {
  subtitle: string;
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export const LegalLayout = ({ subtitle, title, lastUpdated, children }: LegalLayoutProps) => {
  const updated =
    lastUpdated ??
    new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <div className={styles.page}>
        <div className={styles.bgDot}></div>
        <div className={styles.bgGlow}></div>

        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Home
          </Link>

          <div className={styles.header}>
            <span className={styles.subtitle}>{subtitle}</span>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.lastUpdated}>Last updated: {updated}</p>
          </div>

          <article className={styles.content}>{children}</article>
        </div>
      </div>

      <Footer />
    </main>
  );
};
