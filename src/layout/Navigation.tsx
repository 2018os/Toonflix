import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { Text } from '../styles/Typography';

import SearchBar from '../component/shared/SearchBar';

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${(props) => `
    padding: ${props.theme.spacing[3]} ${props.theme.spacing[5]};
  `}
`;

const Logo = styled.div``;

const ItemWrapper = styled.div`
  display: flex;
  width: 992px;
`;

const Item = styled.div`
  margin: ${(props) =>
    `auto ${props.theme.spacing[2]} auto ${props.theme.spacing[0]}`};
  &:last-child {
    margin: 0;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  jusitfy-content: flex-end;
`;

const Profile = styled.div``;

const SearchWrapper = styled.div`
  width: 320px;
`;

const Navigation = () => (
  <NavigationWrapper>
    <Logo>
      <Link href="/">
        <a>메인</a>
      </Link>
    </Logo>
    <ItemWrapper>
      <Item>
        <Link href="/collection">
          <a style={{ textDecoration: 'none' }}>
            <Text>컬렉션</Text>
          </a>
        </Link>
      </Item>
      <Item>
        <Link href="/category">
          <a style={{ textDecoration: 'none' }}>
            <Text>카테고리</Text>
          </a>
        </Link>
      </Item>
      <Item>
        <SearchWrapper>
          <SearchBar isMain={false} />
        </SearchWrapper>
      </Item>
    </ItemWrapper>
    <ProfileWrapper>
      <Profile>로그인</Profile>
    </ProfileWrapper>
  </NavigationWrapper>
);

export default Navigation;
