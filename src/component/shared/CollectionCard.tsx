import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Text } from '../../styles/Typography';

import { FontSizes } from '../../util/theme';

import Thumbnail from './Thumbnail';

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
  width: ${(props) => props.theme.ImgSizes.LARGE};
  height: ${(props) => props.theme.ImgSizes.LARGE};
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

interface CollectionWebtoon {
  id: string;
  thumbnail: string;
}

export interface Props {
  id: string;
  title: string;
  webtoons: CollectionWebtoon[];
}

const CollectionCard: FunctionComponent<Props> = ({ id, title, webtoons }) => {
  const slicedWebtoons = webtoons.slice(0, 4);
  return (
    <Link href="/collection/[id]" as={`/collection/${id}`}>
      <Card>
        <CollectionTitle size={FontSizes.LARGE} bold>
          {title}
        </CollectionTitle>
        <CollectionThumbnail>
          {slicedWebtoons.map((webtoon: CollectionWebtoon) => (
            <Thumbnail
              key={`collection-thumbnail-${webtoon.id}`}
              src={webtoon.thumbnail}
              size="SMALL"
            />
          ))}
        </CollectionThumbnail>
      </Card>
    </Link>
  );
};

export default CollectionCard;
