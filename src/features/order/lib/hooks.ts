import { selectConstructor } from '@/entities/constructor';
import { useAppSelector } from '@/shared/lib';

export const useOrderDetails = () => {
  const { bun, ingredients } = useAppSelector(selectConstructor);
  const isOrderable = bun && ingredients.length > 1;
  const ingredientIds = isOrderable
    ? [bun._id, ...ingredients.map((item) => item._id), bun._id]
    : [];
  return { isOrderable, ingredientIds };
};
