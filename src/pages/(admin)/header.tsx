import { NavLink } from 'react-router-dom';

export const AdminHeader = () => {
  return (
    <header>
      <nav className={''}>
        <p className={'text-2xl'}>Admin Layout</p>
        <ul className={'flex items-center justify-start gap-2 py-2 text-lg font-bold text-zinc-800'}>
          <NavLink to={'/'}>Index</NavLink>
          <NavLink to={'/auth'}>Auth</NavLink>
          <NavLink to={'/redux'}>Redux</NavLink>
          <NavLink to={'/admin'}>Admin</NavLink>
          <NavLink to={'/admin/dashboard'}>Dashboard</NavLink>
        </ul>
      </nav>
    </header>
  );
};
