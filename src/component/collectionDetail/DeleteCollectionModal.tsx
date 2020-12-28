import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';

import Button from '../../styles/Button';
import { Text } from '../../styles/Typography';

import Modal, { ModalProps } from '../shared/Modal';

import { useDeleteCollectionForCollectionDetailMutation } from '../../generated/graphql';

import { spacing, FontSizes } from '../../util/theme';

type Props = ModalProps & {
  collectionId: string;
  close: () => any;
  onDeleteSuccess: () => any;
};

const ButtonWrapper = styled.div`
  margin-top: ${spacing[6]};
`;

const StyledButton = styled(Button)`
  padding: ${spacing[1]};
  border-radius: 5px;
  margin-bottom: ${spacing[2]};
  &:last-child {
    margin: 0;
  }
`;

const DeleteCollectionModal: FunctionComponent<Props> = ({
  isOpen,
  close,
  collectionId,
  onDeleteSuccess
}) => {
  const [
    deleteCollection,
    { data }
  ] = useDeleteCollectionForCollectionDetailMutation();
  useEffect(() => {
    if (data && data.deleteCollection) {
      onDeleteSuccess();
    }
  });
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => close()}
      style={{
        content: {
          width: '400px',
          height: '200px',
          margin: 'auto',
          borderRadius: '10px',
          padding: spacing[4]
        }
      }}
    >
      <Text size={FontSizes.DEFAULT}>정말로 이 컬렉션을 삭제합니까?</Text>
      <ButtonWrapper>
        <StyledButton
          primary
          isFull
          onClick={async () => {
            await deleteCollection({
              variables: {
                collectionId
              }
            });
          }}
        >
          네, 삭제합니다
        </StyledButton>
        <StyledButton isFull>아니요</StyledButton>
      </ButtonWrapper>
    </Modal>
  );
};

export default DeleteCollectionModal;
