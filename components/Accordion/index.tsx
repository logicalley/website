import React, { memo, useState } from 'react';

import styles from './styles.module.css';

import type { AccordionProps } from '../..';


const Accordion: React.FC<AccordionProps> = ({ question, answer }: AccordionProps) => {
  const [show, setShow] = useState(false);
  const toggleAccordion = () => setShow(prevState => !prevState);

  return (
    <section onClick={toggleAccordion} className={styles.accordionContainer}>
      <button className={styles.accordionButton}>{question}</button>
      <span />
      {show && <p className={styles.accordionText}>{answer}</p>}
    </section>
  )
};

export default memo(Accordion);
