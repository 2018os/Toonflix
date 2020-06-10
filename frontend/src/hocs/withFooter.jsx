import PropTypes from 'prop-types';
import React from 'react';

// layout
import Footer from 'layout/Footer';

const withFooter = WrappedComponents => {
  return props => {
    return (
      <>
        <WrappedComponents {...props} />
        <Footer />
      </>
    )
  }
};

withFooter.propTypes = {
  WrappedComponents: PropTypes.element.isRequired,
};

export default withFooter;