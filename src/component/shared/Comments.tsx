import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Text } from '../../styles/Typography';

const CommentsWrapper = styled.div`
  border: solid 1px ${(props) => props.theme.Colors.BORDER_COLOR};
  background-color: ${(props) => props.theme.Colors.WHITE};
  border-radius: 10px;
`;

const CommentsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing[3]};
  border-bottom: 1px solid ${(props) => props.theme.Colors.BORDER_COLOR};
`;

const Button = styled.button`
  border: 0;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: ${(props) => props.theme.Colors.WHITE};
`;

const Comment = styled.div`
  display: flex;
  justify-content: space-between;
  ${(props) => `
  padding: ${props.theme.spacing[1]} ${props.theme.spacing[3]};
  border-bottom: 1px solid ${props.theme.Colors.BORDER_COLOR};
  `}
`;

const More = styled.button``;

const Title = styled.div``;

export interface Props {
  comment?: any;
}

const Comments: FunctionComponent<Props> = ({ comment }) => {
  return comment ? (
    <CommentsWrapper>
      <CommentsHeader>
        <Title>
          <Text>댓글</Text>
          <Text color="GRAY">{comment.counts}</Text>
        </Title>
        <Button>전체보기</Button>
      </CommentsHeader>
      {comment.edges.map((edge: any) => {
        return (
          <Comment>
            {edge.node.writer.name} - {edge.node.createdAt} |{' '}
            {edge.node.message}
          </Comment>
        );
      })}
      <More>더 보기</More>
    </CommentsWrapper>
  ) : (
    <div>Loaiding</div>
  );
};

export default Comments;
