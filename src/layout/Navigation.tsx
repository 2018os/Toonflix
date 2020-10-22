import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import withAuth, { AuthState } from '../hocs/withAuth';

import { Text } from '../styles/Typography';

import Link from '../component/shared/Link';
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

const SearchWrapper = styled.div`
  width: 320px;
`;

const Tab = styled(Text)<{ isCurrentPath: boolean }>`
  color: ${(props) =>
    props.isCurrentPath
      ? props.theme.TextColors.PRIMARY_COLOR
      : props.theme.TextColors.BLACK};
`;

const ProfileWrapper = styled.div<{ isMain: boolean }>`
  display: flex;
  jusitfy-content: flex-end;
  ${(props) =>
    props.isMain &&
    `
    position: absolute;
    right: 0;
    padding: ${props.theme.spacing[3]} ${props.theme.spacing[5]};
    `}
`;

export interface Props {
  authState: AuthState;
}

export interface ProfileProps {
  authState: AuthState;
  isMain: boolean;
}

const Profile: FunctionComponent<ProfileProps> = ({ authState, isMain }) => {
  return (
    <ProfileWrapper isMain={isMain}>
      {authState.user && authState.userId ? (
        <div>
          <div>{authState.user.name}</div>
          <button onClick={() => authState.signOut()}>로그아웃</button>
        </div>
      ) : (
        <Link linkProps={{ href: '/login' }}>
          <Text>로그인</Text>
        </Link>
      )}
    </ProfileWrapper>
  );
};

const Navigation: FunctionComponent<Props> = ({ authState }) => {
  const router = useRouter();
  const pathname = router.pathname;
  return pathname === '/' ? (
    <Profile authState={authState} isMain={true} />
  ) : (
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
            <SearchBar />
          </SearchWrapper>
        </Item>
      </ItemWrapper>
      <Profile authState={authState} isMain={false} />
    </NavigationWrapper>
  );
};

export default withAuth(Navigation);
