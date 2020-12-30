import React from 'react';
import {
  AuthContext,
  AuthState as BaseAuthState
} from '../../context/AuthContext';

const withAuth = (WrappedComponents: React.ComponentType<any | string>) => {
  return (props: any) => {
    return (
      <AuthContext.Consumer>
        {(state) => <WrappedComponents {...props} authState={state} />}
      </AuthContext.Consumer>
    );
  };
};

export type AuthState = BaseAuthState;

export default withAuth;
