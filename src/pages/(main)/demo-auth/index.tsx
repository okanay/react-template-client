import { useAuth } from '~/providers/auth-provider/auth-context.ts';
import { Logout } from '~/providers/auth-provider/functions/logout.ts';
import { Login } from '~/providers/auth-provider/functions/login.ts';

export const AuthPage = () => {
  const { status, isLoggedIn } = useAuth();
  console.log(status);

  const handleLogoutButton = () => {
    Logout();
  };

  const handleLoginButton = async () => {
    await Login('okanay@hotmail.com', '1234asd');
  };

  return (
    <main className="text-2xl">
      {isLoggedIn ? (
        <button
          className={'my-2 rounded border-zinc-100 bg-amber-400 px-2 py-1 text-zinc-800'}
          onClick={handleLogoutButton}
        >
          Logout
        </button>
      ) : (
        <button
          className={'my-2 rounded border-zinc-100 bg-amber-400 px-2 py-1 text-zinc-800'}
          onClick={handleLoginButton}
        >
          Login
        </button>
      )}
    </main>
  );
};
