import React from 'react';
import { useRouter } from 'next/router';

import withFooter from '../../hocs/withFooter';
import withNavigation from '../../hocs/withNavigation';

import Container from '../../layout/Container';
import Page from '../../layout/Page';

import WebtoonDetailContainer from '../../component/webtoonDetail';

const Webtoon = () => {
  const router = useRouter();
  const { id } = router.query;
  if (!id) {
    return null;
  } else {
    return (
      <Page>
        <Container>
          <WebtoonDetailContainer id={typeof id === 'string' ? id : id[0]} />
        </Container>
      </Page>
    ); // TODO: Enhance type
  }
};

export default withNavigation(withFooter(Webtoon));
