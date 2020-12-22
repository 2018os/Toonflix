import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Section from '../../layout/Section';

import { Title, Text } from '../../styles/Typography';

import WebtoonCardList from './WebtoonCardList';

import Comments from '../shared/Comments';
import {
  LoadingCardList,
  LoadingCollectionProfile,
  LoadingComments
} from '../shared/Loading';

import {
  useCollectionForCollectionDetailQuery,
  CollectionForCollectionDetailDocument,
  CollectionForCollectionDetailQueryVariables,
  CollectionForCollectionDetailQuery,
  usePostCommentForCollectionDetailMutation
} from '../../generated/graphql';

import { spacing } from '../../util/theme';

export interface Props {
  id: string;
}

const CollectionProfile = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CollectionProfileItem = styled.div`
  margin-bottom: ${spacing[1]};
`;

const CollectionDetail: FunctionComponent<Props> = ({ id }) => {
  const { data, loading, fetchMore } = useCollectionForCollectionDetailQuery({
    variables: { id, afterCommentId: '', afterWebtoonId: '' }
  });
  const [postComment] = usePostCommentForCollectionDetailMutation({
    update: (cache, mutationResult) => {
      const newComment = mutationResult.data?.postComment;
      const existing = cache.readQuery<
        CollectionForCollectionDetailQuery,
        CollectionForCollectionDetailQueryVariables
      >({
        query: CollectionForCollectionDetailDocument,
        variables: { id, afterCommentId: '', afterWebtoonId: '' }
      });
      if (existing && existing.collection.comments.edges && newComment) {
        cache.writeQuery({
          query: CollectionForCollectionDetailDocument,
          variables: { id, afterCommentId: '', afterWebtoonId: '' },
          data: {
            ...existing,
            collection: {
              ...existing.collection,
              comments: {
                ...existing.collection.comments,
                edges: [
                  {
                    __typename: 'CommentEdge',
                    node: newComment
                  },
                  ...existing.collection.comments.edges
                ]
              }
            }
          }
        });
      }
    }
  });
  const afterWebtoonId = data?.collection.webtoons.pageInfo.endCursor;
  const afterCommentId = data?.collection.comments.pageInfo.endCursor;
  return (
    <div>
      <Section>
        {data && !loading ? (
          <>
            작성자 {data.collection.writer.name}
            <CollectionProfile>
              <CollectionProfileItem>
                <Title>{data.collection.title}</Title>
              </CollectionProfileItem>
              <CollectionProfileItem>
                <Text>{data.collection.description}</Text>
              </CollectionProfileItem>
            </CollectionProfile>
          </>
        ) : (
          <LoadingCollectionProfile />
        )}
      </Section>
      <Section>
        {data && !loading ? (
          <WebtoonCardList
            data={data.collection}
            onLoadMore={() => {
              fetchMore({
                variables: {
                  id,
                  afterWebtoonId
                }
              });
            }}
          />
        ) : (
          <LoadingCardList cardType="webtoon" cardRange={8} />
        )}
      </Section>
      <Section>
        {data && !loading ? (
          <Comments
            comments={data.collection.comments}
            onPostComment={async (message: string) => {
              await postComment({
                variables: { collectionId: data.collection.id, message }
              });
            }}
            onLoadMore={() => {
              fetchMore({
                variables: {
                  id,
                  afterCommentId
                }
              });
            }}
          />
        ) : (
          <LoadingComments />
        )}
      </Section>
    </div>
  );
};

export default CollectionDetail;
