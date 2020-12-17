import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';

import CollectionCard from '../shared/CollectionCard';

import { SearchForCategoryQuery } from '../../generated/graphql';

import handleOnScroll from '../../util/infiniteScroll';
import { ImgSizes, spacing } from '../../util/theme';

export interface Props {
  data: SearchForCategoryQuery;
  onLoadMore: () => any;
}

const CollectionCardListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  ::after {
    content: '';
    flex: 0 0 ${ImgSizes.DEFAULT};
  }
`;

const Item = styled.div`
  margin-bottom: ${spacing[2]};
`;

const CollectionCardList: FunctionComponent<Props> = ({ data, onLoadMore }) => {
  useEffect(() => {
    global.window.addEventListener('scroll', () => handleOnScroll(onLoadMore));
    return () => {
      global.window.removeEventListener('scroll', () =>
        handleOnScroll(onLoadMore)
      );
    };
  });
  return (
    <>
      <CollectionCardListWrapper>
        {data.search.collectionResult?.edges &&
          data.search.collectionResult.edges.map((edge) => {
            if (edge?.node) {
              const collection = edge.node;
              return (
                <Item key={`category-item-${collection.id}`}>
                  <CollectionCard collection={collection} />
                </Item>
              );
            }
            return <div key={edge?.__typename}>collection data loading</div>;
          })}
      </CollectionCardListWrapper>
    </>
  );
};

export default CollectionCardList;
