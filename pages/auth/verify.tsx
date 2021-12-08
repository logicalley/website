import { NextPage, GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Fragment } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './styles.module.css';
import type { AuthVerifyServerSideProps } from '../..';


const AuthVerifyPage: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <section className={styles.authContainer}>
        <p>Auth Verify</p>
      </section>
      <Footer />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<AuthVerifyServerSideProps> => {
  let provider = null;
  let error = 'An error occurred while validating your authentication credentials. Please try again.';
  let code = null;

  try {
    const { provider, code, error } = context.query;
    console.log(provider as string, '<-=====')
  } catch (error) {

  }

  return {
    props: {
      provider,
      error,
      code
    }
  }
};

export default AuthVerifyPage;
