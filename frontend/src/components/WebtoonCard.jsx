import React from 'react';
import styled from 'styled-components';
import { Margin } from 'styled-components-spacing';
import { Card } from 'antd';

import Thumbnail from './Thumbnail';
import Tag from '../styles/Tag';
import { Text } from '../styles/Typography';

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
        description={(
          <div>
            {
              authors.map((author, i) => (
                <Text key={`author-${i}`}>
                  {author}
                </Text>
              ))
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
    </StyledCard>
  );
}

export default WebtoonCard;