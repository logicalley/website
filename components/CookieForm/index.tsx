import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCookie } from 'next-cookie';

import styles from './styles.module.css';

import { ANNIE_USER_COOKIE_ACCEPT } from '../../utils/constants';

const CookieForm: React.FC = () => {
  const [showCookieForm, setShowCookieForm] = useState<boolean>(false);
  const cookie = useCookie();

  const handleSubmit = (): void => {
    cookie.set(ANNIE_USER_COOKIE_ACCEPT, 1);
    setShowCookieForm(false);
  };

  useEffect(() => {
    const cookieValue = cookie.get(ANNIE_USER_COOKIE_ACCEPT);
    const isCookieAccepted = cookieValue == 1;
    setShowCookieForm(!isCookieAccepted)
  }, []);

  return showCookieForm ? (
    <section className={styles.cookieContainer}>
      <section className={styles.cookieImage}>
        <Image src="/images/cookie.jpg" alt="cookie" width="36" height="36" />
      </section>

      <section className={styles.privacyText}>
        By using Annie, you agree to our
        <Link href="/privacy-policy">
          <a>Privacy Policy</a>
        </Link>
      </section>

      <button className={styles.acceptBtn} onClick={handleSubmit}>
        ACCEPT
      </button>
    </section>
  ) : null;
};

export default CookieForm;
