import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Loading from './Loading';

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios('http://127.0.0.1:8000/api/');
        setData(result.data);
        setIsLoading(false);
      } catch(err) {
        setIsError(true);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      {
        isLoading
        ? <Loading />
        : data.map(webtoon => (
          <h1 key={webtoon.id}>
            {webtoon.title}
          </h1>
        ))
      }
    </div>
  );
}

export default App;
