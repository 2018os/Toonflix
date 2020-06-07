import { compose } from 'recompose';
import React from 'react';

// hocs
import withFetchParams from 'hocs/withFetchParams';
import withFooter from 'hocs/withFooter';

// layout
import Container from 'layout/Container';
import { Page } from 'layout/Layout';

// components
import Thumbnail from 'components/Thumbnail';

const WebtoonDetail = ({ data: webtoon }) => {
  const {
    thumbnail,
    is_pay,
    is_adult,
    is_finish,
    platform,
  } = webtoon || '';

  const widget = {
    pay: is_pay,
    adult: is_adult,
    finish: is_finish,
    platform,
  };

  return (
    <Page background="gray">
      <Container>
        {
          webtoon
          ? (
            <Thumbnail src={thumbnail} widget={widget} />
          )
          : 'loading...'
        }
      </Container>
    </Page>
  )
};

export default compose(
  withFooter,
  withFetchParams('http://127.0.0.1:8000/api/webtoon'),
)(WebtoonDetail);