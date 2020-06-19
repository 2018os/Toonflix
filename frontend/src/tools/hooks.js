import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = url => {
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetch = async () => {
      try {
        const result = await axios(url);
        setData(result.data);
      } catch(err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [url]);
  return { data, isError, isLoading }
};

const useFetchAll = urls => {
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const requestList = [];
    const dataList = []; // result data list
    urls.map(url => requestList.push(axios.get(url)));
    let mounted = true; // for prevent memory leak
    const fetch = async () => {
      try {
        const result = await axios.all(requestList);
        result.map(r => dataList.push(r.data));
        if (mounted) {
          setData(dataList);
        }
      } catch(err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
    return () => { // clean up
      mounted = false;
    };
  }, [urls]);
  return { data, isError, isLoading };
};

export {
  useFetch,
  useFetchAll,
};