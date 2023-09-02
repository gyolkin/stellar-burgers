import { constantsMap } from '@/shared/model';
import type {
  IngredientObject,
  IngredientType,
  OrderIngredientProps,
} from '../model';

export const getIngredientsWithCounter = (data: Array<IngredientObject>) => {
  const ingredientsWithCounter = data.reduce<
    Record<string, OrderIngredientProps>
  >((acc, cur) => {
    const id = cur._id;
    if (!acc[id]) {
      acc[id] = { ...cur, count: 1 };
    } else {
      acc[id].count += 1;
    }
    return acc;
  }, {});
  return Object.values(ingredientsWithCounter);
};

export const createIngredientDetails = (
  calories: number,
  carbohydrates: number,
  fat: number,
  proteins: number,
) => {
  const { details } = constantsMap.entities.ingredient;
  return [
    { label: details.calories, value: calories },
    { label: details.carbohydrates, value: carbohydrates },
    { label: details.fat, value: fat },
    { label: details.proteins, value: proteins },
  ];
};

export const createIngredientSections = (data: Array<IngredientObject>) => {
  const ingredientSections = data.reduce<
    Record<IngredientType, Array<IngredientObject>>
  >(
    (acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = [];
      }
      acc[item.type].push(item);
      return acc;
    },
    { bun: [], sauce: [], main: [] },
  );
  return Object.entries(ingredientSections);
};
