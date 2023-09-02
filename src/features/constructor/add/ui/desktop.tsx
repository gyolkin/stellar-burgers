import { useDrag, useDrop } from 'react-dnd';
import { addBun, addIngredient } from '@/entities/constructor';
import type { IngredientObject, IngredientType } from '@/entities/ingredient';
import { useAppDispatch } from '@/shared/lib';

export const useIngredientDrag = (
  ingredient: Pick<IngredientObject, '_id' | 'type'>,
) => {
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: { _id: ingredient._id, type: ingredient.type },
  });
  return dragRef;
};

export const useIngredientDrop = () => {
  const dispatch = useAppDispatch();
  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(ingredient: { _id: IngredientID; type: IngredientType }) {
      if (ingredient.type === 'bun') {
        dispatch(addBun(ingredient._id));
      } else {
        dispatch(addIngredient(ingredient._id));
      }
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });
  return { isHover, dropTarget };
};
