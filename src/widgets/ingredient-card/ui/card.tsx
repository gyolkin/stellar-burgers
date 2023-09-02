import { MobileButtonAdd, useIngredientDrag } from '@/features/constructor/add';
import { Counter } from '@/features/constructor/counter';
import { MobileButtonRemove } from '@/features/constructor/remove';
import { Ingredient } from '@/entities/ingredient';
import type { IngredientDetailsProps } from '../model';

export const IngredientDetails: React.FC<IngredientDetailsProps> = ({
  _id,
  name,
  image,
  price,
  type,
}) => {
  const dragRef = useIngredientDrag({ _id, type });
  return (
    <Ingredient
      _id={_id}
      name={name}
      image={image}
      counterSlot={<Counter _id={_id} />}
      price={price}
      addSlot={<MobileButtonAdd _id={_id} type={type} />}
      removeSlot={<MobileButtonRemove _id={_id} />}
      dragRef={dragRef}
    />
  );
};
