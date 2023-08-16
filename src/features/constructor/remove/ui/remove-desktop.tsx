import { removeIngredient } from '@/entities/constructor';
import { useAppDispatch } from '@/shared/lib';
import { iconsMap } from '@/shared/model';

export const DesktopButtonRemove: React.FC<{ id: string }> = ({ id }) => {
  const dispatch = useAppDispatch();
  return (
    <iconsMap.RemoveIcon
      className='hover:cursor-pointer'
      onClick={() => dispatch(removeIngredient(id))}
    />
  );
};
