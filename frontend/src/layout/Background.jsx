import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  background-color: ${props => props.color};
`;

const Background = ({ color, children }) => (
  <Page color={color}>
    {children}
  </Page>
);

export default Background;