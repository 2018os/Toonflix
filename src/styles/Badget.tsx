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
  src: '/static/icon/paidService.png'
})``;

const CompleteBadge = styled(StyledImg).attrs({
  src: '/static/icon/complete.svg'
})``;

const NaverBadge = styled(StyledImg).attrs({
  src: '/static/icon/naver.png'
})``;

export { AdultBadge, PayBadge, CompleteBadge, NaverBadge };
