import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// styles
import { AdultWidget, CompleteWidget, PayWidget, PlatformWidget } from 'styles/Widget';

const ThumbnailWrapper = styled.div`
  position: relative;
  ${props => `
    width: ${props.theme.imgSizes[props.size] || `${props.size}px`};
    height: ${props.theme.imgSizes[props.size] || `${props.size}px`};
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

const Thumbnail = ({ src, isPay, isAdult, isFinish, platform, size }) => (
  <ThumbnailWrapper size={size}>
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
  src: PropTypes.string,
  isPay: PropTypes.bool,
  isAdult: PropTypes.bool,
  isFinish: PropTypes.bool,
  platform: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

Thumbnail.defaultProps = {
  src: '', // no thumbnail img
  isPay: false,
  isAdult: false,
  isFinish: false,
  platform: '',
  size: 'default'
};

export default Thumbnail;