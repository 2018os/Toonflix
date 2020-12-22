import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import CollectionCard from '../shared/CollectionCard';

import { CollectionsForCollectionListQuery } from '../../generated/graphql';

import { ImgSizes, spacing } from '../../util/theme';

export interface Props {
  data: CollectionsForCollectionListQuery;
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

const CollectionCardList: FunctionComponent<Props> = ({ data }) => {
  return (
    <>
      <CollectionCardListWrapper>
        {data.collections?.edges &&
          data.collections?.edges.map((edge) => {
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
