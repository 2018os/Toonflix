import React from 'react';
import { Margin } from 'styled-components-spacing';

const Container = ({ children }) => (
  <Margin horizontal={6}>
    {children}
  </Margin>
);

export default Container;