import React from 'react';
import Link from 'next/link';

import styles from './styles.module.css';

import type { TrackHeaderProps } from '../..';


const TrackHeader: React.FC<TrackHeaderProps> = ({ title }: TrackHeaderProps) => {
  return (
    <header className={styles.trackHeaderContainer}>
      <div className={styles.searchInfo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          fill="none"
          viewBox="0 0 25 24"
        >
          <path
            fill="#A6ABB7"
            fillOpacity="0.7"
            d="M16.19 14h-.79l-.28-.27a6.471 6.471 0 001.57-4.23 6.5 6.5 0 10-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L21.18 19l-4.99-5zm-6 0c-2.49 0-4.5-2.01-4.5-4.5S7.7 5 10.19 5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"
          ></path>
        </svg>
        <span>You searched for <span className="bold">"{title}"</span></span>
      </div>

      <Link href="/">
        <a className={styles.platformLink}>Home</a>
      </Link>
    </header>
  );
};

export default TrackHeader;
