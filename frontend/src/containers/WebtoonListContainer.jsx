import PropTypes from 'prop-types';
import React from 'react';

// components
import WebtoonList from 'components/WebtoonList';

const WebtoonListContainer = (props) => {
  const webtoons = [];
  const { data } = props;
  const title = (
    props.title
    ? props.title
    : (
      data && data.title
      ? data.title
      : ''
    )
  );
  const description = (
    props.description
    ? props.description
    : (
      data && data.description
      ? data.description
      : ''
    )
  );
  if (data && data.webtoons) {
    webtoons.push(...data.webtoons);
  } else if (data) { // check array
    data.map(webtoon => webtoons.push(...webtoon));
  }
  return (
    <WebtoonList title={title} description={description} webtoons={webtoons} />
  )
};

WebtoonListContainer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  isError: PropTypes.bool,
};

WebtoonListContainer.defaultProps ={
  title: '',
  description: '',
  data: undefined,
  isError: false,
};

export default WebtoonListContainer;