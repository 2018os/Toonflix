import React from 'react';
import styled from 'styled-components';

import { AdultWidget, PayWidget, PlatFormWidget, CompleteWidget } from '../styles/Widget';

const ThumbnailWrapper = styled.div`
`;

const WidgetWrapper = styled.div`
  padding: ${props => props.theme.spacing[1]};
  position: absolute;
  width: 100%;
  & > img:last-child {
    margin-bottom: 0;
  }
`;

const Cover = styled.img`
  width: 100%;
`;

const Thumbnail = ({ src, widget }) => {
  const { pay, adult, platform, finish } = widget;
  return (
    <ThumbnailWrapper>
      <WidgetWrapper>
        {
          adult && <AdultWidget />
        }
        {
          platform && <PlatFormWidget platform={platform} />
        }
        {
          pay && <PayWidget />
        }
        {
          finish && <CompleteWidget />
        }
      </WidgetWrapper>
      <Cover src={src} alt="thumbnail" />
    </ThumbnailWrapper>
  )
};

export default Thumbnail;