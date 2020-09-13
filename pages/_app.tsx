import React from 'react';

import type { AppProps } from 'next/app';

import '../assets/css/global.css';


const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => <>
  <Component {...pageProps} />
</>;

export default App;
