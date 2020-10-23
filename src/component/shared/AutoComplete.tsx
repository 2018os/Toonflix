import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { Text } from '../../styles/Typography';

import { useSearchForAutoCompleteLazyQuery } from '../../generated/graphql';

interface Props {
  keyword: string;
}

const AutoCompleteWrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.Colors.WHITE};
`;

const ItemWrapper = styled.div`
  width: 50%;
`;

const ItemHeader = styled.div`
  padding: ${(props) => `4px ${props.theme.spacing[1]}`};
`;

const Item = styled.div`
  padding: ${(props) => props.theme.spacing[1]};
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.Colors.GRAY};
  }
`;

const Divider = styled.div`
  margin-top: ${(props) => props.theme.spacing[1]};
  margin-bottom: ${(props) => props.theme.spacing[1]};
  border: solid 1px ${(props) => props.theme.Colors.GRAY}; // TODO: Enhance
`;

const Button = styled.button`
  position: absolute;
  border: none;
  background-color: ${(props) => props.theme.Colors.PRIMARY_COLOR};
  color: ${(props) => props.theme.Colors.WHITE};
  width: 100%;
  border-radius: 0 0 5px 5px;
  padding: ${(props) => props.theme.spacing[1]};
  cursor: pointer;
`;

const AutoComplete: FunctionComponent<Props> = ({ keyword }) => {
  const router = useRouter();
  const [getAutoComplete, { data }] = useSearchForAutoCompleteLazyQuery();
  useEffect(() => {
    getAutoComplete({ variables: { keyword } });
  }, [keyword]);
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        borderRadius: '0 0 5px 5px',
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)'
      }}
    >
      <AutoCompleteWrapper>
        <ItemWrapper>
          <ItemHeader>
            <Text>{keyword !== '' ? '작품 검색 결과' : '인기 검색어'}</Text>
          </ItemHeader>
          {data?.search.webtoonResult?.edges?.map((edge) =>
            edge?.node ? (
              <Item
                key={`autocomplete-webtoon-item-${edge.node.id}`}
                onMouseDown={() => router.push(`/webtoon/${edge.node?.id}`)}
                // TODO: Enhance Link
              >
                {edge.node.title}
              </Item>
            ) : (
              <div>loading</div>
            )
          )}
        </ItemWrapper>
        <Divider />
        <ItemWrapper>
          <ItemHeader>
            <Text>{keyword !== '' ? '컬렉션 검색 결과' : '인기 장르'}</Text>
          </ItemHeader>
          {data?.search.collectionResult?.edges?.map((edge) =>
            edge?.node ? (
              <Item
                key={`autocomplete-collection-item-${edge.node.id}`}
                onMouseDown={() => router.push(`/collection/${edge.node?.id}`)}
              >
                {edge.node.title}
              </Item>
            ) : (
              <div>loading</div>
            )
          )}
        </ItemWrapper>
      </AutoCompleteWrapper>
      {keyword !== '' && (
        <Button onMouseDown={() => router.push(`/category`)}>전체보기</Button>
      )}
    </div>
  );
};

export default AutoComplete;
