import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import Container from './Container';

import BaseTag from '../component/shared/Tag';
import Tags from '../component/shared/Tags';

import { Colors, spacing } from '../util/theme';

import { Platform, useGenresForFilterQuery } from '../generated/graphql';

const Field = styled.div`
  background-color: ${Colors.WHITE};
  margin-top: ${spacing[2]};
  margin-bottom: ${spacing[2]};
`;

const Tag = styled(BaseTag)<{ isSelect: boolean }>`
  ${(props) => `
    cursor: pointer;
    background: ${props.isSelect ? Colors.PRIMARY_COLOR : Colors.WHITE};
    color: ${props.isSelect ? Colors.WHITE : Colors.BLACK};
  `}
`;

const AdultTag = styled(Tag)`
  background: ${(props) => (props.isSelect ? Colors.ADULT : Colors.WHITE)};
`;

export interface FilterType {
  isPay?: boolean;
  isAdult?: boolean;
  isFinish?: boolean;
  genres: string[];
  platforms: Platform[];
}

interface Props {
  filter: FilterType;
  setFilter: Dispatch<SetStateAction<FilterType>>;
}

const Filter: FunctionComponent<Props> = ({ filter, setFilter }) => {
  const { data } = useGenresForFilterQuery();
  return (
    <Container>
      <Field>
        <Tags>
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
          <AdultTag
            isSelect={!!filter.isAdult}
            onClick={() => {
              setFilter({ ...filter, isAdult: !filter.isAdult });
            }}
          >
            성인
          </AdultTag>
          <Tag
            isSelect={!!filter.isPay}
            onClick={() => {
              setFilter({ ...filter, isPay: !filter.isPay });
            }}
          >
            유료
          </Tag>
        </Tags>
      </Field>
      <Field>
        <Tags>
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
                  # {genre.name}
                </Tag>
              )
          )}
        </Tags>
      </Field>
    </Container>
  );
};

export default Filter;
