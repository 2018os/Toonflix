import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Text } from '../../../styles/Typography';

import { Colors, spacing, FontSizes } from '../../../util/theme';
import dayjs from '../../../util/date';

type Props = {
  writer: string;
  createdAt: string;
  message: string;
};

const CommentInfo = styled.div``;

const Message = styled.div``;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${`${spacing[1]} ${spacing[3]}`};
  border-bottom: 1px solid ${Colors.BORDER_COLOR};
`;

const Comment: FunctionComponent<Props> = ({ createdAt, writer, message }) => {
  const createdFromNow = dayjs().from(createdAt);
  return (
    <CommentWrapper>
      <CommentInfo>
        <Text size={FontSizes.SMALLEST}>
          {writer} - {createdFromNow}
        </Text>
      </CommentInfo>
      <Message>{message}</Message>
    </CommentWrapper>
  );
};

export default Comment;
