import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Margin } from 'styled-components-spacing';
import { Button, Carousel, Space } from 'antd';
import 'antd/dist/antd.css';

import Error from './Error';
import Loading from './Loading';
import WebtoonCard from './WebtoonCard';
import { Title, Paragraph } from '../styles/Typography';

const settings = {
	dots: false,
	infinite: true,
	slidesToShow: 4,
	draggable: true,
	initialSlide: 0,
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

const StyledCarousel = styled(Carousel)`
	& > .slick-list > .slick-track > .slick-slide > div {
		margin-right: ${props => props.theme.spacing[1]};
		margin-left: ${props => props.theme.spacing[1]};
	}
`;

const ListHeader = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: space-between;
`;

const WebtoonList = ({ fetchUrl }) => {
	const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
				const result = await axios(fetchUrl);
        setData(result.data);
        setIsLoading(false);
      } catch(err) {
        setIsError(true);
      }
    };
    fetchData();
	}, [fetchUrl]);

	const slider = useRef();

	const onClickNext = () => {
		slider.current.next();
	};

	const onClickPrev = () => {
		slider.current.prev();
	};

  return (
		isError
		? <Error />
		: (
			!isLoading && data
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
					<StyledCarousel
						{...settings}
						ref={ref => {
							slider.current = ref
						}}
						// autoplay
					>
						{
							data.webtoons.map(webtoon => (
								<WebtoonCard webtoon={webtoon} key={webtoon.id} />
							))
						}
					</StyledCarousel>
				</Margin>
			)
			: <Loading />
		)
  );
};

export default WebtoonList;