import React from 'react';
import styled from 'styled-components';

import CollectionCard, { CollectionWebtoon } from '../shared/CollectionCard';
import LoadingCollectionCard from '../shared/loading/CollectionCard';
import SearchBar from '../shared/SearchBar';

import { useCollectionsForCollectionListQuery } from '../../generated/graphql';

import { dataForCollectionList as data, loading } from '../../util/dummy';

const SearchBarWrapper = styled.div`
  padding: ${(props) => props.theme.spacing[2]};
  margin-bottom: ${(props) => props.theme.spacing[3]};
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
`;

const CollectionCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  ::after {
    content: '';
    flex: 0 0 ${(props) => props.theme.ImgSizes.LARGE};
  }
`;

const Item = styled.div`
  margin-bottom: ${(props) => props.theme.spacing[3]};
`;

const CollectionListContainer = () => {
  // const { data, loading } = useCollectionsForCollectionListQuery();
  return (
    <>
      <SearchBarWrapper>
        <SearchBar />
      </SearchBarWrapper>
      <CollectionCardContainer>
        {data && !loading
          ? data?.collections.edges?.map((collection) => {
              let collectionWebtoon: CollectionWebtoon[] = [];
              if (collection?.node) {
                const webtoons = collection.node.webtoonsConnection.edges;
                const collectionId = collection.node.id;
                const collectionTitle = collection.node.title;
                webtoons?.map((webtoon) => {
                  if (webtoon?.node) {
                    collectionWebtoon.push({
                      id: webtoon.node.id,
                      thumbnail: webtoon.node.thumbnail
                    });
                  }
                });
                return (
                  <Item key={`item-${collectionId}`}>
                    <CollectionCard
                      id={collectionId}
                      title={collectionTitle}
                      webtoons={collectionWebtoon}
                    />
                  </Item>
                );
              }
              return null;
            })
          : [0, 1, 2, 3, 4, 5, 6, 7, 8].map((key) => (
              <Item key={`loading-item-${key}`}>
                <LoadingCollectionCard />
              </Item>
            ))}
      </CollectionCardContainer>
    </>
  );
};

export default CollectionListContainer;
