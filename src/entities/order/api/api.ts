import { baseApi } from '@/shared/api';
import { apiMap } from '@/shared/model';
import type { OrderObject } from '../model';

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postOrder: build.mutation<OrderObject, Array<string>>({
      query: (credentials) => ({
        url: apiMap.postOrder,
        method: 'POST',
        body: { ingredients: credentials },
      }),
    }),
  }),
});

export const { usePostOrderMutation } = orderApi;
