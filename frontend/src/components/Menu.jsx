import React from 'react';
import { Margin } from 'styled-components-spacing';
import { Input, Button } from 'antd';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  text-align: center;
  margin-left: ${props => props.theme.spacing[2]}; // TODO: Make no sense
`;

const StyledButton = styled(Button)`
  width: 236px;
  margin-right: ${props => props.theme.spacing[2]};
  &:last-child: {
    margin-right: 0;
  }
`;

const Menu = () => (
  <div>
    <Margin bottom={3}>
      <Input placeholder="컬렉션, 장르, 작가 등을 검색해보세요" />
    </Margin>
    <ButtonWrapper>
      <StyledButton>컬렉션 바로가기</StyledButton>
      <StyledButton>카테고리 바로가기</StyledButton>
    </ButtonWrapper>
  </div>
);

export default Menu;