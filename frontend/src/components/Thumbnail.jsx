import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// styles
import { AdultWidget, CompleteWidget, PayWidget, PlatformWidget } from 'styles/Widget';

const ThumbnailWrapper = styled.div`
  position: relative;
  ${props => `
    width: ${props.width}px;
    height: ${props.height}px;
  `}
`;

const WidgetList = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing[1]};
  position: absolute;
  width: 100%;
  & > .widget {
    margin-bottom: ${props => props.theme.spacing[0]};
    margin-left: auto;
  }
  & > .widget:last-child {
    margin-bottom: 0;
  }
`;

const AdultWidgetWrapper = styled.div`
  position: absolute;
`;

const Cover = styled.img`
  width: 100%;
  height: 100%;
`;

const Thumbnail = ({ width, height, src, isPay, isAdult, isFinish, platform }) => (
  <ThumbnailWrapper width={width} height={height}>
    <WidgetList>
      {
        isAdult && (
          <AdultWidgetWrapper>
            <AdultWidget />
          </AdultWidgetWrapper>
        )
      }
      { platform && <PlatformWidget platform={platform} /> }
      { isPay && <PayWidget /> }
      { isFinish && <CompleteWidget /> }
    </WidgetList>
    <Cover src={src} alt="thumbnail" />
  </ThumbnailWrapper>
);

Thumbnail.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string,
  isPay: PropTypes.bool,
  isAdult: PropTypes.bool,
  isFinish: PropTypes.bool,
  platform: PropTypes.string,
};

Thumbnail.defaultProps = {
  width: 236,
  height: 236,
  src: '', // no thumbnail img
  isPay: false,
  isAdult: false,
  isFinish: false,
  platform: '',
};

export default Thumbnail;