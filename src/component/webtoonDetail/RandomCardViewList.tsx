import React from 'react';
import styled from 'styled-components';

import CardViewList from '../shared/CardViewList';
import { EmptyThumbnail } from '../shared/Empty';
import Link from '../shared/Link';
import Thumbnail from '../shared/Thumbnail';
import { useRandomWebtoonsForWebtoonDetailQuery } from '../../generated/graphql';

const Card = styled.div`
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
`;

const RandomCardViewList = () => {
  const { data, loading, refetch } = useRandomWebtoonsForWebtoonDetailQuery({
    notifyOnNetworkStatusChange: true
  });
  return (
    <CardViewList
      title="썸네일만 보고 고르기"
      type="refresh"
      refetch={() => refetch()}
    >
      {!loading && data?.randomWebtoons
        ? data.randomWebtoons.map(({ id, thumbnail }) => {
            return (
              <Link
                linkProps={{
                  href: '/webtoon/[id]',
                  as: `/webtoon/${id}`
                }}
                key={`random-thumbnail-${id}`}
              >
                <Card>
                  <Thumbnail size="SMALLER" src={thumbnail} />
                </Card>
              </Link>
            );
          })
        : [0, 1, 2, 3, 4, 5].map((index) => (
            <EmptyThumbnail size="SMALLER" key={`empty-thumbnail-${index}`} />
          ))}
    </CardViewList>
  );
};

export default RandomCardViewList;
