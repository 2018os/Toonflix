import React from 'react';

// layout
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
