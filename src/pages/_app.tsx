import React from 'react';
import { AppProps } from 'next/app';

const PageWrapper = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default PageWrapper;
