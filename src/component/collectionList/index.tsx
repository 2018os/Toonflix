import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Section from '../../layout/Section';

import { Text } from '../../styles/Typography';

import CollectionCardList from './CollectionCardList';

import { LoadingCardList } from '../shared/Loading';
import SearchBar from '../shared/SearchBar';

import { useCollectionsForCollectionListLazyQuery } from '../../generated/graphql';

import getScrolledToBottom from '../../util/infiniteScroll';
import { FontSizes } from '../../util/theme';

const SearchBarWrapper = styled.div`
  margin: auto;
  max-width: 600px;
`;

const CollectionListContainer = () => {
  const [
    getCollection,
    { data, loading, fetchMore }
  ] = useCollectionsForCollectionListLazyQuery({
    fetchPolicy: 'cache-and-network'
  });
  const [searchKeyword, setKeyword] = useState('');
  const afterId = data?.collections.pageInfo.endCursor;

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
    getCollection({ variables: { keyword: searchKeyword } });
  }, [searchKeyword, getCollection]);

  useEffect(() => {
    global.window.addEventListener('scroll', handleOnScroll);
    return () => {
      global.window.removeEventListener('scroll', handleOnScroll);
    };
  });

  return (
    <>
      <Section>
        <SearchBarWrapper>
          <SearchBar
            placeholder="컬렉션의 키워드를 검색해보세요"
            keyword={searchKeyword}
            inputSize={FontSizes.LARGER}
            noWrapper
            handleChange={(value) => {
              setKeyword(value);
            }}
            inputPrefix={<Text size={FontSizes.LARGER}>#</Text>}
          />
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
