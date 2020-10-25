import React, { FunctionComponent } from 'react';

import CollectionCardList from './CollectionCardList';
import WebtoonCardList from './WebtoonCardList';

import {
  useSearchForCategoryQuery,
  SearchFiltering
} from '../../generated/graphql';

export interface Props {
  filter: SearchFiltering;
}

const CategoryContainer: FunctionComponent<Props> = ({ filter }) => {
  const { data, fetchMore } = useSearchForCategoryQuery({
    variables: {
      where: {
        ...filter
      }
    }
  });
  const webtoonId = data?.search.webtoonResult?.pageInfo.endCursor;
  const collectionId = data?.search.collectionResult?.pageInfo.endCursor;
  return (
    <>
      <div>
        작품 검색 결과
        {data && (
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
                  keyword: '',
                  where: {
                    ...filter
                  },
                  webtoonId
                }
              });
            }}
          />
        )}
      </div>
      <div>
        컬렉션 검색 결과
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
                  keyword: '',
                  where: {
                    ...filter
                  },
                  collectionId
                }
              });
            }}
          />
        )}
      </div>
    </>
  );
};

export default CategoryContainer;
