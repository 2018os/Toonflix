import React from 'react';
import styled from 'styled-components';

// TODO: Remove important
const StyledImg = styled.img`
  border-radius: 5px !important;
  margin-bottom: ${props => props.theme.spacing[0]};
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

const CompleteWidget = () => (
  <StyledImg src="/icon/widgets/complete.svg" />
);

export {
  AdultWidget,
  PayWidget,
  PlatFormWidget,
  CompleteWidget,
};