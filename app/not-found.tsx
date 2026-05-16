import Link from 'next/link';
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';
import styles from './not-found.module.css';

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className={styles.page}>
      <Navbar />

      <section className={styles.main}>
        <div className={styles.container}>
          <div className={styles.errorCode}>404</div>

          <h1 className={styles.title}>
            Looks like you wandered <span className={styles.titleHighlight}>off-grid</span>
          </h1>

          <p className={styles.subtitle}>
            The page you&apos;re looking for has either moved, been renamed, or doesn&apos;t exist.
            Don&apos;t worry — let&apos;s get you back on track.
          </p>

          <div className={styles.actions}>
            <Link href="/" className={styles.primaryBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Back to Home
            </Link>
            <Link href="/projects" className={styles.secondaryBtn}>
              Browse Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
