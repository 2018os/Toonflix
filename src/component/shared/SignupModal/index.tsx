import { Formik, Form, Field, FormikErrors, ErrorMessage } from 'formik';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Button from '../../../styles/Button';
import { Title, Text } from '../../../styles/Typography';

import Modal, { ModalProps } from '../Modal';

import { useSignupForSignupModalMutation } from '../../../generated/graphql';

import { spacing, Colors, FontSizes } from '../../../util/theme';

type Props = ModalProps & {
  close: () => any;
  onSignupSuccess: (token: string) => any;
};

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
}

const Content = styled.div`
  text-align: center;
`;

const Logo = styled.div`
  margin-bottom: ${spacing[2]};
`;

const Input = styled(Field)`
  height: 40px;
  border-radius: 5px;
  border: solid 1px #707070;
  background-color: #ffffff;
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
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const SignupModal: FunctionComponent<Props> = ({
  isOpen,
  close,
  onSignupSuccess
}) => {
  const initialValues: SignupFormValues = { name: '', email: '', password: '' };
  const [signup] = useSignupForSignupModalMutation();
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => close()}
      style={{
        content: {
          width: '400px',
          height: '400px',
          borderRadius: '10px',
          paddingRight: spacing[6],
          paddingLeft: spacing[6],
          margin: 'auto'
        }
      }}
    >
      <Content>
        <Logo>
          <Title>로고</Title>
        </Logo>
        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors: FormikErrors<SignupFormValues> = {};
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
              const { data } = await signup({ variables: { ...value } });
              if (data && data.signup.token && data.signup.user) {
                onSignupSuccess(data.signup.token);
                close();
              }
            } catch (err) {
              alert('중복된 이메일 입니다.');
            }
          }}
        >
          <Form>
            <Label>
              <TextWrapper>
                <Text>이름</Text>
              </TextWrapper>
              <Input id="name" name="name" type="text" placeholder="이름" />
            </Label>
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
      </Content>
    </Modal>
  );
};

export default SignupModal;
