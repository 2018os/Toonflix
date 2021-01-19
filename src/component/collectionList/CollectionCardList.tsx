import React, { FunctionComponent } from 'react';

import CardList, { Item } from '../shared/CardList';
import CollectionCard from '../shared/CollectionCard';

import { CollectionsForCollectionListQuery } from '../../generated/graphql';

export interface Props {
  data: CollectionsForCollectionListQuery;
}

const CollectionCardList: FunctionComponent<Props> = ({ data }) => {
  return (
    <>
      <CardList type="collection">
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
            return null;
          })}
      </CardList>
    </>
  );
};

export default CollectionCardList;
