import React, {
  FunctionComponent,
  createContext,
  useState,
  useEffect
} from 'react';

import {
  useMeForWithAuthLazyQuery,
  MeForWithAuthQuery
} from '../generated/graphql';

type Props = {
  children: React.ReactNode;
};

export interface AuthState {
  signIn: (token: string) => void;
  signOut: () => void;
  token?: string;
  data?: MeForWithAuthQuery;
}

const initialAuthState = {
  signIn: () => {},
  signOut: () => {},
  token: '',
  data: undefined
};

export const AuthContext = createContext<AuthState>(initialAuthState);

export const AuthProvider: FunctionComponent<Props> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(initialAuthState);
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
    <AuthContext.Provider
      value={{
        ...authState,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
