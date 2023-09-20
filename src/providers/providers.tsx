import { ReactRouter } from '~/providers/router-provider/react-router.tsx';
import { ReduxProvider } from '~/providers/redux-provider/redux-provider.tsx';
import { AuthProvider } from '~/providers/auth-provider/auth-provider.tsx';
import { CookiesProvider } from 'react-cookie';

export const Providers = () => {
  return (
    <>
      <CookiesProvider>
        <AuthProvider>
          <ReduxProvider>
            <ReactRouter />
          </ReduxProvider>
        </AuthProvider>
      </CookiesProvider>
    </>
  );
};
