import { Cookies } from 'react-cookie';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { TControlStatus, TControlType } from '~/providers/auth-provider/auth-types.ts';

export const useIsRoleAuthorized = (control: TControlType) => {
  const [controlStatus, setControlStatus] = useState<TControlStatus>('idle');

  const cookie = new Cookies();
  const token = cookie.get('authenticated_token');

  const handle = async () => {
    setControlStatus('loading');

    try {
      const response = await axios.get('/api/control', {
        headers: {
          'Content-Type': 'application/json',
          authorization: token,
          control: control,
        },
      });

      if (response.status === 200) setControlStatus('success');
      else setControlStatus('error');
    } catch (e) {
      setControlStatus('error');
    }
  };

  useEffect(() => {
    handle();
  }, []);

  return controlStatus;
};
