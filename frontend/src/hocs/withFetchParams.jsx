import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
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

withFetchParams.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  WrappedComponent: PropTypes.element.isRequired,
};

export default withFetchParams;