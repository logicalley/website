import React, { useEffect, useState } from 'react';

import type { SpacerProps } from '../..';

const Spacer: React.FC<SpacerProps> = ({ h, mh }: SpacerProps) => {
  const [height, setHeight] = useState(h);

  useEffect(() => {
    console.log(window.innerWidth, mh)
    const handleResize = () => {
      console.log('handling resize')
      const heightToUse = window.innerWidth < 768 ? mh : h;
      setHeight(heightToUse);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const heightToUse = window.innerWidth < 768 ? mh : h;
    setHeight(heightToUse);
  }, []);

  return <div style={{ height, width: '100%' }}></div>;
}

export default Spacer;
