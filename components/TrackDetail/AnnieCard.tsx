import React from 'react';

import styles from './styles.module.css';

import type { PlatformCardProps } from '../..';

import CopyLinkButton from './CopyLinkButton';


const AnnieCard: React.FC<PlatformCardProps> = (props: PlatformCardProps) => {
  console.log(props)
  return (
    <section className={styles.annieCardContainer}>
      <section className={styles.platformDetails}>
        <section className={styles.platformHeader}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="18"
            fill="none"
            viewBox="0 0 32 18"
          >
            <path
              fill="url(#paint0_linear)"
              fillRule="evenodd"
              d="M12.28 2.382c1.43-2.406 5.005-2.406 6.435 0l5.41 9.106c.218.367.36.747.437 1.128a9.556 9.556 0 01-2.261-1.122c-2.032-1.367-3.395-3.393-3.838-5.705v-.004l-.001-.003C18.198 4.445 17 3.517 15.637 3.53c-1.364-.014-2.561.914-2.825 2.25v.004l-.001.004c-.444 2.312-1.806 4.338-3.838 5.705-.8.538-1.661.946-2.557 1.217a3.56 3.56 0 01.455-1.223l5.41-9.106zM24.549 14.03l.007-.036a10.904 10.904 0 01-3.023-1.42c-2.318-1.56-3.887-3.884-4.397-6.545a1.482 1.482 0 00-1.498-1.185h-.133a1.482 1.482 0 00-1.498 1.185c-.51 2.66-2.079 4.985-4.397 6.544a10.747 10.747 0 01-7.851 1.695c-.407-.068-.8.026-1.112.236-.312.21-.54.534-.618.928-.156.788.361 1.514 1.175 1.65 2.391.4 4.81.172 7.048-.645l.053.029c1.08-.387 2.12-.91 3.095-1.567a13.563 13.563 0 003.43-3.299c.268-.37.515-.752.741-1.146a13.423 13.423 0 004.172 4.445 13.859 13.859 0 0010.063 2.183c.814-.136 1.33-.862 1.175-1.65a1.453 1.453 0 00-.618-.928 1.532 1.532 0 00-1.112-.236 10.692 10.692 0 01-4.703-.238zm-12.38 1.948c-.507.341-1.03.65-1.565.925H20.67a15.464 15.464 0 01-1.565-.925 14.944 14.944 0 01-3.47-3.227 14.947 14.947 0 01-3.468 3.227z"
              clipRule="evenodd"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="15.586"
                x2="15.586"
                y1="17.274"
                y2="0.577"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6525EC"></stop>
                <stop offset="1" stopColor="#EB85B6"></stop>
              </linearGradient>
            </defs>
          </svg>
          <h3>Annie</h3>
        </section>
        <span>Share everything in one link.</span>
      </section>
      <CopyLinkButton link={props.url} />
    </section>
  );
};

export default AnnieCard;
