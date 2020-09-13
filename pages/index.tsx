import React, { Fragment } from 'react';

// components
import Header from '../components/Header';


const Home: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <section>
        <p>welcomeText</p>
      </section>
    </Fragment>
  );
}

export default Home;
