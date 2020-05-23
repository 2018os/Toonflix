import React from 'react';

import WebtoonList from './WebtoonList';
import Container from '../layout/Container';

// 1. Get 2 genre / theme ID (random / latest)

const Main = () => {
  return (
    <Container>
      <WebtoonList fetchUrl={`http://127.0.0.1:8000/api/genre/4`}/>
      <WebtoonList fetchUrl={`http://127.0.0.1:8000/api/genre/4`}/>
    </Container>
  )
};

export default Main;