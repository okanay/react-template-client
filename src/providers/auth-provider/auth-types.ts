import { ReactNode } from 'react';

export type TAuthUser = {
  token: string;
  data?: {
    accessToken: string;
    refreshToken: string;
    accessTokenExpire: number;
    refreshTokenExpire: number;
    profile?: {
      id: string;
      username: string;
      name: string;
      lastName: string;
      email: string;
    };
  };
};

export type TAuthStatus = 'loading' | 'authenticated' | 'unauthenticated';

export type TAuthData = {
  status: TAuthStatus;
  isLoggedIn: boolean;
  authUser: TAuthUserUnion;
};

export type TAuthUserUnion = TAuthUser | null;

export type TAuthProvider = {
  children: ReactNode;
};

export type TUseStatus = {
  authUser?: TAuthUserUnion;
  setAuthUser: React.Dispatch<React.SetStateAction<TAuthUserUnion>>;
  isLoggedIn?: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  status?: TAuthStatus;
  setStatus: React.Dispatch<React.SetStateAction<TAuthStatus>>;
};

// Logout
export type TLogoutInformation = {
  message: string;
  info: TLogoutInfoType;
};
export type TLogoutInfoType = 'success' | 'cookie-not-found' | 'initial' | 'fail';

// Login
export type TLoginInformation = {
  message: string;
  info: TLoginInfoType;
};
export type TLoginInfoType =
  | 'success'
  | 'e-mail-not-found'
  | 'password-not-found'
  | 'password-not-correct'
  | 'credentials-not-correct'
  | 'e-mail-not-exist'
  | 'fail'
  | 'initial'
  | 'loading';

//Check Token

export type TCheckTokenResponseData = {
  data: {
    decode: {
      id: string;
      exp: number;
      iat: number;
    };
    token: string;
  };
};
