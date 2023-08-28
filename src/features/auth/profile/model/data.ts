import type { UserObject } from '@/entities/user';

export const getInitialData = (data: UserObject) => ({
  email: data.email,
  name: data.name,
  password: '********',
});
