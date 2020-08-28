import React from 'react';
import withFooter from '../hocs/withFooter';
import MainContainer from '../component/main/index';

class Index extends React.PureComponent {
  render() {
    return <MainContainer />;
  }
}

export default withFooter(Index);
