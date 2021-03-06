import React from 'react';

import withNavigation from '../hocs/withNavigation';

import Container from '../layout/Container';
import Page from '../layout/Page';

import ProfileContainer from '../component/profile';

const Profile = () => {
  return (
    <Page>
      <Container>
        <ProfileContainer />
      </Container>
    </Page>
  );
};

export default withNavigation(Profile);
