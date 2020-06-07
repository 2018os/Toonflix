import { Input, Space } from 'antd';
import { Link } from 'react-router-dom';
import { Margin, Padding } from 'styled-components-spacing';
import React from 'react';

// layout
import Container from './Container';

// styles
import { Text } from 'styles/Typography';

const Logo = () => (
  <div style={{
    position: 'absolute'
  }}>
    <Link to="/">
      Home Logo
    </Link>
  </div>
);

const Menu = () => (
  <Space size="large">
    <Margin right={2}>
      <Link to="/collections">
        <Text size="large">
          컬렉션
        </Text>
      </Link>
    </Margin>
    <Margin right={3}>
      <Link to="/category">
        <Text size="large">
          카테고리
        </Text>
      </Link>
    </Margin>
    <Input placeholder="제목, 장르, 작가를 입력하세요." />
  </Space>
);

const Navigation = () => (
  <Padding all={2}>
    <Logo />
    <Container>
      <Menu />
    </Container>
  </Padding>
);

export default Navigation;