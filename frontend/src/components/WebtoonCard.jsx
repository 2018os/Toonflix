import React from 'react';
import { Card } from 'antd';

import Thumbnail from './Thumbnail';

const WebtoonCard = ({ webtoon }) => {
  const {
    id,
    title,
    authors,
    thumbnail
  } = webtoon;
  return (
    <Card
      cover={<Thumbnail src={thumbnail} />}
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
    </Card>
  );
}

export default WebtoonCard;