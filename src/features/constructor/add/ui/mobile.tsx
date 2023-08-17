import { addIngredient } from '@/entities/constructor';
import type { IngredientObject } from '@/entities/ingredient';
import { useAppDispatch } from '@/shared/lib';
import { Button } from '@/shared/ui';

export const MobileButtonAdd: React.FC<{ ingredient: IngredientObject }> = ({
  ingredient,
}) => {
  const dispatch = useAppDispatch();
  return (
    <Button
      variant='link'
      className='text-white p-0'
      onClick={() => dispatch(addIngredient(ingredient))}
    >
      Добавить
    </Button>
  );
};
