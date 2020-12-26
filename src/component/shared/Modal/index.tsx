import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';

import Button from '../../../styles/Button';

import { spacing } from '../../../util/theme';

export type ModalProps = ReactModal.Props;

export const ModalSubmitButton = styled(Button).attrs({
  isFull: true,
  primary: true,
  type: 'submit'
})`
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
  const { children } = props;
  return <ReactModal {...props}>{children}</ReactModal>;
};

export default Modal;
