import React from 'react';
import styled from 'styled-components';

// styles
import { AdultWidget, CompleteWidget, PayWidget, PlatFormWidget } from 'styles/Widget';

const ThumbnailWrapper = styled.div`
  position: relative;
  width: 236px;
  height: 236px;
`;

const WidgetList = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing[1]};
  position: absolute;
  width: 100%;
  & > .thumbnail-widget {
    margin-bottom: ${props => props.theme.spacing[0]};
    margin-left: auto;
  }
  & > .thumbnail-widget:last-child {
    margin-bottom: 0;
  }
`;

const AdultWidgetWrapper = styled.div`
  position: absolute;
`;

const Cover = styled.img`
  width: 100%;
`;

const Thumbnail = ({ src, isPay, isAdult, isFinish, platform }) => {
  return (
    <ThumbnailWrapper>
      <WidgetList>
        {
          isAdult && (
            <AdultWidgetWrapper>
              <AdultWidget />
            </AdultWidgetWrapper>
          )
        }
        {
          platform && <PlatFormWidget platform={platform} />
        }
        {
          isPay && <PayWidget />
        }
        {
          isFinish && <CompleteWidget />
        }
      </WidgetList>
      <Cover src={src} alt="thumbnail" />
    </ThumbnailWrapper>
  )
};

export default Thumbnail;