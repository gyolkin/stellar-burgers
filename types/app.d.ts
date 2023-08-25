declare global {
  // fsd required
  declare type RootState = import('../src/app/core/store').RootState;
  declare type AppDispatch = import('../src/app/core/store').AppDispatch;
}

export {};
