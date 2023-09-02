import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithRefresh } from './query';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithRefresh,
  endpoints: () => ({}),
});
