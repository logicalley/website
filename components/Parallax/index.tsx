import React, { useEffect, useRef } from 'react';
import { Parallax, Background } from 'react-parallax';

import styles from './styles.module.css';


const _Parallax: React.FC = () => {
  const parallaxBackgroundImage: string = 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80';
  const sectionRef = useRef<HTMLTableSectionElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (process.browser && 'IntersectionObserver' in window && sectionRef.current) {
      const observerOptions: IntersectionObserverInit = {
        root: null,
        rootMargin: '0px',
        threshold: [0.5, 0.8]
      };

      observer = new IntersectionObserver(handleIntersection, observerOptions);

      observer.observe(sectionRef.current);
    }

    return () => {
      const sectionRefDuplicate = sectionRef;

      if (observer && sectionRefDuplicate.current) {
        observer.unobserve(sectionRefDuplicate.current)
      }
    }
  }, []);

  const handleIntersection: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
    const [parallaxContainer] = entries;

    if (parallaxContainer.boundingClientRect.top <= 200) {
      console.log('about to scroll')
      parallaxContainer.target.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }

    console.log(parallaxContainer.boundingClientRect, parallaxContainer.target.scrollTo, parallaxContainer)
    if (parallaxContainer.intersectionRatio > 0) {
      console.log('Element is Intersecting');
    } else {
      console.log('Element is NOT Intersecting');
    }
  }

  return (
    <section className={styles.parallaxContainer} ref={sectionRef}>
      <Parallax
        strength={500}
        bgClassName={styles.parallaxBackground}
        bgImage={parallaxBackgroundImage}
        disabled={false}
      >
        {/* <Background>
          <div className={styles.backgroundImage}></div>
        </Background> */}
        <div className={styles.pageOne}>
          Custom Text
        </div>

        <div className={styles.pageTwo}>
          Custom Text
        </div>

        <div className={styles.pageThree}>
          Custom Text
        </div>
      </Parallax>
    </section>
  );
};

export default _Parallax;
