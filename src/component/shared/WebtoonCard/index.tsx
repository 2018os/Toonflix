import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { DefaultWebtoonCard } from '../../../styles/Card';

import { Text } from '../../../styles/Typography';

import Tag from '../Tag';
import Tags from '../Tags';
import Thumbnail from '../Thumbnail';
import Link from '../Link';

import { WebtoonCardFragment } from '../../../generated/graphql';

import { Colors, FontSizes, ImgSizes, spacing } from '../../../util/theme';

const WebtoonInfoWrapper = styled.div`
  width: 236px;
  height: 124px;
  background-color: ${Colors.WHITE};
  text-align: center;
`;

const Title = styled.div`
  padding-top: ${spacing[1]};
  font-weight: bold;
`;

const Author = styled.div`
  display: inline-block;
  margin-left: ${spacing[0]};
`;

const ThumbnailWrapper = styled.div``;

export interface Props {
  webtoon: WebtoonCardFragment;
  handleClick?: () => any;
}

const WebtoonCard: FunctionComponent<Props> = ({ webtoon, handleClick }) => {
  const {
    id,
    thumbnail,
    isAdult,
    isFinish,
    isPay,
    title,
    authors,
    genres
  } = webtoon;
  const Webtoon = (
    <>
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
        <Title>
          <Text color={Colors.BLACK} size={FontSizes.DEFAULT}>
            {title}
          </Text>
        </Title>
        {authors?.edges?.map((authorEdge) => {
          if (authorEdge?.node) {
            return (
              <Author key={authorEdge.node.id}>
                <Text color={Colors.TEXT_GRAY} size={FontSizes.SMALLEST}>
                  {authorEdge.node.name}
                </Text>
              </Author>
            );
          }
          return null;
        })}
        <Tags>
          {genres &&
            genres.map((genre) => {
              return <Tag key={genre.code}># {genre.name}</Tag>;
            })}
        </Tags>
      </WebtoonInfoWrapper>
    </>
  );
  return handleClick ? (
    <DefaultWebtoonCard onClick={() => handleClick()}>
      {Webtoon}
    </DefaultWebtoonCard>
  ) : (
    <Link
      linkProps={{
        href: '/webtoon/[id]',
        as: `/webtoon/${id}`
      }}
    >
      <DefaultWebtoonCard>{Webtoon}</DefaultWebtoonCard>
    </Link>
  );
};

export default WebtoonCard;
