import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { DefaultCollectionCard } from '../../../styles/Card';
import { Text } from '../../../styles/Typography';

import { FontSizes, ImgSizes } from '../../../util/theme';

import Link from '../Link';
import Thumbnail from '../Thumbnail';

import { CollectionCardFragment } from '../../../generated/graphql';

const CollectionThumbnail = styled.div.attrs({
  className: 'card-hover-background'
})`
  display: flex;
  flex-wrap: wrap;
`;

const CollectionTitle = styled(Text).attrs({
  className: 'card-hover-text'
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
    collection.webtoons.edges && collection.webtoons.edges.slice(0, 4);
  return (
    <Link
      linkProps={{
        href: '/collection/[id]',
        as: `/collection/${collection.id}`
      }}
    >
      <DefaultCollectionCard isHover>
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
      </DefaultCollectionCard>
    </Link>
  );
};

export default CollectionCard;
