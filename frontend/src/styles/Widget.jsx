import React from 'react';
import styled from 'styled-components';

// TODO: Remove important
const StyledImg = styled.img`
  border-radius: 5px !important;
  margin-bottom: 1px;
`;

const AdultWidget = () => (
  <StyledImg src="/icon/adult.svg" />
);

const PayWidget = () => (
  <StyledImg src="/icon/pay.svg" />
);

const PlatFormWidget = ({ platform }) => (
  <StyledImg src={`/icon/small${platform}.svg`} />
);

export {
  AdultWidget,
  PayWidget,
  PlatFormWidget,
};