import { compose } from 'recompose';
import PropTypes from 'prop-types';
import React from 'react';

// hocs
import withFetch from 'hocs/withFetch';
import withFooter from 'hocs/withFooter';

// layout
import Container from 'layout/Container';
import { Group, Page, Section } from 'layout/Layout';

// containers
import WebtoonListContainer from 'containers/WebtoonListContainer';

// components
import MainLogo from 'components/MainLogo';
import Menu from 'components/Menu';

const Main = ({ data, isError }) => { // TODO: Make error state
  const themes = data && data.slice(0, 4);
  const EnhancedContainers = [];
  themes && themes.map(theme => {
    const FetchedWebtoonListContainer = withFetch(`http://127.0.0.1:8000/api/theme/${theme.id}`)(WebtoonListContainer);
    return EnhancedContainers.push(FetchedWebtoonListContainer);
  });
  return (
    themes
    ? (
      <Page backgroundColor="gray">
        <Container>
          <Section>
            <MainLogo />
          </Section>
          <Section>
            <Menu />
          </Section>
          <Section>
            {
              EnhancedContainers.map((Component, i) => (
                <Group key={`webtoon-list-${i}`}>
                  <Component />
                </Group>
              ))
            }
          </Section>
        </Container>
      </Page>
    )
    : 'loading' // TODO: Make loading state
  )
};

Main.propTypes = {
  data: PropTypes.array,
  isError: PropTypes.bool,
};

Main.defaultProps = {
  data: undefined,
  isError: false,
};

export default compose(
  withFooter,
  withFetch('http://127.0.0.1:8000/api/themes')
)(Main);