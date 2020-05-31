import React from 'react';

import withFetch from '../hocs/withFetch';
import WebtoonList from './WebtoonList';

const Main = ({ data, isError }) => { // TODO: Make error state
  const themes = data && data.slice(0, 4);
  return (
    themes
    ? (
      themes.map(theme => {
        const FetchedWebtoonList = withFetch(`http://127.0.0.1:8000/api/theme/${theme.id}`)(WebtoonList)
        return <FetchedWebtoonList key={`theme-${theme.id}`} />
      })
    )
    : 'loading' // TODO: Make loading state
  )
};

export default withFetch('http://127.0.0.1:8000/api/themes')(Main);