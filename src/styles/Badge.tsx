import styled from 'styled-components';
import { IconSizes } from '../util/theme';

type Props = {
  size?: IconSizes;
};

const StyledImg = styled.img.attrs({
  className: 'badge'
})<Props>`
  border-radius: 5px;
  width: ${(props) => props.size || IconSizes.DEFAULT};
  height: ${(props) => props.size || IconSizes.DEFAULT};
`;

const AdultBadge = styled(StyledImg).attrs({
  src: '/static/icon/adultUsage.svg'
})``;

const PayBadge = styled(StyledImg).attrs({
  src: '/static/icon/pay.svg'
})``;

const CompleteBadge = styled(StyledImg).attrs({
  src: '/static/icon/complete.svg'
})``;

const NaverBadge = styled(StyledImg).attrs({
  src: '/static/icon/naver.png'
})``;

const DaumBadge = styled(StyledImg).attrs({
  src: '/static/icon/daum.png'
})``;

export { AdultBadge, PayBadge, CompleteBadge, NaverBadge, DaumBadge };
