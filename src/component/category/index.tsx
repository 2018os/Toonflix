import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Section from '../../layout/Section';

import CollectionCardList from './CollectionCardList';
import WebtoonCardList from './WebtoonCardList';

import { Title } from '../../styles/Typography';

import { Colors, FontSizes, spacing } from '../../util/theme';

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

const CategoryContainer: FunctionComponent<Props> = ({ filter }) => {
  const router = useRouter();
  const { keyword }: SearchQueryString = router.query;
  const { data, loading, fetchMore } = useSearchForCategoryQuery({
    variables: {
      keyword,
      where: {
        ...filter
      }
    }
  });
  const webtoonId = data?.search.webtoonResult?.pageInfo.endCursor;
  const collectionId = data?.search.collectionResult?.pageInfo.endCursor;
  return (
    <>
      <Section>
        <Title size={FontSizes.LARGER} color={Colors.PRIMARY_COLOR}>
          작품 검색 결과
        </Title>
        <CardListWrapper>
          {!loading && data ? (
            <WebtoonCardList
              data={data}
              onLoadMore={() => {
                fetchMore({
                  updateQuery: (previousResult, { fetchMoreResult }) => {
                    if (!fetchMoreResult) {
                      return previousResult;
                    }
                    const prevSearch = previousResult.search;
                    const nextSearch = fetchMoreResult.search;
                    return {
                      search: {
                        ...prevSearch,
                        webtoonResult: prevSearch.webtoonResult &&
                          nextSearch.webtoonResult && {
                            ...prevSearch.webtoonResult,
                            pageInfo: nextSearch.webtoonResult.pageInfo,
                            edges: [
                              ...(prevSearch.webtoonResult.edges &&
                              prevSearch.webtoonResult.edges.length > 0
                                ? [...prevSearch.webtoonResult.edges]
                                : []),
                              ...(nextSearch.webtoonResult.edges &&
                              nextSearch.webtoonResult.edges.length > 0
                                ? [...nextSearch.webtoonResult.edges]
                                : [])
                            ]
                          }
                      }
                    };
                  },
                  variables: {
                    keyword,
                    where: {
                      ...filter
                    },
                    webtoonId
                  }
                });
              }}
            />
          ) : (
            <div>LOADING</div>
          )}
        </CardListWrapper>
      </Section>
      <Section>
        <Title size={FontSizes.LARGER} color={Colors.PRIMARY_COLOR}>
          컬렉션 검색 결과
        </Title>
        <CardListWrapper>
          {data && (
            <CollectionCardList
              data={data}
              onLoadMore={() => {
                fetchMore({
                  updateQuery: (previousResult, { fetchMoreResult }) => {
                    if (!fetchMoreResult) {
                      return previousResult;
                    }
                    const prevSearch = previousResult.search;
                    const nextSearch = fetchMoreResult.search;
                    return {
                      search: {
                        ...prevSearch,
                        collectionResult: prevSearch.collectionResult &&
                          nextSearch.collectionResult && {
                            ...prevSearch.collectionResult,
                            pageInfo: nextSearch.collectionResult.pageInfo,
                            edges: [
                              ...(prevSearch.collectionResult.edges &&
                              prevSearch.collectionResult.edges.length > 0
                                ? [...prevSearch.collectionResult.edges]
                                : []),
                              ...(nextSearch.collectionResult.edges &&
                              nextSearch.collectionResult.edges.length > 0
                                ? [...nextSearch.collectionResult.edges]
                                : [])
                            ]
                          }
                      }
                    };
                  },
                  variables: {
                    keyword,
                    where: {
                      ...filter
                    },
                    collectionId
                  }
                });
              }}
            />
          )}
        </CardListWrapper>
      </Section>
    </>
  );
};

export default CategoryContainer;
