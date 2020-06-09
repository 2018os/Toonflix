import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { Margin, Padding } from 'styled-components-spacing';
import React from 'react';

// layout
import Container from './Container';

// styles
import { Text } from 'styles/Typography';

// components
import SearchBar from 'components/SearchBar';

const Logo = () => (
  <div style={{
    position: 'absolute'
  }}>
    <Link to="/">
      Home Logo
    </Link>
  </div>
);

const Navigation = () => (
  <Padding all={2}>
    <Logo />
    <Container>
      <Row align="middle">
        <Col>
          <Margin right={2}>
            <Link to="/collections">
              <Text size="large">
                컬렉션
              </Text>
            </Link>
          </Margin>
        </Col>
        <Col>
          <Margin right={5}>
            <Link to="/category">
              <Text size="large">
                카테고리
              </Text>
            </Link>
          </Margin>
        </Col>
        <Col span={12}>
          <SearchBar />
        </Col>
      </Row>
    </Container>
  </Padding>
);

export default Navigation;