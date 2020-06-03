import React from 'react';

// hocs
import withFetch from '../hocs/withFetch';

// layout
import Container from '../layout/Container';
import { Group, Page, Section } from '../layout/Layout';

// components
import MainLogo from './MainLogo';
import Menu from './Menu';
import WebtoonList from './WebtoonList';

const Main = ({ data, isError }) => { // TODO: Make error state
  const themes = data && data.slice(0, 4);
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
              themes.map(theme => {
                const FetchedWebtoonList = withFetch(`http://127.0.0.1:8000/api/theme/${theme.id}`)(WebtoonList)
                return (
                  <Group key={`theme-${theme.id}`}>
                    <FetchedWebtoonList />
                  </Group>
                )
              })
            }
          </Section>
        </Container>
      </Page>
    )
    : 'loading' // TODO: Make loading state
  )
};

export default withFetch('http://127.0.0.1:8000/api/themes')(Main);