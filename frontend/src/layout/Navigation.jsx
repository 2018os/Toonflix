import React from 'react';
import { Padding } from 'styled-components-spacing';
import { Row, Col, Space, Input } from 'antd';
import styled from 'styled-components';

import { Text } from '../styles/Typography';
import Icon from '../styles/Icon';

const Logo = () => (
  <div>
    Logo
  </div>
);

const MenuCol = styled(Col)`
  margin-left: ${props => props.theme.spacing[1]};
`;

const ProfileCol = styled(Col)`
  text-align: right;
`;

const Menu = () => (
  <Space size="large">
    <a href="/themes">
      <Text size="large">
        컬렉션
      </Text>
    </a>
    <a href="/genres">
      <Text size="large">
        카테고리
      </Text>
    </a>
    <Input placeholder="제목, 장르, 작가를 입력하세요." />
  </Space>
);

const Profile = () => (
  <Space size="large">
    <Icon src="/icon/star.svg" />
    <Icon src="/icon/account-circle.svg" />
  </Space>
);

const Navigation = () => (
  <Padding horizontal={4} vertical={2}>
    <Row justify="space-around">
      <Col span={4}><Logo /></Col>
      <MenuCol span={14}><Menu /></MenuCol>
      <ProfileCol span={4}><Profile /></ProfileCol>
    </Row>
  </Padding>
);

export default Navigation;