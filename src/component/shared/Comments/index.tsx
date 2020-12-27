import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import withAuth, { AuthState } from '../../../hocs/withAuth';

import Button, { MoreButton } from '../../../styles/Button';
import { Text } from '../../../styles/Typography';

import Comment from './Comment';
import AllCommentsModal from './AllCommentModal';
import PostCommentModal from './PostCommentModal';

import LoginModal from '../LoginModal';

import { CommentsConnectionForCommentsFragment } from '../../../generated/graphql';

import { Colors, FontSizes, spacing } from '../../../util/theme';

export interface Props {
  // TODO: Enhance naming
  modalTitle?: string | undefined;
  onLoadMore: () => any;
  onPostComment: (message: string) => any;
  comments: CommentsConnectionForCommentsFragment | undefined;
  authState: AuthState;
}

const CommentsWrapper = styled.div`
  border: solid 1px ${Colors.BORDER_COLOR};
  background-color: ${Colors.WHITE};
  border-radius: 10px;
`;

const CommentsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${spacing[3]};
  border-bottom: 1px solid ${Colors.BORDER_COLOR};
`;

const ButtonWrapper = styled.div`
  & > ${Button}:last-child {
    margin-left: ${spacing[2]};
  }
`;

const StyledButton = styled(Button)`
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const More = styled(MoreButton)`
  border-radius: 0 0 10px 10px;
`;

const Comments: FunctionComponent<Props> = ({
  modalTitle,
  comments,
  onLoadMore,
  onPostComment,
  authState
}) => {
  const [showAllCommentModal, toggleAllCommentModal] = useState(false);
  const [showPostCommentModal, togglePostCommentModal] = useState(false);
  const [showLoginModal, toggleLoginModal] = useState(false);
  return (
    <CommentsWrapper>
      <CommentsHeader>
        <Text>댓글</Text>
        <ButtonWrapper>
          <StyledButton
            onClick={() =>
              authState.token
                ? togglePostCommentModal(true)
                : toggleLoginModal(true)
            }
          >
            댓글 작성
          </StyledButton>
          <StyledButton onClick={() => toggleAllCommentModal(true)}>
            전체보기
          </StyledButton>
        </ButtonWrapper>
      </CommentsHeader>
      {comments?.edges?.map(
        (edge) =>
          edge?.node && (
            <Comment
              key={edge?.node?.id}
              createdAt={edge?.node?.createdAt}
              writer={edge?.node?.writer.name}
              message={edge.node?.message}
            />
          )
      )}
      {comments?.pageInfo.hasNextPage && (
        <More onClick={() => onLoadMore()}>
          <Text size={FontSizes.SMALL}>더 보기</Text>
        </More>
      )}
      <AllCommentsModal
        isOpen={showAllCommentModal}
        modalTitle={modalTitle}
        comments={comments}
        close={() => toggleAllCommentModal(false)}
        onLoadMore={() => onLoadMore()}
      />
      <PostCommentModal
        isOpen={showPostCommentModal}
        close={() => togglePostCommentModal(false)}
        onPostComment={(message) => onPostComment(message)}
      />
      <LoginModal
        isOpen={showLoginModal}
        close={() => toggleLoginModal(false)}
      />
    </CommentsWrapper>
  );
};

export default withAuth(Comments);
