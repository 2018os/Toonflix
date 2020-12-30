import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import withAuth, { AuthState } from '../../hocs/withAuth';

import Section from '../../layout/Section';

import { Title, Text } from '../../styles/Typography';

import DeleteCollectionModal from './DeleteCollectionModal';
import WebtoonCardList from './WebtoonCardList';

import Comments from '../shared/Comments';
import Dropdown, { Option } from '../shared/Dropdown';
import {
  LoadingCardList,
  LoadingCollectionProfile,
  LoadingComments
} from '../shared/Loading';
import LoginModal from '../shared/LoginModal';

import {
  useCollectionForCollectionDetailQuery,
  CollectionForCollectionDetailDocument,
  CollectionForCollectionDetailQueryVariables,
  CollectionForCollectionDetailQuery,
  usePostCommentForCollectionDetailMutation,
  useLikeCollectionForCollectionDetailMutation
} from '../../generated/graphql';

import { spacing, Colors } from '../../util/theme';

export interface Props {
  id: string;
  authState: AuthState;
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

const CollectionDetail: FunctionComponent<Props> = ({ id, authState }) => {
  const router = useRouter();
  const [showDropdown, toggleDropdown] = useState(false);
  const [showDeleteCollectionModal, toggleDeleteCollectionModal] = useState(
    false
  );
  const [showLoginModal, toggleLoginModal] = useState(false);
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
                {data.collection.writer.id === authState.data?.me.id ? (
                  <Option onClick={() => toggleDeleteCollectionModal(true)}>
                    <Text color={Colors.RED}>컬렉션 삭제</Text>
                  </Option>
                ) : (
                  <Option
                    onClick={() => {
                      if (authState.token) {
                        likeCollection({
                          variables: {
                            collectionId: data.collection.id
                          }
                        });
                        alert('저장되었습니다');
                        toggleDropdown(false);
                      } else {
                        toggleLoginModal(true);
                      }
                    }}
                  >
                    찜 하기
                  </Option>
                )}
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
      <DeleteCollectionModal
        isOpen={showDeleteCollectionModal}
        close={() => {
          toggleDeleteCollectionModal(false);
        }}
        collectionId={id}
        onDeleteSuccess={() => {
          toggleDeleteCollectionModal(false);
          router.push({
            pathname: '/mycollection'
          });
        }}
      />
      <LoginModal
        isOpen={showLoginModal}
        close={() => toggleLoginModal(false)}
        onLoginSuccess={(token) => authState.signIn(token)}
      />
    </div>
  );
};

export default withAuth(CollectionDetail);
