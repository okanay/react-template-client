import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import DummySliceReducer from '../redux/slices/dummyslice.ts';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [''],
  blacklist: ['dummySlice'],
};

const reducers = combineReducers({
  dummySlice: DummySliceReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type TReduxState = ReturnType<typeof store.getState>;
