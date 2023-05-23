import React from 'react';
import Link from 'next/link';

import styles from './styles.module.css';

// components
import AnnieLogo from '../AnnieLogo';


const Footer: React.FC = () => {
  const genericUserName: string = 'anniemusicapp';
  const twitterLink: string = `https://twitter.com/${genericUserName}`;
  const instagramLink: string = `https://instagram.com/${genericUserName}`;
  const termsOfUseLink: string = '/terms-conditions';
  const privacyPolicyLink: string = '/privacy-policy';

  return (
    <footer className={styles.footerContainer} data-testid="annie-main-footer">
      <div className={styles.footerTopBorder} />
      <AnnieLogo height="47px" width="56px" />

      <section className={styles.footerLinks}>
        <section className={styles.footerTermsGroup}>
          <Link href={termsOfUseLink}>
            Terms of Use
          </Link>

          <Link href={privacyPolicyLink}>
            Privacy Policy
          </Link>
        </section>

        <section className={styles.socialLinks}>
          <a href={twitterLink} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="19"
              fill="none"
              viewBox="0 0 21 19"
              className={styles.twitterLogo}
            >
              <path
                fill="#140929"
                fillOpacity="0.9"
                fillRule="evenodd"
                d="M20.42 1.041a8.333 8.333 0 01-2.737 1.101A4.198 4.198 0 0014.539.708c-2.378 0-4.307 2.035-4.307 4.544 0 .357.037.702.11 1.035-3.58-.19-6.754-1.997-8.88-4.75a4.73 4.73 0 00-.583 2.288c0 1.576.76 2.967 1.917 3.782A4.142 4.142 0 01.843 7.04v.056c0 2.202 1.485 4.04 3.458 4.455a4.09 4.09 0 01-1.946.08c.548 1.804 2.138 3.119 4.024 3.154A8.363 8.363 0 010 16.67a11.756 11.756 0 006.605 2.04c7.925 0 12.258-6.923 12.258-12.929 0-.198-.004-.395-.011-.589A8.992 8.992 0 0021 2.84a8.259 8.259 0 01-2.474.716 4.52 4.52 0 001.895-2.514z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>

          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              fill="none"
              viewBox="0 0 20 21"
              className={styles.instagramLogo}
            >
              <path
                fill="#140929"
                fillOpacity="0.9"
                fillRule="evenodd"
                d="M17.623.708H2.377A2.374 2.374 0 000 3.08v15.257a2.375 2.375 0 002.377 2.372h15.246A2.375 2.375 0 0020 18.337V3.08A2.374 2.374 0 0017.623.708zM14 4.308a.6.6 0 01.6-.6h1.8a.6.6 0 01.6.6v1.8a.6.6 0 01-.6.6h-1.8a.6.6 0 01-.6-.6v-1.8zm-4 2.4a4 4 0 110 8.001 4 4 0 010-8zm8 11.375a.62.62 0 01-.616.626H2.616A.62.62 0 012 18.082V8.71h2.462c-.321.468-.43 1.343-.43 1.898 0 3.346 2.688 6.07 5.99 6.07 3.304 0 5.992-2.724 5.992-6.07 0-.555-.078-1.416-.476-1.898H18v9.374z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
