import PropTypes from 'prop-types';
import React from 'react';

// components
import Loading from './Loading';
import Slider from './Slider';
import WebtoonCard from './WebtoonCard';

const WebtoonList = ({ data, isError }) => ( // TODO: Make error state
	data
	? (
		<Slider
			title={data.title}
			description={data.description}
			slidesToShow={4}
		>
			{
				data.webtoons.map(webtoon => (
					<WebtoonCard webtoon={webtoon} key={webtoon.id} />
				))
			}
		</Slider>
	)
	: <Loading /> // TODO: Make loading state
);

WebtoonList.propTypes = {
	data: PropTypes.object,
};

WebtoonList.defaultProps = {
	data: undefined,
};

export default WebtoonList;