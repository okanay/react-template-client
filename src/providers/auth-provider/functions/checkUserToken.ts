import { TLoginResponse } from '~/providers/auth-provider/auth-types.ts';
import axios from 'axios';

export const CheckUserToken = async (token: string) => {
  let check: TLoginResponse | null = null;

  try {
    const response = await axios.get('/api/login', {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    });

    if (response.status === 200) {
      check = (await response.data) as TLoginResponse;
      if (check?.token) {
        return check;
      }
    }
  } catch (error) {
    return (check = null);
  }

  return check;
};
