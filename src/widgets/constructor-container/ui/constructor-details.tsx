import { ConstructorElement } from '@/entities/constructor';
import { IngredientObject } from '@/entities/ingredient';

export const ConstructorElementDetails: React.FC<{
  ingredient: IngredientObject;
}> = ({ ingredient }) => {
  return (
    <ConstructorElement
      name={ingredient.name}
      price={ingredient.price}
      image={ingredient.image}
      // iconSlot={
      //   ingredient.type === 'bun' ? (
      //     <iconsMap.LockedIcon className='text-inactive' />
      //   ) : (
      //     <DesktopButtonRemove id={ingredient._id} />
      //   )
      // }
    />
  );
};
