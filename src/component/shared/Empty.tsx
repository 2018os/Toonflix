import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { ImgSizes, Colors } from '../../util/theme';

import Link from './Link';

interface ThumbnailProps {
  size: ImgSizes;
}

interface Props {
  src: string;
  keyword?: string;
}

const baseCss = css`
  background-color: ${Colors.PRIMARY_COLOR};
  color: ${Colors.WHITE};
  border-radius: 10px;
`;

const EmptyThumbnail = styled.div<ThumbnailProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  ${baseCss}
`;

// TODO: Enhance size
const Card = styled.div`
  width: 236px;
  height: 360px;
  ${baseCss}
`;

const CollectionCard = styled.div`
  width: ${ImgSizes.LARGE};
  height: ${ImgSizes.LARGE};
  ${baseCss}
`;

const EmptyWebtoonCard: FunctionComponent<Props> = ({ src, keyword }) => {
  return (
    <Link linkProps={{ href: { pathname: src, query: { keyword } } }}>
      <Card>자세히 보기</Card>
    </Link>
  );
};

const EmptyCollectionCard: FunctionComponent<Props> = ({ src, keyword }) => {
  return (
    <Link linkProps={{ href: { pathname: src, query: { keyword } } }}>
      <CollectionCard>더 보기</CollectionCard>
    </Link>
  );
};

export { EmptyThumbnail, EmptyWebtoonCard, EmptyCollectionCard };
