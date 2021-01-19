import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import Container from './Container';

import { NaverBadge, DaumBadge } from '../styles/Badge';

import BaseTag from '../component/shared/Tag';
import Tags from '../component/shared/Tags';

import { Colors, spacing, IconSizes } from '../util/theme';

import { Platform, useGenresForFilterQuery } from '../generated/graphql';

type Status = {
  isPay?: boolean;
  isAdult?: boolean;
  isFinish?: boolean;
};

export type FilterType = Status & {
  genres: string[];
  platforms: Platform[];
};

interface Props {
  filter: FilterType;
  setFilter: Dispatch<SetStateAction<FilterType>>;
}

type PlatformBadge = {
  [key in Platform]: any;
};

const Field = styled.div`
  background-color: ${Colors.WHITE};
  margin-top: ${spacing[2]};
  margin-bottom: ${spacing[2]};
`;

const Tag = styled(BaseTag)<{ isSelect: boolean }>`
  cursor: pointer;
  ${(props) => `
    background: ${props.isSelect ? Colors.PRIMARY_COLOR : Colors.WHITE};
    color: ${props.isSelect ? Colors.WHITE : Colors.BLACK};
  `}
`;

const AdultTag = styled(Tag)`
  background: ${(props) => (props.isSelect ? Colors.ADULT : Colors.WHITE)};
`;

const BadgeWrapper = styled.div<{ isSelect: boolean }>`
  display: inline-block;
  cursor: pointer;
  opacity: ${(props) => props.isSelect && 0.5};
  margin-right: ${spacing[0]};
  &:last-child {
    margin-right: 0;
  }
`;

const Filter: FunctionComponent<Props> = ({ filter, setFilter }) => {
  const { data } = useGenresForFilterQuery();
  const platformBadge: PlatformBadge = {
    NAVER: NaverBadge,
    DAUM: DaumBadge
  };

  return (
    <Container>
      <Field>
        {Object.values(platformBadge).map((badge, i) => {
          const platformName = Object.keys(platformBadge)[i] as Platform;
          const PlatformComponent = React.createElement(badge, {
            size: IconSizes.LARGER
          });
          return (
            <BadgeWrapper
              isSelect={!!filter.platforms.includes(platformName)}
              onClick={() => {
                setFilter({
                  ...filter,
                  platforms: filter.platforms.includes(platformName)
                    ? filter.platforms.filter(
                        (platform) => platform !== platformName
                      )
                    : [...filter.platforms, platformName]
                });
              }}
              key={`${platformName}-badge-wrapper`}
            >
              {PlatformComponent}
            </BadgeWrapper>
          );
        })}
      </Field>
      <Field>
        <Tags>
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
