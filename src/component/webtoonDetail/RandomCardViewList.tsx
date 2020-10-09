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

const data = {
  randomWebtoons: [
    {
      id: 'MTA1MjQ=',
      thumbnail:
        'https://image-comic.pstatic.net/webtoon/736928/thumbnail/thumbnail_IMAG19_dd81d056-a2ed-4809-bca3-e2d05aa055de.jpg'
    },
    {
      id: 'MTA1MTI=',
      thumbnail:
        'https://image-comic.pstatic.net/webtoon/738145/thumbnail/thumbnail_IMAG19_b3c7922b-81e9-4039-96ac-588153462fe3.jpg'
    },
    {
      id: 'MTAwOTU=',
      thumbnail:
        'https://image-comic.pstatic.net/webtoon/729767/thumbnail/thumbnail_IMAG19_faf625b4-86b8-4927-b626-61257c4986f9.jpg'
    },
    {
      id: 'MTEzNjI=',
      thumbnail:
        'http://i1.cartoon.daumcdn.net/svc/image/U03/cartoon/556FE04302721A0001'
    },
    {
      id: 'MTIwNTc=',
      thumbnail:
        'http://i1.cartoon.daumcdn.net/svc/image/U03/cartoon/55A740A9027F8E0003'
    },
    {
      id: 'MTIxNzc=',
      thumbnail:
        'http://t1.daumcdn.net/webtoon/op/db4a5ce95e03a644193f0169555bd3c5b92fc79f'
    }
  ]
};

const RandomCardViewList = () => {
  // const { data, loading, refetch } = useRandomWebtoonsForWebtoonDetailQuery({
  //   notifyOnNetworkStatusChange: true
  // });
  const loading = false;
  const refetch = () => {
    console.log('refetch');
    // return data format with dummy data
  };
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
