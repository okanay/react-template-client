import { Cookies } from 'react-cookie';
import { TLogoutInformation } from '~/providers/auth-provider/auth-types.ts';

export const Logout = () => {
  const cookie = new Cookies();

  let logoutInformation: TLogoutInformation = {
    info: 'initial',
    message: '',
  };

  const isTokenExist = cookie.get('authenticated_token');

  if (isTokenExist) {
    logoutInformation.info = 'success';
    cookie.remove('authenticated_token');
    window.location.reload();
  } else {
    logoutInformation.info = 'cookie-not-found';
  }

  return logoutInformation;
};
