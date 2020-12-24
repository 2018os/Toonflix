import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import withAuth, { AuthState } from '../hocs/withAuth';

import { Text } from '../styles/Typography';

import Dropdown, { Option } from '../component/shared/Dropdown';
import Link from '../component/shared/Link';
import LoginModal from '../component/shared/LoginModal';
import SearchBar from '../component/shared/SearchBar';

import { spacing, Colors } from '../util/theme';

export interface Props {
  authState: AuthState;
}

export interface ProfileProps {
  authState: AuthState;
  isMain?: boolean;
}

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${spacing[3]} ${spacing[5]};
`;

const Logo = styled.div``;

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

const SearchWrapper = styled.div`
  width: 500px;
`;

const Tab = styled(Text)<{ isCurrentPath: boolean }>`
  color: ${(props) =>
    props.isCurrentPath ? Colors.PRIMARY_COLOR : Colors.BLACK};
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

const Profile: FunctionComponent<ProfileProps> = ({ authState, isMain }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [openLoginModal, toggleModal] = useState(false);
  const router = useRouter();
  return (
    <ProfileWrapper isMain={!!isMain}>
      {authState.me && authState.token ? (
        <>
          <Dropdown
            isOpen={isOpenMenu}
            openButton={
              <TextButton onClick={() => setIsOpenMenu(!isOpenMenu)}>
                {authState.me.name}
              </TextButton>
            }
          >
            <Option onClick={() => router.push('/profile')}>내 프로필</Option>
            <Option onClick={() => router.push('/mycollection')}>
              내 컬렉션
            </Option>
            <Option onClick={() => authState.signOut()}>
              <Text color={Colors.RED}>로그아웃</Text>
            </Option>
          </Dropdown>
        </>
      ) : (
        <TextButton onClick={() => toggleModal(true)}>로그인</TextButton>
      )}
      <LoginModal isOpen={openLoginModal} close={() => toggleModal(false)} />
    </ProfileWrapper>
  );
};

const Navigation: FunctionComponent<Props> = ({ authState }) => {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');
  const { pathname } = router;

  const onChange = (value: string) => {
    setKeyword(value);
  };

  // TODO: Improve SearchBar structure

  return pathname === '/' ? (
    <Profile authState={authState} isMain />
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
            <SearchBar autoComplete value={keyword} handleChange={onChange} />
          </SearchWrapper>
        </Item>
      </ItemWrapper>
      <Profile authState={authState} />
    </NavigationWrapper>
  );
};

export default withAuth(Navigation);
