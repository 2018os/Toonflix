import React from 'react';

import Navigation from '../layout/Navigation';

const withNavigation = (
  WrappedComponents: React.ComponentType<any | string>
) => {
  return (props: any) => {
    return (
      <>
        <Navigation />
        <WrappedComponents {...props} />
      </>
    );
  };
};

export default withNavigation;
