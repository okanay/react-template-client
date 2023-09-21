import { ReactNode } from 'react';

// auth user data

export type TUser = {
  accessToken: string;
  refreshToken: string;
  accessTokenExpire: number;
  refreshTokenExpire: number;
  hashPassword: string;
  profile?: TUserProfile;
};

export type TUserProfile = {
  id: string;
  username: string;
  name: string;
  lastName: string;
  email: string;
  image: string;
};

export type TAuthUserData = Omit<TUser, 'hashPassword'>;

export type TDecodedAuthUser = {
  user: TAuthUserData;
} & TJwtUnionExpire;

export type TJwtUnionExpire = {
  iat: number;
  exp: number;
};

export type TLoginResponse = {
  token: string;
  user: TAuthUserData;
};

export type TDecodedAuthUserResponse = {
  user: Pick<TLoginResponse, 'user'>;
};

// use status hook

export type TAuthStatus = 'loading' | 'authenticated' | 'unauthenticated';

export type TUseStatus = {
  authUser?: TAuthUserUnion;
  setAuthUser: React.Dispatch<React.SetStateAction<TAuthUserUnion>>;
  isLoggedIn?: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  status?: TAuthStatus;
  setStatus: React.Dispatch<React.SetStateAction<TAuthStatus>>;
};

//  use auth hook

export type TAuthData = {
  status: TAuthStatus;
  isLoggedIn: boolean;
  authUser: TAuthUserUnion;
};

export type TAuthUserUnion = TAuthUserData | null;

// auth-provider

export type TAuthProvider = {
  children: ReactNode;
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
