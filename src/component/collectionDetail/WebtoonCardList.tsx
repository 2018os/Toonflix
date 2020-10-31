import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Section from '../../layout/Section';

import { Text } from '../../styles/Typography';

import WebtoonCard from '../shared/WebtoonCard';

import { CollectionForCollectionDetailQuery } from '../../generated/graphql';
import { ImgSizes, spacing, Colors } from '../../util/theme';

export interface Props {
  data: CollectionForCollectionDetailQuery;
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
      <Section>
        <WebtoonCardListWrapper>
          {data.collection.webtoonsConnection.edges &&
            data.collection.webtoonsConnection.edges.map((edge) => {
              if (edge?.node) {
                const webtoon = edge.node;
                return (
                  <Item key={`collection-detail-item-${webtoon.id}`}>
                    <WebtoonCard webtoon={webtoon} />
                  </Item>
                );
              }
              return <div key={edge?.__typename}>webtoon data loading</div>;
            })}
        </WebtoonCardListWrapper>
      </Section>
      {data.collection.webtoonsConnection.pageInfo.hasNextPage ? (
        <Section>
          <MoreButton onClick={() => onLoadMore()}>
            <Text>더 보기</Text>
          </MoreButton>
        </Section>
      ) : null}
    </>
  );
};

export default WebtoonCardList;
