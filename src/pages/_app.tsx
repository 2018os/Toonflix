import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../util/theme';

const DefaultSetting = createGlobalStyle`
body {
  margin: 0px;
  padding: 0px;
}
`;

const PageWrapper = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <Component {...pageProps} />
      <DefaultSetting />
    </ThemeProvider>
  );
};

export default PageWrapper;
