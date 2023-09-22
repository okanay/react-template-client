import { ReactRouter } from '~/providers/router-provider/react-router.tsx';
import { ReduxProvider } from '~/providers/redux-provider/redux-provider.tsx';
import { AuthProvider } from '~/providers/auth-provider/auth-provider.tsx';
import { CookiesProvider } from 'react-cookie';
import { QueryProvider } from '~/providers/query-provider/redux-query.tsx';

export const Providers = () => {
  return (
    <>
      <CookiesProvider>
        <AuthProvider>
          <QueryProvider>
            <ReduxProvider>
              <ReactRouter />
            </ReduxProvider>
          </QueryProvider>
        </AuthProvider>
      </CookiesProvider>
    </>
  );
};
