import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './query';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
