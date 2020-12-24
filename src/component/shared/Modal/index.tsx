import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';

import Button from '../../../styles/Button';
import { Text } from '../../../styles/Typography';

import { spacing, FontSizes } from '../../../util/theme';

type SubmitAction = () => any;
export type ModalProps = ReactModal.Props & {
  submit?: boolean | SubmitAction;
};

const SubmitButton = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${spacing[1]};
`;

const Modal: FunctionComponent<ModalProps> = (props) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      ReactModal.setAppElement('body');
    }
  }, []);
  const { children, submit } = props;
  return (
    <ReactModal {...props}>
      {children}
      {submit && (
        <SubmitButton
          onClick={() => typeof submit === 'function' && submit()}
          isFull
          primary
          type="submit"
        >
          <Text size={FontSizes.SMALL}>완료</Text>
        </SubmitButton>
      )}
    </ReactModal>
  );
};

export default Modal;
