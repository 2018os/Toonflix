import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { Title } from '../../styles/Typography';

import Modal, { ModalProps, ModalSubmitButton } from '../shared/Modal';
import WebtoonCard from '../shared/WebtoonCard';

import { spacing } from '../../util/theme';

import {
  useUpdateCollectionForCollectionDetailMutation,
  useSearchForAddWebtoonsModalQuery
} from '../../generated/graphql';

type Props = ModalProps & {
  collectionId: string;
  close: () => any;
};

type WebtoonCardWrapperProps = {
  isSelected?: boolean;
};

const TitleWrapper = styled.div`
  margin-bottom: ${spacing[2]};
`;

const WebtoonCardWrapper = styled.div<WebtoonCardWrapperProps>`
  ${(props) =>
    props.isSelected &&
    `
    opacity: 0.5;
  `}
`;

const WebtoonCardListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const Item = styled.div`
  margin-bottom: ${spacing[2]};
`;

const AddWebtoonsModal: FunctionComponent<Props> = ({
  collectionId,
  isOpen,
  close
}) => {
  const { data, loading } = useSearchForAddWebtoonsModalQuery();
  const [updateCollection] = useUpdateCollectionForCollectionDetailMutation();
  const [webtoonIds, setWebtoonIds] = useState<string[]>([]);
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
      <TitleWrapper>
        <Title>웹툰 추가</Title>
      </TitleWrapper>
      {data && !loading && (
        <WebtoonCardListWrapper>
          {data.search.webtoonResult?.edges?.map((edge) => {
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
            return <div key={edge?.__typename}>Loading</div>;
          })}
        </WebtoonCardListWrapper>
      )}
      <ModalSubmitButton
        onClick={() => {
          updateCollection({
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
        완료
      </ModalSubmitButton>
    </Modal>
  );
};

export default AddWebtoonsModal;
