import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

import Error from './Error';
import Loading from './Loading';
import WebtoonCard from './WebtoonCard';

const settings = {
	dots: false,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4
}

const WebtoonList = () => {
	const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
				const result = await axios('http://127.0.0.1:8000/api/genre/4');
        setData(result.data);
        setIsLoading(false);
      } catch(err) {
        setIsError(true);
      }
    };
    fetchData();
	}, []);
	const slider = useRef();
	const onClickNext = () => {
		slider.current.next();
	};
	const onClickPrev = () => {
		slider.current.prev();
	};

  return (
    <div className="App">
      {
        isError
        ? <Error />
        : (
          !isLoading && data
          ? (
						<div>
							<strong>#{data.name}</strong>
							<button onClick={onClickPrev}>←</button>
							<button onClick={onClickNext}>→</button>
							<Carousel
								{...settings}
								ref={ref => {
									slider.current = ref
								}}
							>
								{
									data.webtoons.map(webtoon => (
										<WebtoonCard webtoon={webtoon} key={webtoon.id} />
									))
								}
							</Carousel>
						</div>
					)
          : <Loading />
        )
      }
    </div>
  );
};

export default WebtoonList;