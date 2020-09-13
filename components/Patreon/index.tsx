import React from 'react';

import styles from './styles.module.css';


const Patreon: React.FC = () => {
  const patreonUrl: string = 'https://www.patreon.com/anniemusic';
  const mainText: string = 'Support Annie';
  const remainingText: string = ' on Patreon';
  const patreonLinkProps = {
    href: patreonUrl,
    className: styles.patreonLink,
    target: '_blank',
    rel: 'noopener'
  }

  return (
    <a {...patreonLinkProps}>
      <span>{mainText}</span>
      <span className={styles.remText}>{remainingText}</span>
    </a>
  );
};

export default Patreon;
