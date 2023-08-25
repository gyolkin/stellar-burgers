import Cookies from 'js-cookie';
import { baseApi } from '@/shared/api';
import { apiMap, constantsMap } from '@/shared/model';
import {
  type UserObject,
  type LoginFormData,
  type RegisterFormData,
  type AuthServerAnswer,
  setLoggedIn,
} from '../model';

const { cookieExpires } = constantsMap.shared.config;
export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postLogin: build.mutation<UserObject, LoginFormData>({
      query: (credentials) => ({
        url: apiMap.postLogin,
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: AuthServerAnswer) => {
        if (!response.success) {
          throw new Error('Authentication failed');
        }
        Cookies.set('accessToken', response.accessToken, cookieExpires);
        Cookies.set('refreshToken', response.refreshToken, cookieExpires);
        return response.user;
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data) {
          dispatch(authApi.util.upsertQueryData('getMe', undefined, data));
          dispatch(setLoggedIn());
        }
      },
    }),

    postRegister: build.mutation<UserObject, RegisterFormData>({
      query: (credentials) => ({
        url: apiMap.postRegister,
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: AuthServerAnswer) => {
        if (!response.success) {
          throw new Error('Registration failed');
        }
        Cookies.set('accessToken', response.accessToken, cookieExpires);
        Cookies.set('refreshToken', response.refreshToken, cookieExpires);
        return response.user;
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data) {
          dispatch(authApi.util.upsertQueryData('getMe', undefined, data));
          dispatch(setLoggedIn());
        }
      },
    }),

    getMe: build.query<UserObject, void>({
      query: () => ({
        url: apiMap.getUser,
        method: 'GET',
      }),
      transformResponse: (response: { success: boolean; user: UserObject }) => {
        if (!response.success) {
          throw new Error('Failed to fetch data');
        }
        return response.user;
      },
      keepUnusedDataFor: Infinity,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data) {
          dispatch(setLoggedIn());
        }
      },
    }),
  }),
});

export const { usePostLoginMutation, usePostRegisterMutation, useGetMeQuery } =
  authApi;
