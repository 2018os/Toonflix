import React, { FunctionComponent, useState } from 'react';

import withAuth, { AuthState } from '../../hocs/withAuth';

import CollectionCardList from './CollectionCardList';

export interface Props {
  authState: AuthState;
}

type CollectionType = 'myCollections' | 'likedCollections';

const MyCollectionContainer: FunctionComponent<Props> = ({ authState }) => {
  const [collectionType, setCollectionType] = useState<CollectionType>(
    'likedCollections'
  );
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setCollectionType('myCollections');
        }}
      >
        내꺼
      </button>
      <button
        type="button"
        onClick={() => {
          setCollectionType('likedCollections');
        }}
      >
        좋아
      </button>
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
    </div>
  );
};

export default withAuth(MyCollectionContainer);
