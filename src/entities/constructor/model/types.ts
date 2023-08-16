// eslint-disable-next-line boundaries/element-types
import type { IngredientObject } from '@/entities/ingredient';
/* 
FSD prohibits importing content within the same layer, however in this case the ConstructorElementProps type
directly depends on the IngredientObject type from entity/ingredient.
*/

export type ConstructorElementProps = Pick<
  IngredientObject,
  'image' | 'name' | 'price'
> & {
  index?: number;
  isLocked?: boolean;
  type?: 'top' | 'bottom';
  handleClose?: () => void;
};

export type { IngredientObject };
