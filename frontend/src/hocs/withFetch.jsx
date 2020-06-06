import axios from 'axios';
import React, { useEffect, useState } from 'react';

const withFetch = fetchUrl => WrappedComponent => {
  return props => {
    const [data, setData] = useState();
    const [isError, setIsError] = useState(false);
    useEffect(() => {
      const fetch = async () => {
        try {
          const result = await axios(fetchUrl);
          setData(result.data);
        } catch(err) {
          setIsError(true);
        }
      };
      fetch();
    }, []);
    return <WrappedComponent {...props} data={data} isError={isError} />
  }
};

export default withFetch;