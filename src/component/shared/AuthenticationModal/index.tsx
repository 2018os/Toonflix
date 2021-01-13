import { Formik, Form, Field, FormikErrors, ErrorMessage } from 'formik';
import React, { FunctionComponent, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import Button from '../../../styles/Button';
import Logo from '../../../styles/Logo';
import { Text } from '../../../styles/Typography';

import Modal, { ModalProps } from '../Modal';

import {
  useAuthenticateByEmailForAuthenticationModalMutation,
  useUpdateUserForAuthenticationModalMutation
} from '../../../generated/graphql';

import { spacing, FontSizes, Colors } from '../../../util/theme';

type Props = ModalProps & {
  email: string;
  close: () => any;
};

const Content = styled.div`
  text-align: center;
`;

const TextWrapper = styled.div`
  margin-bottom: ${spacing[2]};
`;

const LogoWrapper = styled.div`
  margin: ${spacing[3]};
`;

const Error = styled.div`
  color: ${Colors.RED};
`;

const StyledLogo = styled(Logo)`
  width: 200px;
`;

const StyledButton = styled(Button)`
  border-radius: 5px;
  padding: ${spacing[1]};
  margin-top: ${spacing[3]};
  margin-bottom: ${spacing[2]};
`;

const Input = styled(Field)`
  height: 40px;
  border-radius: 5px;
  border: solid 1px #707070;
  background-color: #ffffff;
`;

const InfoMessage = styled(Text)`
  cursor: pointer;
`;

type AuthenticationFormValues = {
  code: string;
};

const AuthenticateModal: FunctionComponent<Props> = ({
  email,
  isOpen,
  close
}) => {
  const [
    authenticateByEmail,
    { data }
  ] = useAuthenticateByEmailForAuthenticationModalMutation();
  const [updateUser] = useUpdateUserForAuthenticationModalMutation();
  const sendEmail = useCallback(
    (value: string) => {
      authenticateByEmail({
        variables: {
          email: value
        }
      });
    },
    [authenticateByEmail]
  );
  useEffect(() => {
    if (email) sendEmail(email);
  }, [email, sendEmail]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => close()}
      style={{
        content: {
          width: '500px',
          height: '400px',
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
        <TextWrapper>
          <Text size={FontSizes.LARGE}>
            해당 이메일 주소로 메일이 발송되었습니다.
          </Text>
        </TextWrapper>
        <Formik
          initialValues={{ code: '' }}
          validate={(values) => {
            const errors: FormikErrors<AuthenticationFormValues> = {};
            if (!values.code) {
              errors.code = 'Required';
            }
            return errors;
          }}
          onSubmit={async (value) => {
            try {
              if (
                data?.authenticateByEmail.code &&
                data.authenticateByEmail.code === value.code
              ) {
                await updateUser({
                  variables: {
                    isAuthentication: true
                  }
                });
                close();
              } else {
                alert('잘못된 코드입니다.');
              }
            } catch (err) {
              alert('잘못된 코드입니다.');
            }
          }}
        >
          <Form>
            <Input
              id="code"
              name="code"
              type="text"
              placeholder="코드를 입력하세요."
            />
            <ErrorMessage name="code" component={Error} />
            <StyledButton type="submit" isFull primary>
              확인
            </StyledButton>
          </Form>
        </Formik>
        <InfoMessage
          color={Colors.TEXT_GRAY}
          onClick={() => {
            sendEmail(email);
          }}
        >
          메일이 다시 받기
        </InfoMessage>
      </Content>
    </Modal>
  );
};

export default AuthenticateModal;
