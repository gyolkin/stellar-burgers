import {
  type BaseQueryFn,
  type FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import Cookies from 'js-cookie';
import { removeCookies, setCookies } from '../lib';
import { apiMap, type ApiError, constantsMap } from '../model';

const mutex = new Mutex();
const _baseQuery = fetchBaseQuery({
  baseUrl: constantsMap.shared.config.apiUrl,
  prepareHeaders: (headers) => {
    const token = Cookies.get('accessToken');
    if (token) {
      headers.set('Authorization', token);
    }
    return headers;
  },
}) as BaseQueryFn<string | FetchArgs, unknown, ApiError, {}>;

export const baseQueryWithRefresh: BaseQueryFn<
  string | FetchArgs,
  unknown,
  ApiError,
  {}
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await _baseQuery(args, api, extraOptions);
  // refresh tokens if jwt expired (403 status code)
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
        if (res.data) {
          const { refreshToken, accessToken } = res.data;
          setCookies({ refreshToken, accessToken });
          result = await _baseQuery(args, api, extraOptions);
        } else {
          removeCookies();
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
