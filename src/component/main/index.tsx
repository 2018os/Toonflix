import React from 'react';
import styled from 'styled-components';

import CardViewList from '../shared/CardViewList';
import Link from '../shared/Link';
import SearchBar from '../shared/SearchBar';
import WebtoonCard from '../shared/WebtoonCard';

import { Text } from '../../styles/Typography';

import { useCollectionsForMainQuery } from '../../generated/graphql';

// import { dataForMain as data, loading } from '../../util/dummy';

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
  const { data, loading } = useCollectionsForMainQuery();
  return (
    <>
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
          if (collection?.node?.webtoonsConnection) {
            return (
              <CardViewList
                title={collection.node.title}
                description={collection.node.description}
                type="pagination"
              >
                {collection.node.webtoonsConnection.edges?.map((edge) => {
                  if (edge?.node) {
                    const webtoon = edge.node;
                    return <WebtoonCard webtoon={webtoon} />;
                  } else {
                    return <div>webtoon data loading</div>;
                  }
                })}
              </CardViewList>
            );
          } else {
            return <div>WebtoonCardViewList loading</div>;
          }
        })
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default MainContainer;
