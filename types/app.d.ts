declare global {
  export type IngredientID = string;
  export type UniqueIngredientID = string;
  export type OrderID = string;
  export type Timestamp = string;
  // fsd required
  declare type RootState = import('../src/app/store').RootState;
  declare type AppDispatch = import('../src/app/store').AppDispatch;
}

export {};
