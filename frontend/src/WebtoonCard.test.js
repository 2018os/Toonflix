import React from 'react';
import { render } from '@testing-library/react';

import WebtoonCard from './WebtoonCard';

describe('<WebtoonCard />', () => {
  const data = [
    {
      "id": 1,
      "title": "first_test",
      "genre": [],
      "author": [],
      "is_finish": false,
      "is_adult": false,
      "is_free": true,
      "theme": [],
      "platform": "N",
      "thumbnail": "http://www.naver.com"
    },
    {
      "id": 2,
      "title": "second_test",
      "genre": [],
      "author": [],
      "is_finish": false,
      "is_adult": false,
      "is_free": true,
      "theme": [],
      "platform": "N",
      "thumbnail": "http://www.naver.com"
    },
  ]
  test('render webtoon info', () => {
    const { getByText } = render(<WebtoonCard />);
    getByText('first_test')
  })
})