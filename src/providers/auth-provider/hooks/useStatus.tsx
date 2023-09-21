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
        // cookie exist
        // check token
        const check = await CheckUserToken(String(authToken));
        if (check !== null) {
          //   token correct
          setStatus('authenticated');
          setAuthUser({ token: check.data.token });
          setIsLoggedIn(true);
        } else {
          //   token not correct
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
    checkStatus().then(() => console.log('use status complete.'));
  }, [authToken]);

  return;
};
