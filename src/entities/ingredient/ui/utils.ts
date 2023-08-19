import { constantsMap } from '@/shared/model';

const { details } = constantsMap.ingredients;
export const createDetails = (
  calories: number,
  carbohydrates: number,
  fat: number,
  proteins: number,
) => [
  { label: details.calories, value: calories },
  { label: details.carbohydrates, value: carbohydrates },
  { label: details.fat, value: fat },
  { label: details.proteins, value: proteins },
];
