import { configureStore } from '@reduxjs/toolkit';
import { constructorSlice } from '@/entities/constructor';
import { baseApi } from '@/shared/lib';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [constructorSlice.name]: constructorSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  devTools: import.meta.env.VITE_DEV_MODE !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
