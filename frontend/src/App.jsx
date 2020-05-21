import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Loading from './Loading';
import Error from './Error';
import WebtoonCard from './WebtoonCard';

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
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
        isError
        ? <Error />
        : (
          !isLoading && data
          ? <WebtoonCard data={data} />
          : <Loading />
        )
      }
    </div>
  );
}

export default App;
