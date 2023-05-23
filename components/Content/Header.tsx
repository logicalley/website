import React from 'react';
import Link from 'next/link';

import styles from '../TrackDetail/styles.module.css';


const ContentHeader: React.FC = () => {
  return (
    <header className={styles.trackHeaderContainer}>
      <Link href="/" className={styles.platformLink}>
        Home
      </Link>
    </header>
  );
};

export default ContentHeader;
