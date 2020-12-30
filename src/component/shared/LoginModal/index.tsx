import { Formik, Form, Field, FormikErrors, ErrorMessage } from 'formik';
import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import Button from '../../../styles/Button';
import Logo from '../../../styles/Logo';
import { Text } from '../../../styles/Typography';

import Modal, { ModalProps } from '../Modal';
import SignupModal from '../SignupModal';

import { useLoginForLoginModalMutation } from '../../../generated/graphql';

import { spacing, Colors, FontSizes } from '../../../util/theme';

type Props = ModalProps & {
  close: () => any;
  onLoginSuccess: (token: string) => any;
};

interface LoginFormValues {
  email: string;
  password: string;
}

const Content = styled.div`
  text-align: center;
`;

const LogoWrapper = styled.div`
  margin: ${spacing[3]};
`;

const StyledLogo = styled(Logo)`
  width: 200px;
`;

const Input = styled(Field)`
  height: 40px;
  border-radius: 5px;
  border: solid 1px ${Colors.TEXT_GRAY};
  background-color: ${Colors.WHITE};
`;

const Label = styled.label`
  width: 100%;
  display: flex;
  margin: auto;
  flex-direction: column;
  margin-bottom: ${spacing[1]};
`;

const TextWrapper = styled.div`
  margin-bottom: ${spacing[0]};
  & > span {
    float: left;
  }
`;

const Error = styled.div`
  color: ${Colors.RED};
`;

const StyledButton = styled(Button)`
  border-radius: 5px;
  padding: ${spacing[1]};
  margin-top: ${spacing[3]};
`;

const LoginModal: FunctionComponent<Props> = ({
  isOpen,
  close,
  onLoginSuccess
}) => {
  const [openSignupModal, toggleModal] = useState(false);
  const initialValues: LoginFormValues = { email: '', password: '' };
  const [login] = useLoginForLoginModalMutation();
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => close()}
      style={{
        content: {
          width: '400px',
          height: '450px',
          borderRadius: '10px',
          paddingRight: spacing[6],
          paddingLeft: spacing[6],
          margin: 'auto'
        }
      }}
    >
      <Content>
        <LogoWrapper>
          <StyledLogo />
        </LogoWrapper>
        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors: FormikErrors<LoginFormValues> = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={async (value) => {
            try {
              const { data } = await login({ variables: { ...value } });
              if (data && data.login.token) {
                onLoginSuccess(data.login.token);
                close();
              }
            } catch (err) {
              alert('이메일 혹은 비밀번호가 틀립니다.');
            }
          }}
        >
          <Form>
            <Label>
              <TextWrapper>
                <Text>E-MAIL</Text>
              </TextWrapper>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="이메일"
              />
              <ErrorMessage name="email" component={Error} />
            </Label>
            <Label>
              <TextWrapper>
                <Text>PASSWORD</Text>
              </TextWrapper>
              <Input
                id="password"
                name="password"
                placeholder="비밀번호"
                type="password"
              />
            </Label>
            <StyledButton type="submit" isFull primary>
              <Text size={FontSizes.DEFAULT}>로그인</Text>
            </StyledButton>
          </Form>
        </Formik>
        <StyledButton isFull onClick={() => toggleModal(true)}>
          <Text size={FontSizes.DEFAULT}>회원가입</Text>
        </StyledButton>
      </Content>
      <SignupModal
        isOpen={openSignupModal}
        close={() => {
          toggleModal(false);
          close();
        }}
        onSignupSuccess={(token) => onLoginSuccess(token)}
      />
    </Modal>
  );
};

export default LoginModal;
