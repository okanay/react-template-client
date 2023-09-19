import { ReactNode } from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from '~/redux/store.ts';

type TProps = {
  children: ReactNode;
};

export const ReduxProvider = ({ children }: TProps) => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>{children}</PersistGate>
      </Provider>
    </>
  );
};
