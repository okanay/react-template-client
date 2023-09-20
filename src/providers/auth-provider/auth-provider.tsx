import { TAuthProvider, TAuthStatus, TAuthUserUnion } from '~/providers/auth-provider/auth-types.ts';

import { useState } from 'react';
import { useStatus } from '~/providers/auth-provider/hooks/useStatus.tsx';
import { AuthContext } from '~/providers/auth-provider/auth-context.ts';

export function AuthProvider({ children }: TAuthProvider) {
  const [authUser, setAuthUser] = useState<TAuthUserUnion>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [status, setStatus] = useState<TAuthStatus>('loading');

  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
    status,
    setStatus,
  };

  useStatus(value);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
