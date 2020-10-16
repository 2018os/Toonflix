import React from 'react';

import withFooter from '../hocs/withFooter';
import withNavigation from '../hocs/withNavigation';

import Container from '../layout/Container';

import CollectionListContainer from '../component/collectionList';

const Collections = () => {
  return (
    <Container>
      <CollectionListContainer />
    </Container>
  );
};
export default withNavigation(withFooter(Collections));
