import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import withAuth, { AuthState } from '../../hocs/withAuth';

import CollectionCardList from './CollectionCardList';

import { spacing, Colors } from '../../util/theme';

export interface Props {
  authState: AuthState;
}

type CollectionType = 'myCollections' | 'likedCollections';

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

const MyCollectionContainer: FunctionComponent<Props> = ({ authState }) => {
  const [collectionType, setCollectionType] = useState<CollectionType>(
    'myCollections'
  );
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
      {authState.me ? (
        <CollectionCardList
          data={authState.me?.[collectionType]}
          onLoadMore={() => {
            console.log(1);
          }}
        />
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default withAuth(MyCollectionContainer);
