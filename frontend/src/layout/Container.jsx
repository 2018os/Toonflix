import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  max-width: 900px;
  margin: auto;
`;

const Container = ({ children }) => (
  <Page>
    {children}
  </Page>
);

export default Container;