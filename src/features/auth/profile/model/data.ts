import { type UserObjectWithPassword, authApi } from '@/entities/user';

export const useProfileFormInitialData = (): UserObjectWithPassword => {
  const { data } = authApi.endpoints.getMe.useQueryState();
  if (!data) {
    return {
      email: '',
      name: '',
      password: '',
    };
  }
  return {
    email: data.email,
    name: data.name,
    password: '********',
  };
};
