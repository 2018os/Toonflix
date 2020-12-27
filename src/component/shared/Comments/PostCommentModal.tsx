import { Formik, Form, Field } from 'formik';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Title } from '../../../styles/Typography';

import Modal, { ModalProps, ModalSubmitButton } from '../Modal';

import { spacing } from '../../../util/theme';

type Props = ModalProps & {
  close: () => any;
  onPostComment: (message: string) => any;
};

const TitleWrapper = styled.div`
  margin-bottom: ${spacing[2]};
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const CommentTextField = styled(Field).attrs({
  component: 'textarea'
})`
  border: none;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  outline: none;
  resize: none;
  height: 340px;
  padding: ${spacing[2]};
`;

const PostCommentModal: FunctionComponent<Props> = ({
  isOpen,
  close,
  onPostComment
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => close()}
      style={{
        content: {
          width: '800px',
          height: '500px',
          padding: spacing[3],
          margin: 'auto',
          borderRadius: '10px'
        }
      }}
    >
      <TitleWrapper>
        <Title>댓글 작성</Title>
      </TitleWrapper>
      <Formik
        initialValues={{ message: '' }}
        onSubmit={(value) => {
          onPostComment(value.message);
          close();
        }}
      >
        <Form>
          <Label>
            <CommentTextField
              id="message"
              name="message"
              autoComplete="off"
              placeholder="내용을 입력하세요"
            />
          </Label>
          <ModalSubmitButton>완료</ModalSubmitButton>
        </Form>
      </Formik>
    </Modal>
  );
};

export default PostCommentModal;
