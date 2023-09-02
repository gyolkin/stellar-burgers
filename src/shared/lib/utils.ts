import type { SerializedError } from '@reduxjs/toolkit';
import { type ClassValue, clsx } from 'clsx';
import Cookies from 'js-cookie';
import { twMerge } from 'tailwind-merge';
import { constantsMap, type ApiError } from '../model';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getApiError = (error: ApiError | SerializedError) => {
  const { defaultError } = constantsMap.shared.config;
  if ('status' in error) {
    return error.data?.message || defaultError;
  }
  return error.message ? error.message : defaultError;
};

export const setCookies = ({
  refreshToken,
  accessToken,
  expires = 7,
}: {
  refreshToken: string;
  accessToken: string;
  expires?: number;
}) => {
  Cookies.set('accessToken', accessToken, { expires });
  Cookies.set('refreshToken', refreshToken, { expires });
};

export const removeCookies = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
};

export const formatDate = (date: Timestamp) => {
  const dateToFormat = new Date(date);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const comparableDate = new Date(dateToFormat);
  comparableDate.setHours(0, 0, 0, 0);

  if (comparableDate.getTime() === today.getTime()) {
    return `Сегодня, ${dateToFormat.toLocaleTimeString('ru', {
      hour: '2-digit',
      minute: '2-digit',
    })}`;
  } else if (comparableDate.getTime() === yesterday.getTime()) {
    return `Вчера, ${dateToFormat.toLocaleTimeString('ru', {
      hour: '2-digit',
      minute: '2-digit',
    })}`;
  } else {
    return `${dateToFormat.toLocaleDateString('ru', {
      month: 'long',
      day: '2-digit',
    })}, ${dateToFormat.toLocaleTimeString('ru', {
      hour: '2-digit',
      minute: '2-digit',
    })}`;
  }
};
