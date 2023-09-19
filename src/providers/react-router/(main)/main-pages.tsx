import { RouteObject } from 'react-router-dom';
import { MainLayout } from '~/pages/(main)/layout.tsx';
import { MainPage } from '~/pages/(main)';
import { About } from '~/pages/(main)/about';
import { ErrorBoundary } from '~/pages/error.tsx';
import { ProductsPage } from '~/providers/react-router/(main)/products-pages.tsx';

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
      path: '/about',
      element: <About />,
    },
    { ...ProductsPage },
  ],
};

export default MainPages;
