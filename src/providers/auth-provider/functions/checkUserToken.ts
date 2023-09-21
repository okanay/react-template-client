import { TAuthUserUnion, TCheckTokenResponseData } from '~/providers/auth-provider/auth-types.ts';
import axios from 'axios';

export const CheckUserToken = async (token: string) => {
  let user: TAuthUserUnion = null;

  if (token) {
    try {
      const response = await axios.get('/api/login', {
        headers: {
          'Content-Type': 'application/json',
          authorization: token,
        },
      });

      if (response.status === 200) {
        const check: TCheckTokenResponseData | null = await response.data;
        if (check?.data.token) {
          return (user = { token: check.data.token });
        }
      }
    } catch (error) {
      return (user = null);
    }
  }

  return user;
};
