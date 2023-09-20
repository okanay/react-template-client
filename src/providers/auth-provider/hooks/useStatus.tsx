import { TUseStatus } from '~/providers/auth-provider/auth-types.ts';
import { useEffect } from 'react';
import { Cookies } from 'react-cookie';

import { CheckUserToken } from '~/providers/auth-provider/functions/checkUserToken.ts';

export const useStatus = ({ setAuthUser, setIsLoggedIn, setStatus, status }: TUseStatus) => {
  const cookie = new Cookies();
  const authToken = cookie.get('authenticated_token');

  const checkStatus = async () => {
    if (status === 'loading') {
      // check cookie
      if (authToken) {
        //   check user cookie
        const user = await CheckUserToken(String(authToken));
        if (user !== null) {
          //   user exist
          setStatus('authenticated');
          setAuthUser(user);
          setIsLoggedIn(true);
        } else {
          //   user not exist
          setStatus('unauthenticated');
          setAuthUser(null);
          setIsLoggedIn(false);
          cookie.remove('authenticated_token');
          window.location.reload();
        }
      } else {
        //   cookie not exist
        setStatus('unauthenticated');
        setAuthUser(null);
        setIsLoggedIn(false);
      }
    }
  };

  useEffect(() => {
    checkStatus();
  }, [authToken]);

  return;
};
