import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import Thumbnail from '../shared/Thumbnail';

const Card = styled.div`
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
`;

const WebtoonInfoWrapper = styled.div`
  width: 236px;
  height: 124px;
  background-color: ${(props) => props.theme.Colors.WHILE};
  text-align: center;
`;

const Title = styled.div`
  padding-top: 10px;
  font-size: ${(props) => props.theme.FontSizes.DEFAULT};
  font-weight: bold;
  line-height: 1.5;
  color: ${(props) => props.theme.TextColors.BLACK};
`;

const Author = styled.div`
  margin-top: ${(props) => props.theme.spacing[0]};
  font-size: ${(props) => props.theme.FontSizes.SMALLEST};
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.TextColors.GRAY};
`;

const Tag = styled.div`
  padding: 0 ${(props) => props.theme.spacing[0]};
  height: ${(props) => props.theme.spacing[3]};
  display: inline;
  align-items: center;
  margin-top: ${(props) => props.theme.spacing[2]};
  margin-right: ${(props) => props.theme.spacing[1]};
  font-size: ${(props) => props.theme.FontSizes.SMALL};
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: ${(props) =>
    `0 2px ${props.theme.spacing[0]} 0 rgba(0, 0, 0, 0.2)`};
`;

const ThumbnailWrapper = styled.div``;

type Genre = {
  name: string;
  code: string;
};

export interface Props {
  id: string;
  title: string;
  authorsConnection: any;
  genres: Genre[];
  isAdult: boolean;
  isFinish: boolean;
  isPay: boolean;
  thumbnail: string;
}

function WebtoonCard({
  id,
  title,
  authorsConnection,
  genres,
  isAdult,
  isFinish,
  isPay,
  thumbnail
}: Props) {
  return (
    <Link href="/webtoon/[id]" as={`/webtoon/${id}`}>
      <Card>
        <ThumbnailWrapper>
          <Thumbnail
            src={thumbnail}
            size="DEFAULT"
            isAdult={isAdult}
            isFinish={isFinish}
            isPay={isPay}
          />
        </ThumbnailWrapper>
        <WebtoonInfoWrapper>
          <Title>{title}</Title>
          {authorsConnection?.edges?.map((authorEdge: any) => {
            return (
              <Author key={authorEdge.node.id}>{authorEdge.node.name}</Author>
            );
          })}
          {genres &&
            genres.map((genre: Genre) => {
              return <Tag key={genre.code}># {genre.name}</Tag>;
            })}
        </WebtoonInfoWrapper>
      </Card>
    </Link>
  );
}

export default WebtoonCard;
