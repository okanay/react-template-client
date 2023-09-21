import { TCheckTokenResponseData } from '~/providers/auth-provider/auth-types.ts';
import axios from 'axios';

export const CheckUserToken = async (token: string) => {
  let check: TCheckTokenResponseData | null = null;

  if (token) {
    try {
      const response = await axios.get('/api/login', {
        headers: {
          'Content-Type': 'application/json',
          authorization: token,
        },
      });

      if (response.status === 200) {
        check = (await response.data) as TCheckTokenResponseData;
        if (check?.data.token) {
          return check;
        }
      }
    } catch (error) {
      return (check = null);
    }
  }

  return check;
};
