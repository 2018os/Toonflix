import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Section from '../../layout/Section';

import CollectionCard from '../shared/CollectionCard';
import LoadingCollectionCard from '../shared/Loading';
import SearchBar from '../shared/SearchBar';

import { useCollectionsForCollectionListLazyQuery } from '../../generated/graphql';

// import { dataForCollectionList as data, loading } from '../../util/dummy';

const SearchBarWrapper = styled.div`
  padding: ${(props) => props.theme.spacing[2]};
  margin-bottom: ${(props) => props.theme.spacing[3]};
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
`;

const CollectionCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  ::after {
    content: '';
    flex: 0 0 ${(props) => props.theme.ImgSizes.LARGE};
  }
`;

const Item = styled.div`
  margin-bottom: ${(props) => props.theme.spacing[3]};
`;

const CollectionListContainer = () => {
  const [
    getCollection,
    { data, loading }
  ] = useCollectionsForCollectionListLazyQuery();
  const [keyword, setKeyword] = useState('');
  const onChange = (value: string) => {
    setKeyword(value);
  };

  useEffect(() => {
    getCollection({ variables: { keyword } });
  }, [keyword]);

  return (
    <>
      <Section>
        <SearchBarWrapper>
          <SearchBar handleChange={onChange} />
        </SearchBarWrapper>
      </Section>
      <Section>
        <CollectionCardContainer>
          {!loading ? (
            data &&
            data.collections.edges &&
            data.collections.edges?.length > 0 ? (
              data.collections.edges?.map((collection) => {
                if (collection?.node) {
                  return (
                    <Item key={`collection-list-item-${collection.node.id}`}>
                      <CollectionCard collection={collection.node} />
                    </Item>
                  );
                }
              })
            ) : (
              <div>notdata, Create your collection</div>
            )
          ) : (
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map((key) => (
              <Item key={`loading-item-${key}`}>
                <LoadingCollectionCard />
              </Item>
            ))
          )}
        </CollectionCardContainer>
      </Section>
    </>
  );
};

export default CollectionListContainer;
