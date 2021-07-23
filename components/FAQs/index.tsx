import React from 'react';

import styles from './styles.module.css';
import faqs from '../../utils/faqs';

import Accordion from '../Accordion';


const FAQs: React.FC = () => {
  const twitterLink: string = 'https://twitter.com/anniemusicapp';
  const emailLink: string = 'mailto:me@anniemusic.app';
  const imageFallback: string = '/images/raw-pixel-mesh.png';

  return (
    <section className={styles.faqContainer}>
      <h1 className={styles.faqHeader}>Frequently asked questions</h1>
      <span className={styles.faqDescription}>
        A list of the most common questions asked.
        Scroll past the questions to see how to get in touch with us directly.
      </span>

      <section className={styles.faqsContentContainer}>
        <div className={styles.halfCircle} />

        <div style={{background: '#FFF'}}>
          {faqs.map((faq, index) => <Accordion key={index} {...faq} />)}
        </div>
      </section>

      <section className={styles.unansweredQuestions}>
        <h3 className={styles.unasweredQuestionsHeader}>
          Still got unanswered questions?
        </h3>
        <span>Get in touch directly if you can't find answers to your questions above.</span>

        <section className={styles.faqContactLinkGroup}>
          <a href={twitterLink} target="_blank" className={styles.faqContactLink}>
            Twitter Support
          </a>

          <a href={emailLink} target="_blank" className={styles.faqContactLink}>
            Email Support
          </a>
        </section>
        {/* <picture className={styles.faqMeshImageContainer}>
          <source srcSet="
              /images/raw-mesh.webp 1x,
              /images/raw-mesh.webp 2x" type="image/webp" />
          <img
            src={imageFallback}
            alt="image of mesh"
            className={styles.faqMeshImage}
            loading="lazy"
          />
        </picture> */}
        {/* I commented the above out because for some reason, the mesh was making the buttons
        unclickable, so until we figure out how to fix that, there's no mesh for anyone haha. */}
      </section>
    </section>
  );
};

export default FAQs;
