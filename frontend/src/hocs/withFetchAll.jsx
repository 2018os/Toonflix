import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const withFetchAll = fetchUrls => WrappedComponent => {
  return props => {
    const requestList = [];
    const dataList = []; // result data list
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);
    fetchUrls.map(url => requestList.push(axios.get(url)));
    useEffect(() => {
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
        }
      };
      fetch();
      return () => {
        mounted = false;
      };
    }, [requestList, dataList]);
    return <WrappedComponent {...props} data={data} isError={isError} />
  }
};

withFetchAll.propTypes = {
  fetchUrls: PropTypes.array.isRequired,
  WrappedComponent: PropTypes.element.isRequired,
};

export default withFetchAll;