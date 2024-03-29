import React from 'react';

import styles from '../styles.module.css';


const CloseIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className={styles.closeIcon} viewBox="0 0 40 40">
    <path transform="translate(6, 7.674)" d="M23 20.168l-8.185-8.187L23 3.807 20.168 1l-8.182 8.179L3.81 1 1 3.81l8.186 8.196L1 20.19 3.81 23l8.203-8.192L20.193 23z"/>
  </svg>
);

export default CloseIcon;
