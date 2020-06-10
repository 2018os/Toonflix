import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const withFetchAll = fetchUrls => WrappedComponent => {
  return props => {
    const requestList = [];
    const [data, setData] = useState();
    const [isError, setIsError] = useState(false);
    fetchUrls.map(url => requestList.push(axios.get(url)));
    useEffect(() => {
      const fetch = async () => {
        try {
          const result = await axios.all(requestList);
          console.log(result);
          // setData(result.data);
        } catch(err) {
          setIsError(true);
        }
      };
      fetch();
    }, []);
    return <WrappedComponent {...props} data={data} isError={isError} />
  }
};

withFetchAll.propTypes = {
  fetchUrls: PropTypes.array.isRequired,
  WrappedComponent: PropTypes.element.isRequired,
};

export default withFetchAll;