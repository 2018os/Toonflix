import React from 'react';
import styled from 'styled-components';

import ContentContainer from '../../layout/Container';

import WebtoonCardViewList from './WebtoonCardViewList';

import Link from '../shared/Link';
import SearchBar from '../shared/SearchBar';

import { Text } from '../../styles/Typography';

import { useCollectionsForMainQuery } from '../../generated/graphql';

import { dataForMain as data, loading } from '../../util/dummy';

const Container = styled.div`
  min-width: 1024px;
  padding-bottom: 100px;
  background: ${(props) => props.theme.Colors.GRAY};
`;

const Button = styled.div`
  line-height: 1.5;
  width: 572px;
  height: 150px;
  background-color: ${(props) => props.theme.Colors.PRIMARY_COLOR};
  font-size: 66px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.Colors.GRAY};
`;

const ButtonWrapper = styled.div`
  padding-top: ${(props) => props.theme.spacing[6]};
  width: fit-content;
  margin: auto;
`;

const SearchBarWrapper = styled.div`
  width: 992px;
  margin-top: ${(props) => props.theme.spacing[5]};
`;

const LinkButtonWrapper = styled.div`
  display: flex;
  margin-top: ${(props) => props.theme.spacing[3]};
  justify-content: center;
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
  background-color: ${(props) => props.theme.Colors.PRIMARY_COLOR};
`;

function MainContainer() {
  // const { data, loading } = useCollectionsForMainQuery();
  return (
    <Container>
      <ContentContainer>
        <ButtonWrapper>
          <Button>로고</Button>
        </ButtonWrapper>
        <SearchBarWrapper>
          <SearchBar isMain />
        </SearchBarWrapper>
        <LinkButtonWrapper>
          <LinkButton>
            <Link linkProps={{ href: '/collections' }}>
              <Text bold>컬렉션 바로가기</Text>
            </Link>
          </LinkButton>
          <LinkButton style={{ marginLeft: '18px' }}>
            <Link linkProps={{ href: '/category' }}>
              <Text bold>카테고리 바로가기</Text>
            </Link>
          </LinkButton>
        </LinkButtonWrapper>
        {data && !loading ? (
          data.collections.edges?.map((collection, index) => {
            return (
              <WebtoonCardViewList
                key={`webtoon-card-list-${index}`}
                webtoonConnection={collection && collection.node}
              />
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </ContentContainer>
    </Container>
  );
}

export default MainContainer;
