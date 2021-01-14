import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import withAuth, { AuthState } from '../hocs/withAuth';

import Logo from '../styles/Logo';
import { Text } from '../styles/Typography';

import AuthenticationModal from '../component/shared/AuthenticationModal';
import Dropdown, { Option } from '../component/shared/Dropdown';
import Link from '../component/shared/Link';
import LoginModal from '../component/shared/LoginModal';
import SearchBar, { SearchIcon } from '../component/shared/SearchBar';

import { spacing, Colors, FontSizes, IconSizes } from '../util/theme';

export interface ProfileProps {
  authState: AuthState;
  isMain?: boolean;
}

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${spacing[3]} ${spacing[5]};
`;

const ItemWrapper = styled.div`
  display: flex;
  width: 992px;
`;

const Item = styled.div`
  margin: auto ${spacing[2]} auto ${spacing[0]};
  &:last-child {
    margin: 0;
  }
`;

const Tab = styled(Text)<{ isCurrentPath: boolean }>`
  color: ${(props) =>
    props.isCurrentPath ? Colors.PRIMARY_COLOR : Colors.BLACK};
`;

const SearchBarWrapper = styled.div`
  min-width: 500px;
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: ${IconSizes.DEFAULT};
  height: ${IconSizes.DEFAULT};
`;

const ProfileWrapper = styled.div<{ isMain: boolean }>`
  ${(props) =>
    props.isMain &&
    `
    position: absolute;
    right: 0;
    padding: ${spacing[3]} ${spacing[5]};
    `}
`;

const TextButton = styled(Text)`
  cursor: pointer;
`;

const StyledLogo = styled(Logo)`
  width: 140px;
  vertical-align: middle;
`;

const Profile: FunctionComponent<ProfileProps> = ({ authState, isMain }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [showLoginModal, toggleLoginModal] = useState(false);
  const [showAuthenticationModal, toggleAuthenticationModal] = useState(false);
  const router = useRouter();
  return (
    <ProfileWrapper isMain={!!isMain}>
      {authState.data && authState.token ? (
        <>
          <Dropdown
            isOpen={isOpenMenu}
            openButton={
              <TextButton onClick={() => setIsOpenMenu(!isOpenMenu)}>
                {authState.data.me.name}
              </TextButton>
            }
          >
            {!authState.data.me.isAuthentication && (
              <Option onClick={() => toggleAuthenticationModal(true)}>
                이메일 인증
              </Option>
            )}
            <Option onClick={() => router.push('/profile')}>내 프로필</Option>
            <Option onClick={() => router.push('/mycollection')}>
              내 컬렉션
            </Option>
            <Option
              onClick={() => {
                setIsOpenMenu(false);
                authState.signOut();
              }}
            >
              <Text color={Colors.RED}>로그아웃</Text>
            </Option>
          </Dropdown>
          <AuthenticationModal
            isOpen={showAuthenticationModal}
            email={authState.data.me.email}
            close={() => toggleAuthenticationModal(false)}
          />
        </>
      ) : (
        <TextButton onClick={() => toggleLoginModal(true)}>로그인</TextButton>
      )}
      <LoginModal
        isOpen={showLoginModal}
        close={() => toggleLoginModal(false)}
        onLoginSuccess={(token) => authState.signIn(token)}
      />
    </ProfileWrapper>
  );
};

const AuthProfile = withAuth(Profile);

const Navigation = () => {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();
  const { pathname } = router;

  return pathname === '/' ? (
    <AuthProfile isMain />
  ) : (
    <NavigationWrapper>
      <Link linkProps={{ href: '/' }}>
        <StyledLogo />
      </Link>
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
          <SearchBarWrapper>
            <SearchBar
              keyword={keyword}
              handleChange={(value) => setKeyword(value)}
              inputSize={FontSizes.SMALL}
              autoComplete
              inputPrefix={<StyledSearchIcon />}
            />
          </SearchBarWrapper>
        </Item>
      </ItemWrapper>
      <AuthProfile />
    </NavigationWrapper>
  );
};

export default Navigation;
