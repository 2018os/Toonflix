import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React from 'react';

import theme from '../util/theme';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const PageWrapper = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={{ ...theme }}>
        <Component {...pageProps} />
        <DefaultSetting />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default PageWrapper;
