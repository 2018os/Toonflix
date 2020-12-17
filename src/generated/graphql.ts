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

export enum Platform {
  Naver = 'NAVER',
  Daum = 'DAUM'
}

export enum CollectionType {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

/** interface */
export type Node = {
  id: Scalars['ID'];
};

export type Connection = {
  edges?: Maybe<Array<Maybe<Edge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
  count: Scalars['Int'];
};

export type Edge = {
  cursor: Scalars['String'];
  node?: Maybe<Node>;
};

/** types */
export type Query = {
  __typename?: 'Query';
  authors: AuthorsConnection;
  webtoons: WebtoonsConnection;
  collections: CollectionsConnection;
  genres?: Maybe<Array<Maybe<Genre>>>;
  users: UsersConnection;
  user: User;
  me: User;
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
  updateCollection: Collection;
  likeCollection: User;
  dislikeCollection: User;
  postComment: Comment;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationSignupArgs = {
  input: SignupInput;
};

export type MutationCreateCollectionArgs = {
  input: CreateCollectionInput;
};

export type MutationUpdateCollectionArgs = {
  input: UpdateCollectionInput;
};

export type MutationLikeCollectionArgs = {
  collectionId: Scalars['ID'];
};

export type MutationDislikeCollectionArgs = {
  collectionId: Scalars['ID'];
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

export type UserStatus = {
  __typename?: 'UserStatus';
  commentsCount: Scalars['Int'];
  collectionsCount: Scalars['Int'];
  likedCollectionsCount: Scalars['Int'];
};

export type SearchResult = {
  __typename?: 'SearchResult';
  webtoonResult?: Maybe<SearchResultWebtoonsConnection>;
  collectionResult?: Maybe<SearchResultCollectionsConnection>;
};

export type SearchResultWebtoonResultArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type SearchResultCollectionResultArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
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
  authors: AuthorsConnection;
  collections: CollectionsConnection;
  genres?: Maybe<Array<Genre>>;
  comments: CommentsConnection;
};

/** nodes */
export type WebtoonAuthorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

/** nodes */
export type WebtoonCollectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

/** nodes */
export type WebtoonCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type Author = Node & {
  __typename?: 'Author';
  id: Scalars['ID'];
  name: Scalars['String'];
  webtoons: WebtoonsConnection;
};

export type AuthorWebtoonsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type Genre = {
  __typename?: 'Genre';
  code: Scalars['String'];
  name: Scalars['String'];
  webtoons: WebtoonsConnection;
};

export type GenreWebtoonsArgs = {
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
  webtoons: WebtoonsConnection;
  comments: CommentsConnection;
  writer: User;
  createdAt: Scalars['Date'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type CollectionWebtoonsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type CollectionCommentsArgs = {
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
  level: Scalars['Int'];
  exp: Scalars['Int'];
  status: UserStatus;
  likedCollections: CollectionsConnection;
  myCollections: CollectionsConnection;
  comments: CommentsConnection;
};

export type UserLikedCollectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type UserMyCollectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type UserCommentsArgs = {
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
  comments: CommentsConnection;
};

export type CommentCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

/** query connections */
export type CommentsConnection = Connection & {
  __typename?: 'CommentsConnection';
  edges?: Maybe<Array<Maybe<CommentEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
  count: Scalars['Int'];
};

export type UsersConnection = Connection & {
  __typename?: 'UsersConnection';
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
  count: Scalars['Int'];
};

export type WebtoonsConnection = Connection & {
  __typename?: 'WebtoonsConnection';
  edges?: Maybe<Array<Maybe<WebtoonEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
  count: Scalars['Int'];
};

export type CollectionsConnection = Connection & {
  __typename?: 'CollectionsConnection';
  edges?: Maybe<Array<Maybe<CollectionEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
  count: Scalars['Int'];
};

export type AuthorsConnection = Connection & {
  __typename?: 'AuthorsConnection';
  edges?: Maybe<Array<Maybe<AuthorEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
  count: Scalars['Int'];
};

export type SearchResultWebtoonsConnection = Connection & {
  __typename?: 'SearchResultWebtoonsConnection';
  edges?: Maybe<Array<Maybe<SearchResultWebtoonsEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
  count: Scalars['Int'];
};

export type SearchResultCollectionsConnection = Connection & {
  __typename?: 'SearchResultCollectionsConnection';
  edges?: Maybe<Array<Maybe<SearchResultCollectionsEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
  count: Scalars['Int'];
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

export type UserEdge = Edge & {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node?: Maybe<User>;
};

export type CommentEdge = Edge & {
  __typename?: 'CommentEdge';
  cursor: Scalars['String'];
  node?: Maybe<Comment>;
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

export type CreateCollectionInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  webtoonIds: Array<Scalars['ID']>;
};

export type UpdateCollectionInput = {
  collectionId: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  webtoonIds?: Maybe<Array<Scalars['ID']>>;
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
  platforms?: Maybe<Array<Platform>>;
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
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

export type CollectionForCollectionDetailQueryVariables = Exact<{
  id: Scalars['ID'];
  afterWebtoonId: Scalars['ID'];
  afterCommentId: Scalars['ID'];
}>;

export type CollectionForCollectionDetailQuery = { __typename?: 'Query' } & {
  collection: { __typename?: 'Collection' } & Pick<
    Collection,
    'id' | 'title' | 'description'
  > & {
      writer: { __typename?: 'User' } & Pick<User, 'name'>;
      webtoons: { __typename?: 'WebtoonsConnection' } & {
        pageInfo: { __typename?: 'PageInfo' } & Pick<
          PageInfo,
          'hasNextPage' | 'endCursor'
        >;
        edges?: Maybe<
          Array<
            Maybe<
              { __typename?: 'WebtoonEdge' } & {
                node?: Maybe<{ __typename?: 'Webtoon' } & WebtoonCardFragment>;
              }
            >
          >
        >;
      };
      comments: {
        __typename?: 'CommentsConnection';
      } & CommentsConnectionForCommentsFragment;
    };
};

export type PostCommentForCollectionDetailMutationVariables = Exact<{
  collectionId: Scalars['ID'];
  message: Scalars['String'];
}>;

export type PostCommentForCollectionDetailMutation = {
  __typename?: 'Mutation';
} & { postComment: { __typename?: 'Comment' } & CommentFragment };

export type CollectionsForCollectionListQueryVariables = Exact<{
  keyword?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['ID']>;
}>;

export type CollectionsForCollectionListQuery = { __typename?: 'Query' } & {
  collections: { __typename?: 'CollectionsConnection' } & {
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

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = { __typename?: 'Mutation' } & {
  login: { __typename?: 'AuthPayload' } & Pick<AuthPayload, 'token'> & {
      user?: Maybe<{ __typename?: 'User' } & Pick<User, 'id'>>;
    };
};

export type CollectionsForMainQueryVariables = Exact<{ [key: string]: never }>;

export type CollectionsForMainQuery = { __typename?: 'Query' } & {
  collections: { __typename?: 'CollectionsConnection' } & {
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
                  webtoons: { __typename?: 'WebtoonsConnection' } & {
                    pageInfo: { __typename?: 'PageInfo' } & Pick<
                      PageInfo,
                      'hasNextPage' | 'hasPreviousPage'
                    >;
                    edges?: Maybe<
                      Array<
                        Maybe<
                          { __typename?: 'WebtoonEdge' } & {
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

export type MeForProfileQueryVariables = Exact<{ [key: string]: never }>;

export type MeForProfileQuery = { __typename?: 'Query' } & {
  me: { __typename?: 'User' } & Pick<
    User,
    'name' | 'email' | 'level' | 'exp'
  > & {
      status: { __typename?: 'UserStatus' } & Pick<
        UserStatus,
        'commentsCount' | 'collectionsCount' | 'likedCollectionsCount'
      >;
    };
};

export type RandomWebtoonsForRandomQueryVariables = Exact<{
  [key: string]: never;
}>;

export type RandomWebtoonsForRandomQuery = { __typename?: 'Query' } & {
  randomWebtoons?: Maybe<
    Array<{ __typename?: 'Webtoon' } & Pick<Webtoon, 'id' | 'thumbnail'>>
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

export type CollectionCardFragment = { __typename?: 'Collection' } & Pick<
  Collection,
  'id' | 'title'
> & {
    webtoons: { __typename?: 'WebtoonsConnection' } & {
      edges?: Maybe<
        Array<
          Maybe<
            { __typename?: 'WebtoonEdge' } & {
              node?: Maybe<
                { __typename?: 'Webtoon' } & Pick<Webtoon, 'id' | 'thumbnail'>
              >;
            }
          >
        >
      >;
    };
  };

export type CommentFragment = { __typename?: 'Comment' } & Pick<
  Comment,
  'id' | 'message' | 'createdAt'
> & { writer: { __typename?: 'User' } & Pick<User, 'name'> };

export type CommentsConnectionForCommentsFragment = {
  __typename?: 'CommentsConnection';
} & {
  pageInfo: { __typename?: 'PageInfo' } & Pick<
    PageInfo,
    'hasNextPage' | 'endCursor'
  >;
  edges?: Maybe<
    Array<
      Maybe<
        { __typename?: 'CommentEdge' } & {
          node?: Maybe<{ __typename?: 'Comment' } & CommentFragment>;
        }
      >
    >
  >;
};

export type WebtoonCardFragment = { __typename?: 'Webtoon' } & Pick<
  Webtoon,
  'id' | 'title' | 'isAdult' | 'isFinish' | 'isPay' | 'thumbnail'
> & {
    authors: { __typename?: 'AuthorsConnection' } & {
      edges?: Maybe<
        Array<
          Maybe<
            { __typename?: 'AuthorEdge' } & {
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

export type WebtoonForWebtoonDetailQueryVariables = Exact<{
  id: Scalars['ID'];
  afterCommentId: Scalars['ID'];
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
      authors: { __typename?: 'AuthorsConnection' } & {
        edges?: Maybe<
          Array<
            Maybe<
              { __typename?: 'AuthorEdge' } & {
                node?: Maybe<
                  { __typename?: 'Author' } & Pick<Author, 'id' | 'name'>
                >;
              }
            >
          >
        >;
      };
      comments: {
        __typename?: 'CommentsConnection';
      } & CommentsConnectionForCommentsFragment;
      collections: { __typename?: 'CollectionsConnection' } & {
        pageInfo: { __typename?: 'PageInfo' } & Pick<
          PageInfo,
          'hasPreviousPage' | 'hasNextPage'
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
      genres?: Maybe<
        Array<
          { __typename?: 'Genre' } & Pick<Genre, 'code' | 'name'> & {
              webtoons: { __typename?: 'WebtoonsConnection' } & {
                pageInfo: { __typename?: 'PageInfo' } & Pick<
                  PageInfo,
                  'hasNextPage' | 'hasPreviousPage'
                >;
                edges?: Maybe<
                  Array<
                    Maybe<
                      { __typename?: 'WebtoonEdge' } & {
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

export type PostCommentForWebtoonDetailMutationVariables = Exact<{
  webtoonId: Scalars['ID'];
  message: Scalars['String'];
}>;

export type PostCommentForWebtoonDetailMutation = {
  __typename?: 'Mutation';
} & { postComment: { __typename?: 'Comment' } & CommentFragment };

export type MeForWithAuthQueryVariables = Exact<{ [key: string]: never }>;

export type MeForWithAuthQuery = { __typename?: 'Query' } & {
  me: { __typename?: 'User' } & MyProfileFragment;
};

export type MyProfileFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'name'
> & {
    myCollections: {
      __typename?: 'CollectionsConnection';
    } & UserCollectionCardListFragment;
    likedCollections: {
      __typename?: 'CollectionsConnection';
    } & UserCollectionCardListFragment;
  };

export type UserCollectionCardListFragment = {
  __typename?: 'CollectionsConnection';
} & {
  pageInfo: { __typename?: 'PageInfo' } & Pick<PageInfo, 'hasNextPage'>;
  edges?: Maybe<
    Array<
      Maybe<
        { __typename?: 'CollectionEdge' } & {
          node?: Maybe<{ __typename?: 'Collection' } & CollectionCardFragment>;
        }
      >
    >
  >;
};

export type GenresForFilterQueryVariables = Exact<{ [key: string]: never }>;

export type GenresForFilterQuery = { __typename?: 'Query' } & {
  genres?: Maybe<
    Array<Maybe<{ __typename?: 'Genre' } & Pick<Genre, 'code' | 'name'>>>
  >;
};

export const CommentFragmentDoc = gql`
  fragment comment on Comment {
    id
    message
    createdAt
    writer {
      name
    }
  }
`;
export const CommentsConnectionForCommentsFragmentDoc = gql`
  fragment commentsConnectionForComments on CommentsConnection {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        ...comment
      }
    }
  }
  ${CommentFragmentDoc}
`;
export const WebtoonCardFragmentDoc = gql`
  fragment webtoonCard on Webtoon {
    id
    title
    authors(first: 4) {
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
    webtoons(first: 4) {
      edges {
        node {
          id
          thumbnail
        }
      }
    }
  }
`;
export const UserCollectionCardListFragmentDoc = gql`
  fragment userCollectionCardList on CollectionsConnection {
    pageInfo {
      hasNextPage
    }
    edges {
      node {
        ...collectionCard
      }
    }
  }
  ${CollectionCardFragmentDoc}
`;
export const MyProfileFragmentDoc = gql`
  fragment myProfile on User {
    id
    name
    myCollections(first: 8) {
      ...userCollectionCardList
    }
    likedCollections(first: 8) {
      ...userCollectionCardList
    }
  }
  ${UserCollectionCardListFragmentDoc}
`;
export const SearchForCategoryDocument = gql`
  query searchForCategory(
    $keyword: String
    $where: SearchFiltering
    $webtoonId: ID
    $collectionId: ID
  ) {
    search(keyword: $keyword, where: $where) {
      webtoonResult(first: 12, after: $webtoonId) {
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
      collectionResult(first: 1, after: $collectionId) {
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
export const CollectionForCollectionDetailDocument = gql`
  query collectionForCollectionDetail(
    $id: ID!
    $afterWebtoonId: ID!
    $afterCommentId: ID!
  ) {
    collection(id: $id) {
      id
      title
      description
      writer {
        name
      }
      webtoons(first: 4, after: $afterWebtoonId) {
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
      comments(first: 4, after: $afterCommentId) {
        ...commentsConnectionForComments
      }
    }
  }
  ${WebtoonCardFragmentDoc}
  ${CommentsConnectionForCommentsFragmentDoc}
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
 *      afterWebtoonId: // value for 'afterWebtoonId'
 *      afterCommentId: // value for 'afterCommentId'
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
export const PostCommentForCollectionDetailDocument = gql`
  mutation postCommentForCollectionDetail(
    $collectionId: ID!
    $message: String!
  ) {
    postComment(input: { collectionId: $collectionId, message: $message }) {
      ...comment
    }
  }
  ${CommentFragmentDoc}
`;
export type PostCommentForCollectionDetailMutationFn = Apollo.MutationFunction<
  PostCommentForCollectionDetailMutation,
  PostCommentForCollectionDetailMutationVariables
>;

/**
 * __usePostCommentForCollectionDetailMutation__
 *
 * To run a mutation, you first call `usePostCommentForCollectionDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostCommentForCollectionDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postCommentForCollectionDetailMutation, { data, loading, error }] = usePostCommentForCollectionDetailMutation({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      message: // value for 'message'
 *   },
 * });
 */
export function usePostCommentForCollectionDetailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PostCommentForCollectionDetailMutation,
    PostCommentForCollectionDetailMutationVariables
  >
) {
  return Apollo.useMutation<
    PostCommentForCollectionDetailMutation,
    PostCommentForCollectionDetailMutationVariables
  >(PostCommentForCollectionDetailDocument, baseOptions);
}
export type PostCommentForCollectionDetailMutationHookResult = ReturnType<
  typeof usePostCommentForCollectionDetailMutation
>;
export type PostCommentForCollectionDetailMutationResult = Apollo.MutationResult<
  PostCommentForCollectionDetailMutation
>;
export type PostCommentForCollectionDetailMutationOptions = Apollo.BaseMutationOptions<
  PostCommentForCollectionDetailMutation,
  PostCommentForCollectionDetailMutationVariables
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
          webtoons(first: 4) {
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
export const MeForProfileDocument = gql`
  query meForProfile {
    me {
      name
      email
      level
      exp
      status {
        commentsCount
        collectionsCount
        likedCollectionsCount
      }
    }
  }
`;

/**
 * __useMeForProfileQuery__
 *
 * To run a query within a React component, call `useMeForProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeForProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeForProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeForProfileQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MeForProfileQuery,
    MeForProfileQueryVariables
  >
) {
  return Apollo.useQuery<MeForProfileQuery, MeForProfileQueryVariables>(
    MeForProfileDocument,
    baseOptions
  );
}
export function useMeForProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MeForProfileQuery,
    MeForProfileQueryVariables
  >
) {
  return Apollo.useLazyQuery<MeForProfileQuery, MeForProfileQueryVariables>(
    MeForProfileDocument,
    baseOptions
  );
}
export type MeForProfileQueryHookResult = ReturnType<
  typeof useMeForProfileQuery
>;
export type MeForProfileLazyQueryHookResult = ReturnType<
  typeof useMeForProfileLazyQuery
>;
export type MeForProfileQueryResult = Apollo.QueryResult<
  MeForProfileQuery,
  MeForProfileQueryVariables
>;
export const RandomWebtoonsForRandomDocument = gql`
  query randomWebtoonsForRandom {
    randomWebtoons(take: 8) {
      id
      thumbnail
    }
  }
`;

/**
 * __useRandomWebtoonsForRandomQuery__
 *
 * To run a query within a React component, call `useRandomWebtoonsForRandomQuery` and pass it any options that fit your needs.
 * When your component renders, `useRandomWebtoonsForRandomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRandomWebtoonsForRandomQuery({
 *   variables: {
 *   },
 * });
 */
export function useRandomWebtoonsForRandomQuery(
  baseOptions?: Apollo.QueryHookOptions<
    RandomWebtoonsForRandomQuery,
    RandomWebtoonsForRandomQueryVariables
  >
) {
  return Apollo.useQuery<
    RandomWebtoonsForRandomQuery,
    RandomWebtoonsForRandomQueryVariables
  >(RandomWebtoonsForRandomDocument, baseOptions);
}
export function useRandomWebtoonsForRandomLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RandomWebtoonsForRandomQuery,
    RandomWebtoonsForRandomQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    RandomWebtoonsForRandomQuery,
    RandomWebtoonsForRandomQueryVariables
  >(RandomWebtoonsForRandomDocument, baseOptions);
}
export type RandomWebtoonsForRandomQueryHookResult = ReturnType<
  typeof useRandomWebtoonsForRandomQuery
>;
export type RandomWebtoonsForRandomLazyQueryHookResult = ReturnType<
  typeof useRandomWebtoonsForRandomLazyQuery
>;
export type RandomWebtoonsForRandomQueryResult = Apollo.QueryResult<
  RandomWebtoonsForRandomQuery,
  RandomWebtoonsForRandomQueryVariables
>;
export const SearchForAutoCompleteDocument = gql`
  query searchForAutoComplete($keyword: String) {
    search(keyword: $keyword) {
      webtoonResult(first: 3) {
        edges {
          node {
            id
            title
          }
        }
      }
      collectionResult(first: 3) {
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
export const WebtoonForWebtoonDetailDocument = gql`
  query webtoonForWebtoonDetail($id: ID!, $afterCommentId: ID!) {
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
      authors(first: 4) {
        edges {
          node {
            id
            name
          }
        }
      }
      comments(first: 4, after: $afterCommentId) {
        ...commentsConnectionForComments
      }
      collections(first: 4) {
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
        webtoons(first: 6, after: $id) {
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
  ${CommentsConnectionForCommentsFragmentDoc}
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
 *      afterCommentId: // value for 'afterCommentId'
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
export const PostCommentForWebtoonDetailDocument = gql`
  mutation postCommentForWebtoonDetail($webtoonId: ID!, $message: String!) {
    postComment(input: { webtoonId: $webtoonId, message: $message }) {
      ...comment
    }
  }
  ${CommentFragmentDoc}
`;
export type PostCommentForWebtoonDetailMutationFn = Apollo.MutationFunction<
  PostCommentForWebtoonDetailMutation,
  PostCommentForWebtoonDetailMutationVariables
>;

/**
 * __usePostCommentForWebtoonDetailMutation__
 *
 * To run a mutation, you first call `usePostCommentForWebtoonDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostCommentForWebtoonDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postCommentForWebtoonDetailMutation, { data, loading, error }] = usePostCommentForWebtoonDetailMutation({
 *   variables: {
 *      webtoonId: // value for 'webtoonId'
 *      message: // value for 'message'
 *   },
 * });
 */
export function usePostCommentForWebtoonDetailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PostCommentForWebtoonDetailMutation,
    PostCommentForWebtoonDetailMutationVariables
  >
) {
  return Apollo.useMutation<
    PostCommentForWebtoonDetailMutation,
    PostCommentForWebtoonDetailMutationVariables
  >(PostCommentForWebtoonDetailDocument, baseOptions);
}
export type PostCommentForWebtoonDetailMutationHookResult = ReturnType<
  typeof usePostCommentForWebtoonDetailMutation
>;
export type PostCommentForWebtoonDetailMutationResult = Apollo.MutationResult<
  PostCommentForWebtoonDetailMutation
>;
export type PostCommentForWebtoonDetailMutationOptions = Apollo.BaseMutationOptions<
  PostCommentForWebtoonDetailMutation,
  PostCommentForWebtoonDetailMutationVariables
>;
export const MeForWithAuthDocument = gql`
  query meForWithAuth {
    me {
      ...myProfile
    }
  }
  ${MyProfileFragmentDoc}
`;

/**
 * __useMeForWithAuthQuery__
 *
 * To run a query within a React component, call `useMeForWithAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeForWithAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeForWithAuthQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeForWithAuthQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MeForWithAuthQuery,
    MeForWithAuthQueryVariables
  >
) {
  return Apollo.useQuery<MeForWithAuthQuery, MeForWithAuthQueryVariables>(
    MeForWithAuthDocument,
    baseOptions
  );
}
export function useMeForWithAuthLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MeForWithAuthQuery,
    MeForWithAuthQueryVariables
  >
) {
  return Apollo.useLazyQuery<MeForWithAuthQuery, MeForWithAuthQueryVariables>(
    MeForWithAuthDocument,
    baseOptions
  );
}
export type MeForWithAuthQueryHookResult = ReturnType<
  typeof useMeForWithAuthQuery
>;
export type MeForWithAuthLazyQueryHookResult = ReturnType<
  typeof useMeForWithAuthLazyQuery
>;
export type MeForWithAuthQueryResult = Apollo.QueryResult<
  MeForWithAuthQuery,
  MeForWithAuthQueryVariables
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
