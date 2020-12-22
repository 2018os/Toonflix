import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Section from '../../layout/Section';

import CollectionCardList from './CollectionCardList';

import { LoadingCardList } from '../shared/Loading';
import SearchBar from '../shared/SearchBar';

import { useCollectionsForCollectionListLazyQuery } from '../../generated/graphql';

import getScrolledToBottom from '../../util/infiniteScroll';
import { spacing } from '../../util/theme';

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

const CollectionListContainer = () => {
  const router = useRouter();
  const { keyword: searchKeyword }: SearchQueryString = router.query;
  const [
    getCollection,
    { data, loading, fetchMore }
  ] = useCollectionsForCollectionListLazyQuery();
  const [keyword, setKeyword] = useState('');
  const afterId = data?.collections.pageInfo.endCursor;

  const onChange = (value: string) => {
    setKeyword(value);
  };

  const handleOnScroll = () => {
    if (getScrolledToBottom()) {
      if (fetchMore)
        fetchMore({
          variables: {
            after: afterId
          }
        });
    }
  };

  useEffect(() => {
    if (searchKeyword) {
      setKeyword(searchKeyword);
    }
  }, [searchKeyword]);

  useEffect(() => {
    getCollection({ variables: { keyword } });
  }, [keyword, getCollection]);

  useEffect(() => {
    global.window.addEventListener('scroll', handleOnScroll);
    return () => {
      global.window.removeEventListener('scroll', handleOnScroll);
    };
  });

  // No SearchBar component

  return (
    <>
      <Section>
        <SearchBarWrapper>
          <SearchBar handleChange={onChange} value={keyword} />
        </SearchBarWrapper>
      </Section>
      <Section>
        {data && !loading ? (
          <CollectionCardList data={data} />
        ) : (
          <LoadingCardList cardType="collection" cardRange={3} />
        )}
      </Section>
    </>
  );
};

export default CollectionListContainer;
