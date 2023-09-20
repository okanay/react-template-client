import { TAuthUser, TAuthUserUnion } from '~/providers/auth-provider/auth-types.ts';
import axios from 'axios';

export const CheckUserToken = async (token: string) => {
  let user: TAuthUserUnion = null;

  if (token) {
    const response = await axios.get('/api/login', {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    });

    const data: TAuthUser | null = await response.data;
    console.log('data is : ', data);

    if (data?.token) {
      return (user = { token: data.token });
    } else {
      return (user = null);
    }
  }

  return user;
};
