import React from 'react';
import { ThemeProvider } from 'styled-components';
import WebtoonList from './components/WebtoonList';
import Container from './layout/Container';
import theme from './theme';

import styled from 'styled-components';

const Div = styled.div`
  margin-top: 10px;
  background: #5E74FF;
  height: 50px;
`;
const App = () => (
  <ThemeProvider theme={theme}>
    {/* TODO: Add <Navigation />
    TODO: Add <TopBanner /> */}
    <Container>
      <Div />
    </Container>
    {/* <Container> */}
      <WebtoonList />
    {/* </Container> */}
    <Container>
      <Div />
    </Container>
    {/* TODO: Add <Footer /> */}
  </ThemeProvider>
)

export default App;
