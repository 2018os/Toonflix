import React from 'react';
import { useRouter } from 'next/router';

import withFooter from '../../hocs/withFooter';
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
  } else {
    return null;
  }
};

export default withNavigation(withFooter(Collection));
