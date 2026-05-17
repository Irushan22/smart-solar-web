'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { MessagePage, messagePageStyles as styles } from '@/components/MessagePage/MessagePage';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <MessagePage
      eyebrow="500 — Server Error"
      title="Something went wrong"
      subtitle="An unexpected error occurred on our end. You can try again, or head back to the homepage."
    >
      <button type="button" onClick={reset} className={styles.primaryBtn}>
        Try Again
      </button>
      <Link href="/" className={styles.secondaryBtn}>
        Back to Home
      </Link>
    </MessagePage>
  );
}
