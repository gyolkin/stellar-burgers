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
> = ({ name, price, image, type, index, positionClassName }) => {
  const ref = useRef(null);
  const { dragRef, dropTarget } = useConstructorDND(index);
  dragRef(dropTarget(ref));
  return (
    <ConstructorElement
      name={name}
      image={image}
      priceSlot={<IngredientPrice value={price} className='mr-5' />}
      actionSlot={
        type === 'bun' ? (
          <iconsMap.LockedIcon className='text-inactive inline-flex items-center ml-5' />
        ) : (
          <DesktopButtonRemove index={index} />
        )
      }
      dragRef={type === 'bun' ? undefined : ref}
      dragSlot={type === 'bun' ? undefined : <MoveIcon />}
      className={positionClassName}
    />
  );
};
