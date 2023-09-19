import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from '~/pages/not-found.tsx';
import AdminPages from '~/providers/react-router/(admin)/admin-pages.tsx';
import MainPages from '~/providers/react-router/(main)/main-pages.tsx';

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
