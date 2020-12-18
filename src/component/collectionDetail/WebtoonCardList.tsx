import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import withAuth, { AuthState } from '../../hocs/withAuth';

import Section from '../../layout/Section';

import { DefaultWebtoonCard, CardText } from '../../styles/Card';
import { MoreButton } from '../../styles/Button';
import { Text } from '../../styles/Typography';

import AddWebtoonsModal from './AddWebtoonsModal';
import WebtoonCard from '../shared/WebtoonCard';

import { CollectionForCollectionDetailQuery } from '../../generated/graphql';
import { Colors, ImgSizes, spacing, FontSizes } from '../../util/theme';

export interface Props {
  data: CollectionForCollectionDetailQuery;
  authState: AuthState;
  onLoadMore: () => any;
}

const AddWebtoonsCard = styled(DefaultWebtoonCard)`
  background-color: ${Colors.PRIMARY_COLOR};
`;

const WebtoonCardListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  ::after {
    content: '';
    flex: 0 0 ${ImgSizes.DEFAULT};
  }
`;

const Item = styled.div`
  margin-bottom: ${spacing[2]};
`;

const WebtoonCardList: FunctionComponent<Props> = ({
  data,
  onLoadMore,
  authState
}) => {
  const [showAddWebtoonsModal, toggleModal] = useState(false);
  return (
    <>
      <Section>
        <WebtoonCardListWrapper>
          {data.collection.webtoons.edges &&
            data.collection.webtoons.edges.map((edge) => {
              if (edge?.node) {
                const webtoon = edge.node;
                return (
                  <Item key={`collection-detail-item-${webtoon.id}`}>
                    <WebtoonCard webtoon={webtoon} />
                  </Item>
                );
              }
              return <div key={edge?.__typename}>webtoon data loading</div>;
            })}
          {data.collection.writer.id === authState.me?.id && (
            <AddWebtoonsCard isHover onClick={() => toggleModal(true)}>
              <CardText size={FontSizes.LARGE} color={Colors.WHITE}>
                웹툰 추가하기
              </CardText>
            </AddWebtoonsCard>
          )}
        </WebtoonCardListWrapper>
      </Section>
      {data.collection.webtoons.pageInfo.hasNextPage ? (
        <Section>
          <MoreButton onClick={() => onLoadMore()}>
            <Text size={FontSizes.SMALL}>더 보기</Text>
          </MoreButton>
        </Section>
      ) : null}
      <AddWebtoonsModal
        isOpen={showAddWebtoonsModal}
        close={() => toggleModal(false)}
        collectionId={data.collection.id}
      />
    </>
  );
};

export default withAuth(WebtoonCardList);
