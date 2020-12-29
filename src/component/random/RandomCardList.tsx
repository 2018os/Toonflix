import React from 'react';
import styled from 'styled-components';

import Card from '../../styles/Card';

import { LoadingCardViewList } from '../shared/Loading';
import Link from '../shared/Link';
import Thumbnail from '../shared/Thumbnail';

import { useRandomWebtoonsForRandomQuery } from '../../generated/graphql';

import { Colors, ImgSizes, spacing } from '../../util/theme';

const ButtonWrapper = styled.div`
  text-align: right;
  margin-bottom: ${spacing[2]};
`;

const Button = styled.button`
  cursor: pointer;
  width: 40px;
  height: 30px;
  border-radius: 10px;
  border: none;
  background-color: ${Colors.WHITE};
`;

const CardList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  & > div {
    margin-bottom: ${spacing[2]};
  }
`;

const Refresh = styled.img.attrs({
  src: '/static/icon/refresh.svg'
})``;

const RandomCardViewList = () => {
  const { data, loading, refetch } = useRandomWebtoonsForRandomQuery({
    notifyOnNetworkStatusChange: true
  });
  return (
    <>
      <ButtonWrapper>
        <Button type="button" onClick={() => refetch()}>
          <Refresh />
        </Button>
      </ButtonWrapper>
      <CardList>
        {!loading && data?.randomWebtoons ? (
          data.randomWebtoons.map(({ id, thumbnail }) => {
            return (
              <Card key={`random-thumbnail-${id}`}>
                <Link
                  linkProps={{
                    href: '/webtoon/[id]',
                    as: `/webtoon/${id}`
                  }}
                >
                  <Thumbnail size={ImgSizes.DEFAULT} src={thumbnail} />
                </Link>
              </Card>
            );
          })
        ) : (
          <LoadingCardViewList cardType="largeThumbnail" range={2} />
        )}
      </CardList>
    </>
  );
};

export default RandomCardViewList;
