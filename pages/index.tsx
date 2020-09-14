import React, { Fragment } from 'react';

// components
import Header from '../components/Header';
import HomePage from '../components/HomePage';


const Home: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <HomePage />
    </Fragment>
  );
}

export default Home;
