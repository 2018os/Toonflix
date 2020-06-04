import { Margin } from 'styled-components-spacing';
import React from 'react';
import { Space } from 'antd';

// layout
import Container from './Container';

// styles
import { Text } from '../styles/Typography';

const Footer = () => (
  <Container>
    <Margin vertical={4}>
      <Space>
        <Text size="largest" bold>
          TOONFLIX
        </Text>
      </Space>
    </Margin>
  </Container>
);

export default Footer;