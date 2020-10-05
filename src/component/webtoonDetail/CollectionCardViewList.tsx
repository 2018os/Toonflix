import React, { FunctionComponent } from 'react';

import CardViewList from '../shared/CardViewList';
import CollectionCard from '../shared/CollectionCard';

type Props = {
  collectionConnection?: any;
};

const CollectionCardViewList: FunctionComponent<Props> = ({
  collectionConnection
}) => {
  if (collectionConnection) {
    return (
      <CardViewList title="작품이 포함된 컬렉션" type="pagination">
        {collectionConnection.edges.map((collectionEdge: any) => {
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
        })}
      </CardViewList>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default CollectionCardViewList;
