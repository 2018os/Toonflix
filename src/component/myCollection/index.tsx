import React, { useState } from 'react';
import styled from 'styled-components';

import CollectionCardList, { CollectionType } from './CollectionCardList';
import { LoadingCardList } from '../shared/Loading';

import { useMeForMyCollectionQuery } from '../../generated/graphql';

import { spacing, Colors } from '../../util/theme';

type ButtonProps = {
  isSelected: boolean;
};

const CollectionButtonWrapper = styled.div`
  margin-bottom: ${spacing[3]};
`;

const CollectionButton = styled.button<ButtonProps>`
  width: 160px;
  padding: ${spacing[1]};
  border-width: 0;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: ${(props) =>
    props.isSelected ? Colors.PRIMARY_COLOR : Colors.WHITE};
  color: ${(props) => (props.isSelected ? Colors.WHITE : Colors.BLACK)};
  &:first-child {
    border-radius: 8px 0 0 8px;
  }
  &:last-child {
    border-radius: 0 8px 8px 0;
  }
`;

const MyCollectionContainer = () => {
  const { data, loading, fetchMore } = useMeForMyCollectionQuery();
  const [collectionType, setCollectionType] = useState<CollectionType>(
    'myCollections'
  );
  const lastCollectionId = {
    myCollections: {
      afterMyCollectionId: data?.me.myCollections.pageInfo.endCursor
    },
    likedCollections: {
      afterLikedCollectionId: data?.me.likedCollections.pageInfo.endCursor
    }
  };
  return (
    <>
      <CollectionButtonWrapper>
        <CollectionButton
          type="button"
          isSelected={collectionType === 'myCollections'}
          onClick={() => {
            setCollectionType('myCollections');
          }}
        >
          내꺼
        </CollectionButton>
        <CollectionButton
          type="button"
          isSelected={collectionType === 'likedCollections'}
          onClick={() => {
            setCollectionType('likedCollections');
          }}
        >
          좋아
        </CollectionButton>
      </CollectionButtonWrapper>
      {data && !loading ? (
        <CollectionCardList
          data={data.me?.[collectionType]}
          collectionType={collectionType}
          onLoadMore={() => {
            fetchMore({
              variables: lastCollectionId[collectionType]
              // TODO: Reset other collectionType
            });
          }}
        />
      ) : (
        <LoadingCardList cardType="collection" cardRange={3} />
      )}
    </>
  );
};

export default MyCollectionContainer;
