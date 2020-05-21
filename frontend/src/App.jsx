import React from 'react';
import { ThemeProvider } from 'styled-components';
import WebtoonList from './components/WebtoonList';
import Container from './layout/Container';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    {/* TODO: Add <Navigation />
    TODO: Add <TopBanner /> */}
    <Container>
      <WebtoonList />
    </Container>
    {/* TODO: Add <Footer /> */}
  </ThemeProvider>
)

export default App;
