import { Formik, Form, Field } from 'formik';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Button from '../../styles/Button';
import { Title } from '../../styles/Typography';

import Modal, { ModalProps } from '../shared/Modal';

import {
  useCreateCollectionForMyCollectionMutation,
  MeForMyCollectionDocument,
  MeForMyCollectionQuery,
  MeForMyCollectionQueryVariables
} from '../../generated/graphql';

import { spacing } from '../../util/theme';

type Props = ModalProps & {
  close: () => any;
};

const TextField = styled(Field)`
  width: 100%;
  padding: ${spacing[2]};
  border: none;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  outline: none;
`;

const CreateCollectionModal: FunctionComponent<Props> = ({ isOpen, close }) => {
  const [createCollection] = useCreateCollectionForMyCollectionMutation({
    update: (cache, mutationResult) => {
      const newCollection = mutationResult.data?.createCollection;
      const existing = cache.readQuery<
        MeForMyCollectionQuery,
        MeForMyCollectionQueryVariables
      >({
        query: MeForMyCollectionDocument
      });
      if (existing && existing.me.myCollections.edges && newCollection) {
        cache.writeQuery({
          query: MeForMyCollectionDocument,
          data: {
            ...existing,
            me: {
              ...existing.me,
              myCollections: {
                ...existing.me.myCollections,
                edges: [
                  ...existing.me.myCollections.edges,
                  {
                    __typename: 'CollectionEdge',
                    node: newCollection
                  }
                ]
              }
            }
          }
        });
      }
    }
  });
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => close()}
      // style={{
      //   content: {
      //     width: '800px',
      //     height: '500px',
      //     padding: 0,
      //     margin: 'auto'
      //   }
      // }}
    >
      <Title>컬렉션 생성</Title>
      <Formik
        initialValues={{
          title: '',
          description: ''
        }}
        onSubmit={(value) => {
          createCollection({
            variables: value
          });
          close();
        }}
      >
        <Form>
          <Field id="title" name="title" />
          <TextField
            id="description"
            name="description"
            autoComplete="off"
            placeholder="내용을 입력하세요"
          />
          <br />
          <Button type="submit" isFull primary>
            보내기
          </Button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default CreateCollectionModal;
