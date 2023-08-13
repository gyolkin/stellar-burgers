import type { IngredientType, IngredientObject } from '@/entities/ingredients';

export type SectionType = Record<IngredientType, Array<IngredientObject>>;
export type CreateSectionsType = (data: Array<IngredientObject>) => SectionType;
