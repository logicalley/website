import React, { useEffect, useState, memo } from 'react';

import type { SpacerProps } from '../..';

const Spacer: React.FC<SpacerProps> = ({ h, mh }: SpacerProps) => {
  const [height, setHeight] = useState(h);

  useEffect(() => {
    const handleResize = () => {
      const heightToUse = window.innerWidth < 768 ? mh : h;
      setHeight(heightToUse);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div style={{ height, width: '100%' }}></div>;
}

export default memo(Spacer);
