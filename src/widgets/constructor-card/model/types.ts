import type { IngredientObject } from '@/entities/ingredient';

export interface ConstructorElementProps
  extends Pick<IngredientObject, 'name' | 'image' | 'price' | 'type' | '_id'> {
  index?: number;
  positionClassName: string;
}
