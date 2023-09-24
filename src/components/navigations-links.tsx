import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import { DemoNotifications } from '~/components/notifications/demo-notifications.tsx';

export const NavigationsLinks = () => {
  const handleCustomToastMessage = () => {
    toast.custom(t => <DemoNotifications t={t} />);
  };

  return (
    <>
      <NavLink to={'/'}>Index</NavLink>
      <NavLink to={'/auth'}>Auth</NavLink>
      <NavLink to={'/redux'}>Redux</NavLink>
      <NavLink to={'/query'}>Query</NavLink>
      <NavLink to={'/admin'}>Admin</NavLink>
      <NavLink to={'/admin/dashboard'}>Dashboard</NavLink>
      <button onClick={handleCustomToastMessage}>Notifications</button>
    </>
  );
};
