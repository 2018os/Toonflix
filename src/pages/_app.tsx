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
import { relayStylePagination } from '@apollo/client/utilities';

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
  input, select, textarea, button {
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
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      <DefaultSetting />
    </ApolloProvider>
  );
};

export default PageWrapper;
