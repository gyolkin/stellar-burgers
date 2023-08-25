import { baseApi } from '@/shared/api';
import { apiMap } from '@/shared/model';
import type { IngredientObject } from '../model';

export const ingredientsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getIngredients: build.query<Array<IngredientObject>, void>({
      query: () => ({
        url: apiMap.getIngredients,
        method: 'GET',
      }),
      transformResponse: (response: {
        success: boolean;
        data: Array<IngredientObject>;
      }) => {
        if (!response.success) {
          throw new Error('Failed to fetch data');
        }
        return response.data;
      },
      keepUnusedDataFor: Infinity,
    }),
  }),
});

export const { useGetIngredientsQuery } = ingredientsApi;
