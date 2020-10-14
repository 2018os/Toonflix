import React, { useEffect, useState } from 'react';

export interface AuthState {
  isLoggedIn: boolean;
  userId?: string | null;
  token?: string;
  signIn: (token: string, userId: string) => void;
  signOut: () => void;
}

const withAuth = (WrappedComponents: React.ComponentType<any | string>) => {
  const initialAuthState = {
    isLoggedIn: false,
    userId: null,
    token: undefined
  };
  return (props: any) => {
    const [authState, setAuthState] = useState(initialAuthState as AuthState);

    useEffect(() => {
      if (localStorage.getItem('userId') !== authState.userId) {
        setAuthState({
          ...authState,
          userId: localStorage.getItem('userId'),
          isLoggedIn: !!localStorage.getItem('userId')
        });
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
        authState={{ ...authState, signIn, signOut }}
      />
    );
  };
};

export default withAuth;
