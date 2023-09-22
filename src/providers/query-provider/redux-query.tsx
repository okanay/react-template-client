import { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type ReduxQuery = {
  children: ReactNode;
};

const queryClient = new QueryClient();

export const QueryProvider = ({ children }: ReduxQuery) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
