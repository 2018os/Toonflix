/* eslint-disable react/jsx-props-no-spreading */
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import React from 'react';

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

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
});

const PageWrapper = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      <DefaultSetting />
    </ApolloProvider>
  );
};

export default PageWrapper;
