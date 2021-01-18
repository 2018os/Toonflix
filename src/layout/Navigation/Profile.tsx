import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import withAuth, { AuthState } from '../../hocs/withAuth';

import { Text } from '../../styles/Typography';

import AuthenticationModal from '../../component/shared/AuthenticationModal';
import Dropdown, { Option } from '../../component/shared/Dropdown';
import LoginModal from '../../component/shared/LoginModal';

import { spacing, Colors } from '../../util/theme';

export interface ProfileProps {
  authState: AuthState;
  isMain?: boolean;
}

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

const DropdownWrapper = styled.div`
  & > .dropdown > .option-wrapper {
    min-width: 100px;
    right: 0;
  }
`;

const Profile: FunctionComponent<ProfileProps> = ({ authState, isMain }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [showLoginModal, toggleLoginModal] = useState(false);
  const [showAuthenticationModal, toggleAuthenticationModal] = useState(false);
  const router = useRouter();
  return (
    <ProfileWrapper isMain={!!isMain}>
      {authState.data && authState.token ? (
        <DropdownWrapper>
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
        </DropdownWrapper>
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

export default withAuth(Profile);
