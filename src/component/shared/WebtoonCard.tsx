import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Tag from './Tag';
import Tags from './Tags';
import Thumbnail from './Thumbnail';
import Link from './Link';

import { WebtoonCardFragment } from '../../generated/graphql';

import { Colors, FontSizes, spacing, ImgSizes } from '../../util/theme';

const Card = styled.div`
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  width: 236px;
  height: 360px;
`;

const WebtoonInfoWrapper = styled.div`
  width: 236px;
  height: 124px;
  background-color: ${Colors.WHITE};
  text-align: center;
`;

const Title = styled.div`
  padding-top: 10px;
  font-size: ${FontSizes.DEFAULT};
  font-weight: bold;
  line-height: 1.5;
  color: ${Colors.BLACK};
`;

const Author = styled.div`
  margin-top: ${spacing[0]};
  font-size: ${FontSizes.SMALLEST};
  font-weight: 500;
  text-align: center;
  color: ${Colors.GRAY};
`;

const ThumbnailWrapper = styled.div``;

export interface Props {
  webtoon: WebtoonCardFragment;
}

const WebtoonCard: FunctionComponent<Props> = ({ webtoon }) => {
  const {
    id,
    thumbnail,
    isAdult,
    isFinish,
    isPay,
    title,
    authorsConnection,
    genres
  } = webtoon;
  return (
    <Link
      linkProps={{
        href: '/webtoon/[id]',
        as: `/webtoon/${id}`
      }}
    >
      <Card>
        <ThumbnailWrapper>
          <Thumbnail
            src={thumbnail}
            size={ImgSizes.DEFAULT}
            isAdult={isAdult}
            isFinish={isFinish}
            isPay={isPay}
          />
        </ThumbnailWrapper>
        <WebtoonInfoWrapper>
          <Title>{title}</Title>
          {authorsConnection?.edges?.map((authorEdge) => {
            if (authorEdge?.node) {
              return (
                <Author key={authorEdge.node.id}>{authorEdge.node.name}</Author>
              );
            }
            return <div key={authorEdge?.__typename}>Author data Loading</div>;
          })}
          <Tags>
            {genres &&
              genres.map((genre) => {
                return <Tag key={genre.code}># {genre.name}</Tag>;
              })}
          </Tags>
        </WebtoonInfoWrapper>
      </Card>
    </Link>
  );
};

export default WebtoonCard;
