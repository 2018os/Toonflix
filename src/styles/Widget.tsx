import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img.attrs({
  className: 'widget'
})`
  border-radius: 5px;
  ${(props) => `
    width: ${props.theme.IconSizes.DEFAULT};
    height: ${props.theme.IconSizes.DEFAULT};
  `}
`;

const AdultWidget = () => <StyledImg src="/static/icon/adultUsage.svg" />;

const PayWidget = () => <StyledImg src="/static/icon/paidService.png" />;

const CompleteWidget = () => <StyledImg src="/static/icon/complete.svg" />;

export { AdultWidget, PayWidget, CompleteWidget };
