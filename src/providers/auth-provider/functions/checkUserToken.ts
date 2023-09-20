import { TAuthUser, TAuthUserUnion } from '~/providers/auth-provider/auth-types.ts';

export const CheckUserToken = async (token: string) => {
  let user: TAuthUserUnion = null;

  if (token) {
    const response = await fetch('/api/login', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    });

    const data: TAuthUser | null = await response.json();
    console.log('data is : ', data);

    if (data?.token) {
      return (user = { token: data.token });
    } else {
      return (user = null);
    }
  }

  return user;
};
