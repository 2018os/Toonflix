import React, { useState } from 'react';
import styled from 'styled-components';

import CardViewList from '../shared/CardViewList';
import Link from '../shared/Link';
import { EmptyWebtoonCard } from '../shared/Empty';
import { LoadingCardViewList, LoadingWebtoonCard } from '../shared/Loading';
import SearchBar from '../shared/SearchBar';
import WebtoonCard from '../shared/WebtoonCard';

import { Text } from '../../styles/Typography';

import Section from '../../layout/Section';

import { useCollectionsForMainQuery } from '../../generated/graphql';

import { Colors, spacing } from '../../util/theme';

// import { dataForMain as data, loading } from '../../util/dummy';

const Button = styled.div`
  line-height: 1.5;
  width: 572px;
  height: 150px;
  background-color: ${Colors.PRIMARY_COLOR};
  font-size: 66px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.GRAY};
`;

const ButtonWrapper = styled.div`
  width: fit-content;
  margin: auto;
`;

const SearchBarWrapper = styled.div`
  width: 992px;
`;

const LinkButtonWrapper = styled.div`
  display: flex;
  margin-top: ${spacing[3]};
  justify-content: center;
  & > .link {
    margin-right: ${spacing[2]};
  }
  & > .link:last-child {
    margin-right: 0;
  }
`;

const LinkButton = styled.div`
  cursor: pointer;
  width: 234px;
  height: 46px;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.PRIMARY_COLOR};
`;

function MainContainer() {
  const { data, loading } = useCollectionsForMainQuery();
  const [keyword, setKeyword] = useState('');

  const onChange = (value: string) => {
    setKeyword(value);
  };

  return (
    <>
      <Section>
        <ButtonWrapper>
          <Button>로고</Button>
        </ButtonWrapper>
      </Section>
      <Section>
        <SearchBarWrapper>
          <SearchBar
            isMain
            autoComplete
            value={keyword}
            handleChange={onChange}
          />
        </SearchBarWrapper>
        <LinkButtonWrapper>
          <Link linkProps={{ href: '/collections' }}>
            <LinkButton>
              <Text bold color={Colors.WHITE}>
                컬렉션 바로가기
              </Text>
            </LinkButton>
          </Link>
          <Link linkProps={{ href: '/category' }}>
            <LinkButton>
              <Text bold color={Colors.WHITE}>
                카테고리 바로가기
              </Text>
            </LinkButton>
          </Link>
          <Link linkProps={{ href: '/random' }}>
            <LinkButton>
              <Text bold color={Colors.WHITE}>
                무작위 웹툰 고르기
              </Text>
            </LinkButton>
          </Link>
        </LinkButtonWrapper>
      </Section>
      {data && !loading ? (
        data.collections.edges?.map((collection) => {
          if (collection?.node?.webtoons) {
            return (
              <Section
                key={`main-webtoon-card-view-list-section-${collection.node.id}`}
              >
                <CardViewList
                  title={collection.node.title}
                  subTitle={`by ${collection.node.writer.name}`}
                  type="pagination"
                >
                  {collection.node.webtoons.edges?.map((edge, edgeIndex) => {
                    if (edge?.node) {
                      const webtoon = edge.node;
                      return (
                        <WebtoonCard
                          webtoon={webtoon}
                          key={`main-webtoon-card-${webtoon.id}`}
                        />
                      );
                    }
                    return (
                      <LoadingWebtoonCard
                        key={`loading-${edge?.__typename}-${edgeIndex}`}
                      />
                    );
                  })}
                  <EmptyWebtoonCard
                    click={`/collection/${collection.node.id}`}
                    title="더 보기"
                  />
                </CardViewList>
              </Section>
            );
          }
          return null;
        })
      ) : (
        <LoadingCardViewList range={4} cardType="webtoon" />
      )}
    </>
  );
}

export default MainContainer;
