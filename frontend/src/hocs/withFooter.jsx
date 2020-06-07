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

export default withFooter;