import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { AdultWidget, PayWidget, CompleteWidget } from '../../styles/Widget';

type ImgSize = 'SMALLER' | 'SMALL' | 'DEFAULT' | 'LARGE';

type Props = {
  src: string;
  size: ImgSize;
  isAdult?: boolean;
  isPay?: boolean;
  isFinish?: boolean;
};

const ThumbnailWrapper = styled.div.attrs({
  className: 'thumbnail'
})<{ size: ImgSize }>`
  position: relative;
  width: ${(props) => props.theme.ImgSizes[props.size]};
  height: ${(props) => props.theme.ImgSizes[props.size]};
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
`;

// TODO: Enhance box-sizing
const WidgetList = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing[1]};
  position: absolute;
  width: 100%;
  & > .widget {
    margin-bottom: ${(props) => props.theme.spacing[0]};
    margin-left: auto;
  }
  & > .widget:last-child {
    margin-bottom: 0;
  }
`;

const Cover = styled.img.attrs({
  className: 'cover-img'
})`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const AdultWidgetWrapper = styled.div`
  position: absolute;
`;

const Thumbnail: FunctionComponent<Props> = ({
  src,
  size,
  isAdult,
  isPay,
  isFinish
}) => {
  return (
    <ThumbnailWrapper size={size}>
      <WidgetList>
        {isAdult && (
          <AdultWidgetWrapper>
            <AdultWidget />
          </AdultWidgetWrapper>
        )}
        {isPay && <PayWidget />}
        {isFinish && <CompleteWidget />}
      </WidgetList>
      <Cover src={src} />
    </ThumbnailWrapper>
  );
};

export default Thumbnail;
