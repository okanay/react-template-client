import { ReactRouter } from './react-router/react-router.tsx';
import { ReduxProvider } from '~/providers/react-redux/redux-provider.tsx';

export const Providers = () => {
  return (
    <>
      <ReduxProvider>
        <ReactRouter />
      </ReduxProvider>
    </>
  );
};
