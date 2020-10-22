import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { Title, Text } from '../../styles/Typography';

import WebtoonCard from '../../component/shared/WebtoonCard';

import { useCollectionForCollectionDetailQuery } from '../../generated/graphql';

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
  margin-bottom: ${(props) => props.theme.spacing[1]};
`;

const WebtoonCardList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  ::after {
    content: '';
    flex: 0 0 ${(props) => props.theme.ImgSizes.DEFAULT};
  }
`;

const CollectionDetail: FunctionComponent<Props> = ({ id }) => {
  const { data, loading, fetchMore } = useCollectionForCollectionDetailQuery({
    variables: { id, after: '' }
  });
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
      <Text>컬렉션에 포함된 작품들</Text>
      <WebtoonCardList>
        {data.collection.webtoonsConnection.edges &&
          data.collection.webtoonsConnection.edges.map((edge) => {
            if (edge?.node) {
              const webtoon = edge.node;
              return <WebtoonCard webtoon={webtoon} />;
            } else {
              return <div>webtoon data loading</div>;
            }
          })}
      </WebtoonCardList>
      {data.collection.webtoonsConnection.pageInfo.hasNextPage ? (
        <button
          onClick={() => fetchMore({ variables: { id, after: 'MTA5ODc=' } })}
        >
          더 보기
        </button>
      ) : null}
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default CollectionDetail;
