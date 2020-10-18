import React from 'react';

import withFooter from '../hocs/withFooter';
import withNavigation from '../hocs/withNavigation';

import Container from '../layout/Container';
import Page from '../layout/Page';

import MainContainer from '../component/main/index';

class Index extends React.PureComponent {
  render() {
    return (
      <Page>
        <Container>
          <MainContainer />
        </Container>
      </Page>
    );
  }
}

export default withNavigation(withFooter(Index));
