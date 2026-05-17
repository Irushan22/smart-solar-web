import Link from 'next/link';
import { MessagePage, messagePageStyles as styles } from '@/components/MessagePage/MessagePage';

export const metadata = {
  title: 'Thank You',
  description: 'Thanks for getting in touch. We\'ll be in contact shortly.',
};

export default function ThankYou() {
  return (
    <MessagePage
      eyebrow="Message Received"
      title="Thanks for reaching out!"
      subtitle="One of our solar consultants will be in touch within one business day. In the meantime, feel free to browse our recent installations."
    >
      <Link href="/" className={styles.primaryBtn}>
        Back to Home
      </Link>
      <Link href="/projects" className={styles.secondaryBtn}>
        Browse Projects
      </Link>
    </MessagePage>
  );
}
