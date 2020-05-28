import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  width: 572px;
  height: 150px;
  margin: auto;
  background-color: ${props => props.theme.colors.primaryColor};
`;

const MainLogo = () => (
  <Logo>Logo</Logo>
);

export default MainLogo;