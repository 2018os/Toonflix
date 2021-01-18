import React from 'react';
import { useRouter } from 'next/router';

import withNavigation from '../../hocs/withNavigation';

import Container from '../../layout/Container';
import Page from '../../layout/Page';

import CollectionDetailContainer from '../../component/collectionDetail';

const Collection = () => {
  const router = useRouter();
  const { id } = router.query;
  if (id) {
    return (
      <Page>
        <Container>
          <CollectionDetailContainer id={typeof id === 'string' ? id : id[0]} />
        </Container>
      </Page>
    ); // TODO: Enhance type
  }
  return null;
};

export default withNavigation(Collection);
