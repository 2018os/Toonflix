import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import withFooter from '../../hocs/withFooter';
import withNavigation from '../../hocs/withNavigation';

import WebtoonDetailContainer from '../../component/webtoonDetail';
import Container from '../../layout/Container';

const Page = styled.div`
  background-color: ${(props) => props.theme.Colors.GRAY};
  padding-top: ${(props) => props.theme.spacing[5]};
  padding-bottom: ${(props) => props.theme.spacing[6]};
`;

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
