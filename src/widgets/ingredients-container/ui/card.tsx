import { MobileButtonAdd, useIngredientDrag } from '@/features/constructor/add';
import { MobileButtonRemove } from '@/features/constructor/remove';
import { Counter } from '@/features/ingredient/counter';
import { selectIngredientCountById } from '@/entities/constructor';
import {
  type IngredientObject,
  Ingredient,
  IngredientPrice,
} from '@/entities/ingredient';
import { useAppSelector } from '@/shared/lib';

export const IngredientDetails: React.FC<{ ingredient: IngredientObject }> = ({
  ingredient,
}) => {
  const amount: number = useAppSelector(
    selectIngredientCountById(ingredient._id),
  );
  const dragRef = useIngredientDrag(ingredient);
  return (
    <Ingredient
      _id={ingredient._id}
      name={ingredient.name}
      image={ingredient.image}
      counterSlot={amount > 0 ? <Counter value={amount} /> : undefined}
      priceSlot={<IngredientPrice value={ingredient.price} />}
      addSlot={<MobileButtonAdd ingredient={ingredient} />}
      removeSlot={
        amount > 0 ? <MobileButtonRemove id={ingredient._id} /> : undefined
      }
      dragRef={dragRef}
    />
  );
};
