import { Button, Carousel, Space } from 'antd';
import { Margin } from 'styled-components-spacing';
import React, { useRef } from 'react';
import styled from 'styled-components';

// styles
import { Paragraph, Title } from 'styles/Typography';

// components
import Loading from './Loading';
import WebtoonCard from './WebtoonCard';

const settings = {
	dots: false,
	infinite: true,
	draggable: true,
	initialSlide: 0,
	variableWidth: true,
	slidesToShow: 4,
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

const StyledCarousel = styled(Carousel)`
	& > .slick-list > .slick-track > .slick-slide:not([data-index^="-"]) { // "data-index" 가 0 보다 큰 slick-slide 에게 margin-right
		margin-right: ${props => props.theme.spacing[2]};
	}
	& > .slick-list > .slick-track > .slick-slide[data-index="-1"] { // Exception) "data-index" = -1
		margin-right: ${props => props.theme.spacing[2]};
	}
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
			<>
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
				<StyledCarousel
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
				</StyledCarousel>
			</>
		)
		: <Loading /> // TODO: Make loading state
	);
};

export default WebtoonList;