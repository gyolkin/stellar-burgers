import { useRef } from 'react';
import { useConstructorDND } from '@/features/constructor/move';
import { DesktopButtonRemove } from '@/features/constructor/remove';
import { MoveIcon } from '@/entities/constructor';
import { ConstructorElement } from '@/entities/constructor';
import { IngredientPrice } from '@/entities/ingredient';
import { iconsMap } from '@/shared/model';
import type { ConstructorElementDetailsProps } from '../model';

export const ConstructorElementDetails: React.FC<
  ConstructorElementDetailsProps
> = ({ ingredient, index, positionClassName }) => {
  const ref = useRef(null);
  const { dragRef, dropTarget } = useConstructorDND(index);
  dragRef(dropTarget(ref));
  return (
    <ConstructorElement
      name={ingredient.name}
      image={ingredient.image}
      priceSlot={<IngredientPrice value={ingredient.price} className='mr-5' />}
      actionSlot={
        ingredient.type === 'bun' ? (
          <iconsMap.LockedIcon className='text-inactive inline-flex items-center ml-5' />
        ) : (
          <DesktopButtonRemove index={index} />
        )
      }
      dragRef={ingredient.type === 'bun' ? undefined : ref}
      dragSlot={ingredient.type === 'bun' ? undefined : <MoveIcon />}
      className={positionClassName}
    />
  );
};
