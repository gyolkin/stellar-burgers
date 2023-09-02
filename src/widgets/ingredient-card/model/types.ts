import type { IngredientObject } from '@/entities/ingredient';

export interface IngredientDetailsProps
  extends Pick<IngredientObject, 'name' | 'image' | 'price' | 'type' | '_id'> {}
