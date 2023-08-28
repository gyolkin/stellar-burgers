declare global {
  // fsd required
  declare type RootState = import('../src/app/store').RootState;
  declare type AppDispatch = import('../src/app/store').AppDispatch;
}

export {};
