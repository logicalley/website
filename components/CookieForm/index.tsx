import React, { useState, useEffect, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { parseCookies, setCookie } from 'nookies';
import { useRouter } from 'next/router';

import styles from './styles.module.css';

import {
  ANNIE_USER_COOKIE_ACCEPT,
  ANNIE_USER_COOKIE_STATUS,
  NON_COOKIE_PERMISSION_ROUTES
} from '../../utils/constants';
import Analytics from '../../utils/analytics';

const CookieForm: React.FC = () => {
  const [showCookieForm, setShowCookieForm] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = (): void => {
    const s = setCookie(null, ANNIE_USER_COOKIE_ACCEPT, ANNIE_USER_COOKIE_STATUS.ACCEPTED, {
      domain: window.location.hostname,
      maxAge: 10400000, // four months time
      secure: true,
      sameSite: 'lax',
      path: '/'
    });
    setShowCookieForm(false);
  };

  useEffect(() => {
    const cookies = parseCookies();
    const privacyCookieValue = cookies[ANNIE_USER_COOKIE_ACCEPT];
    const shouldntShowCookieForm = (
      (privacyCookieValue === ANNIE_USER_COOKIE_STATUS.ACCEPTED)
      ||
      (NON_COOKIE_PERMISSION_ROUTES.includes(router.pathname))
    );
    setShowCookieForm(!shouldntShowCookieForm);
  }, [router.pathname]);

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

export default memo(CookieForm);
