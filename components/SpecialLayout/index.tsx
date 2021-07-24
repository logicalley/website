import React from 'react';

import styles from './styles.module.css';
import type { SpecialLayoutProps } from '../..';


const SpecialLayout: React.FC<SpecialLayoutProps> = ({ children, shouldBePadded = false }: SpecialLayoutProps) => {
  const classToUse = shouldBePadded ? styles.paddedContainer : styles.container;

  return (
    <section className={classToUse}>
      {children}
    </section>
  );
}

export default SpecialLayout;
