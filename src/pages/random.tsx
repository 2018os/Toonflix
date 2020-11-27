import React from 'react';

import withFooter from '../hocs/withFooter';
import withNavigation from '../hocs/withNavigation';

import Container from '../layout/Container';
import Page from '../layout/Page';

import RandomContainer from '../component/random';

const Random = () => {
  return (
    <Page>
      <Container>
        <RandomContainer />
      </Container>
    </Page>
  );
};
export default withNavigation(withFooter(Random));
