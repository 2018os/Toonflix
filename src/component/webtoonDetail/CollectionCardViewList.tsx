import React, { FunctionComponent } from 'react';

import CardViewList from '../shared/CardViewList';
import CollectionCard from '../shared/CollectionCard';
import { EmptyCollectionCard } from '../shared/Empty';

type Props = {
  collectionConnection?: any;
};

const CollectionCardViewList: FunctionComponent<Props> = ({
  collectionConnection
}) => {
  if (collectionConnection) {
    const collectionCards = collectionConnection.edges.map(
      (collectionEdge: any) => {
        const { id, title, webtoonsConnection } = collectionEdge.node;
        const webtoons = webtoonsConnection.edges.map((edge: any) => {
          return {
            id: edge.node.id,
            thumbnail: edge.node.thumbnail
          };
        });
        return (
          <CollectionCard
            id={id}
            title={title}
            webtoons={webtoons}
            key={`collection-card-${id}`}
          />
        );
      }
    );
    collectionCards.push(<EmptyCollectionCard key={`empty-collection-card`} />);
    return (
      <CardViewList title="작품이 포함된 컬렉션" type="pagination">
        {collectionCards}
      </CardViewList>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default CollectionCardViewList;