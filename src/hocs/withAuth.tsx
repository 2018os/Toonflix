import React, { useEffect, useState } from 'react';

import { User, useMeForWithAuthLazyQuery } from '../generated/graphql';

export interface AuthState {
  userId: string | null;
  signIn: (token: string, userId: string) => void;
  signOut: () => void;
  token?: string;
  me?: Pick<User, 'id' | 'name'> | null;
}

const withAuth = (WrappedComponents: React.ComponentType<any | string>) => {
  const initialAuthState = {
    userId: null,
    token: undefined,
    me: null
  };
  return (props: any) => {
    const [authState, setAuthState] = useState(initialAuthState as AuthState);
    const [meQuery, { data }] = useMeForWithAuthLazyQuery();

    useEffect(() => {
      const id = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      if (id !== authState.userId) {
        if (id) {
          meQuery();
          setAuthState({
            ...authState,
            userId: id,
            token: token || undefined
          });
        } else {
          setAuthState(initialAuthState as AuthState);
        }
      }
    }, [authState, meQuery, data?.me]);

    const signIn = (token: string, userId: string) => {
      setAuthState({
        ...authState,
        token
      });
      if (typeof window !== 'undefined') {
        localStorage.setItem('userId', userId);
        localStorage.setItem('token', token);
      }
    };

    const signOut = () => {
      setAuthState(initialAuthState as AuthState);
      if (typeof window !== 'undefined') {
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
      }
    };

    return (
      <WrappedComponents
        {...props}
        authState={{ ...authState, signIn, signOut, me: data?.me }}
      />
    );
  };
};

export default withAuth;
