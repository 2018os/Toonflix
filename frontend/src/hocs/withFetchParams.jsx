import { useParams } from 'react-router-dom';
import React from 'react';

// hocs
import withFetch from './withFetch';

const withFetchParams = baseUrl => WrappedComponent => {
  return props => {
    const { id } = useParams();
    const fetchUrl = baseUrl + '/' + id;
    const FetchedComponent = withFetch(fetchUrl)(WrappedComponent);
    return <FetchedComponent {...props} />
  }
};

export default withFetchParams;