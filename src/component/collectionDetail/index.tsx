import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Section from '../../layout/Section';

import { Title, Text } from '../../styles/Typography';

import WebtoonCardList from './WebtoonCardList';

import Comments from '../shared/Comments';

import { useCollectionForCollectionDetailQuery } from '../../generated/graphql';

import { spacing } from '../../util/theme';

export interface Props {
  id: string;
}

const CollectionProfile = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CollectionProfileItem = styled.div`
  margin-bottom: ${spacing[1]};
`;

const CollectionDetail: FunctionComponent<Props> = ({ id }) => {
  const { data, loading, fetchMore } = useCollectionForCollectionDetailQuery({
    variables: { id }
  });
  const afterWebtoonId = data?.collection.webtoons.pageInfo.endCursor;
  const afterCommentId = data?.collection.comments.pageInfo.endCursor;
  return !loading && data ? (
    <div>
      작성자 {data.collection.writer.name}
      <CollectionProfile>
        <CollectionProfileItem>
          <Title>{data.collection.title}</Title>
        </CollectionProfileItem>
        <CollectionProfileItem>
          <Text>{data.collection.description}</Text>
        </CollectionProfileItem>
      </CollectionProfile>
      <WebtoonCardList
        data={data}
        onLoadMore={() => {
          fetchMore({
            variables: {
              id,
              afterWebtoonId
            }
          });
        }}
      />
      <Section>
        <Comments
          comments={data?.collection.comments}
          onLoadMore={() => {
            fetchMore({
              variables: {
                id,
                afterCommentId
              }
            });
          }}
        />
      </Section>
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default CollectionDetail;
