import type { IngredientObject } from '@/entities/ingredient';

export interface ConstructorElementDetailsProps {
  ingredient: IngredientObject;
  position?: 'top' | 'bottom';
  index?: number;
  positionClassName: string;
}
