import React, { FunctionComponent } from 'react';

import CardList, { Item } from '../shared/CardList';
import CollectionCard from '../shared/CollectionCard';

import { SearchForCategoryQuery } from '../../generated/graphql';

export interface Props {
  data: SearchForCategoryQuery;
}

const CollectionCardList: FunctionComponent<Props> = ({ data }) => {
  return (
    <>
      <CardList type="collection">
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
            return null;
          })}
      </CardList>
    </>
  );
};

export default CollectionCardList;
