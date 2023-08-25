import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import type { BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';
import Cookies from 'js-cookie';
import { apiMap, type ApiError, constantsMap } from '../model';

const mutex = new Mutex();

const { cookieExpires } = constantsMap.shared.config;
const _baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers) => {
    const token = Cookies.get('accessToken');
    if (token) {
      headers.set('Authorization', token);
    }
    return headers;
  },
}) as BaseQueryFn<string | FetchArgs, unknown, ApiError, {}>;

export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  ApiError,
  {}
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await _baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 403) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const res: any = await _baseQuery(
          {
            url: apiMap.postTokenRefresh,
            method: 'POST',
            body: { token: Cookies.get('refreshToken') },
          },
          api,
          extraOptions,
        );
        // [NOTE]: very bad approach
        if (res.data?.success) {
          Cookies.set('accessToken', res.data.accessToken, cookieExpires);
          Cookies.set('refreshToken', res.data.refreshToken, cookieExpires);
          result = await _baseQuery(args, api, extraOptions);
        } else {
          Cookies.remove('accessToken');
          Cookies.remove('refreshToken');
          window.location.href = '/login';
        }
        // needs optimization
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await _baseQuery(args, api, extraOptions);
    }
  }
  return result;
};
