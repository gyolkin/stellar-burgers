import { MobileButtonAdd, useIngredientDrag } from '@/features/constructor/add';
import { MobileButtonRemove } from '@/features/constructor/remove';
import { Counter } from '@/features/ingredient/counter';
import {
  type IngredientObject,
  Ingredient,
  IngredientPrice,
} from '@/entities/ingredient';

export const IngredientDetails: React.FC<{ ingredient: IngredientObject }> = ({
  ingredient,
}) => {
  const dragRef = useIngredientDrag(ingredient);
  return (
    <Ingredient
      _id={ingredient._id}
      name={ingredient.name}
      image={ingredient.image}
      counterSlot={<Counter _id={ingredient._id} />}
      priceSlot={<IngredientPrice value={ingredient.price} />}
      addSlot={<MobileButtonAdd ingredient={ingredient} />}
      removeSlot={<MobileButtonRemove _id={ingredient._id} />}
      dragRef={dragRef}
    />
  );
};
