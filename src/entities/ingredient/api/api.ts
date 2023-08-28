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
      keepUnusedDataFor: Infinity,
      transformResponse: (response: { data: Array<IngredientObject> }) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetIngredientsQuery } = ingredientsApi;
