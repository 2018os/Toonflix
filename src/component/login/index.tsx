import { Formik, Form, Field } from 'formik';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { Text } from '../../styles/Typography';

import withAuth, { AuthState } from '../../hocs/withAuth';

import { useLoginMutation } from '../../generated/graphql';

export interface Props {
  authState: AuthState;
}

const Content = styled.div`
  width: 488px;
  height: 430px;
  text-align: center;
  padding: ${(props) => props.theme.spacing[2]};
  border: 1px solid black;
  // change to box-shadow
  margin: auto;
`;
const Logo = styled.div``;

const Input = styled(Field)`
  height: 40px;
  border-radius: 5px;
  border: solid 1px #707070;
  background-color: #ffffff;
`;

const Label = styled.label`
  width: 360px;
  display: flex;
  margin: auto;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.spacing[1]};
`;

const TextWrapper = styled.div`
  margin-bottom: ${(props) => props.theme.spacing[0]};
  & > span {
    float: left;
  }
`;

const Button = styled.button<{ action: 'signup' | 'login' }>`
  width: 360px;
  height: 48px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  font-weight: bold;
  font-size: ${(props) => props.theme.FontSizes.LARGE};
  margin-top: ${(props) => props.theme.spacing[4]};
  ${(props) =>
    props.action === 'signup'
      ? `
    background-color: ${props.theme.Colors.WHITE};
    color: ${props.theme.Colors.BLACK};
  `
      : `
    background-color: ${props.theme.Colors.PRIMARY_COLOR};
    color: ${props.theme.Colors.WHITE};
  `}
`;

const LoginContainer: FunctionComponent<Props> = ({ authState }) => {
  const router = useRouter();
  const [login] = useLoginMutation();
  return (
    <Content>
      <Logo>Logo</Logo>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={async (value) => {
          try {
            // const value = {
            //   email: 'test@test.com',
            //   password: '1234'
            // };
            const { data } = await login({ variables: { ...value } });
            if (data?.login.token && data?.login?.user) {
              const token = data.login.token;
              const userId = data.login.user.id;
              authState.signIn(token, userId);
              router.back();
            } else {
              // TODO: LOGIN FAIL CASE
            }
          } catch (err) {
            console.error('something wrong');
          }
        }}
      >
        <Form>
          <Label>
            <TextWrapper>
              <Text>E-MAIL</Text>
            </TextWrapper>
            <Input id="email" name="email" placeholder="이메일" />
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
          <Button type="submit" action="login">
            로그인
          </Button>
        </Form>
      </Formik>
      <Button action="signup">회원가입</Button>
    </Content>
  );
};

export default withAuth(LoginContainer);
