import { ReactRouter } from '~/providers/router-provider/react-router.tsx';
import { ReduxProvider } from '~/providers/redux-provider/redux-provider.tsx';
import { AuthProvider } from '~/providers/auth-provider/auth-provider.tsx';
import { CookiesProvider } from 'react-cookie';
import { QueryProvider } from '~/providers/query-provider/redux-query.tsx';
import { Toaster } from 'react-hot-toast';

export const Providers = () => {
  return (
    <>
      <CookiesProvider>
        <AuthProvider>
          <QueryProvider>
            <ReduxProvider>
              <ReactRouter />
              <Toaster position={'top-right'} />
            </ReduxProvider>
          </QueryProvider>
        </AuthProvider>
      </CookiesProvider>
    </>
  );
};
