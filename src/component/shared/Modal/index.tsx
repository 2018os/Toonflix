import React, { FunctionComponent, useEffect } from 'react';
import ReactModal from 'react-modal';

const baseStyle: ReactModal.Styles = {
  content: {
    width: '992px',
    height: '600px',
    borderRadius: '10px',
    margin: 'auto'
  }
};

const Modal: FunctionComponent<ReactModal.Props> = (props) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      ReactModal.setAppElement('body');
    }
  }, []);
  const { children, style } = props;
  return (
    <ReactModal {...props} style={{ ...baseStyle, ...style }}>
      {children}
    </ReactModal>
  );
};

export default Modal;
