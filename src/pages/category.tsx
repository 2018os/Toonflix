import React, { useState } from 'react';
import styled from 'styled-components';

import withFooter from '../hocs/withFooter';
import withNavigation from '../hocs/withNavigation';

import Container from '../layout/Container';
import Page from '../layout/Page';

import CategoryContainer from '../component/category/index';

import { Platform, useGenresForCategoryQuery } from '../generated/graphql';

const Filter = styled.div`
  background-color: ${(props) => props.theme.Colors.WHITE};
`;

const Tag = styled.div<{ isSelect: boolean }>`
  display: inline;
  border: 1px solid ${(props) => props.theme.Colors.GRAY};
  margin: ${(props) => props.theme.spacing[1]};
  background: ${(props) =>
    props.isSelect
      ? props.theme.Colors.PRIMARY_COLOR
      : props.theme.Colors.WHITE};
`;

const GenreFilter = styled(Filter)``;

export interface Filter {
  isPay?: boolean;
  isAdult?: boolean;
  isFinish?: boolean;
  genres: string[];
  platforms: Platform[];
}

const Category = () => {
  const initialState: Filter = {
    genres: [],
    platforms: []
  };

  const { data } = useGenresForCategoryQuery();
  const [filter, setFilter] = useState(initialState);
  return (
    <>
      <Container>
        <Filter>
          <Tag
            isSelect={!!filter.platforms.includes(Platform.Naver)}
            onClick={() => {
              setFilter({
                ...filter,
                platforms: filter.platforms.includes(Platform.Naver)
                  ? filter.platforms.filter(
                      (platform) => platform !== Platform.Naver
                    )
                  : [...filter.platforms, Platform.Naver]
              });
            }}
          >
            네이버
          </Tag>
          <Tag
            isSelect={!!filter.platforms.includes(Platform.Daum)}
            onClick={() => {
              setFilter({
                ...filter,
                platforms: filter.platforms.includes(Platform.Daum)
                  ? filter.platforms.filter(
                      (platform) => platform !== Platform.Daum
                    )
                  : [...filter.platforms, Platform.Daum]
              });
            }}
          >
            다음
          </Tag>
          <Tag
            isSelect={!!filter.isFinish}
            onClick={() => {
              setFilter({ ...filter, isFinish: !filter.isFinish });
            }}
          >
            완결
          </Tag>
          <Tag
            isSelect={!!filter.isAdult}
            onClick={() => {
              setFilter({ ...filter, isAdult: !filter.isAdult });
            }}
          >
            성인
          </Tag>
          <Tag
            isSelect={!!filter.isPay}
            onClick={() => {
              setFilter({ ...filter, isPay: !filter.isPay });
            }}
          >
            유료
          </Tag>
        </Filter>
        <GenreFilter>
          {data?.genres?.map(
            (genre) =>
              genre && (
                <Tag
                  isSelect={filter.genres.includes(genre.code)}
                  key={`genre-tag-${genre.code}`}
                  onClick={() => {
                    const newGenres = filter.genres.includes(genre.code)
                      ? filter.genres.filter(
                          (existGenre) => existGenre !== genre.code
                        )
                      : [...filter.genres, genre.code];
                    setFilter({
                      ...filter,
                      genres: newGenres
                    });
                  }}
                >
                  {genre.name}
                </Tag>
              )
          )}
        </GenreFilter>
      </Container>
      <Page>
        <Container>
          <CategoryContainer filter={filter} />
        </Container>
      </Page>
    </>
  );
};

export default withNavigation(withFooter(Category));
