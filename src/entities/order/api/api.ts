import { baseApi } from '@/shared/api';
import { apiMap } from '@/shared/model';
import type { OrderObject, TransformedOrderObject } from '../model';

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postOrder: build.mutation<TransformedOrderObject, Array<string>>({
      query: (credentials) => ({
        url: apiMap.postOrder,
        method: 'POST',
        body: { ingredients: credentials },
      }),
      transformResponse: (response: { success: boolean } & OrderObject) => {
        if (!response.success) {
          throw new Error('Failed to post order');
        }
        return { name: response.name, number: response.order.number };
      },
    }),
  }),
});

export const { usePostOrderMutation } = orderApi;
