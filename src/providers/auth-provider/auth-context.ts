import { TAuthData } from '~/providers/auth-provider/auth-types.ts';
import React, { useContext } from 'react';

const defaultValue: TAuthData = {
  status: 'loading',
  isLoggedIn: false,
  authUser: null,
};
export const AuthContext = React.createContext<TAuthData>(defaultValue);

export function useAuth() {
  return useContext(AuthContext);
}
