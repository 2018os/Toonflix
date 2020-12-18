import styled from 'styled-components';

import { ImgSizes } from '../util/theme';

type Props = {
  isHover?: boolean;
};

const Card = styled.div<Props>`
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  ${(props) =>
    props.isHover &&
    `
  display: flex;
  position: relative;
  align-items: center;
  text-align: center;
  &:hover {
    & > .card-hover-background {
      opacity: 0.3;
    }
    & > .card-hover-text {
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
export { DefaultWebtoonCard, DefaultCollectionCard };
