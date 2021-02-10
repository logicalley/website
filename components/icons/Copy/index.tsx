import React from 'react';

import styles from '../styles.module.css';


const CopyIcon: React.FC = () => (
  <svg width="92" height="93" fill="none" className={styles.copyIcon}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M66.427 88.219V77.567a3.033 3.033 0 00-6.066 0v9.355H6.066V32.65h9.328a3.033 3.033 0 000-6.066H4.769A4.774 4.774 0 000 31.353v56.866a4.774 4.774 0 004.769 4.769h56.888c2.63 0 4.77-2.14 4.77-4.77zM31.639 61.327h52.273V9.076H31.639v52.25zm56.317 8.087H27.595a4.044 4.044 0 01-4.044-4.043V5.03A4.045 4.045 0 0127.595.989h60.361A4.045 4.045 0 0192 5.032V65.37a4.044 4.044 0 01-4.044 4.043z" fill="#000" />
  </svg>
);

export default CopyIcon;
