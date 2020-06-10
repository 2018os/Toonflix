import React from 'react';
import styled from 'styled-components';

// TODO: Remove important
const StyledImg = styled.img.attrs({
  className: 'thumbnail-widget'
})`
  border-radius: 5px !important;
  ${props => `
    width: ${props.theme.iconSizes[props.size]};
    height: ${props.theme.iconSizes[props.size]};
  `}
`;

const AdultWidget = ({ size }) => (
  <StyledImg src="/icon/widgets/adult.svg" size={size} />
);

const PayWidget = ({ size }) => (
  <StyledImg src="/icon/widgets/pay.svg" size={size} />
);

const PlatformWidget = ({ platform, size }) => (
  <StyledImg src={`/icon/widgets/${platform}.svg`} size={size} />
);

const CompleteWidget = ({ size }) => (
  <StyledImg src="/icon/widgets/complete.svg" size={size} />
);

StyledImg.defaultProps = {
  size: 'default'
};

export {
  AdultWidget,
  PayWidget,
  PlatformWidget,
  CompleteWidget,
};