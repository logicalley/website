import React from 'react';
import Link from 'next/link';

import styles from './styles.module.css';

import type { TrackHeaderProps } from '../..';


const TrackHeader: React.FC<TrackHeaderProps> = ({ title }: TrackHeaderProps) => {
  return (
    <header className={styles.trackHeaderContainer}>
      <Link href="/">
        <a className={styles.platformLink}>Home</a>
      </Link>
    </header>
  );
};

export default TrackHeader;
