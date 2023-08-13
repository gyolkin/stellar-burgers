import { IngredientModalProps } from './types';

export const IngredientDetail: React.FC<IngredientModalProps> = ({
  name,
  image_large,
  calories,
  carbohydrates,
  fat,
  proteins,
}) => {
  return <div className='flex flex-col justify-start items-center'>{name}</div>;
};
