import { Button, Input } from 'antd';
import { Margin } from 'styled-components-spacing';
import React from 'react';
import styled from 'styled-components';

// styles
import Icon from 'styles/Icon';

// components
import SearchBar from './SearchBar';

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

const StyledInput = styled(Input)`
  height: 111px;
  border-radius: 10px;
  ${props => `
  border-color: ${props.theme.colors.primaryColor};
  box-shadow: 0px 0px 0px 3px ${props.theme.colors.primaryColor};
  & > input {
    font-size: ${props.theme.fontSizes.larger};
    color: ${props.theme.colors.primaryColor};
    &::placeholder {
      color: ${props.theme.colors.primaryColor};
    }
  }
  `}
`;

const Menu = () => {
  return (
    <div>
      <Margin bottom={3}>
        <SearchBar>
          <StyledInput
            placeholder="컬렉션 장르, 키워드, 작가 등을 검색해보세요 :)"
            prefix={(
              <Margin horizontal={1}>
                <Icon src="/icon/search.svg" alt="search" size="larger" />
              </Margin>
            )}
            className="searchBar"
          />
        </SearchBar>
      </Margin>
      <ButtonWrapper>
        <StyledButton type="primary" href="/collections">컬렉션 바로가기</StyledButton>
        <StyledButton type="primary" href="/category">카테고리 바로가기</StyledButton>
      </ButtonWrapper>
    </div>
  );
};

export default Menu;