import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { Margin } from 'styled-components-spacing';
import React from 'react';

// styles
import Tag from 'styles/Tag';
import { Text } from 'styles/Typography';

// components
import Thumbnail from './Thumbnail';

const WebtoonCard = ({ webtoon }) => {
  const {
    id,
    title,
    authors,
    genres,
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
    <Link to={`/webtoon/${id}`}>
      <Card
        cover={<Thumbnail src={thumbnail} widget={widget} />}
        key={id}
        style={{
          width: 236,
          height: 360,
        }}
        hoverable
      >
        <Card.Meta
          title={(<Text bold>{title}</Text>)}
          style={{
            textAlign: 'center',
          }}
          description={(
            <div>
              {
                <Text size="smallest" color="gray">
                  {authors.join(' / ')}
                </Text>
              }
              <Margin top={1}>
                {
                  genres.map((genre, j) => (
                    <Tag key={`genre-${j}`}>
                      #{genre}
                    </Tag>
                  ))
                }
              </Margin>
            </div>
          )}
        />
      </Card>
    </Link>
  );
}

export default WebtoonCard;