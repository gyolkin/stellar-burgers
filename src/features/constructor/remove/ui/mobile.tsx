import { removeIngredient } from '@/entities/constructor';
import { useAppDispatch } from '@/shared/lib';
import { Button } from '@/shared/ui';

export const MobileButtonRemove = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  return (
    <Button
      variant='link'
      className='text-error p-0'
      onClick={() => dispatch(removeIngredient({ id }))}
    >
      Удалить
    </Button>
  );
};
