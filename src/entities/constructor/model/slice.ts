import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IngredientObject } from './types';

interface ConstructorState {
  ingredients: Array<IngredientObject>;
  bun: IngredientObject | null;
}

const initialState: ConstructorState = {
  ingredients: [],
  bun: null,
};

export const constructorSlice = createSlice({
  name: 'constructorContent',
  initialState,
  reducers: {
    addIngredient: (state, action: PayloadAction<IngredientObject>) => {
      if (action.payload.type === 'bun') {
        state.bun = action.payload;
      } else {
        state.ingredients.push(action.payload);
      }
    },
    removeIngredient: (
      state,
      action: PayloadAction<{ index?: number; id?: string }>,
    ) => {
      const { index, id } = action.payload;

      if (index !== undefined) {
        state.ingredients.splice(index, 1);
      } else {
        const indexToRemove = state.ingredients.findIndex(
          (ingredient) => ingredient._id === id,
        );
        if (indexToRemove !== -1) {
          state.ingredients.splice(indexToRemove, 1);
        }
      }
      if (state.bun?._id === id) {
        state.bun = null;
      }
    },
  },
});

export const { addIngredient, removeIngredient } = constructorSlice.actions;

export const selectConstructor = (state: RootState) => state.constructorContent;

export const selectIngredientCountById =
  (ingredientId: string) => (state: RootState) => {
    if (state.constructorContent.bun?._id === ingredientId) {
      return 2;
    }
    const count = state.constructorContent.ingredients.filter(
      (ingredient) => ingredient._id === ingredientId,
    ).length;
    return count;
  };

export const selectTotalPrice = (state: RootState) => {
  const ingredientsPrice = state.constructorContent.ingredients.reduce(
    (total, ingredient) => total + ingredient.price,
    0,
  );
  const bunPrice = state.constructorContent.bun
    ? state.constructorContent.bun.price * 2
    : 0;
  return ingredientsPrice + bunPrice;
};
