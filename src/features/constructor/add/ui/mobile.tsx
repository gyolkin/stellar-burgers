import { addBun, addIngredient } from '@/entities/constructor';
import type { IngredientObject } from '@/entities/ingredient';
import { useAppDispatch } from '@/shared/lib';
import { constantsMap } from '@/shared/model';
import { Button } from '@/shared/ui';

export const MobileButtonAdd: React.FC<
  Pick<IngredientObject, '_id' | 'type'>
> = ({ _id, type }) => {
  const { addText } = constantsMap.features.constructor.add;
  const dispatch = useAppDispatch();

  return (
    <Button
      variant='link'
      className='text-white p-0'
      onClick={() =>
        type === 'bun' ? dispatch(addBun(_id)) : dispatch(addIngredient(_id))
      }
    >
      {addText}
    </Button>
  );
};
