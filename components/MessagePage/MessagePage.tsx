import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';
import styles from './MessagePage.module.css';

interface MessagePageProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  showFooter?: boolean;
}

export const MessagePage = ({ eyebrow, title, subtitle, children, showFooter = true }: MessagePageProps) => {
  return (
    <div className={styles.page}>
      <Navbar />

      <section className={styles.main}>
        <div className={styles.container}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {children && <div className={styles.actions}>{children}</div>}
        </div>
      </section>

      {showFooter && <Footer />}
    </div>
  );
};

export { styles as messagePageStyles };
