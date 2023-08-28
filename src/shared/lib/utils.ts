import type { SerializedError } from '@reduxjs/toolkit';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { constantsMap, type ApiError } from '../model';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getApiError = (error: ApiError | SerializedError) => {
  const { defaultError } = constantsMap.shared.config;
  if ('status' in error) {
    return error.data?.message || defaultError; // shows 'defaultError' when PARSE, FETCH etc. errors
  }
  return error.message ? error.message : defaultError;
};
