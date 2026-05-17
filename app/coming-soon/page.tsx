import Link from 'next/link';
import { MessagePage, messagePageStyles as styles } from '@/components/MessagePage/MessagePage';

export const metadata = {
  title: 'Coming Soon',
  description: 'This page is currently under construction. Check back soon.',
};

export default function ComingSoon() {
  return (
    <MessagePage
      eyebrow="Under Construction"
      title="Coming soon"
      subtitle="We're working on something great. Check back shortly — or get in touch and we'll let you know the moment it's live."
    >
      <Link href="/#contact" className={styles.primaryBtn}>
        Notify Me
      </Link>
      <Link href="/" className={styles.secondaryBtn}>
        Back to Home
      </Link>
    </MessagePage>
  );
}
