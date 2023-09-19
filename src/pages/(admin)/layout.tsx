import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AdminFooter } from '~/pages/(admin)/footer.tsx';
import { AdminHeader } from '~/pages/(admin)/header.tsx';
import { useSelector } from 'react-redux';
import { getDummyIsActive } from '~/redux/slices/dummyslice.ts';

type TProps = {
  children?: ReactNode;
};
export const AdminLayout = ({}: TProps) => {
  const isActive = useSelector(getDummyIsActive);
  if (isActive) return <Navigate to={'/'} />;

  return (
    <div className={''}>
      <AdminHeader />
      <Outlet />
      <AdminFooter />
    </div>
  );
};
