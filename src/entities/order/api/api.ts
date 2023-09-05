import { baseApi } from '@/shared/api';
import { apiMap, constantsMap } from '@/shared/model';
import type { OrderObject, OrderList, DetailedOrderObject } from '../model';

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postOrder: build.mutation<OrderObject, { ingredients: Array<string> }>({
      query: (credentials) => ({
        url: apiMap.postOrder,
        method: 'POST',
        body: credentials,
      }),
    }),
    getOrder: build.query<DetailedOrderObject, string>({
      query: (id) => ({
        url: `${apiMap.postOrder}/${id}`,
        method: 'GET',
      }),
      keepUnusedDataFor: 30,
      transformResponse: (response: { orders: Array<DetailedOrderObject> }) => {
        return response.orders[0];
      },
    }),
  }),
});

export const orderSocketApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getStreamingOrder: build.query<OrderList & { success?: boolean }, string>({
      queryFn: () => ({
        data: { success: undefined, orders: [], total: 0, totalToday: 0 },
      }),
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved },
      ) {
        const ws = new WebSocket(constantsMap.shared.config.wsUrl + arg);
        await cacheDataLoaded;
        const listener = (event: MessageEvent) => {
          const data = JSON.parse(event.data);
          updateCachedData(() => data);
        };
        ws.addEventListener('message', listener);
        await cacheEntryRemoved;
        ws.close();
      },
    }),
  }),
});

export const { usePostOrderMutation, useGetOrderQuery } = orderApi;
export const { useGetStreamingOrderQuery } = orderSocketApi;
