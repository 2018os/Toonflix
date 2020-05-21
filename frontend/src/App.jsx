import React from 'react';
import WebtoonList from './components/WebtoonList';
import Container from './layout/Container';

const App = () => (
  <div>
    {/* TODO: Add <Navigation />
    TODO: Add <TopBanner /> */}
    <Container>
      <WebtoonList />
    </Container>
    {/* TODO: Add <Footer /> */}
  </div>
)

export default App;
