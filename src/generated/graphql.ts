import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Url: any;
};

/** enum */
export enum OrderBy {
  Asc = 'asc',
  Desc = 'desc'
}

export enum WebtoonOrderByField {
  Title = 'title'
}

export enum CollectionOrderByField {
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export enum Platform {
  Naver = 'NAVER',
  Daum = 'DAUM'
}

/** interface */
export type Node = {
  id: Scalars['ID'];
};

export type Connection = {
  edges?: Maybe<Array<Maybe<Edge>>>;
  pageInfo: PageInfo;
  totalCounts: Scalars['Int'];
  counts: Scalars['Int'];
};

export type Edge = {
  cursor: Scalars['String'];
  node?: Maybe<Node>;
};

/** types */
export type Query = {
  __typename?: 'Query';
  authors: AuthorConnection;
  webtoons: WebtoonConnection;
  collections: CollectionConnection;
  genres?: Maybe<Array<Maybe<Genre>>>;
  users: UserConnection;
  webtoon: Webtoon;
  randomWebtoons?: Maybe<Array<Webtoon>>;
  search: SearchResultConnection;
};

/** types */
export type QueryAuthorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};

/** types */
export type QueryWebtoonsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};

/** types */
export type QueryCollectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};

/** types */
export type QueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};

/** types */
export type QueryWebtoonArgs = {
  id: Scalars['ID'];
};

/** types */
export type QueryRandomWebtoonsArgs = {
  take?: Maybe<Scalars['Int']>;
};

/** types */
export type QuerySearchArgs = {
  keyword?: Maybe<Scalars['String']>;
  where?: Maybe<SearchFiltering>;
};

export type Mutation = {
  __typename?: 'Mutation';
  login: AuthPayload;
  signup: AuthPayload;
  createCollection: Collection;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationSignupArgs = {
  input: SignupInput;
};

export type MutationCreateCollectionArgs = {
  input: CollectionInput;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

/** nodes */
export type Webtoon = Node & {
  __typename?: 'Webtoon';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  platform: Platform;
  isFinish: Scalars['Boolean'];
  isAdult: Scalars['Boolean'];
  isPay: Scalars['Boolean'];
  thumbnail: Scalars['Url'];
  url: Scalars['Url'];
  authorsConnection: WebtoonAuthorsConnection;
  collectionsConnection: WebtoonCollectionsConnection;
  genres?: Maybe<Array<Genre>>;
  comments?: Maybe<Array<Maybe<Comment>>>;
};

/** nodes */
export type WebtoonAuthorsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};

/** nodes */
export type WebtoonCollectionsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};

export type Author = Node & {
  __typename?: 'Author';
  id: Scalars['ID'];
  name: Scalars['String'];
  webtoonsConnection: AuthorWebtoonsConnection;
};

export type AuthorWebtoonsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};

export type Genre = {
  __typename?: 'Genre';
  code: Scalars['String'];
  name: Scalars['String'];
  webtoonsConnection: GenreWebtoonsConnection;
};

export type GenreWebtoonsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};

export type Collection = Node & {
  __typename?: 'Collection';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  webtoonsConnection: CollectionWebtoonsConnection;
  writer: User;
  createdAt: Scalars['Date'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type CollectionWebtoonsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  collectionsConnection: UserCollectionsConnection;
  comments?: Maybe<Array<Maybe<Comment>>>;
};

export type UserCollectionsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  message: Scalars['String'];
  writer: User;
  writtenWebtoon: Webtoon;
  subComments?: Maybe<Array<Maybe<Comment>>>;
};

/** query connections */
export type UserConnection = Connection & {
  __typename?: 'UserConnection';
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  pageInfo: PageInfo;
  totalCounts: Scalars['Int'];
  counts: Scalars['Int'];
};

export type WebtoonConnection = Connection & {
  __typename?: 'WebtoonConnection';
  edges?: Maybe<Array<Maybe<WebtoonEdge>>>;
  pageInfo: PageInfo;
  totalCounts: Scalars['Int'];
  counts: Scalars['Int'];
};

export type CollectionConnection = Connection & {
  __typename?: 'CollectionConnection';
  edges?: Maybe<Array<Maybe<CollectionEdge>>>;
  pageInfo: PageInfo;
  totalCounts: Scalars['Int'];
  counts: Scalars['Int'];
};

export type AuthorConnection = Connection & {
  __typename?: 'AuthorConnection';
  edges?: Maybe<Array<Maybe<AuthorEdge>>>;
  pageInfo: PageInfo;
  totalCounts: Scalars['Int'];
  counts: Scalars['Int'];
};

export type WebtoonAuthorsConnection = Connection & {
  __typename?: 'WebtoonAuthorsConnection';
  edges?: Maybe<Array<Maybe<WebtoonAuthorsEdge>>>;
  pageInfo: PageInfo;
  totalCounts: Scalars['Int'];
  counts: Scalars['Int'];
};

export type WebtoonCollectionsConnection = Connection & {
  __typename?: 'WebtoonCollectionsConnection';
  edges?: Maybe<Array<Maybe<WebtoonCollectionsEdge>>>;
  pageInfo: PageInfo;
  totalCounts: Scalars['Int'];
  counts: Scalars['Int'];
};

export type AuthorWebtoonsConnection = Connection & {
  __typename?: 'AuthorWebtoonsConnection';
  edges?: Maybe<Array<Maybe<AuthorWebtoonsEdge>>>;
  pageInfo: PageInfo;
  totalCounts: Scalars['Int'];
  counts: Scalars['Int'];
};

export type CollectionWebtoonsConnection = Connection & {
  __typename?: 'CollectionWebtoonsConnection';
  edges?: Maybe<Array<Maybe<CollectionWebtoonsEdge>>>;
  pageInfo: PageInfo;
  totalCounts: Scalars['Int'];
  counts: Scalars['Int'];
};

export type GenreWebtoonsConnection = Connection & {
  __typename?: 'GenreWebtoonsConnection';
  edges?: Maybe<Array<Maybe<GenreWebtoonsEdge>>>;
  pageInfo: PageInfo;
  totalCounts: Scalars['Int'];
  counts: Scalars['Int'];
};

export type SearchResultWebtoonConnection = Connection & {
  __typename?: 'SearchResultWebtoonConnection';
  edges?: Maybe<Array<Maybe<SearchResultWebtoonEdge>>>;
  pageInfo: PageInfo;
  totalCounts: Scalars['Int'];
  counts: Scalars['Int'];
};

export type SearchResultCollectionConnection = Connection & {
  __typename?: 'SearchResultCollectionConnection';
  edges?: Maybe<Array<Maybe<SearchResultCollectionEdge>>>;
  pageInfo: PageInfo;
  totalCounts: Scalars['Int'];
  counts: Scalars['Int'];
};

export type UserCollectionsConnection = Connection & {
  __typename?: 'UserCollectionsConnection';
  edges?: Maybe<Array<Maybe<UserCollectionsEdge>>>;
  pageInfo: PageInfo;
  totalCounts: Scalars['Int'];
  counts: Scalars['Int'];
};

/** other connections */
export type SearchResultConnection = {
  __typename?: 'SearchResultConnection';
  webtoonResult?: Maybe<SearchResultWebtoonConnection>;
  collectionResult?: Maybe<SearchResultCollectionConnection>;
};

/** other connections */
export type SearchResultConnectionWebtoonResultArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};

/** other connections */
export type SearchResultConnectionCollectionResultArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};

/** edges */
export type WebtoonEdge = Edge & {
  __typename?: 'WebtoonEdge';
  cursor: Scalars['String'];
  node?: Maybe<Webtoon>;
};

export type CollectionEdge = Edge & {
  __typename?: 'CollectionEdge';
  cursor: Scalars['String'];
  node?: Maybe<Collection>;
};

export type AuthorEdge = Edge & {
  __typename?: 'AuthorEdge';
  cursor: Scalars['String'];
  node?: Maybe<Author>;
};

export type WebtoonAuthorsEdge = Edge & {
  __typename?: 'WebtoonAuthorsEdge';
  cursor: Scalars['String'];
  node?: Maybe<Author>;
};

export type WebtoonCollectionsEdge = Edge & {
  __typename?: 'WebtoonCollectionsEdge';
  cursor: Scalars['String'];
  node?: Maybe<Collection>;
};

export type AuthorWebtoonsEdge = Edge & {
  __typename?: 'AuthorWebtoonsEdge';
  cursor: Scalars['String'];
  node?: Maybe<Webtoon>;
};

export type CollectionWebtoonsEdge = Edge & {
  __typename?: 'CollectionWebtoonsEdge';
  cursor: Scalars['String'];
  node?: Maybe<Webtoon>;
};

export type GenreWebtoonsEdge = Edge & {
  __typename?: 'GenreWebtoonsEdge';
  cursor: Scalars['String'];
  node?: Maybe<Webtoon>;
};

export type SearchResultWebtoonEdge = Edge & {
  __typename?: 'SearchResultWebtoonEdge';
  cursor: Scalars['String'];
  node?: Maybe<Webtoon>;
};

export type SearchResultCollectionEdge = Edge & {
  __typename?: 'SearchResultCollectionEdge';
  cursor: Scalars['String'];
  node?: Maybe<Collection>;
};

export type UserEdge = Edge & {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node?: Maybe<User>;
};

export type UserCollectionsEdge = Edge & {
  __typename?: 'UserCollectionsEdge';
  cursor: Scalars['String'];
  node?: Maybe<Collection>;
};

/** input */
export type SignupInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CollectionInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  webtoons: Array<Scalars['String']>;
};

export type SearchFiltering = {
  isPay?: Maybe<Scalars['Boolean']>;
  isAdult?: Maybe<Scalars['Boolean']>;
  isFinish?: Maybe<Scalars['Boolean']>;
  platforms?: Maybe<Array<Maybe<Platform>>>;
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MainQueryVariables = Exact<{ [key: string]: never }>;

export type MainQuery = { __typename?: 'Query' } & {
  collections: { __typename?: 'CollectionConnection' } & {
    edges?: Maybe<
      Array<
        Maybe<
          { __typename?: 'CollectionEdge' } & {
            node?: Maybe<
              { __typename?: 'Collection' } & Pick<
                Collection,
                'id' | 'title' | 'description'
              > & {
                  webtoonsConnection: {
                    __typename?: 'CollectionWebtoonsConnection';
                  } & {
                    pageInfo: { __typename?: 'PageInfo' } & Pick<
                      PageInfo,
                      'hasNextPage' | 'hasPreviousPage'
                    >;
                    edges?: Maybe<
                      Array<
                        Maybe<
                          { __typename?: 'CollectionWebtoonsEdge' } & {
                            node?: Maybe<
                              { __typename?: 'Webtoon' } & WebtoonCardFragment
                            >;
                          }
                        >
                      >
                    >;
                  };
                }
            >;
          }
        >
      >
    >;
  };
};

export type WebtoonDetailQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type WebtoonDetailQuery = { __typename?: 'Query' } & {
  randomWebtoons?: Maybe<
    Array<{ __typename?: 'Webtoon' } & Pick<Webtoon, 'id' | 'thumbnail'>>
  >;
  webtoon: { __typename?: 'Webtoon' } & Pick<
    Webtoon,
    | 'id'
    | 'title'
    | 'description'
    | 'url'
    | 'thumbnail'
    | 'isPay'
    | 'isAdult'
    | 'isFinish'
    | 'platform'
  > & {
      authorsConnection: { __typename?: 'WebtoonAuthorsConnection' } & {
        edges?: Maybe<
          Array<
            Maybe<
              { __typename?: 'WebtoonAuthorsEdge' } & {
                node?: Maybe<
                  { __typename?: 'Author' } & Pick<Author, 'id' | 'name'>
                >;
              }
            >
          >
        >;
      };
      collectionsConnection: { __typename?: 'WebtoonCollectionsConnection' } & {
        pageInfo: { __typename?: 'PageInfo' } & Pick<
          PageInfo,
          'hasPreviousPage' | 'hasNextPage'
        >;
        edges?: Maybe<
          Array<
            Maybe<
              { __typename?: 'WebtoonCollectionsEdge' } & {
                node?: Maybe<
                  { __typename?: 'Collection' } & CollectionCardFragment
                >;
              }
            >
          >
        >;
      };
      genres?: Maybe<
        Array<
          { __typename?: 'Genre' } & Pick<Genre, 'code' | 'name'> & {
              webtoonsConnection: { __typename?: 'GenreWebtoonsConnection' } & {
                pageInfo: { __typename?: 'PageInfo' } & Pick<
                  PageInfo,
                  'hasNextPage' | 'hasPreviousPage'
                >;
                edges?: Maybe<
                  Array<
                    Maybe<
                      { __typename?: 'GenreWebtoonsEdge' } & {
                        node?: Maybe<
                          { __typename?: 'Webtoon' } & WebtoonCardFragment
                        >;
                      }
                    >
                  >
                >;
              };
            }
        >
      >;
    };
};

export type WebtoonCardFragment = { __typename?: 'Webtoon' } & Pick<
  Webtoon,
  'id' | 'title' | 'isAdult' | 'isFinish' | 'isPay' | 'thumbnail'
> & {
    authorsConnection: { __typename?: 'WebtoonAuthorsConnection' } & {
      edges?: Maybe<
        Array<
          Maybe<
            { __typename?: 'WebtoonAuthorsEdge' } & {
              node?: Maybe<
                { __typename?: 'Author' } & Pick<Author, 'id' | 'name'>
              >;
            }
          >
        >
      >;
    };
    genres?: Maybe<
      Array<{ __typename?: 'Genre' } & Pick<Genre, 'code' | 'name'>>
    >;
  };

export type CollectionCardFragment = { __typename?: 'Collection' } & Pick<
  Collection,
  'id' | 'title'
> & {
    webtoonsConnection: { __typename?: 'CollectionWebtoonsConnection' } & {
      edges?: Maybe<
        Array<
          Maybe<
            { __typename?: 'CollectionWebtoonsEdge' } & {
              node?: Maybe<
                { __typename?: 'Webtoon' } & Pick<Webtoon, 'id' | 'thumbnail'>
              >;
            }
          >
        >
      >;
    };
  };

export const WebtoonCardFragmentDoc = gql`
  fragment webtoonCard on Webtoon {
    id
    title
    authorsConnection(first: 4) {
      edges {
        node {
          id
          name
        }
      }
    }
    genres {
      code
      name
    }
    isAdult
    isFinish
    isPay
    thumbnail
  }
`;
export const CollectionCardFragmentDoc = gql`
  fragment collectionCard on Collection {
    id
    title
    webtoonsConnection(first: 4) {
      edges {
        node {
          id
          thumbnail
        }
      }
    }
  }
`;
export const MainDocument = gql`
  query main {
    collections(first: 4) {
      edges {
        node {
          id
          title
          description
          webtoonsConnection(first: 4) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                ...webtoonCard
              }
            }
          }
        }
      }
    }
  }
  ${WebtoonCardFragmentDoc}
`;

/**
 * __useMainQuery__
 *
 * To run a query within a React component, call `useMainQuery` and pass it any options that fit your needs.
 * When your component renders, `useMainQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMainQuery({
 *   variables: {
 *   },
 * });
 */
export function useMainQuery(
  baseOptions?: Apollo.QueryHookOptions<MainQuery, MainQueryVariables>
) {
  return Apollo.useQuery<MainQuery, MainQueryVariables>(
    MainDocument,
    baseOptions
  );
}
export function useMainLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MainQuery, MainQueryVariables>
) {
  return Apollo.useLazyQuery<MainQuery, MainQueryVariables>(
    MainDocument,
    baseOptions
  );
}
export type MainQueryHookResult = ReturnType<typeof useMainQuery>;
export type MainLazyQueryHookResult = ReturnType<typeof useMainLazyQuery>;
export type MainQueryResult = Apollo.QueryResult<MainQuery, MainQueryVariables>;
export const WebtoonDetailDocument = gql`
  query webtoonDetail($id: ID!) {
    randomWebtoons(take: 6) {
      id
      thumbnail
    }
    webtoon(id: $id) {
      id
      title
      description
      url
      thumbnail
      isPay
      isAdult
      isFinish
      platform
      authorsConnection(first: 4) {
        edges {
          node {
            id
            name
          }
        }
      }
      collectionsConnection(first: 4) {
        pageInfo {
          hasPreviousPage
          hasNextPage
        }
        edges {
          node {
            ...collectionCard
          }
        }
      }
      genres {
        code
        name
        webtoonsConnection(first: 4) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              ...webtoonCard
            }
          }
        }
      }
    }
  }
  ${CollectionCardFragmentDoc}
  ${WebtoonCardFragmentDoc}
`;

/**
 * __useWebtoonDetailQuery__
 *
 * To run a query within a React component, call `useWebtoonDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useWebtoonDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWebtoonDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWebtoonDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<
    WebtoonDetailQuery,
    WebtoonDetailQueryVariables
  >
) {
  return Apollo.useQuery<WebtoonDetailQuery, WebtoonDetailQueryVariables>(
    WebtoonDetailDocument,
    baseOptions
  );
}
export function useWebtoonDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    WebtoonDetailQuery,
    WebtoonDetailQueryVariables
  >
) {
  return Apollo.useLazyQuery<WebtoonDetailQuery, WebtoonDetailQueryVariables>(
    WebtoonDetailDocument,
    baseOptions
  );
}
export type WebtoonDetailQueryHookResult = ReturnType<
  typeof useWebtoonDetailQuery
>;
export type WebtoonDetailLazyQueryHookResult = ReturnType<
  typeof useWebtoonDetailLazyQuery
>;
export type WebtoonDetailQueryResult = Apollo.QueryResult<
  WebtoonDetailQuery,
  WebtoonDetailQueryVariables
>;
