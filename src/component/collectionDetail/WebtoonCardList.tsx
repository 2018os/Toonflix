import React, { FunctionComponent, useState } from 'react';

import withAuth, { AuthState } from '../../hocs/withAuth';

import Section from '../../layout/Section';

import { MoreButton } from '../../styles/Button';
import { Text } from '../../styles/Typography';

import AddWebtoonsModal from './AddWebtoonsModal';

import CardList, { Item } from '../shared/CardList';
import { EmptyWebtoonCard } from '../shared/Empty';
import WebtoonCard from '../shared/WebtoonCard';

import { CollectionFragment } from '../../generated/graphql';
import { FontSizes } from '../../util/theme';

export interface Props {
  data: CollectionFragment;
  authState: AuthState;
  onLoadMore: () => any;
}

const WebtoonCardList: FunctionComponent<Props> = ({
  data,
  onLoadMore,
  authState
}) => {
  const [showAddWebtoonsModal, toggleModal] = useState(false);
  return (
    <>
      <Section>
        <CardList type="webtoon" itemCount={data.webtoons.edges?.length}>
          {data.writer.id === authState?.data?.me?.id && (
            <EmptyWebtoonCard
              click={() => toggleModal(true)}
              title="웹툰 추가하기"
            />
          )}
          {data.webtoons.edges &&
            data.webtoons.edges.map((edge) => {
              if (edge?.node) {
                const webtoon = edge.node;
                return (
                  <Item key={`collection-detail-item-${webtoon.id}`}>
                    <WebtoonCard webtoon={webtoon} />
                  </Item>
                );
              }
              return null;
            })}
        </CardList>
      </Section>
      {data.webtoons.pageInfo.hasNextPage && (
        <Section>
          <MoreButton onClick={() => onLoadMore()}>
            <Text size={FontSizes.SMALL}>더 보기</Text>
          </MoreButton>
        </Section>
      )}
      <AddWebtoonsModal
        isOpen={showAddWebtoonsModal}
        close={() => toggleModal(false)}
        collectionId={data.id}
      />
    </>
  );
};

export default withAuth(WebtoonCardList);
