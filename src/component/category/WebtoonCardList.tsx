import React, { FunctionComponent } from 'react';

import { MoreButton } from '../../styles/Button';
import { Text } from '../../styles/Typography';

import CardList, { Item } from '../shared/CardList';
import WebtoonCard from '../shared/WebtoonCard';

import { SearchForCategoryQuery } from '../../generated/graphql';

import { FontSizes } from '../../util/theme';

export interface Props {
  data: SearchForCategoryQuery;
  onLoadMore: () => any;
}

const WebtoonCardList: FunctionComponent<Props> = ({ data, onLoadMore }) => {
  return (
    <>
      <CardList
        type="webtoon"
        itemCount={data.search.webtoonResult?.edges?.length}
      >
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
      </CardList>
      {data.search.webtoonResult?.pageInfo.hasNextPage ? (
        <MoreButton onClick={() => onLoadMore()}>
          <Text size={FontSizes.SMALL}>더 보기</Text>
        </MoreButton>
      ) : null}
    </>
  );
};

export default WebtoonCardList;
