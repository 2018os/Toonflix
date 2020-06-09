import React from 'react';

// components
import Loading from './Loading';
import WebtoonCard from './WebtoonCard';
import Slider from './Slider';

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

export default WebtoonList;