import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Section from '../../layout/Section';

import { Text } from '../../styles/Typography';

import CollectionCard from '../shared/CollectionCard';

import { CollectionsForCollectionListQuery } from '../../generated/graphql';

export interface Props {
  data: CollectionsForCollectionListQuery;
  onLoadMore: () => any;
}

const CollectionCardListWrapper = styled.div`
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

const CollectionCardList: FunctionComponent<Props> = ({ data, onLoadMore }) => {
  return (
    <>
      <Section>
        <CollectionCardListWrapper>
          {data.collections?.edges &&
            data.collections?.edges.map((edge) => {
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
      {data.collections?.pageInfo.hasNextPage ? (
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
