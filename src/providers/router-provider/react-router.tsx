import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from '~/pages/not-found.tsx';
import AdminPages from '~/providers/router-provider/(admin)/admin-pages.tsx';
import MainPages from '~/providers/router-provider/(main)/main-pages.tsx';

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />,
  },
  { ...MainPages },
  { ...AdminPages },
]);

export const ReactRouter = () => {
  return <RouterProvider router={router} />;
};
