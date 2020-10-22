import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Link from './Link';

type ImgSize = 'SMALLER' | 'SMALL' | 'DEFAULT' | 'LARGE';

interface ThumbnailProps {
  size: ImgSize;
}

const Thumbnail = styled.div.attrs({
  className: 'loading-thumbnail'
})<{ size: ImgSize }>`
  width: ${(props) => props.theme.ImgSizes[props.size]};
  height: ${(props) => props.theme.ImgSizes[props.size]};
  background-color: ${(props) => props.theme.Colors.WHITE};
`;

const Card = styled.div`
  width: 236px;
  height: 360px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.Colors.WHITE};
`;

const CollectionCard = styled.div`
  width: ${(props) => props.theme.ImgSizes.LARGE};
  height: ${(props) => props.theme.ImgSizes.LARGE};
  border-radius: 10px;
  background-color: ${(props) => props.theme.Colors.WHITE};
`;

const EmptyThumbnail: FunctionComponent<ThumbnailProps> = ({ size }) => {
  return <Thumbnail size={size} />;
};

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
