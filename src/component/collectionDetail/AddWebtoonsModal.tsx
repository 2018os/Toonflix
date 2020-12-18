import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import Button from '../../styles/Button';
import { Title } from '../../styles/Typography';

import Modal from '../shared/Modal';
import WebtoonCard from '../shared/WebtoonCard';

import { spacing } from '../../util/theme';

import {
  useAddWebtoonsForCollectionDetailMutation,
  useSearchForAddWebtoonsModalQuery
} from '../../generated/graphql';

type Props = {
  collectionId: string;
  isOpen: boolean;
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
  const [updateCollection] = useAddWebtoonsForCollectionDetailMutation();
  const [webtoonIds, setWebtoonIds] = useState<string[]>([]);
  return (
    <Modal isOpen={isOpen} onRequestClose={() => close()}>
      <Title>컬렉션 생성</Title>
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
      <Button
        isFull
        primary
        type="button"
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
        다음
      </Button>
      {/* <Formik
        initialValues={{
          title: '',
          description: ''
        }}
        onSubmit={(value) => {
          updateCollection({
            variables: {
              collectionId,
              webtoonIds: ['MTE2ODc='],
              afterWebtoonId: '',
              afterCommentId: ''
            }
          });
          close();
        }}
      >
        <Form>
          <Button type="submit" isFull primary>
            보내기
          </Button>
        </Form>
      </Formik> */}
    </Modal>
  );
};

export default AddWebtoonsModal;
