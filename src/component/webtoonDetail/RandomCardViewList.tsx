import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import CardViewList from '../shared/CardViewList';
import Thumbnail from '../shared/Thumbnail';
import Link from 'next/link';

interface Data {
  id: string;
  thumbnail: string;
}

export interface Props {
  data?: Data[] | null;
}

const Card = styled.div`
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
`;

const CollectionCardViewList: FunctionComponent<Props> = ({ data }) => {
  const pageInfo = {
    hasNext: true,
    hasPrevious: true
  };
  return data ? (
    <CardViewList title="썸네일만 보고 고르기" pageInfo={pageInfo}>
      {data.map(({ id, thumbnail }) => {
        return (
          <Link
            href="/webtoon/[id]"
            as={`/webtoon/${id}`}
            key={`random-thumbnail-${id}`}
          >
            <Card>
              <Thumbnail size="SMALLER" src={thumbnail} />
            </Card>
          </Link>
        );
      })}
    </CardViewList>
  ) : (
    <div>LOading</div>
  );
};

export default CollectionCardViewList;
