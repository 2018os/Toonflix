import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Text } from '../../styles/Typography';

import WebtoonCard from '../shared/WebtoonCard';

import { SearchForCategoryQuery } from '../../generated/graphql';

import { ImgSizes, spacing, Colors } from '../../util/theme';

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

const MoreButton = styled.button`
  width: 100%;
  background-color: ${Colors.PRIMARY_COLOR};
  padding: ${spacing[1]};
  border-radius: 10px;
  border: none;
  height: 60px;
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
            return <div key={edge?.__typename}>webtoon data loading</div>;
          })}
      </WebtoonCardListWrapper>
      {data.search.webtoonResult?.pageInfo.hasNextPage ? (
        <MoreButton onClick={() => onLoadMore()}>
          <Text>더 보기</Text>
        </MoreButton>
      ) : null}
    </>
  );
};

export default WebtoonCardList;