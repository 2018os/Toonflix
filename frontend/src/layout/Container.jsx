import { Margin } from 'styled-components-spacing';
import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  width: 1024px; // for Desktop breakpoint
  // width: 768px; // for Tablet breakpoint
  margin: auto;
`;

const Container = ({ children }) => (
  <Page>
    <Margin horizontal={2}>
      {children}
    </Margin>
  </Page>
);

export default Container;