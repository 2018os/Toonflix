import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import App from '../App';

describe('<App />', () => {
  const mock = new MockAdapter(axios, { delayResponse: 200 });
  mock.onGet('http://127.0.0.1:8000/api/').reply(200, [
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
  ])
  test('Fetching data', async () => {
    const { getByText } = render(<App />);
    await waitForElement(() => getByText('Loading...'));
    await waitForElement(() => getByText('first_test'));
  });
});
