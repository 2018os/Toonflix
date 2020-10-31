import React from 'react';
import styled from 'styled-components';
import { ImgSizes, Colors } from '../../util/theme';

import Link from './Link';


interface ThumbnailProps {
  size: ImgSizes;
}

const EmptyThumbnail = styled.div.attrs({
  className: 'loading-thumbnail'
})<ThumbnailProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-color: ${Colors.WHITE};
`;

const Card = styled.div`
  width: 236px;
  height: 360px;
  border-radius: 10px;
  background-color: ${Colors.WHITE};
`;

const CollectionCard = styled.div`
  width: ${ImgSizes.LARGE};
  height: ${ImgSizes.LARGE};
  border-radius: 10px;
  background-color: ${Colors.WHITE};
`;

const EmptyWebtoonCard = () => {
  return (
    <Link linkProps={{ href: '/category' }}>
      <Card>더 보기</Card>
    </Link>
  );
};

const EmptyCollectionCard = () => {
  return (
    <Link linkProps={{ href: '/collection' }}>
      <CollectionCard>더 보기</CollectionCard>
    </Link>
  );
};

export { EmptyThumbnail, EmptyWebtoonCard, EmptyCollectionCard };
