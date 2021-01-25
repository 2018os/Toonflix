import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { relayStylePagination } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import { useRouter } from 'next/router';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import * as gtag from '../util/gtag';

import { AuthProvider } from '../context/AuthContext';

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
  input, select, textarea, button {
    font-family: NotoSansCJKkr;
  }
  .ReactModal__Body--open {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
  }
`;

const httpLink = createHttpLink({
  uri: 'http://comicsquare.org:4000/graphql'
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
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          collections: relayStylePagination()
        }
      },
      Webtoon: {
        fields: {
          comments: relayStylePagination()
        }
      },
      Collection: {
        fields: {
          webtoons: relayStylePagination(),
          comments: relayStylePagination()
        }
      },
      SearchResult: {
        fields: {
          webtoonResult: relayStylePagination(),
          collectionResult: relayStylePagination()
        }
      },
      User: {
        fields: {
          myCollections: relayStylePagination(),
          likedCollections: relayStylePagination()
        }
      }
    }
  }),
  link: authLink.concat(httpLink)
});

const PageWrapper = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <Component {...pageProps} />
        <DefaultSetting />
      </AuthProvider>
    </ApolloProvider>
  );
};

export default PageWrapper;
