import React from 'react';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';

// components
import Patreon from '../Patreon';

import styles from './styles.module.css';

import type { NavProps } from '../..';


const Nav: React.FC<NavProps> = (props: NavProps) => {
  const { isHomePage } = props;

  const primaryRoute = {
    href: isHomePage ? '/faq' : '/',
    text: isHomePage ? 'FAQs' : 'Home'
  }

  return (
    <nav className={styles.nav}>
      <Link href={primaryRoute.href} className={styles.headerNav}>

        {primaryRoute.text}

      </Link>

      <Link href="/help" className={styles.headerNav}>
        Contact
      </Link>

      {/* <Patreon /> */}
    </nav>
  );
}

export default Nav;
