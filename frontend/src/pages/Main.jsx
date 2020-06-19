import React from 'react';

// hocs
import withFooter from 'hocs/withFooter';

// layout
import Container from 'layout/Container';
import { Group, Page, Section } from 'layout/Layout';

// components
import MainLogo from 'components/MainLogo';
import Menu from 'components/Menu';
import WebtoonList from 'components/WebtoonList';

// tools
import { useFetch } from 'tools/hooks';

const Main = () => {
  const { data, isLoading, isError } = useFetch('http://127.0.0.1:8000/api/themes'); // TODO: Make error state
  return (
    <Page backgroundColor="gray">
      <Container>
        <Section>
          <MainLogo />
        </Section>
        <Section>
          <Menu />
        </Section>
          {
            [0, 1, 2, 3].map(index => ( // TODO: Make sense
              <Group key={`webtoon-list-${index}`}>
                <WebtoonList data={data && data[index]} isLoading={isLoading} />
              </Group>
            ))
          }
        <Section>
        </Section>
      </Container>
    </Page>
  )
};

export default withFooter(Main);