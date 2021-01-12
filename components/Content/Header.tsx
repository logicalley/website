import React from 'react';
import Link from 'next/link';

import styles from '../TrackDetail/styles.module.css';


const ContentHeader: React.FC = () => {
  return (
    <header className={styles.trackHeaderContainer}>
      <Link href="/">
        <a className={styles.platformLink}>Home</a>
      </Link>
    </header>
  );
};

export default ContentHeader;
