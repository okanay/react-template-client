import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

export function ErrorBoundary() {
  const error = useRouteError() as { message: string };

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops Hata!</h1>
        <Link to={'/'}>Home</Link>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Oops</h1>
        <h2>{error.message}</h2>
        <Link to={'/'}>Home</Link>
      </div>
    );
  }
}
