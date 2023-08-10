declare global {
  // fsd required
  declare type RootState = import('../src/app/appStore').RootState;
  declare type AppDispatch = import('../src/app/appStore').AppDispatch;
}
  
export {};
  