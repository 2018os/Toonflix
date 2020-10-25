import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Section from '../../layout/Section';

import { Text } from '../../styles/Typography';

import WebtoonCard from '../shared/WebtoonCard';

import { SearchForCategoryQuery } from '../../generated/graphql';

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
    flex: 0 0 ${(props) => props.theme.ImgSizes.DEFAULT};
  }
`;

const Item = styled.div`
  margin-bottom: ${(props) => props.theme.spacing[2]};
`;

const MoreButton = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.Colors.PRIMARY_COLOR};
  padding: ${(props) => props.theme.spacing[1]};
  border-radius: 10px;
  border: none;
  height: 60px;
`;

const WebtoonCardList: FunctionComponent<Props> = ({ data, onLoadMore }) => {
  return (
    <>
      <Section>
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
              } else {
                return <div>webtoon data loading</div>;
              }
            })}
        </WebtoonCardListWrapper>
      </Section>
      {data.search.webtoonResult?.pageInfo.hasNextPage ? (
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
