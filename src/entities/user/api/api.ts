import { baseApi } from '@/shared/api';
import { removeCookies, setCookies } from '@/shared/lib';
import { apiMap } from '@/shared/model';
import type {
  UserObject,
  LoginFormData,
  UserObjectWithPassword,
  UserWithTokens,
  PasswordWithToken,
} from '../model';

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postLogin: build.mutation<UserObject, LoginFormData>({
      query: (credentials) => ({
        url: apiMap.postLogin,
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: UserWithTokens) => {
        const { accessToken, refreshToken } = response;
        setCookies({ refreshToken, accessToken });
        return response.user;
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data) {
          dispatch(authApi.util.upsertQueryData('getMe', undefined, data));
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
        const { accessToken, refreshToken } = response;
        setCookies({ refreshToken, accessToken });
        return response.user;
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data) {
          dispatch(authApi.util.upsertQueryData('getMe', undefined, data));
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

    postLogout: build.mutation<{ message: string }, { token: string }>({
      query: (credentials) => ({
        url: apiMap.postLogout,
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data) {
          removeCookies();
        }
      },
    }),

    postForgotPassword: build.mutation<
      { message: string },
      Pick<UserObject, 'email'>
    >({
      query: (credentials) => ({
        url: apiMap.postForgotPassword,
        method: 'POST',
        body: credentials,
      }),
    }),

    postResetPassword: build.mutation<{ message: string }, PasswordWithToken>({
      query: (credentials) => ({
        url: apiMap.postResetPassword,
        method: 'POST',
        body: credentials,
      }),
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
