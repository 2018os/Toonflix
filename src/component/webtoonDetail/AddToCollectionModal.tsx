import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { Title } from '../../styles/Typography';

import Modal, { ModalProps } from '../shared/Modal';

import {
  useMeForAddToCollectionModalQuery,
  useUpdateCollectionForWebtoonDetailMutation
} from '../../generated/graphql';

import { spacing, Colors } from '../../util/theme';

type Props = ModalProps & {
  webtoonId: string;
  close: () => any;
};

const CollectionList = styled.div`
  margin-top: ${spacing[5]};
`;

const Item = styled.div<{ isSelect: boolean }>`
  margin-bottom: ${spacing[2]};
  cursor: pointer;
  ::before {
    content: '';
    border-radius: 5px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    margin-right: ${spacing[1]};
    border-style: solid;
    border-width: 0px 12px;
    border-color: ${(props) =>
      props.isSelect ? Colors.PRIMARY_COLOR : Colors.WHITE};
  }
`;

const AddToCollectionModal: FunctionComponent<Props> = ({
  webtoonId,
  isOpen,
  close
}) => {
  const { data } = useMeForAddToCollectionModalQuery();
  const [updateCollection] = useUpdateCollectionForWebtoonDetailMutation();
  const [selectedCollection, setSelectedCollection] = useState<
    string | undefined
  >();
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => close()}
      style={{
        content: {
          width: '500px',
          height: '400px',
          margin: 'auto',
          borderRadius: '10px'
        }
      }}
      submit={() => {
        if (
          data &&
          data.me.myCollections.edges &&
          data.me.myCollections.edges[0]?.node?.id
        )
          updateCollection({
            variables: {
              collectionId:
                selectedCollection || data.me.myCollections.edges[0].node.id,
              webtoonIds: [webtoonId]
            }
          });
      }}
    >
      <Title>컬렉션 작품 추가</Title>
      <CollectionList>
        {data?.me.myCollections.edges?.map((edge, index) => {
          if (edge?.node) {
            return (
              <Item
                key={edge.node.id}
                isSelect={
                  selectedCollection
                    ? edge.node.id === selectedCollection
                    : index === 0
                }
                onClick={() => {
                  setSelectedCollection(edge.node?.id);
                }}
              >
                {edge.node.title}
              </Item>
            );
          }
          return null;
        })}
      </CollectionList>
    </Modal>
  );
};

export default AddToCollectionModal;
