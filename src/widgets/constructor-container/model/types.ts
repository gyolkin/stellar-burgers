import type { IngredientObject } from '@/entities/ingredient';

export interface ConstructorElementProps
  extends Pick<IngredientObject, 'name' | 'image' | 'price' | 'type'> {
  index?: number;
  positionClassName: string;
}
