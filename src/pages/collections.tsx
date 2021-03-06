import React from 'react';

import withNavigation from '../hocs/withNavigation';

import Container from '../layout/Container';
import Page from '../layout/Page';

import CollectionListContainer from '../component/collectionList';

const Collections = () => {
  return (
    <Page>
      <Container>
        <CollectionListContainer />
      </Container>
    </Page>
  );
};
export default withNavigation(Collections);
