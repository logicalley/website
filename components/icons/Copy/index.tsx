import React from 'react';

import styles from '../styles.module.css';


const CopyIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" className={styles.copyIcon}>
    <path transform="translate(6, 7.674)" d="M22 6v16H6V6h16zm2-2H4v20h20V4zM0 21V0h21v2H2v19H0z" />
  </svg>
);

export default CopyIcon;
