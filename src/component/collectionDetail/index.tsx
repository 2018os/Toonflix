import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Title, Text } from '../../styles/Typography';

import WebtoonCardList from './WebtoonCardList';

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
    variables: { id, after: '' }
  });
  const afterId = data?.collection.webtoonsConnection.pageInfo.endCursor;
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
      <WebtoonCardList
        data={data}
        onLoadMore={() => {
          fetchMore({
            updateQuery: (previousResult, { fetchMoreResult }) => {
              if (!fetchMoreResult) {
                return previousResult;
              }
              const prevCollection = previousResult.collection;
              const nextCollection = fetchMoreResult.collection;
              const prevEdges = prevCollection.webtoonsConnection.edges;
              const newEdges = nextCollection.webtoonsConnection.edges;
              const pageInfo = nextCollection.webtoonsConnection.pageInfo;
              return {
                collection: {
                  ...prevCollection,
                  webtoonsConnection: {
                    ...prevCollection.webtoonsConnection,
                    edges: [
                      ...(prevEdges && prevEdges.length > 0
                        ? [...prevEdges]
                        : []),
                      ...(newEdges && newEdges.length > 0 ? [...newEdges] : [])
                    ],
                    pageInfo
                  }
                }
              };
            },
            variables: {
              id,
              after: afterId
            }
          });
        }}
      />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default CollectionDetail;
