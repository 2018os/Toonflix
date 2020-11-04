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

export enum CollectionType {
  Private = 'Private',
  Public = 'Public'
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
  user: User;
  /** myProfile(id: ID!): User! */
  webtoon: Webtoon;
  randomWebtoons?: Maybe<Array<Webtoon>>;
  search: SearchResult;
  collection: Collection;
};

/** types */
export type QueryAuthorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

/** types */
export type QueryWebtoonsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

/** types */
export type QueryCollectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  keyword?: Maybe<Scalars['String']>;
};

/** types */
export type QueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

/** types */
export type QueryUserArgs = {
  id: Scalars['ID'];
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
  webtoonPaging?: Maybe<Paging>;
  collectionPaging?: Maybe<Paging>;
};

/** types */
export type QueryCollectionArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: AuthPayload;
  signup: AuthPayload;
  createCollection: Collection;
  postComment: Comment;
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

export type MutationPostCommentArgs = {
  input: CommentInput;
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
  commentsConnection: WebtoonCommentsConnection;
};

/** nodes */
export type WebtoonAuthorsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

/** nodes */
export type WebtoonCollectionsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

/** nodes */
export type WebtoonCommentsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
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
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
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
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type Collection = Node & {
  __typename?: 'Collection';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  type: CollectionType;
  webtoonsConnection: CollectionWebtoonsConnection;
  commentsConnection: CollectionCommentsConnection;
  writer: User;
  createdAt: Scalars['Date'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type CollectionWebtoonsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type CollectionCommentsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  /** likedWebtoon */
  collectionsConnection: UserCollectionsConnection;
  commentsConnection: UserCommentsConnection;
};

export type UserCollectionsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type UserCommentsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type Comment = Node & {
  __typename?: 'Comment';
  id: Scalars['ID'];
  message: Scalars['String'];
  writer: User;
  createdAt: Scalars['Date'];
  commentsConnection: CommentCommentsConnection;
};

export type CommentCommentsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
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

export type WebtoonCommentsConnection = Connection & {
  __typename?: 'WebtoonCommentsConnection';
  edges?: Maybe<Array<Maybe<WebtoonCommentsEdge>>>;
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

export type CollectionCommentsConnection = Connection & {
  __typename?: 'CollectionCommentsConnection';
  edges?: Maybe<Array<Maybe<CollectionCommentsEdge>>>;
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

export type SearchResultWebtoonsConnection = Connection & {
  __typename?: 'SearchResultWebtoonsConnection';
  edges?: Maybe<Array<Maybe<SearchResultWebtoonsEdge>>>;
  pageInfo: PageInfo;
  totalCounts: Scalars['Int'];
  counts: Scalars['Int'];
};

export type SearchResultCollectionsConnection = Connection & {
  __typename?: 'SearchResultCollectionsConnection';
  edges?: Maybe<Array<Maybe<SearchResultCollectionsEdge>>>;
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

export type UserCommentsConnection = Connection & {
  __typename?: 'UserCommentsConnection';
  edges?: Maybe<Array<Maybe<UserCommentsEdge>>>;
  pageInfo: PageInfo;
  totalCounts: Scalars['Int'];
  counts: Scalars['Int'];
};

export type CommentCommentsConnection = Connection & {
  __typename?: 'CommentCommentsConnection';
  edges?: Maybe<Array<Maybe<CommentCommentsEdge>>>;
  pageInfo: PageInfo;
  totalCounts: Scalars['Int'];
  counts: Scalars['Int'];
};

/** searchResult */
export type SearchResult = {
  __typename?: 'SearchResult';
  webtoonResult?: Maybe<SearchResultWebtoonsConnection>;
  collectionResult?: Maybe<SearchResultCollectionsConnection>;
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

export type WebtoonCommentsEdge = Edge & {
  __typename?: 'WebtoonCommentsEdge';
  cursor: Scalars['String'];
  node?: Maybe<Comment>;
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

export type CollectionCommentsEdge = Edge & {
  __typename?: 'CollectionCommentsEdge';
  cursor: Scalars['String'];
  node?: Maybe<Comment>;
};

export type GenreWebtoonsEdge = Edge & {
  __typename?: 'GenreWebtoonsEdge';
  cursor: Scalars['String'];
  node?: Maybe<Webtoon>;
};

export type SearchResultWebtoonsEdge = Edge & {
  __typename?: 'SearchResultWebtoonsEdge';
  cursor: Scalars['String'];
  node?: Maybe<Webtoon>;
};

export type SearchResultCollectionsEdge = Edge & {
  __typename?: 'SearchResultCollectionsEdge';
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

export type UserCommentsEdge = Edge & {
  __typename?: 'UserCommentsEdge';
  cursor: Scalars['String'];
  node?: Maybe<Comment>;
};

export type CommentCommentsEdge = Edge & {
  __typename?: 'CommentCommentsEdge';
  cursor: Scalars['String'];
  node?: Maybe<Comment>;
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

export type CommentInput = {
  message: Scalars['String'];
  webtoonId?: Maybe<Scalars['ID']>;
  collectionId?: Maybe<Scalars['ID']>;
  commentId?: Maybe<Scalars['ID']>;
};

export type SearchFiltering = {
  isPay?: Maybe<Scalars['Boolean']>;
  isAdult?: Maybe<Scalars['Boolean']>;
  isFinish?: Maybe<Scalars['Boolean']>;
  platforms?: Maybe<Array<Maybe<Platform>>>;
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Paging = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type CollectionsForMainQueryVariables = Exact<{ [key: string]: never }>;

export type CollectionsForMainQuery = { __typename?: 'Query' } & {
  collections: { __typename?: 'CollectionConnection' } & {
    edges?: Maybe<
      Array<
        Maybe<
          { __typename?: 'CollectionEdge' } & {
            node?: Maybe<
              { __typename?: 'Collection' } & Pick<
                Collection,
                'id' | 'title'
              > & {
                  writer: { __typename?: 'User' } & Pick<User, 'name'>;
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

export type WebtoonForWebtoonDetailQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type WebtoonForWebtoonDetailQuery = { __typename?: 'Query' } & {
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
      commentsConnection: { __typename?: 'WebtoonCommentsConnection' } & Pick<
        WebtoonCommentsConnection,
        'counts'
      > & {
          edges?: Maybe<
            Array<
              Maybe<
                { __typename?: 'WebtoonCommentsEdge' } & {
                  node?: Maybe<
                    { __typename?: 'Comment' } & Pick<
                      Comment,
                      'message' | 'createdAt'
                    > & { writer: { __typename?: 'User' } & Pick<User, 'name'> }
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

export type RandomWebtoonsForWebtoonDetailQueryVariables = Exact<{
  [key: string]: never;
}>;

export type RandomWebtoonsForWebtoonDetailQuery = { __typename?: 'Query' } & {
  randomWebtoons?: Maybe<
    Array<{ __typename?: 'Webtoon' } & Pick<Webtoon, 'id' | 'thumbnail'>>
  >;
};

export type UserForWithAuthQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type UserForWithAuthQuery = { __typename?: 'Query' } & {
  user: { __typename?: 'User' } & Pick<User, 'id' | 'name'>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = { __typename?: 'Mutation' } & {
  login: { __typename?: 'AuthPayload' } & Pick<AuthPayload, 'token'> & {
      user?: Maybe<{ __typename?: 'User' } & Pick<User, 'id'>>;
    };
};

export type SignupMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type SignupMutation = { __typename?: 'Mutation' } & {
  signup: { __typename?: 'AuthPayload' } & Pick<AuthPayload, 'token'> & {
      user?: Maybe<{ __typename?: 'User' } & Pick<User, 'id'>>;
    };
};

export type CollectionsForCollectionListQueryVariables = Exact<{
  keyword?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['ID']>;
}>;

export type CollectionsForCollectionListQuery = { __typename?: 'Query' } & {
  collections: { __typename?: 'CollectionConnection' } & {
    pageInfo: { __typename?: 'PageInfo' } & Pick<
      PageInfo,
      'hasNextPage' | 'endCursor'
    >;
    edges?: Maybe<
      Array<
        Maybe<
          { __typename?: 'CollectionEdge' } & {
            node?: Maybe<
              { __typename?: 'Collection' } & CollectionCardFragment
            >;
          }
        >
      >
    >;
  };
};

export type SearchForCategoryQueryVariables = Exact<{
  keyword?: Maybe<Scalars['String']>;
  where?: Maybe<SearchFiltering>;
  webtoonId?: Maybe<Scalars['ID']>;
  collectionId?: Maybe<Scalars['ID']>;
}>;

export type SearchForCategoryQuery = { __typename?: 'Query' } & {
  search: { __typename?: 'SearchResult' } & {
    webtoonResult?: Maybe<
      { __typename?: 'SearchResultWebtoonsConnection' } & {
        pageInfo: { __typename?: 'PageInfo' } & Pick<
          PageInfo,
          'endCursor' | 'hasNextPage'
        >;
        edges?: Maybe<
          Array<
            Maybe<
              { __typename?: 'SearchResultWebtoonsEdge' } & {
                node?: Maybe<{ __typename?: 'Webtoon' } & WebtoonCardFragment>;
              }
            >
          >
        >;
      }
    >;
    collectionResult?: Maybe<
      { __typename?: 'SearchResultCollectionsConnection' } & {
        pageInfo: { __typename?: 'PageInfo' } & Pick<
          PageInfo,
          'endCursor' | 'hasNextPage'
        >;
        edges?: Maybe<
          Array<
            Maybe<
              { __typename?: 'SearchResultCollectionsEdge' } & {
                node?: Maybe<
                  { __typename?: 'Collection' } & CollectionCardFragment
                >;
              }
            >
          >
        >;
      }
    >;
  };
};

export type GenresForFilterQueryVariables = Exact<{ [key: string]: never }>;

export type GenresForFilterQuery = { __typename?: 'Query' } & {
  genres?: Maybe<
    Array<Maybe<{ __typename?: 'Genre' } & Pick<Genre, 'code' | 'name'>>>
  >;
};

export type SearchForAutoCompleteQueryVariables = Exact<{
  keyword?: Maybe<Scalars['String']>;
}>;

export type SearchForAutoCompleteQuery = { __typename?: 'Query' } & {
  search: { __typename?: 'SearchResult' } & {
    webtoonResult?: Maybe<
      { __typename?: 'SearchResultWebtoonsConnection' } & {
        edges?: Maybe<
          Array<
            Maybe<
              { __typename?: 'SearchResultWebtoonsEdge' } & {
                node?: Maybe<
                  { __typename?: 'Webtoon' } & Pick<Webtoon, 'id' | 'title'>
                >;
              }
            >
          >
        >;
      }
    >;
    collectionResult?: Maybe<
      { __typename?: 'SearchResultCollectionsConnection' } & {
        edges?: Maybe<
          Array<
            Maybe<
              { __typename?: 'SearchResultCollectionsEdge' } & {
                node?: Maybe<
                  { __typename?: 'Collection' } & Pick<
                    Collection,
                    'id' | 'title'
                  >
                >;
              }
            >
          >
        >;
      }
    >;
  };
};

export type CollectionForCollectionDetailQueryVariables = Exact<{
  id: Scalars['ID'];
  after?: Maybe<Scalars['ID']>;
}>;

export type CollectionForCollectionDetailQuery = { __typename?: 'Query' } & {
  collection: { __typename?: 'Collection' } & Pick<
    Collection,
    'id' | 'title' | 'description'
  > & {
      writer: { __typename?: 'User' } & Pick<User, 'name'>;
      webtoonsConnection: { __typename?: 'CollectionWebtoonsConnection' } & {
        pageInfo: { __typename?: 'PageInfo' } & Pick<
          PageInfo,
          'hasNextPage' | 'endCursor'
        >;
        edges?: Maybe<
          Array<
            Maybe<
              { __typename?: 'CollectionWebtoonsEdge' } & {
                node?: Maybe<{ __typename?: 'Webtoon' } & WebtoonCardFragment>;
              }
            >
          >
        >;
      };
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
export const CollectionsForMainDocument = gql`
  query collectionsForMain {
    collections(first: 4) {
      edges {
        node {
          id
          title
          writer {
            name
          }
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
 * __useCollectionsForMainQuery__
 *
 * To run a query within a React component, call `useCollectionsForMainQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionsForMainQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionsForMainQuery({
 *   variables: {
 *   },
 * });
 */
export function useCollectionsForMainQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CollectionsForMainQuery,
    CollectionsForMainQueryVariables
  >
) {
  return Apollo.useQuery<
    CollectionsForMainQuery,
    CollectionsForMainQueryVariables
  >(CollectionsForMainDocument, baseOptions);
}
export function useCollectionsForMainLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CollectionsForMainQuery,
    CollectionsForMainQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    CollectionsForMainQuery,
    CollectionsForMainQueryVariables
  >(CollectionsForMainDocument, baseOptions);
}
export type CollectionsForMainQueryHookResult = ReturnType<
  typeof useCollectionsForMainQuery
>;
export type CollectionsForMainLazyQueryHookResult = ReturnType<
  typeof useCollectionsForMainLazyQuery
>;
export type CollectionsForMainQueryResult = Apollo.QueryResult<
  CollectionsForMainQuery,
  CollectionsForMainQueryVariables
>;
export const WebtoonForWebtoonDetailDocument = gql`
  query webtoonForWebtoonDetail($id: ID!) {
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
      commentsConnection(first: 4) {
        counts
        edges {
          node {
            message
            createdAt
            writer {
              name
            }
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
        webtoonsConnection(first: 6, after: $id) {
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
 * __useWebtoonForWebtoonDetailQuery__
 *
 * To run a query within a React component, call `useWebtoonForWebtoonDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useWebtoonForWebtoonDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWebtoonForWebtoonDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWebtoonForWebtoonDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<
    WebtoonForWebtoonDetailQuery,
    WebtoonForWebtoonDetailQueryVariables
  >
) {
  return Apollo.useQuery<
    WebtoonForWebtoonDetailQuery,
    WebtoonForWebtoonDetailQueryVariables
  >(WebtoonForWebtoonDetailDocument, baseOptions);
}
export function useWebtoonForWebtoonDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    WebtoonForWebtoonDetailQuery,
    WebtoonForWebtoonDetailQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    WebtoonForWebtoonDetailQuery,
    WebtoonForWebtoonDetailQueryVariables
  >(WebtoonForWebtoonDetailDocument, baseOptions);
}
export type WebtoonForWebtoonDetailQueryHookResult = ReturnType<
  typeof useWebtoonForWebtoonDetailQuery
>;
export type WebtoonForWebtoonDetailLazyQueryHookResult = ReturnType<
  typeof useWebtoonForWebtoonDetailLazyQuery
>;
export type WebtoonForWebtoonDetailQueryResult = Apollo.QueryResult<
  WebtoonForWebtoonDetailQuery,
  WebtoonForWebtoonDetailQueryVariables
>;
export const RandomWebtoonsForWebtoonDetailDocument = gql`
  query randomWebtoonsForWebtoonDetail {
    randomWebtoons(take: 6) {
      id
      thumbnail
    }
  }
`;

/**
 * __useRandomWebtoonsForWebtoonDetailQuery__
 *
 * To run a query within a React component, call `useRandomWebtoonsForWebtoonDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useRandomWebtoonsForWebtoonDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRandomWebtoonsForWebtoonDetailQuery({
 *   variables: {
 *   },
 * });
 */
export function useRandomWebtoonsForWebtoonDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<
    RandomWebtoonsForWebtoonDetailQuery,
    RandomWebtoonsForWebtoonDetailQueryVariables
  >
) {
  return Apollo.useQuery<
    RandomWebtoonsForWebtoonDetailQuery,
    RandomWebtoonsForWebtoonDetailQueryVariables
  >(RandomWebtoonsForWebtoonDetailDocument, baseOptions);
}
export function useRandomWebtoonsForWebtoonDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RandomWebtoonsForWebtoonDetailQuery,
    RandomWebtoonsForWebtoonDetailQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    RandomWebtoonsForWebtoonDetailQuery,
    RandomWebtoonsForWebtoonDetailQueryVariables
  >(RandomWebtoonsForWebtoonDetailDocument, baseOptions);
}
export type RandomWebtoonsForWebtoonDetailQueryHookResult = ReturnType<
  typeof useRandomWebtoonsForWebtoonDetailQuery
>;
export type RandomWebtoonsForWebtoonDetailLazyQueryHookResult = ReturnType<
  typeof useRandomWebtoonsForWebtoonDetailLazyQuery
>;
export type RandomWebtoonsForWebtoonDetailQueryResult = Apollo.QueryResult<
  RandomWebtoonsForWebtoonDetailQuery,
  RandomWebtoonsForWebtoonDetailQueryVariables
>;
export const UserForWithAuthDocument = gql`
  query userForWithAuth($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
`;

/**
 * __useUserForWithAuthQuery__
 *
 * To run a query within a React component, call `useUserForWithAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserForWithAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserForWithAuthQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserForWithAuthQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UserForWithAuthQuery,
    UserForWithAuthQueryVariables
  >
) {
  return Apollo.useQuery<UserForWithAuthQuery, UserForWithAuthQueryVariables>(
    UserForWithAuthDocument,
    baseOptions
  );
}
export function useUserForWithAuthLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserForWithAuthQuery,
    UserForWithAuthQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    UserForWithAuthQuery,
    UserForWithAuthQueryVariables
  >(UserForWithAuthDocument, baseOptions);
}
export type UserForWithAuthQueryHookResult = ReturnType<
  typeof useUserForWithAuthQuery
>;
export type UserForWithAuthLazyQueryHookResult = ReturnType<
  typeof useUserForWithAuthLazyQuery
>;
export type UserForWithAuthQueryResult = Apollo.QueryResult<
  UserForWithAuthQuery,
  UserForWithAuthQueryVariables
>;
export const LoginDocument = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
      user {
        id
      }
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const SignupDocument = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(input: { name: $name, email: $email, password: $password }) {
      token
      user {
        id
      }
    }
  }
`;
export type SignupMutationFn = Apollo.MutationFunction<
  SignupMutation,
  SignupMutationVariables
>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignupMutation,
    SignupMutationVariables
  >
) {
  return Apollo.useMutation<SignupMutation, SignupMutationVariables>(
    SignupDocument,
    baseOptions
  );
}
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<
  SignupMutation,
  SignupMutationVariables
>;
export const CollectionsForCollectionListDocument = gql`
  query collectionsForCollectionList($keyword: String, $after: ID) {
    collections(first: 3, keyword: $keyword, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ...collectionCard
        }
      }
    }
  }
  ${CollectionCardFragmentDoc}
`;

/**
 * __useCollectionsForCollectionListQuery__
 *
 * To run a query within a React component, call `useCollectionsForCollectionListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionsForCollectionListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionsForCollectionListQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useCollectionsForCollectionListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CollectionsForCollectionListQuery,
    CollectionsForCollectionListQueryVariables
  >
) {
  return Apollo.useQuery<
    CollectionsForCollectionListQuery,
    CollectionsForCollectionListQueryVariables
  >(CollectionsForCollectionListDocument, baseOptions);
}
export function useCollectionsForCollectionListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CollectionsForCollectionListQuery,
    CollectionsForCollectionListQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    CollectionsForCollectionListQuery,
    CollectionsForCollectionListQueryVariables
  >(CollectionsForCollectionListDocument, baseOptions);
}
export type CollectionsForCollectionListQueryHookResult = ReturnType<
  typeof useCollectionsForCollectionListQuery
>;
export type CollectionsForCollectionListLazyQueryHookResult = ReturnType<
  typeof useCollectionsForCollectionListLazyQuery
>;
export type CollectionsForCollectionListQueryResult = Apollo.QueryResult<
  CollectionsForCollectionListQuery,
  CollectionsForCollectionListQueryVariables
>;
export const SearchForCategoryDocument = gql`
  query searchForCategory(
    $keyword: String
    $where: SearchFiltering
    $webtoonId: ID
    $collectionId: ID
  ) {
    search(
      keyword: $keyword
      where: $where
      webtoonPaging: { first: 10, after: $webtoonId }
      collectionPaging: { first: 10, after: $collectionId }
    ) {
      webtoonResult {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            ...webtoonCard
          }
        }
      }
      collectionResult {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            ...collectionCard
          }
        }
      }
    }
  }
  ${WebtoonCardFragmentDoc}
  ${CollectionCardFragmentDoc}
`;

/**
 * __useSearchForCategoryQuery__
 *
 * To run a query within a React component, call `useSearchForCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchForCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchForCategoryQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *      where: // value for 'where'
 *      webtoonId: // value for 'webtoonId'
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useSearchForCategoryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SearchForCategoryQuery,
    SearchForCategoryQueryVariables
  >
) {
  return Apollo.useQuery<
    SearchForCategoryQuery,
    SearchForCategoryQueryVariables
  >(SearchForCategoryDocument, baseOptions);
}
export function useSearchForCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchForCategoryQuery,
    SearchForCategoryQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    SearchForCategoryQuery,
    SearchForCategoryQueryVariables
  >(SearchForCategoryDocument, baseOptions);
}
export type SearchForCategoryQueryHookResult = ReturnType<
  typeof useSearchForCategoryQuery
>;
export type SearchForCategoryLazyQueryHookResult = ReturnType<
  typeof useSearchForCategoryLazyQuery
>;
export type SearchForCategoryQueryResult = Apollo.QueryResult<
  SearchForCategoryQuery,
  SearchForCategoryQueryVariables
>;
export const GenresForFilterDocument = gql`
  query genresForFilter {
    genres {
      code
      name
    }
  }
`;

/**
 * __useGenresForFilterQuery__
 *
 * To run a query within a React component, call `useGenresForFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenresForFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenresForFilterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGenresForFilterQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GenresForFilterQuery,
    GenresForFilterQueryVariables
  >
) {
  return Apollo.useQuery<GenresForFilterQuery, GenresForFilterQueryVariables>(
    GenresForFilterDocument,
    baseOptions
  );
}
export function useGenresForFilterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GenresForFilterQuery,
    GenresForFilterQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    GenresForFilterQuery,
    GenresForFilterQueryVariables
  >(GenresForFilterDocument, baseOptions);
}
export type GenresForFilterQueryHookResult = ReturnType<
  typeof useGenresForFilterQuery
>;
export type GenresForFilterLazyQueryHookResult = ReturnType<
  typeof useGenresForFilterLazyQuery
>;
export type GenresForFilterQueryResult = Apollo.QueryResult<
  GenresForFilterQuery,
  GenresForFilterQueryVariables
>;
export const SearchForAutoCompleteDocument = gql`
  query searchForAutoComplete($keyword: String) {
    search(
      keyword: $keyword
      webtoonPaging: { first: 3 }
      collectionPaging: { first: 3 }
    ) {
      webtoonResult {
        edges {
          node {
            id
            title
          }
        }
      }
      collectionResult {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  }
`;

/**
 * __useSearchForAutoCompleteQuery__
 *
 * To run a query within a React component, call `useSearchForAutoCompleteQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchForAutoCompleteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchForAutoCompleteQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *   },
 * });
 */
export function useSearchForAutoCompleteQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SearchForAutoCompleteQuery,
    SearchForAutoCompleteQueryVariables
  >
) {
  return Apollo.useQuery<
    SearchForAutoCompleteQuery,
    SearchForAutoCompleteQueryVariables
  >(SearchForAutoCompleteDocument, baseOptions);
}
export function useSearchForAutoCompleteLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchForAutoCompleteQuery,
    SearchForAutoCompleteQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    SearchForAutoCompleteQuery,
    SearchForAutoCompleteQueryVariables
  >(SearchForAutoCompleteDocument, baseOptions);
}
export type SearchForAutoCompleteQueryHookResult = ReturnType<
  typeof useSearchForAutoCompleteQuery
>;
export type SearchForAutoCompleteLazyQueryHookResult = ReturnType<
  typeof useSearchForAutoCompleteLazyQuery
>;
export type SearchForAutoCompleteQueryResult = Apollo.QueryResult<
  SearchForAutoCompleteQuery,
  SearchForAutoCompleteQueryVariables
>;
export const CollectionForCollectionDetailDocument = gql`
  query collectionForCollectionDetail($id: ID!, $after: ID) {
    collection(id: $id) {
      id
      title
      description
      writer {
        name
      }
      webtoonsConnection(first: 4, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            ...webtoonCard
          }
        }
      }
    }
  }
  ${WebtoonCardFragmentDoc}
`;

/**
 * __useCollectionForCollectionDetailQuery__
 *
 * To run a query within a React component, call `useCollectionForCollectionDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionForCollectionDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionForCollectionDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useCollectionForCollectionDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CollectionForCollectionDetailQuery,
    CollectionForCollectionDetailQueryVariables
  >
) {
  return Apollo.useQuery<
    CollectionForCollectionDetailQuery,
    CollectionForCollectionDetailQueryVariables
  >(CollectionForCollectionDetailDocument, baseOptions);
}
export function useCollectionForCollectionDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CollectionForCollectionDetailQuery,
    CollectionForCollectionDetailQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    CollectionForCollectionDetailQuery,
    CollectionForCollectionDetailQueryVariables
  >(CollectionForCollectionDetailDocument, baseOptions);
}
export type CollectionForCollectionDetailQueryHookResult = ReturnType<
  typeof useCollectionForCollectionDetailQuery
>;
export type CollectionForCollectionDetailLazyQueryHookResult = ReturnType<
  typeof useCollectionForCollectionDetailLazyQuery
>;
export type CollectionForCollectionDetailQueryResult = Apollo.QueryResult<
  CollectionForCollectionDetailQuery,
  CollectionForCollectionDetailQueryVariables
>;
