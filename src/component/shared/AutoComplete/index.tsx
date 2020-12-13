import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { Text } from '../../../styles/Typography';

import { useSearchForAutoCompleteLazyQuery } from '../../../generated/graphql';

import { Colors, spacing } from '../../../util/theme';

interface Props {
  keyword: string;
}

const AutoCompleteWrapper = styled.div`
  display: flex;
  background-color: ${Colors.WHITE};
`;

const ItemWrapper = styled.div`
  width: 50%;
`;

const ItemHeader = styled.div`
  padding: 4px ${spacing[1]};
`;

const Item = styled.div`
  padding: ${spacing[1]};
  cursor: pointer;
  :hover {
    background-color: ${Colors.GRAY};
  }
`;

const Divider = styled.div`
  margin-top: ${spacing[1]};
  margin-bottom: ${spacing[1]};
  border: solid 1px ${Colors.GRAY}; // TODO: Enhance
`;

const Button = styled.button`
  position: absolute;
  border: none;
  background-color: ${Colors.PRIMARY_COLOR};
  color: ${Colors.WHITE};
  width: 100%;
  border-radius: 0 0 5px 5px;
  padding: ${spacing[1]};
  cursor: pointer;
`;

// TODO: AutoComplete should not get data

const AutoComplete: FunctionComponent<Props> = ({ keyword }) => {
  const router = useRouter();
  const [getAutoComplete, { data }] = useSearchForAutoCompleteLazyQuery();
  useEffect(() => {
    getAutoComplete({ variables: { keyword } });
  }, [keyword, getAutoComplete]);
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
        <Button
          onMouseDown={() =>
            router.push({
              pathname: '/category',
              query: {
                keyword
              }
            })
          }
        >
          전체보기
        </Button>
      )}
    </div>
  );
};

export default AutoComplete;
