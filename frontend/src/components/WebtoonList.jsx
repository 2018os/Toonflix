import React, { useRef } from 'react';
import styled from 'styled-components';
import { Margin } from 'styled-components-spacing';
import { Button, Carousel, Space } from 'antd';
import 'antd/dist/antd.css';

import Loading from './Loading';
import WebtoonCard from './WebtoonCard';
import { Title, Paragraph } from '../styles/Typography';

const settings = {
	dots: false,
	infinite: true,
	draggable: true,
	initialSlide: 0,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
}

const StyledButton = styled(Button)`
	border-radius: 10px;
`;

const ListHeader = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: space-between;
`;

const WebtoonList = ({ data, isError }) => { // TODO: Make error state
	const slider = useRef();

	const onClickNext = () => {
		slider.current.next();
	};

	const onClickPrev = () => {
		slider.current.prev();
	};

  return (
		data
		? (
			<Margin bottom={5}>
				<Margin bottom={2}>
					<ListHeader>
						<Space align="baseline">
							<Title size="h2">
								{data.title}
							</Title>
							<Paragraph size="small">{data.description}</Paragraph>
						</Space>
						<div>
							<StyledButton onClick={onClickPrev}>
								←
							</StyledButton>
							<StyledButton onClick={onClickNext}>
								→
							</StyledButton>
						</div>
					</ListHeader>
				</Margin>
				<Carousel
					{...settings}
					ref={ref => {
						slider.current = ref
					}}
					// TODO: autoplay true when production mode
				>
					{
						data.webtoons.map(webtoon => (
							<WebtoonCard webtoon={webtoon} key={webtoon.id} />
						))
					}
				</Carousel>
			</Margin>
		)
		: <Loading /> // TODO: Make loading state
	);
};

export default WebtoonList;