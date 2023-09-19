import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { MainHeader } from '~/pages/(main)/header.tsx';
import { MainFooter } from '~/pages/(main)/footer.tsx';

type TProps = {
  children?: ReactNode;
};
export const MainLayout = ({}: TProps) => {
  return (
    <div className={''}>
      <MainHeader />
      <Outlet />
      <MainFooter />
    </div>
  );
};
