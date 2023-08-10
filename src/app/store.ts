import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.VITE_DEV_MODE !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
