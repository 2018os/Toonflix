import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import Button from '../../../styles/Button';
import { Text, Title } from '../../../styles/Typography';

import Comment from './Comment';
import Modal from '../Modal';

import { CommentsConnectionForCommentsFragment } from '../../../generated/graphql';

import { Colors, spacing } from '../../../util/theme';

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

const StyledButton = styled(Button)`
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const More = styled(Button)`
  padding: ${spacing[1]};
  border-radius: 0 0 10px 10px;
`;

export interface Props {
  // TODO: Enhance naming
  modalTitle?: string | undefined;
  onLoadMore: () => any;
  comments: CommentsConnectionForCommentsFragment | undefined;
}

const Comments: FunctionComponent<Props> = ({
  modalTitle,
  comments,
  onLoadMore
}) => {
  const [showModal, toggleModal] = useState(false);
  return (
    <CommentsWrapper>
      <CommentsHeader>
        <Text>댓글</Text>
        <StyledButton onClick={() => toggleModal(true)}>전체보기</StyledButton>
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
        <More primary isFull onClick={() => onLoadMore()}>
          더 보기
        </More>
      )}
      <Modal isOpen={showModal} onRequestClose={() => toggleModal(false)}>
        <Title>{modalTitle}</Title>
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
          <More primary isFull onClick={() => onLoadMore()}>
            더 보기
          </More>
        )}
      </Modal>
    </CommentsWrapper>
  );
};

export default Comments;
