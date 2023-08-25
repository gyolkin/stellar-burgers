import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import type { ConstructorIngredientObject, IngredientObject } from './types';

interface ConstructorState {
  ingredients: Array<ConstructorIngredientObject>;
  bun: ConstructorIngredientObject | null;
}

const initialState: ConstructorState = {
  ingredients: [],
  bun: null,
};

export const constructorSlice = createSlice({
  name: 'constructorContent',
  initialState,
  reducers: {
    addIngredient: {
      reducer: (state, action: PayloadAction<ConstructorIngredientObject>) => {
        if (action.payload.type === 'bun') {
          state.bun = action.payload;
        } else {
          state.ingredients.push(action.payload);
        }
      },
      prepare: (ingredient: IngredientObject) => {
        const { image, name, price, _id, type } = ingredient;
        return {
          payload: {
            constructorId: v4(),
            image,
            name,
            price,
            _id,
            type,
          },
        };
      },
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
    clearConstructor: (state) => {
      state.bun = null;
      state.ingredients = [];
    },
  },
});

export const {
  addIngredient,
  removeIngredient,
  moveIngredient,
  clearConstructor,
} = constructorSlice.actions;
