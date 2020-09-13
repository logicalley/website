import React from 'react';
import Head from 'next/head';

import { DeepLinkDisplayProps } from '../../index.d';
import styles from './styles.module.css';

import RightArrow from '../icons/RightArrow';


const DeepLinkDisplay: React.FC<DeepLinkDisplayProps> = (
  { code }: DeepLinkDisplayProps
) => {
  const href: string = `annie://login?code=${code}`;

  return (
    <section className={styles.deepLinkContainer}>
      <Head>
        <title>Authentication Status</title>
      </Head>
      <h1>Hello! Authentication was successful.</h1>
      <a href={href} className={styles.deepLinkBtn}>
        <span className={styles.linkText}>Open App</span>
        <RightArrow />
      </a>
    </section>
  );
};

export default DeepLinkDisplay;
