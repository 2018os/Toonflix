import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React from 'react';

import theme from '../util/theme';

const DefaultSetting = createGlobalStyle`
  @font-face {
    font-family: NotoSansCJKkr;
    src: url(/static/font/NotoSansCJKkr.otf) format("opentype");
  }
  body {
    margin: 0px;
    padding: 0px;
    font-family: NotoSansCJKkr;
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
