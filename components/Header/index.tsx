import React from 'react';
import { NextRouter, useRouter } from 'next/router';

// components
import Nav from '../Nav';
import AnnieLogo from '../AnnieLogo';

import styles from './styles.module.css';


const Header: React.FC = () => {
  const router: NextRouter = useRouter();

  const isHomePage = router.pathname === '/';

  return (
    <header className={styles.headerContainer} data-testid="annie-main-header">
      <section className={styles.logo}>
        {isHomePage ? null : <AnnieLogo />}
      </section>

      <Nav isHomePage={isHomePage} />
    </header>
  )
};

export default Header;
