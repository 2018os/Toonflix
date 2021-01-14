import { Formik, Form, Field, FormikErrors, ErrorMessage } from 'formik';
import React, { FunctionComponent, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import Button from '../../../styles/Button';
import Logo from '../../../styles/Logo';
import { Text } from '../../../styles/Typography';

import Modal, { ModalProps } from '../Modal';

import {
  MeForWithAuthDocument,
  MeForWithAuthQuery,
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
  border: solid 1px ${Colors.TEXT_GRAY};
  background-color: ${Colors.WHITE};
  font-size: ${FontSizes.DEFAULT};
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
  const [updateUser] = useUpdateUserForAuthenticationModalMutation({
    update: (cache, mutationResult) => {
      const newMe = mutationResult.data?.updateUser;
      const exsiting = cache.readQuery<MeForWithAuthQuery>({
        query: MeForWithAuthDocument
      });
      if (exsiting && exsiting.me && newMe) {
        cache.writeQuery({
          query: MeForWithAuthDocument,
          data: {
            ...exsiting,
            me: {
              ...exsiting.me,
              isAuthentication: newMe.isAuthentication
            }
          }
        });
      }
    }
  });
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
            alert('메일을 다시 전송했습니다.');
          }}
        >
          메일이 다시 받기
        </InfoMessage>
      </Content>
    </Modal>
  );
};

export default AuthenticateModal;
