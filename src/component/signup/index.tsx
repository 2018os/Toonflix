import { Formik, Form, Field, FormikErrors, ErrorMessage } from 'formik';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import withAuth, { AuthState } from '../../hocs/withAuth';

import { Text } from '../../styles/Typography';

import { useSignupMutation } from '../../generated/graphql';
import { Colors, FontSizes, spacing } from '../../util/theme';

export interface Props {
  authState: AuthState;
}

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
}

const Content = styled.div`
  width: 488px;
  height: 430px;
  text-align: center;
  padding: ${spacing[2]};
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
  margin-bottom: ${spacing[1]};
`;

const TextWrapper = styled.div`
  margin-bottom: ${spacing[0]};
  & > span {
    float: left;
  }
`;

const Button = styled.button`
  width: 360px;
  height: 48px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  font-weight: bold;
  font-size: ${FontSizes.LARGE};
  margin-top: ${spacing[4]};
  background-color: ${Colors.PRIMARY_COLOR};
  color: ${Colors.WHITE};
  }
`;

const ErrorMessageBox = styled.div`
  color: red; // TODO: Use theme
`;

const SignupContainer: FunctionComponent<Props> = ({ authState }) => {
  const router = useRouter();
  const [signup] = useSignupMutation();
  const initialValues: SignupFormValues = { name: '', email: '', password: '' };
  return (
    <Content>
      <Logo>Logo</Logo>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: FormikErrors<SignupFormValues> = {};
          if (!values.name) {
            errors.name = 'Required';
          } else if (!values.email) {
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
            const { data } = await signup({ variables: { ...value } });
            if (data?.signup.token && data?.signup?.user) {
              const { token } = data.signup;
              const userId = data.signup.user.id;
              authState.signIn(token, userId);
              router.push('/');
            }
          } catch (err) {
            alert('중복된 이메일 입니다.');
          }
        }}
      >
        <Form>
          <Label>
            <TextWrapper>
              <Text>NAME</Text>
            </TextWrapper>
            <Input id="name" name="name" type="name" placeholder="이름" />
            <ErrorMessage name="name" component={ErrorMessageBox} />
          </Label>
          <Label>
            <TextWrapper>
              <Text>E-MAIL</Text>
            </TextWrapper>
            <Input id="email" name="email" type="email" placeholder="이메일" />
            <ErrorMessage name="email" component={ErrorMessageBox} />
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
          <Button type="submit">회원가입</Button>
        </Form>
      </Formik>
    </Content>
  );
};

export default withAuth(SignupContainer);
