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

export default withNavigation;