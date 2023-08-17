import { removeIngredient } from '@/entities/constructor';
import { useAppDispatch } from '@/shared/lib';
import { iconsMap } from '@/shared/model';
import { Button } from '@/shared/ui';

export const DesktopButtonRemove: React.FC<{ index?: number }> = ({
  index,
}) => {
  const dispatch = useAppDispatch();
  return (
    <Button
      onClick={() => dispatch(removeIngredient({ index }))}
      variant='link'
      size='icon'
      className='text-white ml-5 justify-end'
    >
      <iconsMap.RemoveIcon />
    </Button>
  );
};
