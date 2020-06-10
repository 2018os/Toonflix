import { compose } from 'recompose';
import { Margin, Padding } from 'styled-components-spacing';
import React from 'react';
import styled from 'styled-components';

// hocs
import withFetchParams from 'hocs/withFetchParams';
import withFooter from 'hocs/withFooter';
import withNavigation from 'hocs/withNavigation';

// layout
import Container from 'layout/Container';
import { Page, Section } from 'layout/Layout';

// styles
import Tag from 'styles/Tag';
import { Title } from 'styles/Typography';

// components
import Thumbnail from 'components/Thumbnail';

const Profile = styled.div`
  display: flex;
`;

const StyledTag = styled(Tag)`
  ${props => `
    color: ${props.theme.textColors.black};
    background-color: ${props.theme.colors.white};
    font-size: ${props.theme.fontSizes.large};
  `}
  // border-radius: 5px;
`;

const WebtoonDetail = ({ data: webtoon }) => {
  const {
    title,
    thumbnail,
    is_pay,
    is_adult,
    is_finish,
    platform,
    genres,
  } = webtoon || '';

  const widget = {
    pay: is_pay,
    adult: is_adult,
    finish: is_finish,
    platform,
  };

  return (
    <Page backgroundColor="gray">
      <Container>
        <Section>
          <Profile>
            <Margin right={2}>
              <Thumbnail src={thumbnail} widget={widget} />
            </Margin>
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
            }}>
              <Title size="h2" color="black" bold>
                {title}
              </Title>
              <Margin left={2}>
                {
                  genres && genres.map(genre => (
                    <StyledTag>
                      <Padding all={1}>
                        #{genre}
                      </Padding>
                    </StyledTag>
                  ))
                }
              </Margin>
            </div>
          </Profile>
        </Section>
      </Container>
    </Page>
  )
};

export default compose(
  withNavigation,
  withFooter,
  withFetchParams('http://127.0.0.1:8000/api/webtoon'),
)(WebtoonDetail);