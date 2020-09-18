import React from 'react';

import type { SpacerProps } from '../..';

const Spacer: React.FC<SpacerProps> = ({ height }: SpacerProps) => <div style={{height}}></div>;

export default Spacer;
