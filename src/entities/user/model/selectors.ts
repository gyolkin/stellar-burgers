export const selectIsAuthenticated = (state: RootState) =>
  state.authState.isAuthenticated;

export const selectIsForgotPassword = (state: RootState) =>
  state.authState.isForgotPassword;
