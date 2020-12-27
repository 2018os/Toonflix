import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import Section from '../../layout/Section';

import { Title, Text } from '../../styles/Typography';

import WebtoonCardList from './WebtoonCardList';

import Comments from '../shared/Comments';
import Dropdown, { Option } from '../shared/Dropdown';
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
  usePostCommentForCollectionDetailMutation,
  useLikeCollectionForCollectionDetailMutation
} from '../../generated/graphql';

import { spacing } from '../../util/theme';

export interface Props {
  id: string;
}

const ProfileWrapper = styled.div`
  position: relative;
`;

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

const DropDownWrapper = styled.div`
  position: absolute;
  right: 0;
`;

const Bookmark = styled.img.attrs({
  src: '/static/icon/more.svg'
})`
  cursor: pointer;
`;

const CollectionDetail: FunctionComponent<Props> = ({ id }) => {
  const [showDropdown, toggleDropdown] = useState(false);
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
  const [likeCollection] = useLikeCollectionForCollectionDetailMutation();
  const afterWebtoonId = data?.collection.webtoons.pageInfo.endCursor;
  const afterCommentId = data?.collection.comments.pageInfo.endCursor;
  return (
    <div>
      <Section>
        {data && !loading ? (
          <ProfileWrapper>
            작성자 {data.collection.writer.name}
            <DropDownWrapper>
              <Dropdown
                isOpen={showDropdown}
                openButton={
                  <Bookmark onClick={() => toggleDropdown(!showDropdown)} />
                }
              >
                <Option
                  onClick={() =>
                    likeCollection({
                      variables: {
                        collectionId: data.collection.id
                      }
                    })
                  }
                >
                  찜 하기
                </Option>
              </Dropdown>
            </DropDownWrapper>
            <CollectionProfile>
              <CollectionProfileItem>
                <Title>{data.collection.title}</Title>
              </CollectionProfileItem>
              <CollectionProfileItem>
                <Text>{data.collection.description}</Text>
              </CollectionProfileItem>
            </CollectionProfile>
          </ProfileWrapper>
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
