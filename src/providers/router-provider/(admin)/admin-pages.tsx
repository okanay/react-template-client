import { AdminLayout } from '~/pages/(admin)/layout.tsx';
import { AdminPage } from '~/pages/(admin)';
import { AdminDashboard } from '~/pages/(admin)/dashboard';
import { RouteObject } from 'react-router-dom';
import { ErrorBoundary } from '~/pages/error.tsx';

const AdminPages: RouteObject = {
  path: '/admin',
  element: <AdminLayout />,
  errorElement: <ErrorBoundary />,
  children: [
    {
      index: true,
      element: <AdminPage />,
    },
    {
      path: '/admin/dashboard',
      element: <AdminDashboard />,
    },
  ],
};

export default AdminPages;
