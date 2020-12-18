import React from 'react';
import styled from 'styled-components';

import Card from '../../styles/Card';

import { EmptyThumbnail } from '../shared/Empty';
import Link from '../shared/Link';
import Thumbnail from '../shared/Thumbnail';
import { ImgSizes, spacing } from '../../util/theme';
import { useRandomWebtoonsForRandomQuery } from '../../generated/graphql';

const ButtonWrapper = styled.div`
  text-align: right;
  margin-bottom: ${spacing[2]};
`;

const Button = styled.button`
  width: 40px;
  height: 30px;
  border-radius: 10px;
  background-color: #ffffff;
`;

const CardList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  & > div {
    margin-bottom: ${spacing[4]};
  }
`;

const RandomCardViewList = () => {
  const { data, loading, refetch } = useRandomWebtoonsForRandomQuery({
    notifyOnNetworkStatusChange: true
  });
  return (
    <>
      <ButtonWrapper>
        <Button type="button" onClick={() => refetch()}>
          R
        </Button>
      </ButtonWrapper>
      <CardList>
        {!loading && data?.randomWebtoons
          ? data.randomWebtoons.map(({ id, thumbnail }) => {
              return (
                <Card key={`random-thumbnail-${id}`}>
                  <Link
                    linkProps={{
                      href: '/webtoon/[id]',
                      as: `/webtoon/${id}`
                    }}
                    isNewTab
                  >
                    <Thumbnail size={ImgSizes.DEFAULT} src={thumbnail} />
                  </Link>
                </Card>
              );
            })
          : [0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
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
