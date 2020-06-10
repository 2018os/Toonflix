import React from 'react';
import styled from 'styled-components';

// TODO: Remove important
const StyledImg = styled.img.attrs({
  className: 'thumbnail-widget'
})`
  border-radius: 5px !important;
`;

const AdultWidget = () => (
  <StyledImg src="/icon/widgets/adult.svg" />
);

const PayWidget = () => (
  <StyledImg src="/icon/widgets/pay.svg" />
);

const PlatformWidget = ({ platform }) => (
  <StyledImg src={`/icon/widgets/${platform}.svg`} />
);

const CompleteWidget = () => (
  <StyledImg src="/icon/widgets/complete.svg" />
);

export {
  AdultWidget,
  PayWidget,
  PlatformWidget,
  CompleteWidget,
};