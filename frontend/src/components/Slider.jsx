import { Button, Carousel, Space } from 'antd';
import { Margin } from 'styled-components-spacing';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import styled from 'styled-components';

// styles
import { Paragraph, Title } from 'styles/Typography';

const baseSettings = {
	dots: false,
	infinite: true,
	draggable: true,
	initialSlide: 0,
	variableWidth: true,
	// responsive: [ // TODO: breakpoint
	// 	{
	// 		breakpoint: 1024,
	// 		settings: {
	// 			slidesToShow: 3,
	// 			slidesToScroll: 3,
	// 			infinite: true,
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 600,
	// 		settings: {
	// 			slidesToShow: 2,
	// 			slidesToScroll: 2,
	// 			initialSlide: 2
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 480,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1
	// 		}
	// 	}
	// ]
};

const SliderWrapper = styled.div`
`;

const HeaderWrapper = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: space-between;
`;

const ButtonWrapper = styled.div`
`;

const StyledButton = styled(Button)`
	border-radius: 10px;
`;

const StyledCarousel = styled(Carousel)`
	& > .slick-list > .slick-track > .slick-slide:not([data-index^="-"]) { // "data-index" 가 0 보다 큰 slick-slide 에게 margin-right
		margin-right: ${props => props.theme.spacing[2]};
	}
	& > .slick-list > .slick-track > .slick-slide[data-index="-1"] { // Exception) "data-index" = -1
		margin-right: ${props => props.theme.spacing[2]};
	}
`;

const Header = ({ sliderRef, title, description }) => {
	const onClickNext = () => {
		sliderRef.current.next();
	};

	const onClickPrev = () => {
		sliderRef.current.prev();
  };

  return (
    <HeaderWrapper>
      <Space align="baseline">
        <Title size="h2">
          {title}
        </Title>
        <Paragraph size="small">{description}</Paragraph>
      </Space>
      <ButtonWrapper>
        <StyledButton onClick={onClickPrev}>
          ←
        </StyledButton>
        <StyledButton onClick={onClickNext}>
          →
        </StyledButton>
      </ButtonWrapper>
    </HeaderWrapper>
  )
};

const Slider = ({ children, title, description, slidesToShow }) => {
  const slider = useRef();
  const settings = {
    ...baseSettings,
    slidesToShow,
  };

  return (
    <SliderWrapper>
      <Margin bottom={2}>
        <Header sliderRef={slider} title={title} description={description} />
      </Margin>
      <StyledCarousel
        {...settings}
        ref={ref => {
          slider.current = ref
        }}
        // TODO: autoplay true when production mode
      >
        {children}
      </StyledCarousel>
    </SliderWrapper>
  )
};

Slider.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node,
	description: PropTypes.string,
	slidesToShow: PropTypes.number,
};

Slider.defaultProps = {
	children: undefined,
	description: '',
	slidesToShow: 4,
};

export default Slider;