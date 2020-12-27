import { Formik, Form, Field } from 'formik';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Title } from '../../styles/Typography';

import Modal, { ModalProps, ModalSubmitButton } from '../shared/Modal';

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

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spacing[2]};
`;

const TextField = styled(Field)`
  padding: ${spacing[2]};
  border: none;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  outline: none;
  margin-bottom: ${spacing[1]};
  &: last-child {
    margin-bottom: 0;
  }
`;

const Content = styled.div`
  text-align: center;
`;

const TitleWrapper = styled.div`
  margin-bottom: ${spacing[3]};
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
      style={{
        content: {
          width: '600px',
          height: '300px',
          borderRadius: '10px',
          margin: 'auto'
        }
      }}
    >
      <Content>
        <TitleWrapper>
          <Title>컬렉션 생성</Title>
        </TitleWrapper>
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
            <Label>
              <TextField
                id="title"
                name="title"
                autoComplete="off"
                placeholder="컬렉션 제목"
              />
            </Label>
            <Label>
              <TextField
                id="description"
                name="description"
                autoComplete="off"
                placeholder="내용을 입력하세요"
              />
            </Label>
            <ModalSubmitButton>완료</ModalSubmitButton>
          </Form>
        </Formik>
      </Content>
    </Modal>
  );
};

export default CreateCollectionModal;
