import React, { FunctionComponent, useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import { spacing } from '../../util/theme';

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.FontSizes.LARGER};
  font-weight: 500;
  color: ${(props) => props.theme.TextColors.PRIMARY_COLOR};
`;

const Description = styled.div`
  line-height: 1.5;
  margin-left: 12px;
  font-size: ${(props) => props.theme.FontSizes.SMALL};
  font-weight: 500;
  color: ${(props) => props.theme.Colors.BLACK};
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  width: 40px;
  height: 30px;
  border-radius: 10px;
  box-shadow: ${(props) =>
    `0 2px ${props.theme.spacing[0]} 0 rgba(0, 0, 0, 0.16)`};
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.TextColors.GRAY};
  font-size: ${(props) => props.theme.FontSizes.H3};
`;

type Action = 'refresh' | 'pagination';

interface Props {
  title: string;
  description?: string;
  type: Action;
  children: React.ReactNode;
  refetch?: () => any;
}

interface HeaderProps {
  title: string;
  description?: string;
  sliderRef: React.RefObject<Slider>;
  type: Action;
  refetch?: () => any;
}

const settings = {
  className: 'slider',
  dots: false,
  infinite: true,
  draggable: true,
  initialSlide: 0,
  variableWidth: true,
  arrows: false
};

const Header: FunctionComponent<HeaderProps> = ({
  title,
  description,
  sliderRef,
  type,
  refetch
}) => (
  <ContentWrapper>
    <ContentWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ContentWrapper>
    <ContentWrapper>
      {type === 'refresh' && refetch ? (
        <Button onClick={refetch}>R</Button>
      ) : (
        <>
          <Button
            onClick={() => {
              sliderRef.current && sliderRef.current.slickPrev();
            }}
          >
            {'<'}
          </Button>
          <Button
            style={{ marginLeft: spacing[0] }}
            onClick={() => {
              sliderRef.current && sliderRef.current.slickNext();
            }}
          >
            {'>'}
          </Button>
        </>
      )}
    </ContentWrapper>
  </ContentWrapper>
);

const StyledSlider = styled(Slider)`
  margin-top: ${(props) => props.theme.spacing[3]};
  & > .slick-list > .slick-track > .slick-slide:not([data-index^='-']) {
    // "data-index" 가 0 보다 큰 slick-slide 에게 margin-right
    margin-right: ${(props) => props.theme.spacing[2]};
  }
  & > .slick-list > .slick-track > .slick-slide[data-index='-1'] {
    // Exception) "data-index" = -1
    margin-right: ${(props) => props.theme.spacing[2]};
  }
  & > .slick-list > .slick-track > .slick-slide:last-child {
    margin-right: 0;
  }
`;

function CardViewList({ title, description, type, children, refetch }: Props) {
  const slider = useRef<Slider>(null);
  return (
    <>
      <Header
        title={title}
        description={description}
        sliderRef={slider}
        type={type}
        refetch={refetch}
      />
      <StyledSlider {...settings} ref={slider}>
        {children}
      </StyledSlider>
    </>
  );
}

export default CardViewList;
