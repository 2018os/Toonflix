import React from 'react';

import Footer from '../layout/footer';

const withFooter = (WrappedComponents: React.ComponentType) => {
  return (props: any) => {
    return (
      <>
        <WrappedComponents {...props} />
        <Footer />
      </>
    );
  };
};

export default withFooter;
