import React, { useEffect, useState } from 'react';

import type { SpacerProps } from '../..';

const Spacer: React.FC<SpacerProps> = ({ h, mh }: SpacerProps) => {
  const [height, setHeight] = useState(h);

  useEffect(() => {
    const handleResize = () => {
      const heightToUse = window.innerWidth < 768 ? mh : h;
      setHeight(heightToUse);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [h, mh]);

  useEffect(() => {
    const heightToUse = window.innerWidth < 768 ? mh : h;
    setHeight(heightToUse);
  }, [h, mh]);

  return <div style={{height, width: '100%'}}/>;
}

export default Spacer;
