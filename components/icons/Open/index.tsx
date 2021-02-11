import React from 'react';

import styles from '../styles.module.css';


const OpenIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" className={styles.openIcon}>
    <path transform="translate(6, 7.674)" d="M21 13v10H0V4h12v2H2v15h17v-8h2zm3-12H13.012l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07L24 12V1z" />
  </svg>
);

export default OpenIcon;
