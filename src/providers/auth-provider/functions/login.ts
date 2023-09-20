import { TAuthUser, TLoginInformation } from '~/providers/auth-provider/auth-types.ts';
import { Cookies } from 'react-cookie';

export const Login = async (email: string, password: string) => {
  const cookie = new Cookies();

  let loginInformation: TLoginInformation = {
    info: 'initial',
    message: '',
  };

  if (email && password) {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data: TAuthUser | null = await response.json();
    if (data?.token) {
      loginInformation.info = 'success';
      cookie.set('authenticated_token', data.token);
      window.location.reload();
    } else {
      loginInformation.info = 'fail';
    }
  } else {
    if (!email) {
      loginInformation.info = 'e-mail-not-found';
    } else if (!password) {
      loginInformation.info = 'password-not-found';
    } else {
      loginInformation.info = 'fail';
    }
  }
  return loginInformation;
};
