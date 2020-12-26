import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

import {
  DefaultWebtoonCard,
  DefaultCollectionCard,
  CardText
} from '../../../styles/Card';

import Link from '../Link';

import { Colors, FontSizes } from '../../../util/theme';

type ClickAction = () => any;

interface Props {
  click: ClickAction | string;
  title: string;
  keyword?: string;
}

const baseCss = css`
  position: relative;
  background-color: ${Colors.PRIMARY_COLOR};
  color: ${Colors.WHITE};
`;

const WebtoonCard = styled(DefaultWebtoonCard).attrs({
  isHover: true
})`
  ${baseCss}
`;

const CollectionCard = styled(DefaultCollectionCard).attrs({
  isHover: true
})`
  ${baseCss}
`;

const EmptyWebtoonCard: FunctionComponent<Props> = ({
  click,
  keyword,
  title
}) => {
  return typeof click === 'string' ? (
    <Link
      linkProps={{
        href: {
          pathname: click,
          query: keyword && {
            keyword
          }
        }
      }}
    >
      <WebtoonCard>
        <CardText size={FontSizes.LARGE} color={Colors.WHITE}>
          {title}
        </CardText>
      </WebtoonCard>
    </Link>
  ) : (
    <WebtoonCard onClick={() => click()}>
      <CardText size={FontSizes.LARGE} color={Colors.WHITE}>
        {title}
      </CardText>
    </WebtoonCard>
  );
};

const EmptyCollectionCard: FunctionComponent<Props> = ({
  click,
  keyword,
  title
}) => {
  return typeof click === 'string' ? (
    <Link
      linkProps={{
        href: {
          pathname: click,
          query: keyword && {
            keyword
          }
        }
      }}
    >
      <CollectionCard>
        <CardText size={FontSizes.LARGE} color={Colors.WHITE}>
          {title}
        </CardText>
      </CollectionCard>
    </Link>
  ) : (
    <CollectionCard onClick={() => click()}>
      <CardText size={FontSizes.LARGE} color={Colors.WHITE}>
        {title}
      </CardText>
    </CollectionCard>
  );
};

export { EmptyWebtoonCard, EmptyCollectionCard };
