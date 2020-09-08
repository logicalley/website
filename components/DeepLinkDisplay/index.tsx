import React from 'react';

import { DeepLinkDisplayProps } from '../../index.d';

const DeepLinkDisplay: React.FC<DeepLinkDisplayProps> = (props: DeepLinkDisplayProps) => {
  return (
    <p>Something elses {props.code}</p>
  );
};

export default DeepLinkDisplay;
