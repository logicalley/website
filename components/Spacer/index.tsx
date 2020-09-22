import React, { useEffect, useState, memo } from 'react';

import type { SpacerProps } from '../..';

const Spacer: React.FC<SpacerProps> = ({ h, mh }: SpacerProps) => {
  const [height, setHeight] = useState(h);
  useEffect(() => {
    const heightToUse = window.innerWidth > 769 ? h : mh;
    setHeight(heightToUse);
  }, []);

  return <div style={{ height, width: '100%' }}></div>;
}

export default memo(Spacer);
