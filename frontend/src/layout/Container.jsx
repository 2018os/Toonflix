import React from 'react';
import styled from 'styled-components';

const Margin = styled.div`
  width: 900px;
  margin: auto;
`;

const Container = ({ children }) => (
  <Margin>
    {children}
  </Margin>
);

export default Container;