import React, { Fragment, useRef, useEffect } from 'react';
import { Parallax as RSParallax, ParallaxLayer, IParallax } from '@react-spring/parallax';

import styles from './styles.module.css';


const Parallax: React.FC = () => {
  const songBoardImageFallback: string = 'https://res.cloudinary.com/anniemusic/image/upload/f_auto,q_auto/v1600213041/landing-page-assets/song-board_ihkqtb.jpg';
  const parallaxContainerRef = useRef<HTMLTableSectionElement>(null);
  let parallaxRef: IParallax | null = null;

  // useEffect(() => {
  //   let options = {
  //     root: document.querySelector('#scrollArea'),
  //     rootMargin: '0px',
  //     threshold: 1.0
  //   }

  //   let observer = new IntersectionObserver(callback, options);
  // })
  useEffect(() => {
    console.log('here i am');
    console.log(parallaxRef);
  }, [parallaxRef]);

  const handleScroll = () => {
    if (parallaxContainerRef.current) {
      const posY = parallaxContainerRef.current.getBoundingClientRect().top;
      const offset = window.pageYOffset - posY;
      console.log(offset);
    }
  };

  useEffect(() => {
    if (parallaxContainerRef.current) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <picture className={styles.songLinkContainer}>
        <source srcSet="
          /images/song-board.webp 1x,
          /images/song-board.webp 2x" type="image/webp" />
        <img src={songBoardImageFallback} alt="Different Songs shared via Annie" className={styles.songLink} />
      </picture>

      <section className={styles.parallaxContainer} ref={parallaxContainerRef}>
        <RSParallax ref={ref => parallaxRef = ref} pages={3} horizontal={false}>
          <ParallaxLayer offset={0.3} speed={0}>
            <span>Scroll down!</span>
          </ParallaxLayer>
          <ParallaxLayer offset={1.2} speed={0}>
            <span>Scroll down!</span>
          </ParallaxLayer>
          <ParallaxLayer offset={0.9} speed={3}>
            <span>I'm fast!</span>
          </ParallaxLayer>
          <ParallaxLayer speed={-0.2} offset={1.3}>
            <span>I'm going in the other direction!</span>
          </ParallaxLayer>
        </RSParallax>
      </section>
    </Fragment>
  )
};

export default Parallax;
