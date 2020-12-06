import React from 'react';

import withFooter from '../hocs/withFooter';
import withNavigation from '../hocs/withNavigation';

import Container from '../layout/Container';
import Page from '../layout/Page';

import MyCollectionContainer from '../component/myCollection';

const MyCollection = () => {
  return (
    <Page>
      <Container>
        <MyCollectionContainer />
      </Container>
    </Page>
  );
};

export default withNavigation(withFooter(MyCollection));
