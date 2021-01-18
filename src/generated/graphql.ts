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
  where?: Maybe<CollectionFiltering>;
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
  deleteCollection: Collection;
  authenticateByEmail: SendEmailPayload;
  updateUser: User;
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

export type MutationDeleteCollectionArgs = {
  collectionId: Scalars['ID'];
};

export type MutationAuthenticateByEmailArgs = {
  input: SendEmailInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type SendEmailPayload = {
  __typename?: 'SendEmailPayload';
  code: Scalars['String'];
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
  isAuthentication: Scalars['Boolean'];
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
  where?: Maybe<CollectionFiltering>;
};

export type UserMyCollectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  where?: Maybe<CollectionFiltering>;
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

export type CollectionFiltering = {
  keyword?: Maybe<Scalars['String']>;
  containWebtoonIds?: Maybe<Array<Scalars['ID']>>;
};

export type SearchFiltering = {
  isPay?: Maybe<Scalars['Boolean']>;
  isAdult?: Maybe<Scalars['Boolean']>;
  isFinish?: Maybe<Scalars['Boolean']>;
  platforms?: Maybe<Array<Platform>>;
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SendEmailInput = {
  email: Scalars['String'];
};

export type UpdateUserInput = {
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  isAuthentication?: Maybe<Scalars['Boolean']>;
};

export type SearchForCategoryQueryVariables = Exact<{
  keyword?: Maybe<Scalars['String']>;
  where?: Maybe<SearchFiltering>;
  afterWebtoonId?: Maybe<Scalars['ID']>;
  afterCollectionId?: Maybe<Scalars['ID']>;
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
  afterWebtoonId?: Maybe<Scalars['ID']>;
  afterCommentId?: Maybe<Scalars['ID']>;
}>;

export type CollectionForCollectionDetailQuery = { __typename?: 'Query' } & {
  collection: { __typename?: 'Collection' } & CollectionFragment;
};

export type SearchForAddWebtoonsModalQueryVariables = Exact<{
  keyword?: Maybe<Scalars['String']>;
  afterWebtoonId?: Maybe<Scalars['ID']>;
}>;

export type SearchForAddWebtoonsModalQuery = { __typename?: 'Query' } & {
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
  };
};

export type PostCommentForCollectionDetailMutationVariables = Exact<{
  collectionId: Scalars['ID'];
  message: Scalars['String'];
}>;

export type PostCommentForCollectionDetailMutation = {
  __typename?: 'Mutation';
} & { postComment: { __typename?: 'Comment' } & CommentFragment };

export type UpdateCollectionForCollectionDetailMutationVariables = Exact<{
  collectionId: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  afterWebtoonId?: Maybe<Scalars['ID']>;
  afterCommentId?: Maybe<Scalars['ID']>;
}>;

export type UpdateCollectionForCollectionDetailMutation = {
  __typename?: 'Mutation';
} & { updateCollection: { __typename?: 'Collection' } & CollectionFragment };

export type AddWebtoonsForCollectionDetailMutationVariables = Exact<{
  collectionId: Scalars['ID'];
  webtoonIds: Array<Scalars['ID']>;
  afterWebtoonId?: Maybe<Scalars['ID']>;
  afterCommentId?: Maybe<Scalars['ID']>;
}>;

export type AddWebtoonsForCollectionDetailMutation = {
  __typename?: 'Mutation';
} & { updateCollection: { __typename?: 'Collection' } & CollectionFragment };

export type LikeCollectionForCollectionDetailMutationVariables = Exact<{
  collectionId: Scalars['ID'];
}>;

export type LikeCollectionForCollectionDetailMutation = {
  __typename?: 'Mutation';
} & { likeCollection: { __typename?: 'User' } & Pick<User, 'id'> };

export type DeleteCollectionForCollectionDetailMutationVariables = Exact<{
  collectionId: Scalars['ID'];
}>;

export type DeleteCollectionForCollectionDetailMutation = {
  __typename?: 'Mutation';
} & {
  deleteCollection: { __typename?: 'Collection' } & Pick<
    Collection,
    'id' | 'title'
  >;
};

export type CollectionFragment = { __typename?: 'Collection' } & Pick<
  Collection,
  'id' | 'title' | 'description'
> & {
    writer: { __typename?: 'User' } & Pick<User, 'id' | 'name'>;
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

export type MeForMyCollectionQueryVariables = Exact<{
  afterMyCollectionId?: Maybe<Scalars['ID']>;
  afterLikedCollectionId?: Maybe<Scalars['ID']>;
}>;

export type MeForMyCollectionQuery = { __typename?: 'Query' } & {
  me: { __typename?: 'User' } & {
    myCollections: {
      __typename?: 'CollectionsConnection';
    } & UserCollectionCardListFragment;
    likedCollections: {
      __typename?: 'CollectionsConnection';
    } & UserCollectionCardListFragment;
  };
};

export type CreateCollectionForMyCollectionMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
}>;

export type CreateCollectionForMyCollectionMutation = {
  __typename?: 'Mutation';
} & {
  createCollection: { __typename?: 'Collection' } & CollectionCardFragment;
};

export type UserCollectionCardListFragment = {
  __typename?: 'CollectionsConnection';
} & {
  pageInfo: { __typename?: 'PageInfo' } & Pick<
    PageInfo,
    'hasNextPage' | 'endCursor'
  >;
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

export type MeForProfileQueryVariables = Exact<{ [key: string]: never }>;

export type MeForProfileQuery = { __typename?: 'Query' } & {
  me: { __typename?: 'User' } & Pick<
    User,
    'id' | 'name' | 'email' | 'level' | 'exp'
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

export type AuthenticateByEmailForAuthenticationModalMutationVariables = Exact<{
  email: Scalars['String'];
}>;

export type AuthenticateByEmailForAuthenticationModalMutation = {
  __typename?: 'Mutation';
} & {
  authenticateByEmail: { __typename?: 'SendEmailPayload' } & Pick<
    SendEmailPayload,
    'code'
  >;
};

export type UpdateUserForAuthenticationModalMutationVariables = Exact<{
  isAuthentication?: Maybe<Scalars['Boolean']>;
}>;

export type UpdateUserForAuthenticationModalMutation = {
  __typename?: 'Mutation';
} & { updateUser: { __typename?: 'User' } & MyInfoFragment };

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
> & { writer: { __typename?: 'User' } & Pick<User, 'name' | 'level'> };

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

export type LoginForLoginModalMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginForLoginModalMutation = { __typename?: 'Mutation' } & {
  login: { __typename?: 'AuthPayload' } & Pick<AuthPayload, 'token'> & {
      user?: Maybe<{ __typename?: 'User' } & Pick<User, 'id' | 'name'>>;
    };
};

export type SignupForSignupModalMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type SignupForSignupModalMutation = { __typename?: 'Mutation' } & {
  signup: { __typename?: 'AuthPayload' } & Pick<AuthPayload, 'token'> & {
      user?: Maybe<{ __typename?: 'User' } & Pick<User, 'id'>>;
    };
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

export type WebtoonForWebtoonDetailQueryVariables = Exact<{
  id: Scalars['ID'];
  afterCommentId?: Maybe<Scalars['ID']>;
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

export type MeForAddToCollectionModalQueryVariables = Exact<{
  afterMyCollectionId?: Maybe<Scalars['ID']>;
}>;

export type MeForAddToCollectionModalQuery = { __typename?: 'Query' } & {
  me: { __typename?: 'User' } & {
    myCollections: { __typename?: 'CollectionsConnection' } & {
      edges?: Maybe<
        Array<
          Maybe<
            { __typename?: 'CollectionEdge' } & {
              node?: Maybe<
                { __typename?: 'Collection' } & Pick<Collection, 'id' | 'title'>
              >;
            }
          >
        >
      >;
    };
  };
};

export type UpdateCollectionForWebtoonDetailMutationVariables = Exact<{
  collectionId: Scalars['ID'];
  webtoonIds: Array<Scalars['ID']>;
}>;

export type UpdateCollectionForWebtoonDetailMutation = {
  __typename?: 'Mutation';
} & {
  updateCollection: { __typename?: 'Collection' } & Pick<
    Collection,
    'id' | 'title'
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
  me: { __typename?: 'User' } & MyInfoFragment;
};

export type MyInfoFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'name' | 'email' | 'isAuthentication'
>;

export type GenresForFilterQueryVariables = Exact<{ [key: string]: never }>;

export type GenresForFilterQuery = { __typename?: 'Query' } & {
  genres?: Maybe<
    Array<Maybe<{ __typename?: 'Genre' } & Pick<Genre, 'code' | 'name'>>>
  >;
};

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
export const CommentFragmentDoc = gql`
  fragment comment on Comment {
    id
    message
    createdAt
    writer {
      name
      level
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
export const CollectionFragmentDoc = gql`
  fragment collection on Collection {
    id
    title
    description
    writer {
      id
      name
    }
    webtoons(first: 8, after: $afterWebtoonId) {
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
    comments(first: 8, after: $afterCommentId) {
      ...commentsConnectionForComments
    }
  }
  ${WebtoonCardFragmentDoc}
  ${CommentsConnectionForCommentsFragmentDoc}
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
      endCursor
    }
    edges {
      node {
        ...collectionCard
      }
    }
  }
  ${CollectionCardFragmentDoc}
`;
export const MyInfoFragmentDoc = gql`
  fragment myInfo on User {
    id
    name
    email
    isAuthentication
  }
`;
export const SearchForCategoryDocument = gql`
  query searchForCategory(
    $keyword: String
    $where: SearchFiltering
    $afterWebtoonId: ID
    $afterCollectionId: ID
  ) {
    search(keyword: $keyword, where: $where) {
      webtoonResult(first: 12, after: $afterWebtoonId) {
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
      collectionResult(first: 6, after: $afterCollectionId) {
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
 *      afterWebtoonId: // value for 'afterWebtoonId'
 *      afterCollectionId: // value for 'afterCollectionId'
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
    $afterWebtoonId: ID
    $afterCommentId: ID
  ) {
    collection(id: $id) {
      ...collection
    }
  }
  ${CollectionFragmentDoc}
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
export const SearchForAddWebtoonsModalDocument = gql`
  query searchForAddWebtoonsModal($keyword: String, $afterWebtoonId: ID) {
    search(keyword: $keyword) {
      webtoonResult(first: 12, after: $afterWebtoonId) {
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
    }
  }
  ${WebtoonCardFragmentDoc}
`;

/**
 * __useSearchForAddWebtoonsModalQuery__
 *
 * To run a query within a React component, call `useSearchForAddWebtoonsModalQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchForAddWebtoonsModalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchForAddWebtoonsModalQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *      afterWebtoonId: // value for 'afterWebtoonId'
 *   },
 * });
 */
export function useSearchForAddWebtoonsModalQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SearchForAddWebtoonsModalQuery,
    SearchForAddWebtoonsModalQueryVariables
  >
) {
  return Apollo.useQuery<
    SearchForAddWebtoonsModalQuery,
    SearchForAddWebtoonsModalQueryVariables
  >(SearchForAddWebtoonsModalDocument, baseOptions);
}
export function useSearchForAddWebtoonsModalLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchForAddWebtoonsModalQuery,
    SearchForAddWebtoonsModalQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    SearchForAddWebtoonsModalQuery,
    SearchForAddWebtoonsModalQueryVariables
  >(SearchForAddWebtoonsModalDocument, baseOptions);
}
export type SearchForAddWebtoonsModalQueryHookResult = ReturnType<
  typeof useSearchForAddWebtoonsModalQuery
>;
export type SearchForAddWebtoonsModalLazyQueryHookResult = ReturnType<
  typeof useSearchForAddWebtoonsModalLazyQuery
>;
export type SearchForAddWebtoonsModalQueryResult = Apollo.QueryResult<
  SearchForAddWebtoonsModalQuery,
  SearchForAddWebtoonsModalQueryVariables
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
export const UpdateCollectionForCollectionDetailDocument = gql`
  mutation updateCollectionForCollectionDetail(
    $collectionId: ID!
    $title: String!
    $description: String
    $afterWebtoonId: ID
    $afterCommentId: ID
  ) {
    updateCollection(
      input: {
        collectionId: $collectionId
        title: $title
        description: $description
      }
    ) {
      ...collection
    }
  }
  ${CollectionFragmentDoc}
`;
export type UpdateCollectionForCollectionDetailMutationFn = Apollo.MutationFunction<
  UpdateCollectionForCollectionDetailMutation,
  UpdateCollectionForCollectionDetailMutationVariables
>;

/**
 * __useUpdateCollectionForCollectionDetailMutation__
 *
 * To run a mutation, you first call `useUpdateCollectionForCollectionDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCollectionForCollectionDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCollectionForCollectionDetailMutation, { data, loading, error }] = useUpdateCollectionForCollectionDetailMutation({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      afterWebtoonId: // value for 'afterWebtoonId'
 *      afterCommentId: // value for 'afterCommentId'
 *   },
 * });
 */
export function useUpdateCollectionForCollectionDetailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCollectionForCollectionDetailMutation,
    UpdateCollectionForCollectionDetailMutationVariables
  >
) {
  return Apollo.useMutation<
    UpdateCollectionForCollectionDetailMutation,
    UpdateCollectionForCollectionDetailMutationVariables
  >(UpdateCollectionForCollectionDetailDocument, baseOptions);
}
export type UpdateCollectionForCollectionDetailMutationHookResult = ReturnType<
  typeof useUpdateCollectionForCollectionDetailMutation
>;
export type UpdateCollectionForCollectionDetailMutationResult = Apollo.MutationResult<
  UpdateCollectionForCollectionDetailMutation
>;
export type UpdateCollectionForCollectionDetailMutationOptions = Apollo.BaseMutationOptions<
  UpdateCollectionForCollectionDetailMutation,
  UpdateCollectionForCollectionDetailMutationVariables
>;
export const AddWebtoonsForCollectionDetailDocument = gql`
  mutation AddWebtoonsForCollectionDetail(
    $collectionId: ID!
    $webtoonIds: [ID!]!
    $afterWebtoonId: ID
    $afterCommentId: ID
  ) {
    updateCollection(
      input: { collectionId: $collectionId, webtoonIds: $webtoonIds }
    ) {
      ...collection
    }
  }
  ${CollectionFragmentDoc}
`;
export type AddWebtoonsForCollectionDetailMutationFn = Apollo.MutationFunction<
  AddWebtoonsForCollectionDetailMutation,
  AddWebtoonsForCollectionDetailMutationVariables
>;

/**
 * __useAddWebtoonsForCollectionDetailMutation__
 *
 * To run a mutation, you first call `useAddWebtoonsForCollectionDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddWebtoonsForCollectionDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addWebtoonsForCollectionDetailMutation, { data, loading, error }] = useAddWebtoonsForCollectionDetailMutation({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      webtoonIds: // value for 'webtoonIds'
 *      afterWebtoonId: // value for 'afterWebtoonId'
 *      afterCommentId: // value for 'afterCommentId'
 *   },
 * });
 */
export function useAddWebtoonsForCollectionDetailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddWebtoonsForCollectionDetailMutation,
    AddWebtoonsForCollectionDetailMutationVariables
  >
) {
  return Apollo.useMutation<
    AddWebtoonsForCollectionDetailMutation,
    AddWebtoonsForCollectionDetailMutationVariables
  >(AddWebtoonsForCollectionDetailDocument, baseOptions);
}
export type AddWebtoonsForCollectionDetailMutationHookResult = ReturnType<
  typeof useAddWebtoonsForCollectionDetailMutation
>;
export type AddWebtoonsForCollectionDetailMutationResult = Apollo.MutationResult<
  AddWebtoonsForCollectionDetailMutation
>;
export type AddWebtoonsForCollectionDetailMutationOptions = Apollo.BaseMutationOptions<
  AddWebtoonsForCollectionDetailMutation,
  AddWebtoonsForCollectionDetailMutationVariables
>;
export const LikeCollectionForCollectionDetailDocument = gql`
  mutation likeCollectionForCollectionDetail($collectionId: ID!) {
    likeCollection(collectionId: $collectionId) {
      id
    }
  }
`;
export type LikeCollectionForCollectionDetailMutationFn = Apollo.MutationFunction<
  LikeCollectionForCollectionDetailMutation,
  LikeCollectionForCollectionDetailMutationVariables
>;

/**
 * __useLikeCollectionForCollectionDetailMutation__
 *
 * To run a mutation, you first call `useLikeCollectionForCollectionDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeCollectionForCollectionDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeCollectionForCollectionDetailMutation, { data, loading, error }] = useLikeCollectionForCollectionDetailMutation({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useLikeCollectionForCollectionDetailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LikeCollectionForCollectionDetailMutation,
    LikeCollectionForCollectionDetailMutationVariables
  >
) {
  return Apollo.useMutation<
    LikeCollectionForCollectionDetailMutation,
    LikeCollectionForCollectionDetailMutationVariables
  >(LikeCollectionForCollectionDetailDocument, baseOptions);
}
export type LikeCollectionForCollectionDetailMutationHookResult = ReturnType<
  typeof useLikeCollectionForCollectionDetailMutation
>;
export type LikeCollectionForCollectionDetailMutationResult = Apollo.MutationResult<
  LikeCollectionForCollectionDetailMutation
>;
export type LikeCollectionForCollectionDetailMutationOptions = Apollo.BaseMutationOptions<
  LikeCollectionForCollectionDetailMutation,
  LikeCollectionForCollectionDetailMutationVariables
>;
export const DeleteCollectionForCollectionDetailDocument = gql`
  mutation deleteCollectionForCollectionDetail($collectionId: ID!) {
    deleteCollection(collectionId: $collectionId) {
      id
      title
    }
  }
`;
export type DeleteCollectionForCollectionDetailMutationFn = Apollo.MutationFunction<
  DeleteCollectionForCollectionDetailMutation,
  DeleteCollectionForCollectionDetailMutationVariables
>;

/**
 * __useDeleteCollectionForCollectionDetailMutation__
 *
 * To run a mutation, you first call `useDeleteCollectionForCollectionDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCollectionForCollectionDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCollectionForCollectionDetailMutation, { data, loading, error }] = useDeleteCollectionForCollectionDetailMutation({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useDeleteCollectionForCollectionDetailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCollectionForCollectionDetailMutation,
    DeleteCollectionForCollectionDetailMutationVariables
  >
) {
  return Apollo.useMutation<
    DeleteCollectionForCollectionDetailMutation,
    DeleteCollectionForCollectionDetailMutationVariables
  >(DeleteCollectionForCollectionDetailDocument, baseOptions);
}
export type DeleteCollectionForCollectionDetailMutationHookResult = ReturnType<
  typeof useDeleteCollectionForCollectionDetailMutation
>;
export type DeleteCollectionForCollectionDetailMutationResult = Apollo.MutationResult<
  DeleteCollectionForCollectionDetailMutation
>;
export type DeleteCollectionForCollectionDetailMutationOptions = Apollo.BaseMutationOptions<
  DeleteCollectionForCollectionDetailMutation,
  DeleteCollectionForCollectionDetailMutationVariables
>;
export const CollectionsForCollectionListDocument = gql`
  query collectionsForCollectionList($keyword: String, $after: ID) {
    collections(first: 9, after: $after, where: { keyword: $keyword }) {
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
export const MeForMyCollectionDocument = gql`
  query meForMyCollection(
    $afterMyCollectionId: ID
    $afterLikedCollectionId: ID
  ) {
    me {
      myCollections(first: 6, after: $afterMyCollectionId) {
        ...userCollectionCardList
      }
      likedCollections(first: 6, after: $afterLikedCollectionId) {
        ...userCollectionCardList
      }
    }
  }
  ${UserCollectionCardListFragmentDoc}
`;

/**
 * __useMeForMyCollectionQuery__
 *
 * To run a query within a React component, call `useMeForMyCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeForMyCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeForMyCollectionQuery({
 *   variables: {
 *      afterMyCollectionId: // value for 'afterMyCollectionId'
 *      afterLikedCollectionId: // value for 'afterLikedCollectionId'
 *   },
 * });
 */
export function useMeForMyCollectionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MeForMyCollectionQuery,
    MeForMyCollectionQueryVariables
  >
) {
  return Apollo.useQuery<
    MeForMyCollectionQuery,
    MeForMyCollectionQueryVariables
  >(MeForMyCollectionDocument, baseOptions);
}
export function useMeForMyCollectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MeForMyCollectionQuery,
    MeForMyCollectionQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    MeForMyCollectionQuery,
    MeForMyCollectionQueryVariables
  >(MeForMyCollectionDocument, baseOptions);
}
export type MeForMyCollectionQueryHookResult = ReturnType<
  typeof useMeForMyCollectionQuery
>;
export type MeForMyCollectionLazyQueryHookResult = ReturnType<
  typeof useMeForMyCollectionLazyQuery
>;
export type MeForMyCollectionQueryResult = Apollo.QueryResult<
  MeForMyCollectionQuery,
  MeForMyCollectionQueryVariables
>;
export const CreateCollectionForMyCollectionDocument = gql`
  mutation createCollectionForMyCollection(
    $title: String!
    $description: String!
  ) {
    createCollection(
      input: { title: $title, description: $description, webtoonIds: [] }
    ) {
      ...collectionCard
    }
  }
  ${CollectionCardFragmentDoc}
`;
export type CreateCollectionForMyCollectionMutationFn = Apollo.MutationFunction<
  CreateCollectionForMyCollectionMutation,
  CreateCollectionForMyCollectionMutationVariables
>;

/**
 * __useCreateCollectionForMyCollectionMutation__
 *
 * To run a mutation, you first call `useCreateCollectionForMyCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCollectionForMyCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCollectionForMyCollectionMutation, { data, loading, error }] = useCreateCollectionForMyCollectionMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateCollectionForMyCollectionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCollectionForMyCollectionMutation,
    CreateCollectionForMyCollectionMutationVariables
  >
) {
  return Apollo.useMutation<
    CreateCollectionForMyCollectionMutation,
    CreateCollectionForMyCollectionMutationVariables
  >(CreateCollectionForMyCollectionDocument, baseOptions);
}
export type CreateCollectionForMyCollectionMutationHookResult = ReturnType<
  typeof useCreateCollectionForMyCollectionMutation
>;
export type CreateCollectionForMyCollectionMutationResult = Apollo.MutationResult<
  CreateCollectionForMyCollectionMutation
>;
export type CreateCollectionForMyCollectionMutationOptions = Apollo.BaseMutationOptions<
  CreateCollectionForMyCollectionMutation,
  CreateCollectionForMyCollectionMutationVariables
>;
export const MeForProfileDocument = gql`
  query meForProfile {
    me {
      id
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
export const AuthenticateByEmailForAuthenticationModalDocument = gql`
  mutation authenticateByEmailForAuthenticationModal($email: String!) {
    authenticateByEmail(input: { email: $email }) {
      code
    }
  }
`;
export type AuthenticateByEmailForAuthenticationModalMutationFn = Apollo.MutationFunction<
  AuthenticateByEmailForAuthenticationModalMutation,
  AuthenticateByEmailForAuthenticationModalMutationVariables
>;

/**
 * __useAuthenticateByEmailForAuthenticationModalMutation__
 *
 * To run a mutation, you first call `useAuthenticateByEmailForAuthenticationModalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateByEmailForAuthenticationModalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateByEmailForAuthenticationModalMutation, { data, loading, error }] = useAuthenticateByEmailForAuthenticationModalMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAuthenticateByEmailForAuthenticationModalMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthenticateByEmailForAuthenticationModalMutation,
    AuthenticateByEmailForAuthenticationModalMutationVariables
  >
) {
  return Apollo.useMutation<
    AuthenticateByEmailForAuthenticationModalMutation,
    AuthenticateByEmailForAuthenticationModalMutationVariables
  >(AuthenticateByEmailForAuthenticationModalDocument, baseOptions);
}
export type AuthenticateByEmailForAuthenticationModalMutationHookResult = ReturnType<
  typeof useAuthenticateByEmailForAuthenticationModalMutation
>;
export type AuthenticateByEmailForAuthenticationModalMutationResult = Apollo.MutationResult<
  AuthenticateByEmailForAuthenticationModalMutation
>;
export type AuthenticateByEmailForAuthenticationModalMutationOptions = Apollo.BaseMutationOptions<
  AuthenticateByEmailForAuthenticationModalMutation,
  AuthenticateByEmailForAuthenticationModalMutationVariables
>;
export const UpdateUserForAuthenticationModalDocument = gql`
  mutation updateUserForAuthenticationModal($isAuthentication: Boolean) {
    updateUser(input: { isAuthentication: $isAuthentication }) {
      ...myInfo
    }
  }
  ${MyInfoFragmentDoc}
`;
export type UpdateUserForAuthenticationModalMutationFn = Apollo.MutationFunction<
  UpdateUserForAuthenticationModalMutation,
  UpdateUserForAuthenticationModalMutationVariables
>;

/**
 * __useUpdateUserForAuthenticationModalMutation__
 *
 * To run a mutation, you first call `useUpdateUserForAuthenticationModalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserForAuthenticationModalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserForAuthenticationModalMutation, { data, loading, error }] = useUpdateUserForAuthenticationModalMutation({
 *   variables: {
 *      isAuthentication: // value for 'isAuthentication'
 *   },
 * });
 */
export function useUpdateUserForAuthenticationModalMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserForAuthenticationModalMutation,
    UpdateUserForAuthenticationModalMutationVariables
  >
) {
  return Apollo.useMutation<
    UpdateUserForAuthenticationModalMutation,
    UpdateUserForAuthenticationModalMutationVariables
  >(UpdateUserForAuthenticationModalDocument, baseOptions);
}
export type UpdateUserForAuthenticationModalMutationHookResult = ReturnType<
  typeof useUpdateUserForAuthenticationModalMutation
>;
export type UpdateUserForAuthenticationModalMutationResult = Apollo.MutationResult<
  UpdateUserForAuthenticationModalMutation
>;
export type UpdateUserForAuthenticationModalMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserForAuthenticationModalMutation,
  UpdateUserForAuthenticationModalMutationVariables
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
export const LoginForLoginModalDocument = gql`
  mutation loginForLoginModal($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
      user {
        id
        name
      }
    }
  }
`;
export type LoginForLoginModalMutationFn = Apollo.MutationFunction<
  LoginForLoginModalMutation,
  LoginForLoginModalMutationVariables
>;

/**
 * __useLoginForLoginModalMutation__
 *
 * To run a mutation, you first call `useLoginForLoginModalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginForLoginModalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginForLoginModalMutation, { data, loading, error }] = useLoginForLoginModalMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginForLoginModalMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginForLoginModalMutation,
    LoginForLoginModalMutationVariables
  >
) {
  return Apollo.useMutation<
    LoginForLoginModalMutation,
    LoginForLoginModalMutationVariables
  >(LoginForLoginModalDocument, baseOptions);
}
export type LoginForLoginModalMutationHookResult = ReturnType<
  typeof useLoginForLoginModalMutation
>;
export type LoginForLoginModalMutationResult = Apollo.MutationResult<
  LoginForLoginModalMutation
>;
export type LoginForLoginModalMutationOptions = Apollo.BaseMutationOptions<
  LoginForLoginModalMutation,
  LoginForLoginModalMutationVariables
>;
export const SignupForSignupModalDocument = gql`
  mutation signupForSignupModal(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signup(input: { name: $name, email: $email, password: $password }) {
      token
      user {
        id
      }
    }
  }
`;
export type SignupForSignupModalMutationFn = Apollo.MutationFunction<
  SignupForSignupModalMutation,
  SignupForSignupModalMutationVariables
>;

/**
 * __useSignupForSignupModalMutation__
 *
 * To run a mutation, you first call `useSignupForSignupModalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupForSignupModalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupForSignupModalMutation, { data, loading, error }] = useSignupForSignupModalMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignupForSignupModalMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignupForSignupModalMutation,
    SignupForSignupModalMutationVariables
  >
) {
  return Apollo.useMutation<
    SignupForSignupModalMutation,
    SignupForSignupModalMutationVariables
  >(SignupForSignupModalDocument, baseOptions);
}
export type SignupForSignupModalMutationHookResult = ReturnType<
  typeof useSignupForSignupModalMutation
>;
export type SignupForSignupModalMutationResult = Apollo.MutationResult<
  SignupForSignupModalMutation
>;
export type SignupForSignupModalMutationOptions = Apollo.BaseMutationOptions<
  SignupForSignupModalMutation,
  SignupForSignupModalMutationVariables
>;
export const WebtoonForWebtoonDetailDocument = gql`
  query webtoonForWebtoonDetail($id: ID!, $afterCommentId: ID) {
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
export const MeForAddToCollectionModalDocument = gql`
  query meForAddToCollectionModal($afterMyCollectionId: ID) {
    me {
      myCollections(first: 10, after: $afterMyCollectionId) {
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
 * __useMeForAddToCollectionModalQuery__
 *
 * To run a query within a React component, call `useMeForAddToCollectionModalQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeForAddToCollectionModalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeForAddToCollectionModalQuery({
 *   variables: {
 *      afterMyCollectionId: // value for 'afterMyCollectionId'
 *   },
 * });
 */
export function useMeForAddToCollectionModalQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MeForAddToCollectionModalQuery,
    MeForAddToCollectionModalQueryVariables
  >
) {
  return Apollo.useQuery<
    MeForAddToCollectionModalQuery,
    MeForAddToCollectionModalQueryVariables
  >(MeForAddToCollectionModalDocument, baseOptions);
}
export function useMeForAddToCollectionModalLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MeForAddToCollectionModalQuery,
    MeForAddToCollectionModalQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    MeForAddToCollectionModalQuery,
    MeForAddToCollectionModalQueryVariables
  >(MeForAddToCollectionModalDocument, baseOptions);
}
export type MeForAddToCollectionModalQueryHookResult = ReturnType<
  typeof useMeForAddToCollectionModalQuery
>;
export type MeForAddToCollectionModalLazyQueryHookResult = ReturnType<
  typeof useMeForAddToCollectionModalLazyQuery
>;
export type MeForAddToCollectionModalQueryResult = Apollo.QueryResult<
  MeForAddToCollectionModalQuery,
  MeForAddToCollectionModalQueryVariables
>;
export const UpdateCollectionForWebtoonDetailDocument = gql`
  mutation updateCollectionForWebtoonDetail(
    $collectionId: ID!
    $webtoonIds: [ID!]!
  ) {
    updateCollection(
      input: { collectionId: $collectionId, webtoonIds: $webtoonIds }
    ) {
      id
      title
    }
  }
`;
export type UpdateCollectionForWebtoonDetailMutationFn = Apollo.MutationFunction<
  UpdateCollectionForWebtoonDetailMutation,
  UpdateCollectionForWebtoonDetailMutationVariables
>;

/**
 * __useUpdateCollectionForWebtoonDetailMutation__
 *
 * To run a mutation, you first call `useUpdateCollectionForWebtoonDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCollectionForWebtoonDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCollectionForWebtoonDetailMutation, { data, loading, error }] = useUpdateCollectionForWebtoonDetailMutation({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      webtoonIds: // value for 'webtoonIds'
 *   },
 * });
 */
export function useUpdateCollectionForWebtoonDetailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCollectionForWebtoonDetailMutation,
    UpdateCollectionForWebtoonDetailMutationVariables
  >
) {
  return Apollo.useMutation<
    UpdateCollectionForWebtoonDetailMutation,
    UpdateCollectionForWebtoonDetailMutationVariables
  >(UpdateCollectionForWebtoonDetailDocument, baseOptions);
}
export type UpdateCollectionForWebtoonDetailMutationHookResult = ReturnType<
  typeof useUpdateCollectionForWebtoonDetailMutation
>;
export type UpdateCollectionForWebtoonDetailMutationResult = Apollo.MutationResult<
  UpdateCollectionForWebtoonDetailMutation
>;
export type UpdateCollectionForWebtoonDetailMutationOptions = Apollo.BaseMutationOptions<
  UpdateCollectionForWebtoonDetailMutation,
  UpdateCollectionForWebtoonDetailMutationVariables
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
      ...myInfo
    }
  }
  ${MyInfoFragmentDoc}
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
