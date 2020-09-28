import Error from 'next/error';
import React from 'react';

import withFooter from '../hocs/withFooter';

function Error404() {
  return <Error statusCode={404} />;
}

export default withFooter(Error404);
