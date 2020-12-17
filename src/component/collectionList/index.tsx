import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Section from '../../layout/Section';

import CollectionCardList from './CollectionCardList';

import { LoadingCollectionCard } from '../shared/Loading';
import SearchBar from '../shared/SearchBar';

import { useCollectionsForCollectionListLazyQuery } from '../../generated/graphql';

import { ImgSizes, spacing } from '../../util/theme';

// import { dataForCollectionList as data, loading } from '../../util/dummy';

interface SearchQueryString {
  keyword?: string;
}

const SearchBarWrapper = styled.div`
  padding: ${spacing[2]};
  margin-bottom: ${spacing[3]};
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
`;

const CollectionCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  ::after {
    content: '';
    flex: 0 0 ${ImgSizes.LARGE};
  }
`;

const Item = styled.div`
  margin-bottom: ${spacing[3]};
`;

const CollectionListContainer = () => {
  const router = useRouter();
  const { keyword: searchKeyword }: SearchQueryString = router.query;
  const [
    getCollection,
    { data, fetchMore }
  ] = useCollectionsForCollectionListLazyQuery();
  const [keyword, setKeyword] = useState('');
  const afterId = data?.collections.pageInfo.endCursor;

  const onChange = (value: string) => {
    setKeyword(value);
  };

  useEffect(() => {
    if (searchKeyword) {
      setKeyword(searchKeyword);
    }
  }, [searchKeyword]);
  useEffect(() => {
    getCollection({ variables: { keyword } });
  }, [keyword, getCollection]);

  // No SearchBar component

  return (
    <>
      <Section>
        <SearchBarWrapper>
          <SearchBar handleChange={onChange} value={keyword} />
        </SearchBarWrapper>
      </Section>
      <Section>
        {data ? (
          <CollectionCardList
            data={data}
            onLoadMore={() => {
              if (fetchMore)
                fetchMore({
                  variables: {
                    after: afterId
                  }
                });
            }}
          />
        ) : (
          <CollectionCardContainer>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((key) => (
              <Item key={`loading-item-${key}`}>
                <LoadingCollectionCard />
              </Item>
            ))}
          </CollectionCardContainer>
        )}
      </Section>
    </>
  );
};

export default CollectionListContainer;
