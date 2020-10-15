import React, { useEffect, useState } from 'react';

import { User, useUserForWithAuthLazyQuery } from '../generated/graphql';

export interface AuthState {
  userId: string | null;
  signIn: (token: string, userId: string) => void;
  signOut: () => void;
  token?: string;
  user?: Pick<User, 'id' | 'name'> | null;
}

const withAuth = (WrappedComponents: React.ComponentType<any | string>) => {
  const initialAuthState = {
    userId: null,
    token: undefined,
    user: null
  };
  return (props: any) => {
    const [authState, setAuthState] = useState(initialAuthState as AuthState);
    const [userQuery, { data }] = useUserForWithAuthLazyQuery();

    useEffect(() => {
      const id = localStorage.getItem('userId');
      if (id !== authState.userId) {
        if (id) {
          userQuery({ variables: { id } });
          setAuthState({
            ...authState,
            userId: id,
            user: data?.user
          });
        } else {
          setAuthState(initialAuthState as AuthState);
        }
      }
    }, [authState]);

    const signIn = (token: string, userId: string) => {
      setAuthState({
        ...authState,
        token
      });
      if (typeof window !== 'undefined') {
        localStorage.setItem('userId', userId);
      }
    };

    const signOut = () => {
      setAuthState(initialAuthState as AuthState);
      if (typeof window !== 'undefined') {
        localStorage.removeItem('userId');
      }
    };

    return (
      <WrappedComponents
        {...props}
        authState={{ ...authState, signIn, signOut, user: data?.user }}
      />
    );
  };
};

export default withAuth;
