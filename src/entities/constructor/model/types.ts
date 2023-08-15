import type { IngredientObject } from '@/entities/ingredient';

export type ConstructorElementProps = Pick<
  IngredientObject,
  'image' | 'name' | 'price'
> & {
  isLocked?: boolean;
  type?: 'top' | 'bottom';
  handleClose?: () => void;
};
