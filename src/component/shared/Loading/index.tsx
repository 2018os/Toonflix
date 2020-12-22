import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

import { ImgSizes, Colors, spacing } from '../../../util/theme';

type CardType = 'collection' | 'webtoon' | 'thumbnail';

type Props = {
  cardType: CardType;
};

type CardViewListProps = Props & {
  range: number;
};

type CardListProps = Props & {
  cardRange: number;
};

interface ThumbnailProps {
  size: ImgSizes;
}

const baseCss = css`
  border-radius: 10px;
  background-color: ${Colors.SKELETON_COLOR};
`;

const CardListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  & > div {
    margin-bottom: ${spacing[2]};
  }
`;

const CardViewList = styled.div<{ type: CardType }>`
  width: 992px;
  height: ${(props) => (props.type === 'collection' ? '398px' : '438px')};
  ${baseCss};
`;

const CardViewListWrapper = styled.div`
  & > div {
    margin-bottom: ${spacing[5]};
  }
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

export const LoadingComments = styled.div`
  width: 992px;
  height: 100px;
  ${baseCss};
`;

export const LoadingCollectionProfile = styled.div`
  width: 992px;
  height: 324px;
  ${baseCss};
`;

export const LoadingCardViewList: FunctionComponent<CardViewListProps> = ({
  range,
  cardType
}) => (
  <CardViewListWrapper>
    {[...Array(range).keys()].map((number) => (
      <CardViewList key={`card-view-list-${number}`} type={cardType} />
    ))}
  </CardViewListWrapper>
);

export const LoadingCardList: FunctionComponent<CardListProps> = ({
  cardRange,
  cardType
}) => (
  <CardListWrapper>
    {[...Array(cardRange).keys()].map(
      (number) =>
        ({
          collection: (
            <LoadingCollectionCard key={`loading-collection-card-${number}`} />
          ),
          webtoon: (
            <LoadingWebtoonCard key={`loading-webtoon-card-${number}`} />
          ),
          thumbnail: (
            <LoadingThumbnail
              key={`loading-thumbnail-card-${number}`}
              size={ImgSizes.SMALLER}
            />
          )
        }[cardType])
    )}
  </CardListWrapper>
);
