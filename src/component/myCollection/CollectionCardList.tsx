import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import Section from '../../layout/Section';

import { MoreButton } from '../../styles/Button';
import { Text } from '../../styles/Typography';

import CreateCollectionModal from './CreateCollectionModal';

import CollectionCard from '../shared/CollectionCard';
import { EmptyCollectionCard } from '../shared/Empty';

import { UserCollectionCardListFragment } from '../../generated/graphql';
import { ImgSizes, spacing, FontSizes } from '../../util/theme';

export type CollectionType = 'myCollections' | 'likedCollections';

export interface Props {
  data: UserCollectionCardListFragment;
  collectionType: CollectionType;
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

const CollectionCardList: FunctionComponent<Props> = ({
  data,
  collectionType,
  onLoadMore
}) => {
  const [showCreateCollectionModal, toggleModal] = useState(false);
  return (
    <>
      <Section>
        <CollectionCardListWrapper>
          {collectionType === 'myCollections' && (
            <Item>
              <EmptyCollectionCard
                click={() => toggleModal(true)}
                title="컬렉션 만들기"
              />
            </Item>
          )}
          {data?.edges &&
            data?.edges.map((edge) => {
              if (edge?.node) {
                const collection = edge.node;
                return (
                  <Item key={`category-item-${collection.id}`}>
                    <CollectionCard collection={collection} />
                  </Item>
                );
              }
              return null;
            })}
        </CollectionCardListWrapper>
      </Section>
      {data.pageInfo.hasNextPage ? (
        <Section>
          <MoreButton onClick={() => onLoadMore()}>
            <Text size={FontSizes.SMALL}>더 보기</Text>
          </MoreButton>
        </Section>
      ) : null}
      <CreateCollectionModal
        isOpen={showCreateCollectionModal}
        close={() => toggleModal(false)}
      />
    </>
  );
};

export default CollectionCardList;
