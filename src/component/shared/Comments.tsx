import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Text } from '../../styles/Typography';

import {
  WebtoonCommentsConnection,
  Maybe,
  Comment,
  User
} from '../../generated/graphql';

import { Colors, spacing } from '../../util/theme'

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

const Button = styled.button`
  border: 0;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: ${Colors.WHITE};
`;

// TODO: Enhance name
const CommentBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${`${spacing[1]} ${spacing[3]}`};
  border-bottom: 1px solid ${Colors.BORDER_COLOR};
`;

export interface Props {
  comment?: { __typename?: 'WebtoonCommentsConnection' } & Pick<
    WebtoonCommentsConnection,
    'counts'
  > & {
      edges?: Maybe<
        Array<
          Maybe<
            { __typename?: 'WebtoonCommentsEdge' } & {
              node?: Maybe<
                { __typename?: 'Comment' } & Pick<
                  Comment,
                  'message' | 'createdAt'
                > & { writer: { __typename?: 'User' } & Pick<User, 'name'> }
              >;
            }
          >
        >
      >;
    };
}

const Comments: FunctionComponent<Props> = ({ comment }) => {
  return comment ? (
    <CommentsWrapper>
      <CommentsHeader>
        <div>
          <Text>댓글</Text>
          <Text color={Colors.GRAY}>{comment.counts}</Text>
        </div>
        <Button>전체보기</Button>
      </CommentsHeader>
      {comment?.edges?.map((edge) => {
        return (
          <CommentBox>
            {edge?.node?.writer.name} - {edge?.node?.createdAt} |{' '}
            {edge?.node?.message}
          </CommentBox>
        );
      })}
      <button>더 보기</button>
    </CommentsWrapper>
  ) : (
    <div>Loaiding</div>
  );
};

export default Comments;
