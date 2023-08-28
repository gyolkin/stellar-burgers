import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  isForgotPassword: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isForgotPassword: false,
};

export const authSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    setLoggedIn: (state) => {
      state.isAuthenticated = true;
    },
    setLoggedOut: (state) => {
      state.isAuthenticated = false;
    },
    setForgotPassword: (state) => {
      state.isForgotPassword = true;
    },
    setPasswordRestored: (state) => {
      state.isForgotPassword = false;
    },
  },
});

export const {
  setLoggedIn,
  setLoggedOut,
  setForgotPassword,
  setPasswordRestored,
} = authSlice.actions;
