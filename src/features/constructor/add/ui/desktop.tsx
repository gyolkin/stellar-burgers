import { useDrag, useDrop } from 'react-dnd';
import { addIngredient } from '@/entities/constructor';
import type { IngredientObject } from '@/entities/ingredient';
import { useAppDispatch } from '@/shared/lib';

export const useIngredientDrag = (ingredient: IngredientObject) => {
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
  });
  return dragRef;
};

export const useIngredientDrop = () => {
  const dispatch = useAppDispatch();
  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(ingredient: IngredientObject) {
      dispatch(addIngredient(ingredient));
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });
  return { isHover, dropTarget };
};
