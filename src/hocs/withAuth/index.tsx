import React, { useEffect, useState } from 'react';

import {
  useMeForWithAuthLazyQuery,
  MeForWithAuthQuery
} from '../../generated/graphql';

export interface AuthState {
  signIn: (token: string) => void;
  signOut: () => void;
  token?: string;
  data?: MeForWithAuthQuery;
}

const withAuth = (WrappedComponents: React.ComponentType<any | string>) => {
  const initialAuthState = {
    token: undefined
  };
  return (props: any) => {
    const [authState, setAuthState] = useState(initialAuthState as AuthState);
    const [meQuery, { data }] = useMeForWithAuthLazyQuery({
      fetchPolicy: 'cache-and-network'
    });

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        meQuery();
        if (data && data !== authState.data) {
          setAuthState({
            ...authState,
            data,
            token
          });
        }
      }
    }, [authState, meQuery, data]);

    const signIn = (token: string) => {
      setAuthState({
        ...authState,
        token
      });
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', token);
      }
    };

    const signOut = () => {
      setAuthState(initialAuthState as AuthState);
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
      }
    };

    return (
      <WrappedComponents
        {...props}
        authState={{
          ...authState,
          signIn,
          signOut
        }}
      />
    );
  };
};

export default withAuth;
