import { Formik, Form, Field } from 'formik';
import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Section from '../../layout/Section';

import { Title, Text } from '../../styles/Typography';

import CollectionCardList from './CollectionCardList';
import WebtoonCardList from './WebtoonCardList';
import { LoadingCardList } from '../shared/Loading';

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

const Label = styled.label`
  display: flex;
  justify-content: center;
`;

const SearchBar = styled(Field)`
  border: none;
  outline: none;
  background-color: ${Colors.GRAY};
  font-size: ${FontSizes.LARGEST};
  width: 200px;
  &:focus {
    width: auto;
  }
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

  const handleOnScroll = () => {
    if (getScrolledToBottom()) {
      fetchMore({
        variables: {
          keyword,
          where: {
            ...filter
          },
          collectionId
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
  return (
    <>
      <Section>
        <Formik
          initialValues={{ keyword: '' }}
          onSubmit={(value) => {
            router.push({
              pathname: '/category',
              query: {
                keyword: value.keyword
              }
            });
          }}
        >
          <Form>
            <Label>
              <Text size={FontSizes.LARGEST}>#</Text>
              <SearchBar
                placeholder={keyword}
                id="keyword"
                name="keyword"
                autoComplete="off"
              />
            </Label>
          </Form>
        </Formik>
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
                fetchMore({
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
