import { Formik, Form, Field } from 'formik';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Button from '../../../styles/Button';
import { Title } from '../../../styles/Typography';

import Modal from '../Modal';

import { spacing } from '../../../util/theme';

type Props = {
  isOpen: boolean;
  close: () => any;
  onPostComment: (message: string) => any;
};

const CommentTextField = styled(Field)`
  width: 100%;
  padding: ${spacing[2]};
  border: none;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  outline: none;
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
          padding: 0,
          margin: 'auto'
        }
      }}
    >
      <Title>댓글 작성</Title>
      <Formik
        initialValues={{ message: '' }}
        onSubmit={(value) => {
          onPostComment(value.message);
          close();
        }}
      >
        <Form>
          <CommentTextField
            id="message"
            name="message"
            autoComplete="off"
            placeholder="내용을 입력하세요"
          />
          <br />
          <Button type="submit" isFull primary>
            보내기
          </Button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default PostCommentModal;
