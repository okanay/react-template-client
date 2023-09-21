import { TAuthUser, TLoginInformation } from '~/providers/auth-provider/auth-types.ts';
import { Cookies } from 'react-cookie';
import axios from 'axios';

export const Login = async (email: string, password: string) => {
  const cookie = new Cookies();

  let loginInformation: TLoginInformation = {
    info: 'initial',
    message: '',
  };

  if (email && password) {
    try {
      const response = await axios.post(
        '/api/login',
        { email, password },
        { headers: { 'Content-Type': 'application/json' } },
      );

      if (response.status === 200) {
        const data: TAuthUser | null = await response.data;

        if (data?.token) {
          loginInformation.info = 'success';
          cookie.set('authenticated_token', data.token);
          window.location.reload();
        } else {
          loginInformation.info = 'credentials-not-correct';
        }
      }
    } catch (e) {
      loginInformation.info = 'fail';
    }
  }

  return loginInformation;
};
