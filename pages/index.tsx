import React, { Fragment } from 'react';
import { NextPage } from 'next';

// components
import Header from '../components/Header';
import HomePage from '../components/HomePage';


const Home: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <HomePage />
    </Fragment>
  );
}

export default Home;
