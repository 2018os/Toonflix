import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Text } from '../../../styles/Typography';

import { FontSizes, ImgSizes } from '../../../util/theme';

import Link from '../Link';
import Thumbnail from '../Thumbnail';

import { CollectionCardFragment } from '../../../generated/graphql';

const CollectionThumbnail = styled.div.attrs({
  className: 'collection-thumbnail'
})`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  width: ${ImgSizes.LARGE};
  height: ${ImgSizes.LARGE};
  display: flex;
  position: relative;
  align-items: center;
  text-align: center;
  &:hover {
    & > .collection-thumbnail {
      opacity: 0.3;
    }
    & > .collection-title {
      display: inline;
    }
  }
`;

const CollectionTitle = styled(Text).attrs({
  className: 'collection-title'
})`
  z-index: 1;
  display: none;
  position: absolute;
  left: 0;
  right: 0;
`;

export interface Props {
  collection: CollectionCardFragment;
}

const CollectionCard: FunctionComponent<Props> = ({ collection }) => {
  const slicedWebtoons =
    collection.webtoonsConnection.edges &&
    collection.webtoonsConnection.edges.slice(0, 4);
  return (
    <Link
      linkProps={{
        href: '/collection/[id]',
        as: `/collection/${collection.id}`
      }}
    >
      <Card>
        <CollectionTitle size={FontSizes.LARGE} bold>
          {collection.title}
        </CollectionTitle>
        <CollectionThumbnail>
          {slicedWebtoons ? (
            slicedWebtoons.map((webtoon) => {
              if (webtoon?.node) {
                const { id, thumbnail } = webtoon.node;
                return (
                  <Thumbnail
                    key={`collection-thumbnail-${id}`}
                    src={thumbnail}
                    size={ImgSizes.SMALL}
                  />
                );
              }
              return null;
            })
          ) : (
            <div>collection card thumbnail loading</div>
          )}
        </CollectionThumbnail>
      </Card>
    </Link>
  );
};

export default CollectionCard;
