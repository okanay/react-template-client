import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AdminFooter } from '~/pages/(admin)/footer.tsx';
import { AdminHeader } from '~/pages/(admin)/header.tsx';

type TProps = {
  children?: ReactNode;
};
export const AdminLayout = ({}: TProps) => {
  const isPrivate = false;
  if (isPrivate) return <Navigate to={'/'} />;

  return (
    <div className={''}>
      <AdminHeader />
      <p className={'text-2xl'}>Admin Page Is Available : {isPrivate ? 'false' : 'true'}</p>
      <Outlet />
      <AdminFooter />
    </div>
  );
};
