import React from 'react';
import styled from 'styled-components';

// TODO: Remove important
const StyledImg = styled.img`
  border-radius: 5px !important;
  margin-bottom: 1px;
  margin-left: auto;
`;

const AdultWidgetWrapper = styled.div`
  position: absolute;
`;

const AdultWidget = () => (
  <AdultWidgetWrapper>
    <StyledImg src="/icon/widgets/adult.svg" />
  </AdultWidgetWrapper>
);

const PayWidget = () => (
  <StyledImg src="/icon/widgets/pay.svg" />
);

const PlatFormWidget = ({ platform }) => (
  <StyledImg src={`/icon/widgets/${platform}.svg`} />
);

export {
  AdultWidget,
  PayWidget,
  PlatFormWidget,
};