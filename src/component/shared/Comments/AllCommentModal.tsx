import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { MoreButton } from '../../../styles/Button';
import { Title } from '../../../styles/Typography';

import Comment from './Comment';

import Modal, { ModalProps } from '../Modal';

import { CommentsConnectionForCommentsFragment } from '../../../generated/graphql';

import { spacing } from '../../../util/theme';

type Props = ModalProps & {
  modalTitle: string | undefined;
  comments: CommentsConnectionForCommentsFragment | undefined;
  close: () => any;
  onLoadMore: () => any;
};

const TitleWrapper = styled.div`
  margin-bottom: ${spacing[2]};
`;

const More = styled(MoreButton)`
  border-radius: 0 0 10px 10px;
`;

const AllCommentModal: FunctionComponent<Props> = ({
  isOpen,
  close,
  modalTitle,
  comments,
  onLoadMore
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => close()}
      style={{
        content: {
          margin: 'auto',
          width: '800px',
          height: '500px'
        }
      }}
    >
      <TitleWrapper>
        <Title>{modalTitle}</Title>
      </TitleWrapper>
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
  );
};

export default AllCommentModal;
