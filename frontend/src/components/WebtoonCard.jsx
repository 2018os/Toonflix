import React from 'react';
import { Card } from 'antd';

const WebtoonCard = ({ webtoon }) => {
  const {
    id,
    title,
    authors,
    thumbnail
  } = webtoon;
  return (
    <Card
      cover={<img src={thumbnail} alt="thumbnail" />}
      key={id}
      style={{
        maxWidth: 236,
        margin: 'auto',
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