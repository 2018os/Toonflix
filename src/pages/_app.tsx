import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
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
