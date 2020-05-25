import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

import Thumbnail from './Thumbnail';

// TODO: Remove CSS override
const StyledCard = styled(Card)`
  & > .ant-card-cover img {
    border-radius: initial;
  }
`;

const WebtoonCard = ({ webtoon }) => {
  const {
    id,
    title,
    authors,
    thumbnail,
    is_pay,
    is_adult,
    is_finish,
    platform,
  } = webtoon;
  
  const widget = {
    pay: is_pay,
    adult: is_adult,
    finish: is_finish,
    platform,
  };

  return (
    <StyledCard
      cover={<Thumbnail src={thumbnail} widget={widget} />}
      key={id}
      style={{
        maxWidth: 236,
      }}
      hoverable
    >
      <Card.Meta
        title={title}
        description={authors}
      />
    </StyledCard>
  );
}

export default WebtoonCard;