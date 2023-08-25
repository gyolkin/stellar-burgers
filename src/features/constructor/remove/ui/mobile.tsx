import {
  removeIngredient,
  selectIngredientCountById,
} from '@/entities/constructor';
import type { IngredientObject } from '@/entities/ingredient';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { constantsMap } from '@/shared/model';
import { Button } from '@/shared/ui';

export const MobileButtonRemove: React.FC<Pick<IngredientObject, '_id'>> = ({
  _id,
}) => {
  const { removeText } = constantsMap.features.constructor.remove;
  const dispatch = useAppDispatch();
  const count: number = useAppSelector(selectIngredientCountById(_id));
  if (count < 1) {
    return undefined;
  }
  return (
    <Button
      variant='link'
      className='text-error p-0'
      onClick={() => dispatch(removeIngredient({ id: _id }))}
    >
      {removeText}
    </Button>
  );
};
