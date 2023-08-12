import { baseApi } from '@/shared/lib';
import { apiMap } from '@/shared/model';
import { GetIngredientsServerAnswer } from '../model';

export const ingredientsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getIngredients: build.query<GetIngredientsServerAnswer, void>({
      query: () => ({
        url: apiMap.getIngredients,
        method: 'GET',
      }),
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetIngredientsQuery } = ingredientsApi;
