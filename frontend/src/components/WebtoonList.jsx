import PropTypes from 'prop-types';
import React from 'react';

// components
import Loading from './Loading';
import Slider from './Slider';
import WebtoonCard from './WebtoonCard';

const WebtoonList = ({ title, description, webtoons, isError }) => ( // TODO: Make error state
	webtoons
	? (
		<Slider
			title={title}
			description={description}
			slidesToShow={4}
		>
			{
				webtoons.map(webtoon => (
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