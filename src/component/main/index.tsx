import React from 'react';
import styled from 'styled-components';

import ContentContainer from '../../layout/Container';

import WebtoonCardViewList from './WebtoonCardViewList';

import { spacing, IconSizes } from '../../util/theme';

import { useCollectionsForMainQuery } from '../../generated/graphql';

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

const SearchBar = styled.input`
  padding: 0 ${(props) => props.theme.spacing[3]};
  width: 100%;
  height: 116px;
  font-size: ${(props) => props.theme.FontSizes.H2};
  font-weight: 500;
  border: none;
  outline: none;
  &::placeholder {
    color: ${(props) => props.theme.TextColors.PRIMARY_COLOR};
  }
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  margin-top: ${(props) => props.theme.spacing[5]};
  width: 992px;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid
    ${(props) =>
      ` ${props.theme.spacing[0]} ${props.theme.Colors.PRIMARY_COLOR}`};
  background-color: ${(props) => props.theme.Colors.WHILE};
`;

const LinkButtonWrapper = styled.div`
  display: flex;
  margin-top: ${(props) => props.theme.spacing[3]};
  justify-content: center;
`;

const LinkButton = styled.div`
  cursor: pointer;
  font-size: ${(props) => props.theme.FontSizes.LARGE};
  font-weight: bold;
  color: ${(props) => props.theme.Colors.WHILE};
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
  const { data, loading } = useCollectionsForMainQuery();
  return (
    <Container>
      <ContentContainer>
        <ButtonWrapper>
          <Button>로고</Button>
        </ButtonWrapper>
        <SearchBarWrapper>
          <img
            width={IconSizes.LARGER}
            height={IconSizes.LARGER}
            src="/static/icon/search.svg"
            style={{ marginLeft: spacing[5] }}
          />
          <SearchBar placeholder="컬렉션 장르, 키워드, 작가 등을 검색해보세요" />
        </SearchBarWrapper>
        <LinkButtonWrapper>
          <LinkButton>컬렉션 바로가기</LinkButton>
          <LinkButton style={{ marginLeft: '18px' }}>
            컬렉션 바로가기
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
