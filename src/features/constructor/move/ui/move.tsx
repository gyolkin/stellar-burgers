import { useDrag, useDrop } from 'react-dnd';
import { moveIngredient } from '@/entities/constructor';
import { useAppDispatch } from '@/shared/lib';

export const useConstructorDND = (index?: number) => {
  const dispatch = useAppDispatch();
  const [, dragRef] = useDrag({
    type: 'move',
    item: { index },
  });
  const [, dropTarget] = useDrop({
    accept: 'move',
    drop(item: { index: number }) {
      if (index !== item.index) {
        dispatch(moveIngredient({ fromElement: item.index, toElement: index }));
      }
    },
  });
  return { dragRef, dropTarget };
};
