import PropTypes from 'prop-types';
import React from 'react';

// components
import Slider from './Slider';
import WebtoonCard from './WebtoonCard';

const WebtoonList = ({ data, isLoading }) => ( // TODO: Make error state
	isLoading || !data // TODO: Make loading state
	? (
		<Slider // TODO: No Slider
			title='loading'
			description='loading desc'
			slidesToShow={4}
		>
			<div>Loading state</div>
		</Slider>
	)
	: (
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
);

WebtoonList.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	data: PropTypes.object,
};

WebtoonList.defaultProps = {
	data: undefined,
};

export default WebtoonList;