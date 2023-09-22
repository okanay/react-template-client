import { RouteObject } from 'react-router-dom';
import { MainLayout } from '~/pages/(main)/layout.tsx';
import { MainPage } from '~/pages/(main)';
import { ReduxPage } from '~/pages/(main)/demo-redux';
import { AuthPage } from '~/pages/(main)/demo-auth';
import { ErrorBoundary } from '~/pages/error.tsx';
import { ProductsPage } from '~/providers/router-provider/(main)/products-pages.tsx';
import { QueryPage } from '~/pages/(main)/demo-query';

const MainPages: RouteObject = {
  path: '/',
  element: <MainLayout />,
  errorElement: <ErrorBoundary />,
  children: [
    {
      index: true,
      element: <MainPage />,
    },
    {
      path: '/redux',
      element: <ReduxPage />,
    },
    {
      path: '/auth',
      element: <AuthPage />,
    },
    {
      path: '/query',
      element: <QueryPage />,
    },
    { ...ProductsPage },
  ],
};

export default MainPages;
