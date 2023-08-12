import type { IngredientObject, IngredientType } from '@/entities/ingredients';

type SectionType = Record<IngredientType, Array<IngredientObject>>;

export const createSections = (data: Array<IngredientObject>): SectionType =>
  data.reduce<SectionType>(
    (acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = [];
      }
      acc[item.type].push(item);
      return acc;
    },
    { bun: [], sauce: [], main: [] },
  );
