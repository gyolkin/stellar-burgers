import { IngredientObject } from '../model';

export type IngredientDetailProps = Pick<
  IngredientObject,
  'image' | 'name' | 'price'
>;

export type IngredientModalProps = Pick<
  IngredientObject,
  'image_large' | 'name' | 'proteins' | 'fat' | 'carbohydrates' | 'calories'
>;

export interface IngredientConstructorProps extends IngredientDetailProps {
  isLocked?: boolean;
  type?: 'top' | 'bottom';
  handleClose?: () => void;
}
