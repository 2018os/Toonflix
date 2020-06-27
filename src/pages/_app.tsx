import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../util/theme';

const PageWrapper = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default PageWrapper;
