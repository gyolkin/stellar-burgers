import { Counter } from '@/features/ingredient/counter';
import { type IngredientObject, Ingredient } from '@/entities/ingredient';

export const IngredientDetails: React.FC<{ ingredient: IngredientObject }> = ({
  ingredient,
}) => {
  const count = undefined;
  return (
    <Ingredient
      name={ingredient.name}
      price={ingredient.price}
      image={ingredient.image}
      counterSlot={count && count > 0 ? <Counter value={count} /> : undefined}
    />
  );
};
