import Cookies from 'js-cookie';
import { baseApi } from '@/shared/api';
import { apiMap, constantsMap } from '@/shared/model';
import {
  type UserObject,
  type LoginFormData,
  type UserObjectWithPassword,
  type UserWithTokens,
  setLoggedIn,
  setLoggedOut,
  setForgotPassword,
  setPasswordRestored,
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
      transformResponse: (response: UserWithTokens) => {
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

    postRegister: build.mutation<UserObject, UserObjectWithPassword>({
      query: (credentials) => ({
        url: apiMap.postRegister,
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: UserWithTokens) => {
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
      keepUnusedDataFor: Infinity,
      transformResponse: (response: { user: UserObject }) => {
        return response.user;
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data) {
          dispatch(setLoggedIn());
        }
      },
    }),

    patchMe: build.mutation<UserObject, UserObjectWithPassword>({
      query: (credentials) => ({
        url: apiMap.patchUser,
        method: 'PATCH',
        body: credentials,
      }),
      transformResponse: (response: { user: UserObject }) => {
        return response.user;
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data) {
          dispatch(
            authApi.util.updateQueryData('getMe', undefined, () => data),
          );
        }
      },
    }),

    postLogout: build.mutation<{ message: string }, string>({
      query: (credentials) => ({
        url: apiMap.postLogout,
        method: 'POST',
        body: { token: credentials },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data) {
          Cookies.remove('accessToken');
          Cookies.remove('refreshToken');
          dispatch(setLoggedOut());
        }
      },
    }),

    postForgotPassword: build.mutation<{ message: string }, { email: string }>({
      query: (credentials) => ({
        url: apiMap.postForgotPassword,
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data) {
          dispatch(setForgotPassword());
        }
      },
    }),

    postResetPassword: build.mutation<
      { message: string },
      { password: string; token: string }
    >({
      query: (credentials) => ({
        url: apiMap.postResetPassword,
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data) {
          dispatch(setPasswordRestored());
        }
      },
    }),
  }),
});

export const {
  usePostLoginMutation,
  usePostRegisterMutation,
  useGetMeQuery,
  usePatchMeMutation,
  usePostLogoutMutation,
  usePostForgotPasswordMutation,
  usePostResetPasswordMutation,
} = authApi;
