import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Section from '../../layout/Section';

import { Text } from '../../styles/Typography';

import CollectionCard from '../shared/CollectionCard';

import { SearchForCategoryQuery } from '../../generated/graphql';
import { ImgSizes, spacing, Colors } from '../../util/theme';

export interface Props {
  data: SearchForCategoryQuery;
  onLoadMore: () => any;
}

const CollectionCardListWrapper = styled.div`
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

// TODO: Change More to Infinite scroll
const CollectionCardList: FunctionComponent<Props> = ({ data, onLoadMore }) => {
  return (
    <>
      <Section>
        <CollectionCardListWrapper>
          {data.search.collectionResult?.edges &&
            data.search.collectionResult.edges.map((edge) => {
              if (edge?.node) {
                const collection = edge.node;
                return (
                  <Item key={`category-item-${collection.id}`}>
                    <CollectionCard collection={collection} />
                  </Item>
                );
              } else {
                return <div>collection data loading</div>;
              }
            })}
        </CollectionCardListWrapper>
      </Section>
      {data.search.collectionResult?.pageInfo.hasNextPage ? (
        <Section>
          <MoreButton onClick={() => onLoadMore()}>
            <Text>더 보기</Text>
          </MoreButton>
        </Section>
      ) : null}
    </>
  );
};

export default CollectionCardList;
