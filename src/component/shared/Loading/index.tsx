import styled, { css } from 'styled-components';

import { ImgSizes, Colors } from '../../../util/theme';

interface ThumbnailProps {
  size: ImgSizes;
}

const baseCss = css`
  border-radius: 10px;
  background-color: ${Colors.SKELETON_COLOR};
`;

export const LoadingThumbnail = styled.div<ThumbnailProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  ${baseCss}
`;

export const LoadingPage = styled.div`
  width: 992px;
  height: 1832px;
  ${baseCss}
`;

export const LoadingCardViewList = styled.div`
  width: 992px;
  height: 400px;
  ${baseCss}
`;

export const LoadingWebtoonCard = styled.div`
  width: 236px;
  height: 360px;
  ${baseCss}
`;

export const LoadingCollectionCard = styled.div`
  width: ${ImgSizes.LARGE};
  height: ${ImgSizes.LARGE};
  ${baseCss}
`;
