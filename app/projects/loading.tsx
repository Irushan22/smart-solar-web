import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';
import styles from './Projects.module.css';

export default function ProjectsLoading() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className={styles.projectsPage}>
        <div className={styles.bgDot}></div>
        <div className={styles.bgGlow}></div>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className="skeleton" style={{ height: 56, width: '60%', margin: '0 auto 1rem', maxWidth: 520 }} />
            <div className="skeleton" style={{ height: 18, width: '80%', margin: '0 auto', maxWidth: 640 }} />
          </div>
          <div className={styles.grid}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="skeleton skeletonCard" style={{ height: 450, borderRadius: '1.5rem' }} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
