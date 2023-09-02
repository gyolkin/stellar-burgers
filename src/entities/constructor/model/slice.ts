import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

interface ConstructorState {
  ingredients: Array<{ _id: IngredientID; uniqueId: UniqueIngredientID }>;
  bun: IngredientID | null;
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
      reducer: (
        state,
        action: PayloadAction<{
          _id: IngredientID;
          uniqueId: UniqueIngredientID;
        }>,
      ) => {
        state.ingredients.push({
          _id: action.payload._id,
          uniqueId: action.payload.uniqueId,
        });
      },
      prepare: (_id: IngredientID) => {
        return {
          payload: {
            uniqueId: v4(),
            _id,
          },
        };
      },
    },
    addBun: (state, action: PayloadAction<IngredientID>) => {
      state.bun = action.payload;
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
      if (state.bun === id) {
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
  addBun,
  removeIngredient,
  moveIngredient,
  clearConstructor,
} = constructorSlice.actions;
