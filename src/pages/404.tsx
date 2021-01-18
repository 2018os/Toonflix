import Error from 'next/error';
import React from 'react';

import withNavigation from '../hocs/withNavigation';

function Error404() {
  return <Error statusCode={404} />;
}

export default withNavigation(Error404);
