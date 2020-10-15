import React from 'react';

import withFooter from '../hocs/withFooter';
import withNavigation from '../hocs/withNavigation';

import MainContainer from '../component/main/index';

class Index extends React.PureComponent {
  render() {
    return <MainContainer />;
  }
}

export default withNavigation(withFooter(Index));
