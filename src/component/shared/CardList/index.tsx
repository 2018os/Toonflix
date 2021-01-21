import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { ImgSizes, spacing } from '../../../util/theme';

export interface Props {
  type: 'webtoon' | 'collection';
  children: React.ReactNode;
  itemCount?: number;
}

const CardListWrapper = styled.div<{ afterWidth: string }>`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  ::after {
    content: '';
    width: ${(props) => props.afterWidth};
  }
`;

export const Item = styled.div`
  margin-bottom: ${spacing[2]};
`;

const CardList: FunctionComponent<Props> = ({ type, children, itemCount }) => {
  const remainingCount = itemCount ? itemCount % 4 : 0;
  const afterWidthByCount: {
    [key in number]: string;
  } = {
    0: '0',
    1: '0',
    2: '49%',
    3: '24%'
  };
  const afterWidth = {
    webtoon: afterWidthByCount[remainingCount],
    collection: ImgSizes.LARGE
  }[type];
  return <CardListWrapper afterWidth={afterWidth}>{children}</CardListWrapper>;
};

export default CardList;
