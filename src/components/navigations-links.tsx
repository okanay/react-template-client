import { NavLink } from 'react-router-dom';

export const NavigationsLinks = () => {
  return (
    <>
      <NavLink to={'/'}>Index</NavLink>
      <NavLink to={'/auth'}>Auth</NavLink>
      <NavLink to={'/redux'}>Redux</NavLink>
      <NavLink to={'/query'}>Query</NavLink>
      <NavLink to={'/admin'}>Admin</NavLink>
      <NavLink to={'/admin/dashboard'}>Dashboard</NavLink>
    </>
  );
};
