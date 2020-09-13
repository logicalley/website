import React from 'react';
import { NextRouter, useRouter } from 'next/router';

// components
import Nav from '../Nav';
import AnnieLogo from '../AnnieLogo';

import styles from './styles.module.css';


const Header: React.FC = () => {
  const route: NextRouter = useRouter();
  const isHomePage = route.pathname === '/';

  return (
    <header className={styles.headerContainer}>
      <section className={styles.logo}>
        {isHomePage ? null : <AnnieLogo />}
      </section>

      <Nav isHomePage={isHomePage} />
    </header>
  )
};

export default Header;
