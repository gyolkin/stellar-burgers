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
    moveIngredient: (
      state,
      action: PayloadAction<{ fromElement?: number; toElement?: number }>,
    ) => {
      const { fromElement, toElement } = action.payload;
      if (fromElement === undefined || toElement === undefined) return;
      const [movedItem] = state.ingredients.splice(fromElement, 1);
      state.ingredients.splice(toElement, 0, movedItem);
    },
  },
});

export const { addIngredient, removeIngredient, moveIngredient } =
  constructorSlice.actions;
