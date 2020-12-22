import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { MoreButton } from '../../styles/Button';
import { Text } from '../../styles/Typography';

import WebtoonCard from '../shared/WebtoonCard';

import { SearchForCategoryQuery } from '../../generated/graphql';

import { ImgSizes, spacing, FontSizes } from '../../util/theme';

export interface Props {
  data: SearchForCategoryQuery;
  onLoadMore: () => any;
}

const WebtoonCardListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  ::after {
    content: '';
    flex: 0 0 ${ImgSizes.DEFAULT};
  }
`;

const Item = styled.div`
  margin-bottom: ${spacing[2]};
`;

const WebtoonCardList: FunctionComponent<Props> = ({ data, onLoadMore }) => {
  return (
    <>
      <WebtoonCardListWrapper>
        {data.search.webtoonResult?.edges &&
          data.search.webtoonResult.edges.map((edge) => {
            if (edge?.node) {
              const webtoon = edge.node;
              return (
                <Item key={`category-item-${webtoon.id}`}>
                  <WebtoonCard webtoon={webtoon} />
                </Item>
              );
            }
            return null;
          })}
      </WebtoonCardListWrapper>
      {data.search.webtoonResult?.pageInfo.hasNextPage ? (
        <MoreButton onClick={() => onLoadMore()}>
          <Text size={FontSizes.SMALL}>더 보기</Text>
        </MoreButton>
      ) : null}
    </>
  );
};

export default WebtoonCardList;
