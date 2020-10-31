import React from 'react';
import styled from 'styled-components';
import { IconSizes } from '../util/theme';

const StyledImg = styled.img.attrs({
  className: 'widget'
})`
  border-radius: 5px;
  width: ${IconSizes.DEFAULT};
  height: ${IconSizes.DEFAULT};
`;

const AdultWidget = () => <StyledImg src="/static/icon/adultUsage.svg" />;

const PayWidget = () => <StyledImg src="/static/icon/paidService.png" />;

const CompleteWidget = () => <StyledImg src="/static/icon/complete.svg" />;

export { AdultWidget, PayWidget, CompleteWidget };
