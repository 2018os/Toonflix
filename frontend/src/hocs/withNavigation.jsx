import PropTypes from 'prop-types';
import React from 'react';

// layout
import Navigation from 'layout/Navigation';

const withNavigation = WrappedComponents => {
  return props => {
    return (
      <>
        <Navigation />
        <WrappedComponents {...props} />
      </>
    )
  }
};

withNavigation.propTypes = {
  WrappedComponents: PropTypes.element.isRequired,
};

export default withNavigation;