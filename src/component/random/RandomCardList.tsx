import React from 'react';
import styled from 'styled-components';

import { EmptyThumbnail } from '../shared/Empty';
import Link from '../shared/Link';
import Thumbnail from '../shared/Thumbnail';
import { ImgSizes } from '../../util/theme';
import { useRandomWebtoonsForRandomQuery } from '../../generated/graphql';

const Button = styled.button`
  width: 40px;
  height: 30px;
  border-radius: 10px;
  background-color: #ffffff;
`;

const Card = styled.div`
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
`;

const CardList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  ::after {
    content: '';
    flex: 0 0 ${ImgSizes.DEFAULT};
  }
`;

const RandomCardViewList = () => {
  const { data, loading, refetch } = useRandomWebtoonsForRandomQuery({
    notifyOnNetworkStatusChange: true
  });
  return (
    <>
      <Button type="button" onClick={() => refetch()}>
        R
      </Button>
      <CardList>
        {!loading && data?.randomWebtoons
          ? data.randomWebtoons.map(({ id, thumbnail }) => {
              return (
                <Link
                  linkProps={{
                    href: '/webtoon/[id]',
                    as: `/webtoon/${id}`
                  }}
                  key={`random-thumbnail-${id}`}
                  isNewTab
                >
                  <Card>
                    <Thumbnail size={ImgSizes.DEFAULT} src={thumbnail} />
                  </Card>
                </Link>
              );
            })
          : [0, 1, 2, 3].map((index) => (
              <EmptyThumbnail
                size={ImgSizes.DEFAULT}
                key={`empty-random-thumbnail-${index}`}
              />
            ))}
      </CardList>
    </>
  );
};

export default RandomCardViewList;
