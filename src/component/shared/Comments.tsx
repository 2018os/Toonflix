import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Button from '../../styles/Button';
import { Text } from '../../styles/Typography';

import { CommentsConnectionForWebtoonDetailFragment } from '../../generated/graphql';

import { Colors, FontSizes, spacing } from '../../util/theme';
import dayjs from '../../util/date';

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

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${`${spacing[1]} ${spacing[3]}`};
  border-bottom: 1px solid ${Colors.BORDER_COLOR};
`;

const CommentInfo = styled.div``;

const Message = styled.div``;

const More = styled(Button)`
  padding: ${spacing[1]};
  border-radius: 0 0 10px 10px;
`;

export interface Props {
  onLoadMore: () => any;
  comments: CommentsConnectionForWebtoonDetailFragment | undefined;
}

const Comments: FunctionComponent<Props> = ({ comments, onLoadMore }) => {
  return (
    <CommentsWrapper>
      <CommentsHeader>
        <Text>댓글</Text>
        <StyledButton>전체보기</StyledButton>
      </CommentsHeader>
      {comments?.edges?.map((edge) => {
        const createdFromNow =
          edge && edge.node && dayjs().from(edge.node.createdAt);
        return (
          <Comment key={edge?.__typename}>
            <CommentInfo>
              <Text size={FontSizes.SMALLEST}>
                {edge?.node?.writer.name} - {createdFromNow}
              </Text>
            </CommentInfo>
            <Message>{edge?.node?.message}</Message>
          </Comment>
        );
      })}
      {comments?.pageInfo.hasNextPage && (
        <More primary isFull onClick={() => onLoadMore()}>
          더 보기
        </More>
      )}
    </CommentsWrapper>
  );
};

export default Comments;
