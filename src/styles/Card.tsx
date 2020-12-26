import styled from 'styled-components';

import { Text } from './Typography';

import { ImgSizes } from '../util/theme';

type Props = {
  isHover?: boolean;
};

const CardText = styled(Text).attrs({
  className: 'card-text'
})`
  z-index: 1;
  display: none;
  position: absolute;
  left: 0;
  right: 0;
`;

const CardBackground = styled.div.attrs({
  className: 'card-background'
})``;

const Card = styled.div<Props>`
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  ${(props) =>
    props.isHover &&
    `
  display: flex;
  position: relative;
  align-items: center;
  text-align: center;
  &:hover {
    & > .card-background {
      opacity: 0.3;
    }
    & > .card-text {
      display: inline;
    }
  }
  `}
`;

const DefaultWebtoonCard = styled(Card)`
  width: 236px;
  height: 360px;
`;

const DefaultCollectionCard = styled(Card)`
  width: ${ImgSizes.LARGE};
  height: ${ImgSizes.LARGE};
`;

export default Card;
export { CardText, CardBackground, DefaultWebtoonCard, DefaultCollectionCard };
