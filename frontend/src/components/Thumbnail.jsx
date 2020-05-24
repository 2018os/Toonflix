import React from 'react';
import styled from 'styled-components';

// have to chage resource
import payIcon from './smallPay.png';
import smallDaum from './smallDaum.png';

const ThumbnailWrapper = styled.div`
`;

const Widget = styled.img`
  border-radius: 5px;
`;

const WidgetWrapper = styled.div`
  position: absolute;
  right: 0;
`;

const Cover = styled.img`
  width: 100%;
`;

const Thumbnail = ({ src }) => (
  <ThumbnailWrapper>
    <WidgetWrapper>
      <Widget src={payIcon} />
      <Widget src={smallDaum} />
    </WidgetWrapper>
    <Cover src={src} alt="thumbnail" />
  </ThumbnailWrapper>
);

export default Thumbnail;