import React, { FunctionComponent, useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import { Title, SubTitle } from '../../../styles/Typography';

import { FontSizes, Colors, spacing } from '../../../util/theme';

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  width: 40px;
  height: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.TEXT_GRAY};
  font-size: ${FontSizes.H3};
`;

const Refresh = styled.img.attrs({
  src: '/static/icon/refresh.svg'
})``;

type Action = 'refresh' | 'pagination';

interface Props {
  title: string;
  subTitle?: string;
  type: Action;
  children: React.ReactNode;
  refetch?: () => any;
}

interface HeaderProps {
  title: string;
  subTitle?: string;
  sliderRef: React.RefObject<Slider>;
  type: Action;
  refetch?: () => any;
}

const settings = {
  className: 'slider',
  dots: false,
  infinite: false,
  draggable: true,
  initialSlide: 0,
  variableWidth: true,
  arrows: false
};

const Header: FunctionComponent<HeaderProps> = ({
  title,
  subTitle,
  sliderRef,
  type,
  refetch
}) => (
  <ContentWrapper>
    <ContentWrapper>
      <Title size={FontSizes.LARGER} color={Colors.PRIMARY_COLOR}>
        {title}
      </Title>
      <SubTitle size={FontSizes.SMALL}>{subTitle}</SubTitle>
    </ContentWrapper>
    <ContentWrapper>
      {type === 'refresh' && refetch ? (
        <Button onClick={refetch}>
          <Refresh />
        </Button>
      ) : (
        <>
          <Button
            onClick={() => {
              if (sliderRef.current) sliderRef.current.slickPrev();
            }}
          >
            {'<'}
          </Button>
          <Button
            style={{ marginLeft: spacing[0] }}
            onClick={() => {
              if (sliderRef.current) sliderRef.current.slickNext();
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
  margin-top: ${spacing[3]};
  & > .slick-list > .slick-track > .slick-slide:not([data-index^='-']) {
    // "data-index" 가 0 보다 큰 slick-slide 에게 margin-right
    margin-right: ${spacing[2]};
  }
  & > .slick-list > .slick-track > .slick-slide[data-index='-1'] {
    // Exception) "data-index" = -1
    margin-right: ${spacing[2]};
  }
  & > .slick-list > .slick-track > .slick-slide:last-child {
    margin-right: 0;
  }
`;

function CardViewList({ title, subTitle, type, children, refetch }: Props) {
  const slider = useRef<Slider>(null);
  return (
    <>
      <Header
        title={title}
        subTitle={subTitle}
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
