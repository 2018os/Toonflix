import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Section from '../../layout/Section';

import { Title, Text } from '../../styles/Typography';

import CollectionCardList from './CollectionCardList';
import WebtoonCardList from './WebtoonCardList';

import { LoadingCardList } from '../shared/Loading';
import SearchBar from '../shared/SearchBar';

import { Colors, FontSizes, spacing } from '../../util/theme';
import getScrolledToBottom from '../../util/infiniteScroll';

import {
  useSearchForCategoryQuery,
  SearchFiltering
} from '../../generated/graphql';

export interface Props {
  filter: SearchFiltering;
}

interface SearchQueryString {
  keyword?: string;
}

const CardListWrapper = styled.div`
  margin-top: ${spacing[1]};
`;

const SearchBarWrapper = styled.div`
  margin: auto;
  max-width: 700px;
`;

const CategoryContainer: FunctionComponent<Props> = ({ filter }) => {
  const router = useRouter();
  const { keyword }: SearchQueryString = router.query;
  const [searchKeyword, setKeyword] = useState(keyword || '');
  const { data, loading, fetchMore, refetch } = useSearchForCategoryQuery({
    variables: {
      keyword,
      where: {
        ...filter
      }
    }
  });
  const [beforeWebtoonId, setBeforeWebtoonId] = useState('');
  const [beforeCollectionId, setBeforeCollectionId] = useState('');
  const afterWebtoonId = data?.search.webtoonResult?.pageInfo.endCursor;
  const afterCollectionId = data?.search.collectionResult?.pageInfo.endCursor;

  const handleOnScroll = () => {
    if (getScrolledToBottom()) {
      if (afterCollectionId) setBeforeCollectionId(afterCollectionId);
      fetchMore({
        variables: {
          afterWebtoonId: beforeWebtoonId,
          afterCollectionId
        }
      });
    }
  };

  useEffect(() => {
    global.window.addEventListener('scroll', handleOnScroll);
    return () => {
      global.window.removeEventListener('scroll', handleOnScroll);
    };
  });

  useEffect(() => {
    refetch({
      keyword: searchKeyword,
      where: {
        ...filter
      }
    });
  }, [searchKeyword, refetch, filter]);

  return (
    <>
      <Section>
        <SearchBarWrapper>
          <SearchBar
            keyword={searchKeyword}
            inputSize={FontSizes.LARGER}
            noWrapper
            handleChange={(value) => {
              setKeyword(value);
            }}
            inputPrefix={<Text size={FontSizes.LARGER}>#</Text>}
            placeholder={keyword}
          />
        </SearchBarWrapper>
      </Section>
      <Section>
        <Title size={FontSizes.LARGER} color={Colors.PRIMARY_COLOR}>
          작품 검색 결과
        </Title>
        <CardListWrapper>
          {!loading && data ? (
            <WebtoonCardList
              data={data}
              onLoadMore={() => {
                if (afterWebtoonId) setBeforeWebtoonId(afterWebtoonId);
                fetchMore({
                  variables: {
                    afterWebtoonId,
                    afterCollectionId: beforeCollectionId
                  }
                });
              }}
            />
          ) : (
            <LoadingCardList cardRange={12} cardType="webtoon" />
          )}
        </CardListWrapper>
      </Section>
      <Section>
        <Title size={FontSizes.LARGER} color={Colors.PRIMARY_COLOR}>
          컬렉션 검색 결과
        </Title>
        <CardListWrapper>
          {!loading && data ? (
            <CollectionCardList data={data} />
          ) : (
            <LoadingCardList cardRange={3} cardType="collection" />
          )}
        </CardListWrapper>
      </Section>
    </>
  );
};

export default CategoryContainer;
