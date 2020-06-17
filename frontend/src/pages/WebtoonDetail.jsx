import { Button, Col, Divider, Row } from 'antd';
import { compose } from 'recompose';
import { Margin, Padding } from 'styled-components-spacing';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// hocs
import withFetchAll from 'hocs/withFetchAll';
import withFetchParams from 'hocs/withFetchParams';
import withFooter from 'hocs/withFooter';
import withNavigation from 'hocs/withNavigation';

// layout
import Container from 'layout/Container';
import { Group, Page, Section } from 'layout/Layout';

// styles
import { AdultWidget, CompleteWidget, PayWidget, PlatformWidget } from 'styles/Widget';
import Tag from 'styles/Tag';
import { Paragraph, Title, Text } from 'styles/Typography';

// containers
import WebtoonListContainer from 'containers/WebtoonListContainer';

// components
import Slider from 'components/Slider';
import ThemeList from 'components/ThemeList';
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

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopPart = styled.div`
`;

const BottomPart = styled.div`
`;

const Description = styled.div`
  border: 1px solid #dbdbdb; // TODO: Add theme
  border-radius: 10px;
  background-color: ${props => props.theme.colors.white};
`;

const WidgetCol = styled(Col)`
  & > .widget {
    margin-right: ${props => props.theme.spacing[0]};
  }
  & > .widget:last-child {
    margin-right: 0;
  }
`;

const StyledButton = styled(Button)`
  width: 236px;
  height: 68px;
  & > span {
    line-height: 68px; // same with Button height
  }
`;

const WebtoonDetail = ({ data: webtoon }) => {
  const {
    title,
    authors,
    description,
    thumbnail,
    is_pay,
    is_adult,
    is_finish,
    platform,
    genres,
    themes,
  } = webtoon || '';

  const requestsForTheme = themes && themes.map(theme => `http://127.0.0.1:8000/api/theme/${theme}`);
  const requestsForGenre = genres && genres.map(genre => `http://127.0.0.1:8000/api/webtoons/?genre=${genre}`);
  const FetchedThemeList = requestsForTheme && withFetchAll(requestsForTheme)(ThemeList);
  const FetchedWebtoonListContainer = requestsForGenre && withFetchAll(requestsForGenre)(WebtoonListContainer);

  return (
    <Page backgroundColor="gray">
      <Container>
        <Section>
          <Profile>
            <Margin right={2}>
              <Thumbnail src={thumbnail} />
            </Margin>
            <Info>
              <TopPart>
                <Row align="middle" gutter={16}>
                  <Col>
                    <Title size="h2" color="black" bold>
                      {title}
                    </Title>
                  </Col>
                  <Col>
                    {
                      genres && genres.map(genre => (
                        <StyledTag key={`tag-${genre}`}>
                          <Padding all={1}>
                            #{genre}
                          </Padding>
                        </StyledTag>
                      ))
                    }
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text color="gray">
                      {authors && authors.join(' | ')}
                    </Text>
                  </Col>
                </Row>
              </TopPart>
              <BottomPart>
                <Row>
                  <WidgetCol>
                    { is_adult && <AdultWidget /> }
                    { is_pay && <PayWidget /> }
                    { is_finish && <CompleteWidget /> }
                  </WidgetCol>
                </Row>
                <Row>
                  <Margin right={2}>
                    <StyledButton href="/source" type="primary">
                      {/*
                        TODO: Should be dynamic data
                      */}
                      <Text size="large" color="white" bold>
                        보러가기!!
                      </Text>
                    </StyledButton>
                  </Margin>
                  <PlatformWidget platform={platform} size="largest" />
                </Row>
              </BottomPart>
            </Info>
          </Profile>
          <Margin top={2}>
            <Description>
              <Padding all={3}>
                <Paragraph>
                  {description}
                </Paragraph>
                <Divider />
              </Padding>
            </Description>
          </Margin>
        </Section>
        <Section>
          <Group>
            {
              requestsForGenre && <FetchedWebtoonListContainer title="비슷한 작품들" />
            }
          </Group>
          <Group>
            {
              requestsForTheme && <FetchedThemeList />
            }
          </Group>
          <Group>
            <Slider
              title="썸네일만 보고 고르기!"
              slidesToShow={6}
            >
              <Thumbnail src={'https://image-comic.pstatic.net/webtoon/400738/thumbnail/thumbnail_IMAG19_migrated_400738.jpg'} width={152} height={152} />
              <Thumbnail src={'https://image-comic.pstatic.net/webtoon/400738/thumbnail/thumbnail_IMAG19_migrated_400738.jpg'} width={152} height={152} />
              <Thumbnail src={'https://image-comic.pstatic.net/webtoon/400738/thumbnail/thumbnail_IMAG19_migrated_400738.jpg'} width={152} height={152} />
              <Thumbnail src={'https://image-comic.pstatic.net/webtoon/400738/thumbnail/thumbnail_IMAG19_migrated_400738.jpg'} width={152} height={152} />
              <Thumbnail src={'https://image-comic.pstatic.net/webtoon/400738/thumbnail/thumbnail_IMAG19_migrated_400738.jpg'} width={152} height={152} />
              <Thumbnail src={'https://image-comic.pstatic.net/webtoon/400738/thumbnail/thumbnail_IMAG19_migrated_400738.jpg'} width={152} height={152} />
              <Thumbnail src={'https://image-comic.pstatic.net/webtoon/400738/thumbnail/thumbnail_IMAG19_migrated_400738.jpg'} width={152} height={152} />
            </Slider>
          </Group>
        </Section>
      </Container>
    </Page>
  )
};

WebtoonDetail.propTypes = {
  data: PropTypes.object,
};

WebtoonDetail.defaultProps = {
  data: undefined,
};

export default compose(
  withNavigation,
  withFooter,
  withFetchParams('http://127.0.0.1:8000/api/webtoon'),
)(WebtoonDetail);