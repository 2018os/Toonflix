import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { Text } from '../styles/Typography';

import withAuth, { AuthState } from '../hocs/withAuth';

import Link from '../component/shared/Link';
import SearchBar from '../component/shared/SearchBar';

import { useLoginMutation } from '../generated/graphql';

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

const Tab = styled(Text)<{ isCurrentPath: boolean }>`
  color: ${(props) =>
    props.isCurrentPath
      ? props.theme.TextColors.PRIMARY_COLOR
      : props.theme.TextColors.BLACK};
`;

export interface Props {
  authState: AuthState;
}

const Navigation: FunctionComponent<Props> = ({ authState }) => {
  const [login] = useLoginMutation();
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <NavigationWrapper>
      <Logo>
        <Link linkProps={{ href: '/' }}>메인</Link>
      </Logo>
      <ItemWrapper>
        <Item>
          <Link linkProps={{ href: '/collections' }}>
            <Tab isCurrentPath={pathname === '/collections'}>컬렉션</Tab>
          </Link>
        </Item>
        <Item>
          <Link linkProps={{ href: '/category' }}>
            <Tab isCurrentPath={pathname === '/category'}>카테고리</Tab>
          </Link>
        </Item>
        <Item>
          <SearchWrapper>
            <SearchBar isMain={false} />
          </SearchWrapper>
        </Item>
      </ItemWrapper>
      <ProfileWrapper>
        {authState.userId ? (
          <div>
            <div>{authState.userId}</div>
            <button onClick={() => authState.signOut()}>로그아웃</button>
          </div>
        ) : (
          <Profile>
            <Link linkProps={{ href: '/login' }}>
              <Text>로그인</Text>
            </Link>
          </Profile>
        )}
      </ProfileWrapper>
    </NavigationWrapper>
  );
};

export default withAuth(Navigation);
