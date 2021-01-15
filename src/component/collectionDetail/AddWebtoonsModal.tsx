import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from '../../styles/Button';
import { Text } from '../../styles/Typography';

import { LoadingCardList } from '../shared/Loading';
import Modal, { ModalProps } from '../shared/Modal';
import SearchBar from '../shared/SearchBar';
import WebtoonCard from '../shared/WebtoonCard';

import { spacing, FontSizes } from '../../util/theme';

import {
  useAddWebtoonsForCollectionDetailMutation,
  useSearchForAddWebtoonsModalQuery
} from '../../generated/graphql';

type Props = ModalProps & {
  collectionId: string;
  close: () => any;
};

type WebtoonCardWrapperProps = {
  isSelected?: boolean;
};

const WebtoonCardWrapper = styled.div<WebtoonCardWrapperProps>`
  ${(props) =>
    props.isSelected &&
    `
    opacity: 0.5;
  `}
`;

const WebtoonCardListWrapper = styled.div`
  display: flex;
  margin-top: ${spacing[5]};
  justify-content: space-between;
  flex-flow: row wrap;
`;

const Item = styled.div`
  margin-bottom: ${spacing[2]};
`;

const SearchBarWrapper = styled.div`
  margin: auto;
  max-width: 600px;
`;

const StyledButton = styled(Button)`
  margin-top: ${spacing[2]};
  padding: ${spacing[2]};
  border-radius: 10px;
`;

const AddWebtoonsModal: FunctionComponent<Props> = ({
  collectionId,
  isOpen,
  close
}) => {
  const [webtoonIds, setWebtoonIds] = useState<string[]>([]);
  const [keyword, setKeyword] = useState('');
  const {
    data,
    loading,
    refetch,
    fetchMore
  } = useSearchForAddWebtoonsModalQuery();
  const [addWebtoons] = useAddWebtoonsForCollectionDetailMutation();
  const afterWebtoonId = data?.search.webtoonResult?.pageInfo.endCursor;

  useEffect(() => {
    refetch({ keyword });
  }, [keyword, refetch]);

  useEffect(() => {
    if (isOpen) {
      setKeyword('');
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => close()}
      style={{
        content: {
          margin: 'auto',
          width: '1024px',
          height: '700px'
        }
      }}
    >
      <SearchBarWrapper>
        <SearchBar
          inputSize={FontSizes.LARGER}
          noWrapper
          keyword={keyword}
          handleChange={(value) => setKeyword(value)}
          inputPrefix={<Text size={FontSizes.LARGER}>#</Text>}
          placeholder="컬렉션에 어울리는 웹툰을 검색하세요!"
        />
      </SearchBarWrapper>
      <WebtoonCardListWrapper>
        {data && !loading ? (
          data.search.webtoonResult?.edges?.map((edge) => {
            if (edge?.node) {
              const webtoon = edge.node;
              return (
                <Item key={`category-item-${webtoon.id}`}>
                  <WebtoonCardWrapper
                    isSelected={webtoonIds.includes(webtoon.id)}
                  >
                    <WebtoonCard
                      webtoon={webtoon}
                      handleClick={() => {
                        if (webtoonIds) {
                          if (webtoonIds.includes(webtoon.id)) {
                            setWebtoonIds(
                              webtoonIds.filter((id) => id !== webtoon.id)
                            );
                          } else {
                            setWebtoonIds([...webtoonIds, webtoon.id]);
                          }
                        }
                      }}
                    />
                  </WebtoonCardWrapper>
                </Item>
              );
            }
            return null;
          })
        ) : (
          <LoadingCardList cardType="webtoon" cardRange={8} />
        )}
        {data?.search.webtoonResult?.pageInfo.hasNextPage && (
          <StyledButton
            isFull
            onClick={() =>
              fetchMore({
                variables: {
                  afterWebtoonId
                }
              })
            }
          >
            <Text size={FontSizes.SMALL}>더 보기</Text>
          </StyledButton>
        )}
      </WebtoonCardListWrapper>
      <StyledButton
        primary
        isFull
        type="submit"
        onClick={() => {
          addWebtoons({
            variables: {
              collectionId,
              webtoonIds,
              afterWebtoonId: '',
              afterCommentId: ''
            }
          });
          setWebtoonIds([]);
          close();
        }}
      >
        <Text size={FontSizes.DEFAULT}>완료</Text>
      </StyledButton>
    </Modal>
  );
};

export default AddWebtoonsModal;
