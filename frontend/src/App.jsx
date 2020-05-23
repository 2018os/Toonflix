import React from 'react';
import { ThemeProvider } from 'styled-components';

import Main from './components/Main';
import theme from './theme';
import './App.less';


// For checking layout

import styled from 'styled-components';
import Container from './layout/Container';
import Background from './layout/Background';

const Div = styled.div`
  margin-top: 10px;
  background: #5E74FF;
  height: 50px;
`;

// Will DELETE

const App = () => (
  <ThemeProvider theme={theme}>
    <Background color="#EAEDED">

      {/*
      TODO: Add <Navigation />
      TODO: Add <TopBanner />
      */}

      <Container>
        <Div />
      </Container>

      <Main />

      <Container>
        <Div />
      </Container>

      {/*
      TODO: Add <Footer />
      */}

    </Background>
  </ThemeProvider>
)

export default App;
