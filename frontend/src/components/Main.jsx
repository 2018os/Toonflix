import React, { useState, useEffect } from 'react';
import axios from 'axios';

import WebtoonList from './WebtoonList';
import Container from '../layout/Container';

const Main = () => {
  const [themes, setThemes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('http://127.0.0.1:8000/api/themes');
        setThemes(result.data.slice(0, 4));
      } catch(err) {
      }
    };
    fetchData();
  }, []);
  return (
    <Container>
      {
        themes && (
          themes.map(theme => (
            <WebtoonList fetchUrl={`http://127.0.0.1:8000/api/theme/${theme.id}`} key={`theme-${theme.id}`} />
          ))
        )
      }
    </Container>
  )
};

export default Main;