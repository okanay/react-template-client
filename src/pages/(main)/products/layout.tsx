import { Outlet } from 'react-router-dom';

export const ProductLayout = () => {
  return (
    <>
      <p>Product Header</p>
      <Outlet />
      <p>Product Footer</p>
    </>
  );
};
